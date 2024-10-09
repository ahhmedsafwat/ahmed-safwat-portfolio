import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutMeComponent = ({ words }: { words: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.6", "end -1.2"], // Adjusted offset for a longer scroll range
  });

  return (
    <p
      ref={element}
      className="leading-tight flex lg:text-5xl md:text-4xl text-lg flex-wrap justify-center md:justify-normal mb-28 "
    >
      {words.split(" ").map((word, i) => (
        <Word
          key={`${word}-${i}`}
          word={word}
          progress={scrollYProgress}
          range={getRange(i, words.length)}
        />
      ))}
    </p>
  );
};

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: number[];
}

const Word = ({ word, progress, range }: WordProps) => {
  return (
    <span className="mr-2 lg:mr-4 mt-[0.7vw] relative">
      {word.split("").map((char, i) => (
        <Character
          key={`${char}-${i}`}
          char={char}
          progress={progress}
          range={getRange(i, word.length, range)}
        />
      ))}
    </span>
  );
};

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: number[];
}

const Character = ({ char, progress, range }: CharacterProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className="absolute opacity-[.1] overflow-hidden inline-block">
        {char}
      </span>
      <motion.span
        style={{ opacity, position: "relative" }}
        className="overflow-hidden inline-block"
      >
        {char}
      </motion.span>
    </span>
  );
};

const getRange = (
  index: number,
  length: number,
  parentRange: number[] = [0, 1]
): number[] => {
  const [parentStart, parentEnd] = parentRange;
  const step = (parentEnd - parentStart) / (length * 0.8); // Adjusting the step to slow down the transition
  const start = parentStart + index * step;
  const end = start + step;
  return [start, end];
};

export default AboutMeComponent;
