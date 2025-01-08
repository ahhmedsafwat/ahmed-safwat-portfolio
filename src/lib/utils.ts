import { type ClassValue, clsx } from "clsx";
import { Variants } from "motion/react";
import { twMerge } from "tailwind-merge";

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
