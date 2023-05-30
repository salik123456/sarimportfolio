import React, { useEffect } from "react";
import bubble from "../images/faizan/bubble.png";
import lkbtn from "../images/lkbtn.svg";
import emlbtn from "../images/emalbtn.svg";

export default function SayHi() {
  return (
    <div className="pb-8 pt-16 p-4">
      <div className="container  text-black dark:text-white mx-auto max-w-2xl grid md:grid-cols-2 grid-cols-1 gap-4 rounded-2xl bg-gradient-to-r from-[#F0D6FF]/20 to-[#D3CDFF]/20 dark:from-[#F0D6FF]/10 dark:to-[#D3CDFF]/10">
        <div className="pl-8 pr-8 md:pr-0 py-8 flex flex-col items-start justify-center">
          <div className="tgrad font-bold text-[44px]">Say hi!</div>
          <p className="text-[18px] dark:text-white/70 text-black/70 mt-4">Want to create something awesome? Or, you have any query? Drop an email or connect.</p>
          <div className="flex mt-4">
            <a target="_blank" href="https://www.linkedin.com/in/sarimkhanweb3">
              <img src={lkbtn} />
            </a>
            <a target="_blank" href="mailto:hi@sarim.design" className="ml-8">
              <img src={emlbtn} />
            </a>
          </div>
        </div>
        <div className="col-span-1 row-start-1 md:col-start-2">
          <img src={bubble} className=" object-contain " />
        </div>
      </div>
    </div>
  );
}

<div className="pb-8 pt-16 p-4">
  <div className="container pb-8 sm:pb-0 text-white mx-auto max-w-2xl grid md:grid-cols-5 grid-cols-1 gap-8 px-8 pt-8 rounded-2xl bg-gradient-to-br dark:from-[#1E1C32]/70 from-[#FFE9F4]/30 to-[#EAF3FF]/30 dark:to-[#2B161D]/70">
    <div className="col-span-2">
      <div className="tgrad font-bold text-[44px]">Say hi!</div>
      <p className="text-[18px] dark:text-white/70 text-black/70 mt-4">Want to create something awesome? Or, you have any query? Drop an email or connect.</p>
    </div>
    <div className=" row-start-1 md:col-start-3  overflow-hidden md:h-[17rem] col-span-3 flex items-center justify-center relative pl-8">
      <img src={bubble} className="w-[24rem]  object-cover" />
    </div>
  </div>
</div>;
