import { ReactNode } from "react";

interface NavBarRootProps {
  children: ReactNode;
}

const NavBarRoot = ({ children }: NavBarRootProps) => {
  return <nav id="navbar">{children}</nav>;
};

export default NavBarRoot;
