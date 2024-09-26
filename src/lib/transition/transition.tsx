import { motion } from "framer-motion";
import { anim } from "@/lib/utils";
const Transition = ({ children }: { children: React.ReactNode }) => {
  const slideUp = {
    inital: {
      scaleY: 0,
    },
    enter: {
      scaleY: 0,
    },
    exit: {
      scaleY: 1,
    },
  };
  const slideDown = {
    inital: {
      scaleY: 0,
    },
    enter: {
      scaleY: 0,
    },
    exit: {
      scaleY: 1,
    },
  };
  const opacity = {
    inital: {
      opacity: 0,
      zIndex: 0,
    },
    enter: {
      opacity: 0,
    },
    exit: {
      opacity: 1,
      zIndex: 10,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-foreground origin-top z-50"
        {...anim(slideDown)}
        transition={{
          duration: 1,
        }}
      />
      <motion.div
        className="w-screen h-screen fixed bg-background"
        {...anim(opacity)}
      ></motion.div>
      {children}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-foreground origin-bottom z-50"
        {...anim(slideUp)}
        transition={{
          duration: 1,
        }}
      />
    </>
  );
};

export default Transition;
