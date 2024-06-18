type HeadingProps = {
  title: string;
  subTitle: string;
  className?: string;
  textAlign?: "left" | "center" | "right";
};

const Heading: React.FC<HeadingProps> = ({
  title,
  subTitle,
  className,
  textAlign = "left",
}) => {
  return (
    <div className={`flex flex-col text-${textAlign} ${className}`}>
      <h1
        className={`text-heading5 lg:text-heading2 leading-[140%] font-bold text-basic-200 font-Kufam`}
      >
        {title}
      </h1>
      <h3
        className={`text-type-xl lg:text-type-xxl leading-[150%] font-semibold text-basic-300`}
      >
        {subTitle}
      </h3>
    </div>
  );
};

export default Heading;
