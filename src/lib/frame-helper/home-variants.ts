const techStacksVariants = {
  initial: {},
  hovered: {},
};
const techStackVariants = (isMediumScreen: boolean) => ({
  initial: {
    opacity: isMediumScreen ? 0 : 1,
    y: 0,
  },
  hovered: {
    opacity: isMediumScreen ? 1 : 1,
    y: isMediumScreen ? 40 : 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
});

const linksVariants = ({
  isMediumScreen,
  direction,
}: {
  isMediumScreen: boolean;
  direction: "left" | "right";
}) => {
  if (isMediumScreen) {
    return {
      initial: {
        opacity: 0,
        ...(direction == "left" ? { x: -50 } : { x: 50 }),
      },
      hovered: {
        opacity: 1,
        ...(direction == "left" ? { x: 25 } : { x: -25 }),
        transition: {
          duration: 0.1,
          ease: "easeOut",
        },
      },
    };
  }
};

const scaleUPImage = (isMediumScreen: boolean) => ({
  initial: { scale: 1 },
  hovered: {
    scale: isMediumScreen ? 0.95 : 1.05,
    transition: {
      duration: 0.2,
    },
  },
});

const layOut = {
  initial: { opacity: 0 },
  hovered: { opacity: 1 },
};

export {
  layOut,
  scaleUPImage,
  techStackVariants,
  linksVariants,
  techStacksVariants,
};
