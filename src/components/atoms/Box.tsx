type Props = {
  total: number;
  title: string;
  className?: string;
};

const Box = ({ total, title, className }: Props) => {
  return (
    <div
      className={`max-w-[373px] py-5 sm:py-10 md2:py-[59px] flex flex-col justify-center items-center border-[1.5px] border-basic-900 bg-basic-100 rounded-lg shadow-box ${className}`}
    >
      <h5 className="text-heading2-mobile md2:text-heading2 font-bold text-primary text-center">
        {total}
        <span className="text-basic-900">K</span>
      </h5>
      <p className="mt-5 text-type-l font-medium text-basic-500 text-center">
        {title}
      </p>
    </div>
  );
};

export default Box;
