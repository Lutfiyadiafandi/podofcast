import IconRed from "/icons/ScribbleSectionRed.svg";
import IconBlack from "/icons/ScribbleSectionBlack.svg";

type props = {
  className?: string;
  variant: "red" | "black";
};
const IconSection = ({ className, variant }: props) => {
  return (
    <img
      src={variant === "red" ? IconRed : IconBlack}
      alt="Icon"
      className={`size-[120px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 ${className}`}
    />
  );
};

export default IconSection;
