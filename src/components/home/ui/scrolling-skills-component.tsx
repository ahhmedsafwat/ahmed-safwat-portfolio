import { motion } from "framer-motion";
import style from "./index.module.scss";

type slide = {
  icon: string;
};

const ScrollingSkillsComponent = ({ slides }: { slides: slide[] }) => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative w-full overflow-hidden py-6 ">
      {/* Wrapping div for seamless looping */}
      <div className={style.scrolling__fade}></div>
      <motion.div
        className="flex gap-[2.5%]"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length - 2.5}%` }}
          >
            <img
              src={slide.icon}
              alt={slide.icon}
              className="flex items-center justify-center md:h-[12vw] md:w-[8vw]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingSkillsComponent;
