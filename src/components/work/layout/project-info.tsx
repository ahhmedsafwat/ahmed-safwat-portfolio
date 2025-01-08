import { Project } from "@/lib/type";
import { ProjctInfoTitle } from "../ui/project-info-title";
import { Github, LucideLink2 } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { staggerContainer } from "@/lib/frame-helper/variants";
import { ProjectInfoImages } from "../ui/project-info-images-bento-gird";

export const ProjectInfoComponent = ({ project }: { project: Project }) => {
  const titleConfigs = [
    {
      title: "Title",
      value: <span className="font-bold">{project.title}</span>,
    },
    {
      title: "Date",
      value: project.date,
    },
    {
      title: "Stack",
      value: project.techStack.map((tech) => (
        <span
          key={tech}
          className="font-light bg-white/20 rounded-full flex items-center text-xs px-2"
        >
          {tech}
        </span>
      )),
    },
    {
      title: "Links",
      value: (
        <>
          <a target="_blank" href={project.link}>
            <LucideLink2 className="-rotate-45 size-6" />
          </a>
          <a target="_blank" href={project.gitHub}>
            <Github className="size-7 pointer" />
          </a>
        </>
      ),
    },
    {
      title: "Description",
      value: (
        <span className="max-w-md font-normal">{project.description}</span>
      ),
    },
  ];

  const { scrollYProgress } = useScroll();

  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, 500]);

  // Transform values for image animations
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, -500]);

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="enter"
        style={{ scale: titleScale, opacity: titleOpacity, y: titleY }}
      >
        {titleConfigs.map((config) => (
          <ProjctInfoTitle
            key={config.title}
            title={config.title}
            value={config.value}
          />
        ))}
      </motion.div>

      <motion.div
        style={{
          y: imageY,
        }}
      >
        <ProjectInfoImages {...project.images} />
      </motion.div>
    </>
  );
};
