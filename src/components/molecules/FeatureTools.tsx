import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

const FeatureTools = ({ data }: any) => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-10">
      <div className="w-full md:w-1/2 order-last md:order-first">
        <Heading>
          <span className="text-primary">Tools</span> For Teachers
          <br /> And Learners
        </Heading>
        <Paragraph text={data.description} size={"medium"} className="mt-5" />
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={data.image}
          alt={"Feature Tools"}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default FeatureTools;
