import Twitter from "/icons/Twitter.svg";
import Instagram from "/icons/Instagram.svg";
import Tiktok from "/icons/Tiktok.svg";

type props = {
  className?: string;
};
const Socmed = ({ className }: props) => {
  return (
    <div className={`flex gap-[25px] ${className}`}>
      <img src={Twitter} alt="Twitter" className="size-6 cursor-pointer" />
      <img src={Instagram} alt="Instagram" className="size-6 cursor-pointer" />
      <img src={Tiktok} alt="Tiktok" className="size-6 cursor-pointer" />
    </div>
  );
};

export default Socmed;
