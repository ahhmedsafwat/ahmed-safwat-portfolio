import { ProjectInfoComponent } from "@/components/work/layout/project-info";
import Transition from "@/lib/transition/transition";
import { Project } from "@/lib/type";

import { useLocation } from "react-router-dom";

export const ProjectInfo = () => {
  const location = useLocation();
  const projct: Project = location.state || {};

  return (
    <Transition>
      <section className="pt-24">
        <ProjectInfoComponent project={projct} />
      </section>
    </Transition>
  );
};
