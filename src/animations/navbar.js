const navbar = {
  initial: {
    opacity: 0,
    y: '-50%',
  },
  shown: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      type: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    y: '-50%',
  },
};

export default navbar;
