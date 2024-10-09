import { useProjects } from "@/lib/useProject";
import { HomeProjectComponent } from "../ui/home-project-component";

const HomeProject = () => {
  const data = useProjects();

  return (
    <section className="container pb-32 relative flex flex-none flex-col flex-nowrap justify-center items-center gap-12 md:gap-[400px]">
      {data?.map((project) => (
        <HomeProjectComponent project={project} key={project.id} />
      ))}
    </section>
  );
};

export default HomeProject;
