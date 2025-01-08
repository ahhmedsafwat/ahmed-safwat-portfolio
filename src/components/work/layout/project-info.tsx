import { Project } from "@/lib/type";
import { ProjctInfoTitle } from "../ui/project-info-title";
import { Github, LucideLink2 } from "lucide-react";

export const ProjectInfoComponent = ({ project }: { project: Project }) => {
  return (
    <>
      <ProjctInfoTitle
        title="Title"
        value={<span className="font-bold">{project.title}</span>}
      />
      <ProjctInfoTitle title="Data" value={project.date} />
      <ProjctInfoTitle
        title="Stack"
        value={project.techStack.map((tech) => (
          <span
            key={tech}
            className={`font-light bg-white/20 rounded-full flex items-center text-xs px-2 `}
          >
            {tech}
          </span>
        ))}
      />
      <ProjctInfoTitle
        title="Links"
        value={
          <>
            <a target="_blank" href={project.gitHub}>
              <Github className="size-7" />
            </a>
            <a target="_blank" href={project.link}>
              <LucideLink2 className="-rotate-45 size-6" />
            </a>
          </>
        }
      />
      <ProjctInfoTitle
        title="Description"
        value={
          <span className="max-w-md font-normal">{project.description}</span>
        }
      />
    </>
  );
};
