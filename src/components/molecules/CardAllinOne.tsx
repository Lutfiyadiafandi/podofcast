type SupremacyProps = {
  icon: string;
  title: string;
  description: string;
};

const CardAllinOne: React.FC<SupremacyProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="relative w-full h-[430px] pt-[50px] px-[30px] bg-basic-50 flex flex-col justify-center items-center rounded-[20px] shadow-allinone">
      <img
        src={icon}
        alt="Icon Facilities"
        className="absolute -top-[200px] w-[100px] h-full object-none"
      />

      <h3 className="text-type-xxl md:text-heading6 font-medium text-secondary text-center">
        {title}
      </h3>
      <p className="mt-8 text-type-l leading-[180%] font-normal text-paragraph text-center">
        {description}
      </p>
    </div>
  );
};

export default CardAllinOne;
