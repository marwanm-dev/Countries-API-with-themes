const route = {
  initial: {
    opacity: 0,
    x: '50%',
  },
  shown: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      type: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: '50%',
  },
};

export default route;
