import Button from "../atoms/Button";

type PackageProps = {
  image: string;
  buttonText: string;
  title: string;
};

const CardWhatIs: React.FC<PackageProps> = ({ image, buttonText, title }) => {
  return (
    <div className="relative w-full rounded-[20px]">
      <img
        src={image}
        alt="Package Image"
        className="w-full h-[400px] object-cover rounded-[20px]"
      />
      <div className="absolute inset-0 bg-[#171B41] opacity-20 rounded-[20px]"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h6 className="text-heading6 md:text-heading5 font-semibold text-basic-50">
          {title}
        </h6>
        <Button size="large" variant="white" className="mt-4 ">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CardWhatIs;
