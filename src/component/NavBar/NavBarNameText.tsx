interface NavBarNameTextProps {
  text: string;
  href: string;
}

const NavBarNameText = ({ text, href }: NavBarNameTextProps) => {
  return <a href={href}>{text}</a>;
};

export default NavBarNameText;
