type TextIconProps = {
  icon: string;
  text: string;
  className?: string;
};

const TextIcon: React.FC<TextIconProps> = ({ icon, text, className }) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <img src={icon} alt="icon" className="w-9 h-9" />
      <p className="text-type-xl md:text-type-xxl leading-[150%] font-semibold text-basic-300">
        {text}
      </p>
    </div>
  );
};

export default TextIcon;
