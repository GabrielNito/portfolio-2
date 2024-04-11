interface ProjectsCardImageProps {
  img: string;
  alt?: string;
}

const ProjectsCardImage = ({ img, alt }: ProjectsCardImageProps) => {
  return (
    <div className="image_wrapper">
      <img src={img} alt={alt} />
    </div>
  );
};

export default ProjectsCardImage;
