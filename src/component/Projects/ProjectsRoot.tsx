import { ReactNode } from "react";

interface ProjectsRootProps {
  children: ReactNode;
}

const ProjectsRoot = ({ children }: ProjectsRootProps) => {
  return <div id="projects">{children}</div>;
};

export default ProjectsRoot;
