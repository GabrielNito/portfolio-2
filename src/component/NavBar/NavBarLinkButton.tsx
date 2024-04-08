interface NavBarLinkButtonProps {
  href?: string;
  title: string;
  dropdown?: boolean;
}

const NavBarLinkButton = ({ href, title, dropdown }: NavBarLinkButtonProps) => {
  return (
    <a href={href}>
      {title}
      {dropdown ? <i className="fa-solid fa-chevron-down" /> : null}
    </a>
  );
};

export default NavBarLinkButton;
