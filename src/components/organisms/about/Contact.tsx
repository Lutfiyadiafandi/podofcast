import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import InputLabel from "../../atoms/InputLabel";
import InputTextArea from "../../atoms/InputTextArea";
import Line from "../../atoms/Line";
import Paragraph from "../../atoms/Paragraph";
import Title from "../../atoms/Title";

const Contact = () => {
  return (
    <main className="py-[140px] px-4 xl:px-0 relative z-0 max-w-screen-md mx-auto">
      <Title>
        <Heading size="medium">Get in touch</Heading>

        {/* SHAPE */}
        <img
          src="/icons/ContactShape.svg"
          alt="icons"
          className="w-[67.68px] h-[23.69px] absolute -top-[10px] -right-[30px] -z-10"
        />
        {/* SHAPE */}
      </Title>
      <Paragraph size="large" className="mt-5">
        Send your message to us
      </Paragraph>
      <Line className="mt-[60px]" />
      <section className="mt-10 text-center">
        <form
          action=""
          className="flex flex-col md:grid grid-cols-2 gap-x-5 gap-y-5 md:gap-y-10"
        >
          <InputLabel label="Full name" type="text" placeholder="Full name" />
          <InputLabel
            label="Email"
            type="email"
            placeholder="johndoe@gmail.com"
          />
          <InputLabel label="Phone" type="text" placeholder="Phone" />
          <InputLabel label="Subject" type="text" placeholder="Subject..." />
          <InputTextArea
            label="Message"
            placeholder="Your message goes here..."
            className="col-span-2"
          />
        </form>
        <Button href="#" className="mt-[60px]">
          Send Message
        </Button>
        <div className="mt-5 md:-mt-[55px] flex justify-between items-center">
          <p className="text-type-m font-bold text-primary">
            *<span className="font-medium text-basic-900">required</span>
          </p>
          <p className="text-type-m font-medium text-basic-900 text-left">
            Viverra at port
            <br />
            accumsan. <span className="text-primary underline">Orci non</span>
          </p>
        </div>
      </section>

      {/* SHAPE */}
      <img
        src="icons/QuoteShapeLeft.svg"
        alt="Icon"
        className="size-[120px] hidden lg:block absolute bottom-[250px] -left-[200px] xxl:-left-[350px] -z-10"
      />
      <img
        src={"icons/ContactShapeRight.svg"}
        alt=""
        className="size-[78px] hidden lg:block absolute top-[320px] -right-[100px] xxl:-right-[200px] -z-10"
      />
      {/* SHAPE */}
    </main>
  );
};

export default Contact;
