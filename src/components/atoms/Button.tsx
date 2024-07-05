import { Link } from "react-router-dom";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  href: string;
  className?: string;
};

const Button = ({
  variant = "primary",
  size = "large",
  children,
  onClick,
  href,
  className,
}: ButtonProps) => {
  const baseClasses =
    "text-type-m font-bold text-center uppercase rounded-lg border-2 border-basic-900 focus:outline-none";

  const variantClasses = {
    primary:
      "bg-basic-900 text-basic-100 transition-all duration-300 ease-in-out",
    secondary:
      "bg-transparent text-basic-900 shadow-none transition-all duration-300 ease-in-out",
  };

  const sizeClasses = {
    small: "py-3 px-6 shadow-btn",
    large: "py-5 px-9 shadow-btn-large",
  };

  const style = `${baseClasses} ${className} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <Link to={`/${href}`}>
      <button className={style || ""} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
