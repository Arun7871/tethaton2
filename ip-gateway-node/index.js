const receiveUDP = require("./protocol-bridge/udp-receiver");
const sendTCP = require("./protocol-bridge/tcp-sender");
const qos = require("./qos-simulator/qos");
const aes = require("./encryption/aes-handler");
const logger = require("./logger/logger");
const codec = require("./voice-codec/codec-sim");
const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "gateway.log");

const log = (msg) => {
  const timestamp = new Date().toISOString();
  const logMsg = `[${timestamp}] ${msg}\n`;
  fs.appendFileSync(logFile, logMsg);
};

receiveUDP(5000, async (msg, rinfo) => {
  const plainText = msg.toString();
  log(`📥 Received UDP packet from ${rinfo.address}:${rinfo.port}`);
  log(`📝 Original Message: ${plainText}`);

  const processed = await qos.applyQoS(plainText);
  if (!processed) {
    log("⚠️ Packet dropped by QoS module");
    return;
  }

  log("✅ Packet passed QoS checks");

  const encoded = codec.simulateConvertWavToOpus(processed);
  log(`🎧 Simulated Voice Codec: ${encoded}`);

  const encrypted = aes.encrypt(encoded);
  log(`🔐 Encrypted Payload: ${JSON.stringify(encrypted)}`);

  sendTCP("localhost", 6000, JSON.stringify(encrypted), (status) => {
    if (status === "success") {
      log(`📤 Successfully sent to SDR-B over TCP`);
    } else {
      log(`❌ TCP Send Error: ${status}`);
    }
  });
});
