import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";

const HeroBlog = () => {
  return (
    <main className="pt-16 pb-[117px] px-4 xl:px-0 relative z-0 overflow-x-hidden bg-background-pink">
      <section className="text-center">
        <Heading size="large">
          Article <br />
          and
          <span className="text-primary"> News</span>
        </Heading>
        <Paragraph size="small" className="mt-[30px] px-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt <br />
          ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
        </Paragraph>
      </section>

      {/* SHAPE */}
      <img
        src="/icons/HeroShapeLeft.svg"
        alt="icons"
        className="w-[326px] absolute -top-[90px] -left-[200px] lg:-top-[50px] lg:left-0 -z-10"
      />
      <img
        src="/icons/HeroShapeRightt.png"
        alt="icons"
        className="w-[120px] h-[166.96px] absolute top-[100px] -right-[80px] lg:top-[100px] lg:-right-[40px] -z-10"
      />
      {/* SHAPE */}
    </main>
  );
};

export default HeroBlog;
