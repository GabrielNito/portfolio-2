import { ReactNode } from "react";

interface NavBarDropdownProps {
  children: ReactNode;
}

const NavBarDropdown = ({ children }: NavBarDropdownProps) => {
  return <div className="navbar_dropdown">{children}</div>;
};

export default NavBarDropdown;
