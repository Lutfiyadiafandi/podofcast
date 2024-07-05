import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Youtube from "/icons/YoutubeLogo.svg";
import GooglePodcast from "/icons/GooglePodcastLogo.svg";
import Spotify from "/icons/SpotifyLogo.svg";
import Home from "/images/Home.png";
import Play from "/images/Play.png";
import IconSection from "../atoms/IconSection";
import Tagline from "../atoms/Tagline";
import Title from "../atoms/Title";

const CTA = () => {
  return (
    <main className="py-[140px] relative z-0 bg-background-blue border-b-2 border-basic-500">
      <IconSection variant="red" />
      <Tagline size="large" textColor="red" className="mx-auto">
        Beta
      </Tagline>
      <Heading size="medium" className="mt-5">
        Available now <br />
        Pod of Cast App
      </Heading>
      <Paragraph size="large" className="mt-7">
        We just launched our podcast app!
      </Paragraph>

      <section className="mt-[160px] text-center">
        <Title>
          <Button href="#">Download Now</Button>

          {/* SHAPE */}
          <img
            src="/icons/ButtonShape.svg"
            alt="Icon"
            className="size-[120px] absolute -top-[70px] -right-[70px] -z-10"
          />
          {/* SHAPE */}
        </Title>
        <div className="mt-6 flex flex-col gap-2.5">
          <span className="text-type-m font-medium text-basic-500">
            Content also available on:
          </span>
          <div className="flex gap-5 justify-center items-center">
            <img
              src={GooglePodcast}
              alt="GooglePodcast Logo"
              className="size-6"
            />
            <img src={Spotify} alt="Spotify Logo" className="size-6" />
            <img src={Youtube} alt="Youtube Logo" className="size-6" />
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden">
        <img
          src={Home}
          alt="Home"
          className="w-[373px] absolute bottom-0 -left-[300px] lg:-left-0 -z-10"
        />
        <img
          src={Play}
          alt="Play"
          className="w-[373px] absolute bottom-0 -right-[310px] lg:-right-0 -z-10"
        />

        {/* SHAPE */}
        <img
          src="/icons/CTAShapeLeft3.svg"
          alt="Icon"
          className="w-[25.44px] absolute top-[400px] left-[90px] -z-10"
        />
        <img
          src="/icons/CTAShapeLeft2.svg"
          alt="Icon"
          className="size-[64px] absolute top-[420px] left-[100px] -z-10"
        />
        <img
          src="/icons/CTAShapeLeft.svg"
          alt="Icon"
          className="size-[140px] absolute top-[412px] -left-[8px] -z-10"
        />
        <img
          src={"/icons/CTAShapeRight.svg"}
          alt=""
          className="w-[207px] absolute bottom-0 -right-[150px] lg:right-[120px] -z-20"
        />
        {/* SHAPE */}
      </section>
    </main>
  );
};

export default CTA;
