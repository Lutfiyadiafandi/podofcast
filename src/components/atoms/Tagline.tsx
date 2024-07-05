type props = {
  size: "small" | "large";
  textColor: "red" | "white";
  children: React.ReactNode;
  className?: string;
};

const Tagline = ({ size, textColor, className, children }: props) => {
  const sizeClasses = {
    small: "text-type-s",
    large: "text-type-m",
  };
  const textColorClasses = {
    red: "text-primary",
    white: "text-basic-100",
  };

  return (
    <div
      className={`w-fit py-[3px] px-1.5 border border-primary rounded font-bold  uppercase ${className} ${sizeClasses[size]} ${textColorClasses[textColor]}`}
    >
      {children}
    </div>
  );
};

export default Tagline;
