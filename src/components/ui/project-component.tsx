import { Project } from "@/lib/type";
const ProjectComponent = ({
  title,
  description,
  images,
  link,
  techStack,
}: Project) => {
  return (
    <>
      <div className="project-card">
        <img src={images.desktop} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </>
  );
};

export default ProjectComponent;
