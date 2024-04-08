import { HTMLAttributes } from "react";

interface NavBarDropdownLinkProps {
  title: string;
  description: string;
  href: string;
  icon?: HTMLAttributes;
}

const NavBarDropdownLink = ({
  title,
  description,
  href,
  icon,
}: NavBarDropdownLinkProps) => {
  return (
    <a href={href}>
      <p>
        {title}
        {icon}
      </p>
      <p>{description}</p>
    </a>
  );
};

export default NavBarDropdownLink;
