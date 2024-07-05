import Logo from "/images/Logo.png";

import GooglePlay from "/icons/GooglePlay.svg";
import AppStore from "/icons/AppStore.svg";
import GooglePodcast from "/icons/GooglePodcast.svg";
import Spotify from "/icons/Spotify.svg";
import Youtube from "/icons/Youtube.svg";
import { Link, NavLink } from "react-router-dom";
import Socmed from "../molecules/Socmed";

const Footer = () => (
  <footer className="pt-[140px] pb-20 px-4 xl:px-0 max-w-screen-xl mx-auto">
    <main className="flex flex-col md:flex-row gap-10 md:justify-between items-center md:items-start">
      <section className="flex flex-col gap-10">
        <figure className="flex gap-6 items-baseline">
          <Link to={"/"}>
            <img
              src={Logo}
              alt={"Image Logo"}
              className="size-[74px] cursor-pointer"
            />
          </Link>
          <span className="text-type-s font-medium text-basic-500">©2021.</span>
        </figure>
        <p className="text-type-m font-medium text-basic-500">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>
        <Socmed className="justify-center md:justify-start" />
      </section>
      <nav>
        <ul className="grid grid-cols-2 gap-x-5 xl:gap-x-[93px] gap-y-5">
          <li className="text-type-l font-medium text-basic-900 hover:text-primary">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="text-type-l font-medium text-basic-900 hover:text-primary">
            <NavLink to={"/#testimonials"}>Testimonials</NavLink>
          </li>
          <li className="text-type-l font-medium text-basic-900 hover:text-primary">
            <NavLink to={"/"}>Features</NavLink>
          </li>
          <li className="text-type-l font-medium text-basic-900 hover:text-primary">
            <NavLink
              to={"/podcast/are-you-a-perplexed-mind-person#full-episodes"}
            >
              Episodes
            </NavLink>
          </li>
          <li className="text-type-l font-medium text-basic-900 hover:text-primary">
            <NavLink to={"/#subscribe"}>Pricing</NavLink>
          </li>
          <li className="text-type-l font-medium text-basic-900 hover:text-primary">
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <div>
          <span className="text-type-l font-medium text-basic-500 text-center">
            Listen to episodes on your fav platform:
          </span>
          <div className="mt-[29px] flex flex-col lg:flex-row gap-[38.5px] items-center md:items-start">
            <img
              src={GooglePodcast}
              alt="GooglePodcast Logo"
              className="w-[122px] h-[22px] cursor-pointer"
            />
            <img
              src={Spotify}
              alt="Spotify Logo"
              className="w-[80px] h-[22px] cursor-pointer"
            />
            <img
              src={Youtube}
              alt="Youtube Logo"
              className="w-[94px] h-[22px] cursor-pointer"
            />
          </div>
        </div>
        <div className="mt-[60px] flex flex-col items-center md:items-start">
          <span className="text-type-l font-medium text-basic-500 text-center">
            App available on:
          </span>
          <div className="mt-5 flex gap-5 items-center justify-center">
            <img
              src={AppStore}
              alt="App Store Logo"
              className="size-9 cursor-pointer"
            />
            <img
              src={GooglePlay}
              alt="Google Play Logo"
              className="size-9 cursor-pointer"
            />
          </div>
        </div>
      </section>
    </main>
    <aside className="mt-[100px] lg:mt-[140px]">
      <hr className="w-full h-[0.5px] bg-basic-500" />
      <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
        <p className="text-type-s font-medium text-basic-500">
          ©2022. All Rights Reserved.
          <span className="text-primary"> Pod of Cast</span>
        </p>
        <div className="flex gap-2.5">
          <p className="text-type-s font-medium text-basic-500">Terms</p>
          <span className="text-type-s font-medium text-basic-500">•</span>
          <p className="text-type-s font-medium text-basic-500">Privacy</p>
        </div>
      </div>
    </aside>
  </footer>
);

export default Footer;
