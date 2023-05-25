import React from "react";

export default function Testimonials({ content }) {
  return (
    <div className="container mx-auto max-w-2xl my-12 p-4">
      <div className="grid grid-cols-6 gap-4  text-black dark:text-white">
        <div className="flex flex-col rounded-xl md:col-span-3 col-span-6 p-4 bg-gradient-to-r dark:from-[#1E1C32]/70 from-[#FFE9F4]/30 to-[#EAF3FF]/30 dark:to-[#2B161D]/70">
          <div className="flex items-center">
            <div className="w-10 h-10  rounded-full">
              <img src={content.testimonals[0].photo.url} />
            </div>
            <span className="pl-2 text-[14px]">
              {content.testimonals[0].name}
            </span>
            <span className="pl-2 text-[12px] opacity-70">
              {content.testimonals[0].location}
            </span>
          </div>
          <div className="mt-4 text-[13.5px] opacity-60">
            {content.testimonals[0].desc}
          </div>
        </div>
        <div className="flex flex-col rounded-xl md:col-span-3 col-span-6 p-4 bg-gradient-to-r dark:from-[#1E1C32]/70 from-[#FFE9F4]/30 to-[#EAF3FF]/30 dark:to-[#2B161D]/70">
          <div className="flex items-center">
            <div className="w-10 h-10  rounded-full">
              <img src={content.testimonals[1].photo.url} />
            </div>
            <span className="pl-2 text-[14px]">
              {content.testimonals[1].name}
            </span>
            <span className="pl-2 text-[12px] opacity-70">
              {content.testimonals[1].location}
            </span>
          </div>
          <div className="mt-4 text-[13.5px] opacity-60">
            {content.testimonals[1].desc}
          </div>
        </div>
        <div className="flex flex-col rounded-xl md:col-span-5 col-span-6 p-4 bg-gradient-to-r dark:from-[#1E1C32]/70 from-[#FFE9F4]/30 to-[#EAF3FF]/30 dark:to-[#2B161D]/70">
          <div className="flex items-center">
            <div className="w-10 h-10  rounded-full">
              <img src={content.testimonals[2].photo.url} />
            </div>
            <span className="pl-2 text-[14px]">
              {content.testimonals[2].name}
            </span>
            <span className="pl-2 text-[12px] opacity-70">
              {content.testimonals[2].location}
            </span>
          </div>
          <div className="mt-4 text-[13.5px] opacity-60">
            {content.testimonals[2].desc}
          </div>
        </div>
      </div>
    </div>
  );
}
