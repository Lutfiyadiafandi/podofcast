import Heading from "../atoms/Heading";
import CardPackage from "../molecules/CardPackage";
import data from "../../utils/data.json";
import { useState } from "react";

const Package = () => {
  const [packages] = useState(data.packages);
  return (
    <main className="mt-[77px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto">
      <Heading
        title={packages.title}
        subTitle={packages.subTitle}
        textAlign="center"
        className="gap-[10px]"
      />
      <section className="mt-[72px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[48px] lg:gap-x-[78px] gap-y-[46px]">
        {packages.package.map((pkg: any, index) => (
          <CardPackage
            key={index}
            image={pkg.image}
            pkgClass={pkg.class}
            category={pkg.category}
            title={pkg.title}
            price={pkg.price}
            includeEat={pkg.includeEat}
          />
        ))}
      </section>
    </main>
  );
};

export default Package;
