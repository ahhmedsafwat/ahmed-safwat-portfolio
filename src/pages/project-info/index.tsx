import { ProjectInfoComponent } from "@/components/work/layout/project-info";
import { Project } from "@/lib/type";
import { useLocation } from "react-router-dom";

export const ProjectInfo = () => {
  const location = useLocation();
  const projct: Project = location.state || {};
  return (
    <section className="py-24">
      <ProjectInfoComponent project={projct} />
    </section>
  );
};
