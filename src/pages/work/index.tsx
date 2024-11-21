import Transition from "@/lib/transition/transition";
import { useProjects } from "@/lib/useProject";
import { useParams } from "react-router-dom";

export const Projects = () => {
  const { title } = useParams();
  const projects = useProjects();
  const selectedProject = projects
    ? projects.find((project) => project.title === title)
    : null;

  return (
    <>
      <Transition>
        <section className="container  py-8 md:py-16 lg:py-24">
          <div>{selectedProject?.title}</div>
          <img src={selectedProject?.images.home} alt="" />
        </section>
      </Transition>
    </>
  );
};
