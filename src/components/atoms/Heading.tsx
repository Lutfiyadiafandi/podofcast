type HeadingProps = {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  className?: string;
};

const Heading = ({ children, size, className }: HeadingProps) => {
  const sizeClasses = {
    small: "text-heading3-mobile md:text-heading3",
    medium: "text-heading2-mobile md:text-heading2 text-center",
    large: "text-heading1-mobile md:text-heading1 text-center",
  };
  return (
    <h1
      className={`${sizeClasses[size]} ${className} font-bold text-basic-900`}
    >
      {children}
    </h1>
  );
};

export default Heading;
