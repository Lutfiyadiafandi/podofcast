import Button from "../atoms/Button";
import Tag from "../atoms/Tag";
import FlightIcon from "/icons/Flight.svg";
import TicketIcon from "/icons/Ticket.svg";
import HostelIcon from "/icons/Hostel.svg";
import VisasIcon from "/icons/Visas.svg";
import EatIcon from "/icons/Eat.svg";

type PackageProps = {
  image: string;
  pkgClass: string;
  category: string;
  title: string;
  price: string;
  includeEat?: boolean;
};

const CardPackage: React.FC<PackageProps> = ({
  image,
  pkgClass,
  category,
  title,
  price,
  includeEat = true,
}) => {
  return (
    <div className="px-[26px] py-7 rounded-[10px] shadow-package">
      <div className="relative w-full rounded-[10px]">
        <img
          src={image}
          alt="Package Image"
          className="w-full h-[238px] object-cover object-center rounded-[10px]"
        />
        <div className="absolute inset-0 bg-black opacity-30 rounded-[10px]"></div>
      </div>
      <div className="mt-4 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h6 className="text-type-l leading-[150%] font-bold text-primary">
            {pkgClass}
          </h6>
          <Tag size="medium">{category}</Tag>
        </div>
        <div>
          <h3 className="text-type-l leading-[140%] font-bold text-basic-200 font-Kufam">
            {title}
          </h3>
          <h2 className="text-type-xl leading-[140%] font-bold text-basic-200 font-Kufam">
            $ {price}/
            <span className="text-secondary-dark font-Kufam"> person</span>
          </h2>
        </div>
        <div className="flex gap-5">
          <img src={FlightIcon} alt="icon" className="w-9 h-9" />
          <img src={TicketIcon} alt="icon" className="w-9 h-9" />
          <img src={HostelIcon} alt="icon" className="w-9 h-9" />
          <img src={VisasIcon} alt="icon" className="w-9 h-9" />
          {includeEat && <img src={EatIcon} alt="icon" className="w-9 h-9" />}
        </div>
        <Button variant="secondary" size="small">
          View Detail
        </Button>
      </div>
    </div>
  );
};

export default CardPackage;
