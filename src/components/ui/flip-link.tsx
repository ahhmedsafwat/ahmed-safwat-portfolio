import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FlipLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
}

const FlipLink = ({
  children,
  className,
  direction = "vertical",
  ...props
}: FlipLinkProps) => {
  return (
    <div
      className={cn("overflow-hidden w-fit min-h-6", className)}
      {...props}
      role="button" // Optional: depending on the use case
    >
      <motion.span
        initial="initial"
        whileHover="hovered"
        className="text-sm small:text-lg relative block"
      >
        <motion.span
          variants={{
            initial:
              direction === "vertical"
                ? { y: "0", opacity: 1 }
                : { x: "0", opacity: 1 },
            hovered:
              direction === "vertical"
                ? { y: "-100%", opacity: 0 }
                : { x: "-100%", opacity: 0 },
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="block"
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute inset-0 block"
          variants={{
            initial:
              direction === "vertical"
                ? { y: "100%", opacity: 0 }
                : { x: "100%", opacity: 0 },
            hovered:
              direction === "vertical"
                ? { y: "0", opacity: 1 }
                : { x: "0", opacity: 1 },
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
      </motion.span>
    </div>
  );
};

export default FlipLink;
