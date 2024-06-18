type TagProps = {
  children: React.ReactNode;
  size?: "xsmall" | "small" | "medium" | "large";
  className?: string;
};

const Tag: React.FC<TagProps> = ({ size = "small", children, className }) => {
  const baseClasses =
    "w-fit bg-secondary text-secondary-dark text-center rounded-[20px]";

  const sizeClasses = {
    xsmall: "px-[11px] py-[5px] text-type-xs font-semibold",
    small: "px-[20px] py-[10px] text-type-m leading-[64%] font-semibold",
    medium: "px-[30px] py-[10px] text-type-l leading-[150%] font-bold",
    large: "px-[40px] py-[14px] text-type-xxl leading-[64%] font-medium",
  };

  const classname = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return <div className={classname}>{children}</div>;
};
export default Tag;
