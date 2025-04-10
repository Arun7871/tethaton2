const net = require("net");

module.exports = function sendTCP(host, port, data, callback) {
  const client = new net.Socket();

  client.connect(port, host, () => {
    client.write(data);
    client.end();
    if (callback) callback("success");
  });

  client.on("error", (err) => {
    if (callback) callback(err.message);
  });
};
