type TagProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
};

const Tag: React.FC<TagProps> = ({ size = "small", children, className }) => {
  const baseClasses =
    "w-fit bg-[#F4C467] text-secondary-dark text-center rounded-[80px]";

  const sizeClasses = {
    small: "px-[12px] py-[4px] text-[18px] leading-[180%] font-normal",
    medium: "px-[24px] py-[4px] text-type-l leading-[180%] font-normal",
    large: "px-[40px] py-[14px] text-type-xxl leading-[64%] font-medium",
  };

  const classname = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return <div className={classname}>{children}</div>;
};
export default Tag;
