import { fadeLeft, fadeRight } from "@/lib/frame-helper/variants";
import { anim, cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const hrVariant = {
  initial: { width: 0 },
  enter: { width: "100%", transition: { duration: 0.5 } },
};

export const ProjctInfoTitle = ({
  title,
  value,
}: {
  title: string;
  value: React.ReactNode;
}) => {
  return (
    <>
      <motion.div className="container max-sm:px-2 flex justify-between gap-4 py-3">
        <motion.h3
          className={cn("text-sm sm:text-base font-mono text-gray-300")}
          {...anim(fadeRight)}
          transition={{ delay: 2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="flex gap-2 font-noto font-light text-sm sm:text-base flex-wrap justify-end"
          {...anim(fadeLeft)}
          transition={{ delay: 2 }}
        >
          {value}
        </motion.p>
      </motion.div>
      {title !== "Description" && (
        <motion.hr className="block" variants={hrVariant} />
      )}
    </>
  );
};
