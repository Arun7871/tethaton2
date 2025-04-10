const fs = require("fs");
const path = "gateway.log";

module.exports = {
  log: (msg) => fs.appendFileSync(path, `${new Date().toISOString()} - ${msg}\n`),
};