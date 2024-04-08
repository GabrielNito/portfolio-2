import { ReactNode } from "react";

interface NavBarLinkProps {
  children: ReactNode;
}

const NavBarLink = ({ children }: NavBarLinkProps) => {
  return <div className="navbar_link">{children}</div>;
};

export default NavBarLink;
