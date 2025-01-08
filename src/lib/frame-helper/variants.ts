export const staggerContainer = {
  initial: {},
  enter: {
    transition: {
      staggerChildren: 0.1, // Adjust the delay between children animations
      delayChildren: 1,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: "100%" },
  enter: { opacity: 1, y: 0 },
};

const fadeRight = {
  initial: { opacity: 0, x: "-100%" },
  enter: { opacity: 1, x: 0 },
};

const fadeDown = {
  initial: { opacity: 0, y: "-100%" },
  enter: { opacity: 1, y: 0 },
};

const fadeLeft = {
  initial: { opacity: 0, x: "100%" },
  enter: { opacity: 1, x: 0 },
};

export { fadeDown, fadeRight, fadeUp, fadeLeft };
