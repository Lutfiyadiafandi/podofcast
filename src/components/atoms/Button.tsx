type ButtonProps = {
  variant?: "primary" | "secondary" | "danger";
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
  const baseClasses =
    "text-type-xl leading-[64%] font-semibold text-center rounded-[10px] focus:outline-none";

  const variantClasses = {
    primary: "bg-primary text-basic-100",
    secondary:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-basic-100 transition-all duration-300 ease-in-out",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeClasses = {
    small: "px-[30px] py-[16px]",
    medium: "px-[48px] py-[26px]",
    large: "px-[62px] py-[32px]",
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
