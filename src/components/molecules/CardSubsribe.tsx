import Button from "../atoms/Button";
import Tagline from "../atoms/Tagline";

type SubsribeProps = {
  id: number;
  title: string;
  desc: string;
  price: string;
  include: string[];
};

const CardSubsribe = ({ id, title, desc, price, include }: SubsribeProps) => {
  return (
    <article className="w-[330px] sm:w-[373px] h-full flex flex-col gap-5">
      <figure
        className={`border-[1.5px] rounded-lg ${
          id == 2
            ? "bg-background-pink border-primary"
            : "bg-basic-100 border-basic-900"
        }`}
      >
        <div className="px-10 pt-[60px]">
          <div className="flex gap-4 sm:px-0 items-center justify-between">
            <h5 className="text-heading3 font-bold text-basic-900">{title}</h5>
            <Tagline
              className={`${id == 2 ? "block bg-primary" : "hidden"}`}
              size={"small"}
              textColor={"white"}
            >
              Most Popular
            </Tagline>
          </div>
          <p className="mt-5 text-type-m font-medium text-basic-500">{desc}</p>
        </div>
        <div className="mt-[90px] px-10 pb-[30px] flex justify-between items-center">
          <Button href={"#"}>Subsribe</Button>
          <p className="text-type-xl font-bold text-primary">
            {price}
            <br />
            <span className="text-type-m text-basic-500">/ month</span>
          </p>
        </div>
      </figure>

      <figure
        className={`h-full border-[1.5px] rounded-lg ${
          id == 2
            ? "bg-background-pink border-primary"
            : "bg-basic-100 border-basic-900"
        }`}
      >
        <div className="px-10 pt-10 pb-[60px] flex flex-col gap-5 items-start">
          <p className="text-type-m font-bold text-basic-500">
            What’s included:
          </p>
          <ul className="list-disc flex flex-col gap-2.5">
            {include.map((item: any, index) => (
              <li
                key={index}
                className={`text-type-l text-basic-900 ${
                  item.benefit === "Everything in Tier 1" ||
                  item.benefit === "Everything in Tier 2"
                    ? "font-bold"
                    : "font-medium"
                }`}
              >
                {item.benefit}
              </li>
            ))}
          </ul>
        </div>
      </figure>
    </article>
  );
};

export default CardSubsribe;
