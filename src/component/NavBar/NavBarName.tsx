import { ReactNode } from "react";

interface NavBarNameProps {
  children: ReactNode;
}

const NavBarName = ({ children }: NavBarNameProps) => {
  return <div id="navbar_name">{children}</div>;
};

export default NavBarName;
