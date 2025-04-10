module.exports = {
  simulateConvertWavToOpus: (wavBuffer) => Buffer.from(wavBuffer.toString("base64")),
  simulateConvertOpusToWav: (opusBuffer) => Buffer.from(opusBuffer.toString("utf-8"), "base64"),
};