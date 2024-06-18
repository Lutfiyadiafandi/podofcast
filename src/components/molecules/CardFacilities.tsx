type FacilitiesProps = {
  icon: string;
  title: string;
  description: string;
};

const CardFacilities: React.FC<FacilitiesProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-5 bg-basic-50 flex gap-5 rounded-[10px] shadow-facilities">
      <div>
        <img src={icon} alt="Icon Facilities" className="w-9 h-9" />
      </div>
      <div>
        <h3 className="text-type-xl leading-[150%] font-semibold text-basic-200 font-Kufam">
          {title}
        </h3>
        <p className="text-type-m leading-[150%] font-medium text-basic-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardFacilities;
