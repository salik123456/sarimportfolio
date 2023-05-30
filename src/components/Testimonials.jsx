import React from "react";
import t1 from "../images/faizan/testimonials/Ellipse 1-1.png";
import t2 from "../images/faizan/testimonials/Ellipse 1-2.png";
import t3 from "../images/faizan/testimonials/Ellipse 1.png";

const testimonals = [
  {
    photo: t3,
    name: "Adila Sayyed",
    desc: "Sarim is an amazing UX Designer! His knowledge of the user-centered design process is unmatched, and I was really impressed with how he was able to help us create an amazing experience for our customers. ",
    loc: "@TINDEE",
  },

  {
    photo: t2,
    name: "Adil",
    desc: "I was thoroughly impressed by Sarim’s UX design work for our company's website. He has a great eye for creating a user-friendly experience. We were really happy with the end result and would highly recommend working with Sarim!",
    loc: "@Infra Dapp",
  },
  {
    photo: t1,
    name: "Zammar Ahmed",
    desc: "I had the opportunity to work with Sarim on a major UX project, and he exceeded my expectations in every way. He is incredibly knowledgeable in the field of UX design and was able to quickly create a solution that satisfied our needs. Highly recommend him!",
    loc: "@Esspfa",
  },
];

export default function Testimonials({ content }) {
  return (
    <div className="container mx-auto max-w-2xl my-12 p-4">
      <div className="grid grid-cols-6 gap-4  text-black dark:text-white">
        <div className="flex flex-col rounded-xl md:col-span-3 col-span-6 p-4 bg-gradient-to-r dark:from-[#F0D6FF]/10 from-[#F0D6FF]/20 to-[#D3CDFF]/20 dark:to-[#D3CDFF]/10">
          <div className="flex items-center">
            <div className="w-10 h-10  rounded-full">
              <img src={testimonals[0].photo} />
            </div>
            <div className="flex flex-col">
              <span className="pl-2 text-[14px]">{testimonals[0].name}</span>
              <span className="pl-2 text-[12px] opacity-70">{testimonals[0].loc}</span>
            </div>
          </div>
          <div className="mt-4 text-[13.5px] opacity-60">{testimonals[0].desc}</div>
        </div>
        <div className="flex flex-col rounded-xl md:col-span-3 col-span-6 p-4 bg-gradient-to-r  dark:from-[#F0D6FF]/10 from-[#F0D6FF]/20 to-[#D3CDFF]/20 dark:to-[#D3CDFF]/10">
          <div className="flex items-center">
            <div className="w-10 h-10  rounded-full">
              <img src={testimonals[1].photo} />
            </div>
            <div className="flex flex-col">
              <span className="pl-2 text-[14px]">{testimonals[1].name}</span>
              <span className="pl-2 text-[12px] opacity-70">{testimonals[1].loc}</span>
            </div>
          </div>
          <div className="mt-4 text-[13.5px] opacity-60">{testimonals[1].desc}</div>
        </div>
        <div className="flex flex-col rounded-xl col-span-6 p-4 bg-gradient-to-r  dark:from-[#F0D6FF]/10 from-[#F0D6FF]/20 to-[#D3CDFF]/20 dark:to-[#D3CDFF]/10">
          <div className="flex items-center">
            <div className="w-10 h-10  rounded-full">
              <img src={testimonals[2].photo} />
            </div>
            <div className="flex flex-col">
              <span className="pl-2 text-[14px]">{testimonals[2].name}</span>
              <span className="pl-2 text-[12px] opacity-70">{testimonals[2].loc}</span>
            </div>
          </div>
          <div className="mt-4 text-[13.5px] opacity-60">{testimonals[2].desc}</div>
        </div>
      </div>
    </div>
  );
}
