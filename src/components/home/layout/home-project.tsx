import { useProjects } from "@/lib/useProject";
import { HomeProjectComponent } from "../ui/home-project-component";

const HomeProject = () => {
  const data = useProjects();

  return (
    <div className="container pb-32 relative flex flex-none flex-col flex-nowrap justify-center items-center gap-10 md:gap-[600px]">
      {data?.map((project) => (
        <HomeProjectComponent project={project} key={project.id} />
      ))}
    </div>
  );
};

export default HomeProject;
