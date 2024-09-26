import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -15, y: -15 });
  const [isTouch, setIsTouch] = useState(false);
  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleResize = () => {
    setIsTouch(isTouchDevice());
  };

  const isTouchDevice = () => {
    return window.matchMedia("(pointer: coarse)").matches;
  };

  useEffect(() => {
    if (!isTouchDevice()) {
      window.addEventListener("mousemove", updateMousePosition);
    }
    setIsTouch(isTouchDevice());

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { mousePosition, isTouch };
};

export default useMousePosition;
