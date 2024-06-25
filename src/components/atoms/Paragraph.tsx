type ParagraphProps = {
  text: string;
  size: "small" | "medium" | "large";
  className?: string;
};
const Paragraph: React.FC<ParagraphProps> = ({
  text,
  size = "medium",
  className,
}) => {
  const sizeClasses = {
    small: "text-type-m md:text-type-l",
    medium: "text-type-l md:text-type-xl",
    large: "text-type-xl md:text-type-xxl",
  };
  return (
    <p
      className={`${sizeClasses[size]} ${className} font-normal leading-[180%] text-paragraph`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
