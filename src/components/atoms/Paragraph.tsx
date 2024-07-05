type ParagraphProps = {
  children: React.ReactNode;
  size: "small" | "large";
  className?: string;
};
const Paragraph = ({ children, size, className }: ParagraphProps) => {
  const sizeClasses = {
    small: "text-type-l",
    large: "text-type-xl-mobile md:text-type-xl",
  };
  return (
    <p
      className={`${sizeClasses[size]} ${className} font-medium text-basic-500 text-center`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
