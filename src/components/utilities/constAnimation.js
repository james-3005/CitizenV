const popUp = {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
  leave: {
    opacity: 0,
    y: 100,
  },
};
const wipeRightToLeft = {
  initial: {
    opacity: 0,
    x: 20,
  },
  enter: {
    opacity: 1,
    x: 0,
  },
  leave: {
    opacity: 0,
    x: 20,
  },
};
module.exports = {
  popUp,
  wipeRightToLeft,
};
