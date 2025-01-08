import { useProjects } from "@/lib/useProject";
import { HomeProjectComponent } from "../ui/home-project-component";

const HomeProjects = () => {
  const data = useProjects();

  return (
    <section className="container max-sm:px-2 pb-32 relative flex flex-none flex-col flex-nowrap justify-center items-center gap-12 md:gap-[400px]">
      {data?.map((project) => (
        <HomeProjectComponent project={project} key={project.id} />
      ))}
    </section>
  );
};

export default HomeProjects;
