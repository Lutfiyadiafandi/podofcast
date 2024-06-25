import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

const FeatureQuiz = ({ data }: any) => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-10">
      <div className="w-full md:w-1/2">
        <img
          src={data.image}
          alt={"Feature Tools"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <Heading>
          Assessments,
          <br />
          <span className="text-primary">Quizzes</span>, Tests
        </Heading>
        <Paragraph text={data.description} size={"medium"} className="mt-5" />
      </div>
    </section>
  );
};

export default FeatureQuiz;
