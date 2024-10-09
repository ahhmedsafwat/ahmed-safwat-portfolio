import FlipLink from "@/components/ui/flip-link";
import {
  layOut,
  linksVariants,
  scaleUPImage,
  techStacksVariants,
  techStackVariants,
} from "@/lib/frame-helper/home-variants";
import { Project } from "@/lib/type";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, LucideLink2 } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { cn } from "@/lib/utils";

interface HomeProjectComponentProps {
  project: Project;
}

export const HomeProjectComponent = ({
  project,
}: HomeProjectComponentProps) => {
  const element = useRef<HTMLDivElement | null>(null);

  const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "-12vh start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.div
      ref={element}
      style={{ ...(isMediumScreen ? { scale } : {}) }}
      className="md:sticky md:top-[15vh] lg:top-[11vh] relative flex flex-col justify-start items-center"
      initial="initial"
      animate="initial"
      whileHover="hovered"
    >
      <motion.div
        className="absolute z-10 h-full w-[100%] bg-cards/60 md:backdrop-blur-sm"
        variants={layOut}
      ></motion.div>
      <Link to={project.title}>
        <div className="flex flex-col items-center gap-4 sm:gap-6 bg-cards overflow-hidden rounded-xl lg:max-h-[88vh] md:max-h-[85vh] w-full">
          <h2 className="font-anton text-2xl sm:text-4xl md:text-6xl pt-4 sm:pt-6 z-10">
            {project.title}
          </h2>
          <motion.ul
            className="md:absolute flex flex-wrap justify-center gap-3 md:gap-6 z-10 top-24"
            variants={techStacksVariants}
            transition={{
              staggerChildren: 0.1,
            }}
          >
            {project.techStack.map((tech) => (
              <motion.li
                key={tech}
                className={` text-xs md:text-sm font-mono font-light ${style.glassy}`}
                variants={techStackVariants(isMediumScreen)}
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
          <motion.img
            variants={scaleUPImage(isMediumScreen)}
            src={project.images.home}
            alt={project.description}
            className=" md:w-[90%] mx-auto object-cover "
          />
        </div>
      </Link>
      <motion.div
        variants={techStacksVariants}
        className="absolute z-10 bottom-0 md:bottom-10 flex items-center justify-between w-full rounded-b-xl overflow-hidden md:w-[90%] font-mono"
      >
        <motion.div
          className={cn(
            `max-md:w-1/2 max-md:rounded-none max-md:border-r`,
            style.glassy
          )}
          variants={linksVariants({
            isMediumScreen: isMediumScreen,
            direction: "left",
          })}
        >
          <FlipLink className="w-full">
            <a
              target="_blank"
              href={project.link}
              className="flex gap-2 items-center justify-center"
            >
              <div>Live</div>
              <LucideLink2 className="-rotate-45 size-6" />
            </a>
          </FlipLink>
        </motion.div>
        <motion.div
          className={cn(
            `max-md:w-1/2 max-md:rounded-none max-md:border-l `,
            style.glassy
          )}
          variants={linksVariants({
            isMediumScreen: isMediumScreen,
            direction: "right",
          })}
        >
          <FlipLink className="w-full">
            <a
              target="_blank"
              href={project.gitHub}
              className="flex gap-2 items-center justify-center"
            >
              <Github className="size-7 " />
            </a>
          </FlipLink>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
