import { fadeDown, fadeRight, fadeUp } from "@/lib/frame-helper/variants";
import { anim } from "@/lib/utils";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="pt-48 md:pt-32 md:pb-16">
      <div className="font-anton flex items-start justify-center leading-none select-none">
        <div className="overflow-hidden">
          <motion.div
            className="text-secondary text-[48vw] lg:text-[35vw] leading-none  "
            {...anim(fadeUp)}
            transition={{ duration: 0.3, delay: 1.5 }}
          >
            H
          </motion.div>
        </div>
        <motion.div className="flex flex-col justify-center overflow-hidden">
          <motion.div
            className="text-[38vw] lg:text-[30vw] leading-[.85] "
            {...anim(fadeRight)}
            transition={{ duration: 0.3, delay: 2 }}
          >
            ello
          </motion.div>
          <motion.div
            className="pl-2 text-[4vw] lg:text-[3vw] pt-[calc(10%_-_2vw)]"
            {...anim(fadeDown)}
            transition={{ delay: 2.5 }}
          >
            I'm Ahmed - front end developer in Egypt
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
