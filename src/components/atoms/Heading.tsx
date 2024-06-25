type HeadingProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({
  children,
  size = "medium",
  className,
}) => {
  const sizeClasses = {
    small: "text-heading6 md:text-heading4 font-bold leading-[180%]",
    medium: "text-heading5 md:text-heading3 font-semibold leading-[160%]",
    large: "text-heading4 md:text-heading1 font-bold",
  };
  return (
    <h1 className={`${sizeClasses[size]} ${className} text-secondary`}>
      {children}
    </h1>
  );
};

export default Heading;
