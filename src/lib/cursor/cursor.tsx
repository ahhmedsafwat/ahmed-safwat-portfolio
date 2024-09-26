import { motion } from "framer-motion";
import useMousePosition from "./useMouseMove";

const CustomCursor = () => {
  const { x, y } = useMousePosition().mousePosition;
  const isTouch = useMousePosition().isTouch;
  const size = 22;
  return (
    <motion.div
      className="custom-cursor"
      animate={{
        left: x - size / 2,
        top: y - size / 2,
      }}
      transition={{ duration: 0, type: "tween", ease: "backOut" }}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "hsl(var(--foreground))",
        zIndex: 1000,
        position: "fixed",
        mixBlendMode: "difference",
        pointerEvents: "none",
        boxShadow: `0 0 10px hsl(var(--background)), 0 0 20px hsl(var(--foreground))`,
        display: isTouch ? "none" : "block",
      }}
    />
  );
};

export default CustomCursor;
