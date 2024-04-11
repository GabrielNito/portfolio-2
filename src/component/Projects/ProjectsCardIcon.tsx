import { ReactNode } from "react";

interface ProjectsCardIconProps {
  icon: ReactNode;
}

const ProjectsCardIcon = ({ icon }: ProjectsCardIconProps) => {
  return <div className="projects_icon">{icon}</div>;
};

export default ProjectsCardIcon;
