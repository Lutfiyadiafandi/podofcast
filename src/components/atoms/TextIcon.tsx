type TextIconProps = {
  icon: string;
  text: string;
  className?: string;
};

const TextIcon: React.FC<TextIconProps> = ({ icon, text, className }) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <img
        src={icon}
        alt="icon"
        className="w-[60px] h-[60px] rounded-full shadow-icon"
      />
      <p className="text-type-xl leading-[180%] font-normal text-paragraph">
        {text}
      </p>
    </div>
  );
};

export default TextIcon;
