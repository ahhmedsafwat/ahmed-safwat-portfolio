import { type ClassValue, clsx } from "clsx";
import { Variants } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const anim = (variants: Variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    whileHover: "hovered",
    exit: "exit",
  };
};

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, {
      immediate: true,
    });
  }, [pathname, lenis]);
};
