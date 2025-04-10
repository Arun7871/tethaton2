module.exports = {
  applyQoS: (buffer, options = { delayMs: 100, dropRate: 0.1 }) => {
    return new Promise((resolve) => {
      if (Math.random() < options.dropRate) return resolve(null);
      setTimeout(() => resolve(buffer), options.delayMs);
    });
  },
};