const country = {
  initial: {
    opacity: 0,
    y: '50px',
  },
  shown: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: 'easeInOut',
    },
  },
};

export default country;
