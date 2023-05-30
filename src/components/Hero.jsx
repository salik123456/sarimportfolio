import React, { lazy, useEffect } from "react";
import ava from "../images/faizan/Avatar/Hexagon.png";

const Carousel = () => {
  return <div className="border p-4 mt-20"></div>;
};

export default function Hero() {
  return (
    <div className="container mx-auto max-w-2xl p-4 text-black dark:text-white overflow-x-hidden">
      <div className="flex flex-col pt-36 dark:text-white text-black  ">
        <div className="flex items-center">
          <div className="w-[90px] h-[90px] rounded-full">
            <img src={ava} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="sg  text-[25px]">Sarim Khan</p>
            <p className="inter text-[16px] font-semibold dark:text-white/40 text-black/40">UI/ UX Design Wizard </p>
          </div>
        </div>
        <p className="text-[19px] mt-10  ">
          I take a journey into the metaverse as a design wizard, utilizing design art and illustrations to narrate my tales. I have an affinity for crafting designs for brands and creating design
          assets to benefit the public.
        </p>
        <p className="mt-4 text-black/60 dark:text-white/60 text-[18px]">
          I revel in producing what I adore through my work{" "}
          <a target="_blank" href="https://expeditestudio.com/" className="tgrad">
            @expeditestudio
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
