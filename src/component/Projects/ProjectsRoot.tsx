import { ReactNode } from "react";

interface ProjectsRootProps {
  children: ReactNode;
}

const ProjectsRoot = ({ children }: ProjectsRootProps) => {
  return <div id="Projects">{children}</div>;
};

export default ProjectsRoot;
