type props = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: props) => {
  return (
    <div className={`w-fit mx-auto relative z-0 ${className}`}>{children}</div>
  );
};

export default Title;
