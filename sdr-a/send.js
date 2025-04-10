const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const message = Buffer.from("Hello from SDR-A");
client.send(message, 5000, "127.0.0.1", () => {
  console.log("SDR-A: Message sent to gateway");
  client.close();
});