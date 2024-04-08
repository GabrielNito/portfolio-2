interface NavBarNameImageProps {
  src: string;
  alt?: string;
}

const NavBarNameImage = ({ src, alt }: NavBarNameImageProps) => {
  return <img src={src} alt={alt} />;
};

export default NavBarNameImage;
