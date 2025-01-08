import { motion } from "motion/react";
import style from "./index.module.scss";

type slide = {
  icon: string;
  name: string;
};

const ScrollingSkillsComponent = ({ slides }: { slides: slide[] }) => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <>
      {/* Wrapping div for seamless looping */}
      <div className={style.scrolling__fade}></div>
      <motion.div
        className="flex gap-[5%]"
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
            className="flex-shrink-0 flex flex-col justify-center items-center text-xs md:text-sm"
            style={{ width: `${100 / slides.length - 5}%` }}
          >
            <img
              src={slide.icon}
              alt={slide.icon}
              className="flex items-center justify-cente"
            />
            <span className="text-center">{slide.name}</span>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default ScrollingSkillsComponent;
