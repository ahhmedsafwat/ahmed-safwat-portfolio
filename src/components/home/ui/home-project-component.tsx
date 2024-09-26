import { Project } from "@/lib/type";
import React from "react";
import { Link } from "react-router-dom";

interface HomeProjectComponentProps {
  project: Project;
}

export const HomeProjectComponent: React.FC<HomeProjectComponentProps> = ({
  project,
}) => {
  return (
    <div className="md:sticky small:top-[15vh] lg:top-[12vh]">
      <Link to={project.title}>
        <div className="flex flex-col justify-center items-center gap-6 bg-zinc-900  overflow-hidden rounded-xl">
          <div className="flex flex-col items-center gap-6">
            <ul className="flex items-center flex-wrap justify-center gap-3 pt-6">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="text-xs font-noto font-light text-zinc border rounded-full py-1 px-3"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <h2 className="font-anton text-3xl md:text-6xl">{project.title}</h2>
          </div>
          <div>
            <img
              src={project.images.home}
              alt={project.description}
              className="w-[85%] lg:w-[80%] mx-auto max-h-[95vh] object-cover"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
