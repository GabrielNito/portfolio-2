import { ReactNode } from "react";

interface ProjectsCardProps {
  children: ReactNode;
}

const ProjectsCard = ({ children }: ProjectsCardProps) => {
  return <div className="projects_card">{children}</div>;
};

export default ProjectsCard;
