const net = require("net");
const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const secretKey = "12345678123456781234567812345678"; // same key used in gateway

const decrypt = (encrypted) => {
  const iv = Buffer.from(encrypted.iv, "hex");
  const encryptedData = Buffer.from(encrypted.data, "hex");
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv);
  let decrypted = decipher.update(encryptedData);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    try {
      const parsed = JSON.parse(data.toString());
      const decrypted = decrypt(parsed);
      console.log("SDR-B: Decrypted Message:", decrypted);
    } catch (err) {
      console.log("SDR-B: Received non-decryptable message:", data.toString());
    }
  });
});

server.listen(6000, () => {
  console.log("SDR-B: Listening on port 6000...");
});
