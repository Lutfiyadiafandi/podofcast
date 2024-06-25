type ButtonProps = {
  variant?: "primary" | "secondary" | "white";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
}) => {
  const baseClasses = "text-center rounded-[80px] focus:outline-none";

  const variantClasses = {
    primary: "bg-primary text-basic-50",
    secondary:
      "bg-transparent text-primary border border-primary hover:bg-primary hover:text-basic-50 transition-all duration-300 ease-in-out",
    white: "bg-basic-50 text-basic-200",
  };

  const sizeClasses = {
    small: "w-[160px] h-[60px] text-type-l md:text-type-xl font-medium",
    medium: "w-[220px] h-[80px] text-type-xl md:text-type-xxl font-semibold",
    large:
      "w-[280px] h-[80px] text-type-xl md:text-type-xxl font-medium leading-[180%]",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const style = `${baseClasses} ${className} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`;

  return (
    <button type={type} className={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
