import Heading from "../../atoms/Heading";
import Line from "../../atoms/Line";
import Title from "../../atoms/Title";
import Quote from "../../molecules/Quote";
import Doodle from "/images/Doodle.png";
import Doodle2 from "/images/Doodle2.png";

const DetailArticle = () => {
  return (
    <main className="pt-[100px] pb-[140px] relative max-w-screen-xl mx-auto">
      <section>
        <Title>
          <Heading size="small" className="text-center">
            Doodle for our podcast background room
          </Heading>

          {/* SHAPE */}
          <img
            src="/icons/ArticleDetailShape.svg"
            alt="icons"
            className="size-[103.24px] absolute -top-[50px] -left-[20px] lg:-left-[70px] -z-10"
          />
          {/* SHAPE */}
        </Title>
        <div className="mt-20 px-4 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-5">
          <p className="text-type-l font-medium text-basic-500">
            Lorem ipsum dolor sit amet,
            <span className="font-bold"> consectetur adipiscing</span> elit.
            Quam pellentesque at bibendum euismod tellus duis cursus dignissim
            odio. Sit vulputate et integer in.
            <br />
            <br />
            Sit vel, senectus iaculis morbi.
            <span className="font-bold"> Amet</span> interdum imperdiet laoreet
            <span className="font-bold"> morbi</span> tincidunt fermentum,
            libero. Ante enim eget viverra at porttitor accumsan.
            <span className="underline text-basic-900"> Orci non here</span>
          </p>
          <p className="text-type-l font-medium text-basic-500">
            Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in
            sed sodales in mauris molestie. Eleifend est cons ctetur interdum eu
            in auctor. Gravida leo et.
          </p>
        </div>
        <div className="px-4 xl:px-0">
          <Line className="mt-20" />
          <Quote className="mt-[100px]">Quote example goes in here...</Quote>
        </div>
      </section>
      <section className="mt-[100px] px-4 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
        <article>
          <h5 className="text-type-xl font-bold text-basic-900 text-center">
            Bullet list example:
          </h5>
          <ul className="mt-8 md:mt-[60px] list-disc list-inside md:list-outside flex flex-col gap-5 md:gap-10">
            <li className="text-type-l font-medium text-basic-500">
              Lorem ipsum dolor sit amet,
              <span className="font-bold"> consectetur adipiscing</span> elit.
              Quam <br />
              pellentesque at bibendum euismod tellus duis curs <br />
              us dignissim odio. Sit vulputate et integer in.
            </li>
            <li className="text-type-l font-medium text-basic-500">
              Sit vel, senectus iaculis morbi.
              <span className="font-bold"> Amet</span> interdum imperdiet
              laoreet
              <br />
              <span className="font-bold"> morbi</span> tincidunt fermentum,
              libero. Ante enim eget viverra at
              <br /> porttitor accumsan.{" "}
              <span className="underline text-basic-900">Orci non here</span>
            </li>
            <li className="text-type-l font-medium text-basic-500">
              Quis dictum cursus faucibus mattis dignissim. Pellentes
              <br />
              que <span className="font-bold"> purus in sed</span> sodales in
              mauris molestie. Eleifend est
              <br /> cons ctetur interdum eu in auctor. Gravida leo et.
            </li>
          </ul>
        </article>
        <article>
          <h5 className="text-type-xl font-bold text-basic-900 text-center">
            Number list example:
          </h5>
          <ul className="mt-8 md:mt-[60px] list-decimal list-inside md:list-outside flex flex-col gap-5 md:gap-10">
            <li className="text-type-l font-medium text-basic-500">
              Lorem ipsum dolor sit amet,
              <span className="font-bold"> consectetur adipiscing</span> elit.
              Quam <br />
              pellentesque at bibendum euismod tellus duis curs <br />
              us dignissim odio. Sit vulputate et integer in.
            </li>
            <li className="text-type-l font-medium text-basic-500">
              Sit vel, senectus iaculis morbi.
              <span className="font-bold"> Amet</span> interdum imperdiet
              laoreet
              <br />
              <span className="font-bold"> morbi</span> tincidunt fermentum,
              libero. Ante enim eget viverra at
              <br /> porttitor accumsan.{" "}
              <span className="underline text-basic-900">Orci non here</span>
            </li>
            <li className="text-type-l font-medium text-basic-500">
              Quis dictum cursus faucibus mattis dignissim. Pellentes
              <br />
              que <span className="font-bold"> purus in sed</span> sodales in
              mauris molestie. Eleifend est
              <br /> cons ctetur interdum eu in auctor. Gravida leo et.
            </li>
          </ul>
        </article>
      </section>
      <section className="mt-[131px] px-4 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-5">
        <figure>
          <img
            src={Doodle}
            alt="Image Doodle"
            className="w-[570px] max-h-[400px]"
          />
          <p className="mt-5 text-type-m font-medium text-basic-500 text-center">
            this is an image with a caption example
          </p>
        </figure>
        <figure>
          <img
            src={Doodle2}
            alt="Image Doodle"
            className="w-[570px] max-h-[400px]"
          />
          <p className="mt-5 text-type-m font-medium text-primary underline text-center cursor-pointer">
            download here
          </p>
        </figure>
      </section>
    </main>
  );
};

export default DetailArticle;
