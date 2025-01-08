import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

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
        <h1 className={cn("text-sm sm:text-xl font-mono text-gray-300")}>
          {title}
        </h1>
        <p className="flex gap-2 font-noto font-light  text-sm sm:text-base  flex-wrap justify-end">
          {value}
        </p>
      </motion.div>
      {title !== "Description" && <hr className="block" />}
    </>
  );
};
