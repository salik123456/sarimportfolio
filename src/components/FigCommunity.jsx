import React from "react";
import fig1 from "../images/faizan/figc1.png";
import fig2 from "../images/faizan/figc2.png";
import fig3 from "../images/faizan/figc3.png";

const figList = [
  {
    img: fig1,
    name: "Animated FAQ’s Section",
    link: "https://www.figma.com/community/file/1229425268896572977",
    desc: "A Figma community file for a FAQ’s section",
  },
  {
    img: fig2,
    name: "Horizontal Scrolling animation",
    link: "https://www.figma.com/community/file/1201493747141236866",
    desc: "A Figma community file for horizontally scrolled section",
  },
  {
    img: fig3,
    name: "Vertical Scrolling animation",
    link: "https://www.figma.com/community/file/1197524769890004458",
    desc: "A Figma community file for a vertically scrolled section",
  },
];

const Project = ({ p }) => {
  return (
    <a
      href={p.link}
      target="_blank"
      className="col-span-1 relative p-[0.6rem] overflow-hidden hover:dark:bg-white/5 hover:bg-black/5 transition-all duration-200 cursor-pointer rounded-2xl flex md:flex-col flex-row mb-2 sm:mb-10"
    >
      <div className="aspect-square sm:w-1/5 w-1/3  lg:w-full rounded-xl relative overflow-hidden">
        <img className=" w-full aspect-square object-cover" src={p.img} />
      </div>
      <div className=" pl-4 md:pl-0 sm:w-4/5 w-2/3 md:w-full ">
        <div className="text-[16px] font-bold pt-4">
          <p className=" truncate text-ellipsis">{p.name}</p>
        </div>
        <div className="text-[15px] dark:text-white/60 text-black/60">{p.desc}</div>
      </div>
    </a>
  );
};

export default function FigCommunity() {
  return (
    <div className="container mx-auto max-w-2xl p-4 text-black dark:text-white">
      <div className="text-[14px] w-full uppercase text-center md:w-fit md:text-left font-bold opacity-60 tracking-[0.2em]">Figma community</div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-2">
        {figList.map((p, ind) => (
          <Project key={ind} p={p} />
        ))}
      </div>
    </div>
  );
}
