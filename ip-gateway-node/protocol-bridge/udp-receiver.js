const dgram = require("dgram");
const server = dgram.createSocket("udp4");

module.exports = (port, onMessage) => {
  server.on("message", (msg, rinfo) => onMessage(msg, rinfo));
  server.bind(port, () => console.log(`UDP Receiver running on port ${port}`));
};