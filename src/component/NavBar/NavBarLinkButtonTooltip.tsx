interface NavBarLinkButtonTooltipProps {
  text: string;
}

const NavBarLinkButtonTooltip = ({ text }: NavBarLinkButtonTooltipProps) => {
  return <span>{text}</span>;
};

export default NavBarLinkButtonTooltip;
