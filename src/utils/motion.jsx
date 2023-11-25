export let slideRightToLeft = (index) => {
  let delay = 0.3 + index / 25;
  return {
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: delay,
      },
    },
  };
};
export const slideUpToDown = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};
