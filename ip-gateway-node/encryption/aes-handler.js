const crypto = require("crypto");
const secret = "12345678123456781234567812345678"; // 32 chars = 256 bits
const iv = crypto.randomBytes(16);

module.exports = {
  encrypt: (data) => {
    const iv = crypto.randomBytes(16); // ✅ generate a fresh IV per message
    const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(secret), iv);
    let enc = cipher.update(data);
    enc = Buffer.concat([enc, cipher.final()]);
    return { iv: iv.toString("hex"), data: enc.toString("hex") };
  },
  decrypt: ({ iv, data }) => {
    const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(secret), Buffer.from(iv, "hex"));
    let dec = decipher.update(Buffer.from(data, "hex"));
    dec = Buffer.concat([dec, decipher.final()]);
    return dec.toString();
  },
};