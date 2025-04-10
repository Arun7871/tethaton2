const xml2js = require("xml2js");

module.exports = {
  jsonToXml: async (json) => new xml2js.Builder().buildObject(json),
  xmlToJson: async (xml) => await xml2js.parseStringPromise(xml),
  base64ToBinary: (b64) => Buffer.from(b64, "base64"),
  binaryToBase64: (bin) => Buffer.from(bin).toString("base64"),
};