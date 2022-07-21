module.exports = function () {
  function randomize() {
    return Math.random().toString(16).slice(-4);
  }
  return `${randomize()}${randomize()}-${randomize()}`;
};
