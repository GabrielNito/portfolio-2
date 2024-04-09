import { ReactNode } from "react";

interface NavBarDropdownLinkProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
}

const NavBarDropdownLink = ({
  title,
  description,
  href,
  icon,
}: NavBarDropdownLinkProps) => {
  return (
    <a href={href}>
      <div className="navbar_dropdown_link_title">
        {icon}
        <p>{title}</p>
      </div>
      <p className="navbar_dropdown_link_description">{description}</p>
    </a>
  );
};

export default NavBarDropdownLink;
