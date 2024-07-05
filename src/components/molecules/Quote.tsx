import Coma from "../atoms/Coma";
import Heading from "../atoms/Heading";
import Ava from "/images/Avatar.png";
import Jobs from "/images/Platform.png";

type props = {
  children: React.ReactNode;
  className?: string;
};

const Quote = ({ children, className }: props) => {
  return (
    <article
      className={`relative z-0 px-4 lg:px-0 flex flex-col justify-center items-center py-10 bg-background-pink rounded-lg ${className}`}
    >
      <Coma />
      <Heading size="small" className="text-center">
        {children}
      </Heading>
      <figure className="mt-10 flex flex-wrap justify-center gap-[10px] items-center">
        <img src={Ava} alt={"Avatar"} className="size-12 rounded-full" />
        <p className="text-type-m font-medium text-basic-900">Jhon Smith,</p>
        <img src={Jobs} alt={"Jobs"} className="w-[236px] h-[22px]" />
      </figure>

      {/* SHAPE */}
      <img
        src="/icons/QuoteShapeLeft.svg"
        alt="icons"
        className="size-[120px] absolute bottom-[50px] -left-[80px] lg:-left-[50px] -z-10"
      />
      <img
        src="/icons/QuoteShapeRight.svg"
        alt="icons"
        className="size-[200px] absolute -top-[60px] -right-[100px] lg:-right-[60px] -z-10"
      />
      {/* SHAPE */}
    </article>
  );
};

export default Quote;
