import { ReactNode } from "react";

interface NavBarLinksProps {
  children: ReactNode;
}

const NavBarLinks = ({ children }: NavBarLinksProps) => {
  return <div id="navbar_links">{children}</div>;
};

export default NavBarLinks;
