import React, { useEffect } from "react";
import { gsap } from "gsap";
import pl1 from "../images/faizan/partnerlogoswhite/1.png";
import pl2 from "../images/faizan/partnerlogoswhite/2.png";
import pl3 from "../images/faizan/partnerlogoswhite/3.png";
import pl4 from "../images/faizan/partnerlogoswhite/4.png";
import pl5 from "../images/faizan/partnerlogoswhite/5.png";
import pl6 from "../images/faizan/partnerlogoswhite/6.png";
import pl7 from "../images/faizan/partnerlogoswhite/7.png";
import pl8 from "../images/faizan/partnerlogoswhite/8.png";

import pd1 from "../images/faizan/partnerlogosblack/1.png";
import pd2 from "../images/faizan/partnerlogosblack/2.png";
import pd3 from "../images/faizan/partnerlogosblack/3.png";
import pd4 from "../images/faizan/partnerlogosblack/4.png";
import pd5 from "../images/faizan/partnerlogosblack/5.png";
import pd6 from "../images/faizan/partnerlogosblack/6.png";
import pd7 from "../images/faizan/partnerlogosblack/7.png";
import pd8 from "../images/faizan/partnerlogosblack/8.png";

export default function ImageMarquee({ theme }) {
  useEffect(() => {
    gsap.set(".box", {
      x: (i) => i * 200,
    });

    gsap.to(".box", {
      duration: 40,
      ease: "none",
      x: "-=1600",
      modifiers: {
        x: gsap.utils.unitize(function (x) {
          return parseFloat(x + 3000 + 200) % 1600;
        }),
      },
      repeat: -1,
    });
  }, []);
  return (
    <div className="py-10 relative  overflow-hidden container mx-auto max-w-2xl">
      <div className="h-20 -translate-x-[10rem] w-[1000px]">
        <div className="absolute -top-7  bottom-0 bg-gradient-to-l from-transparent to-white dark:to-[#111111]/40 w-44 translate-x-[9.5rem] "></div>
        <div className="absolute -top-7 right-0 bottom-0 bg-gradient-to-r from-transparent to-white dark:to-[#111111]/40 w-44 -translate-x-[4.5rem]  z-10"></div>
        <div class="wrapper text-white relative z-0 w-full ">
          <div class="boxes opacity-50">
            <div class="box flex items-center justify-center w-[180px]">
              <img className="" src={theme === "Light" ? pl1 : pd1} />
            </div>
            <div class="box flex items-center justify-center w-[180px]">
              <img className="" src={theme === "Light" ? pl2 : pd2} />
            </div>
            <div class="box flex items-center justify-center w-[180px]">
              <img className="" src={theme === "Light" ? pl3 : pd3} />
            </div>
            <div class="box flex items-center justify-center w-[180px]">
              <img className="" src={theme === "Light" ? pl4 : pd4} />
            </div>
            <div class="box flex items-center justify-center w-[180px]">
              <img className="" src={theme === "Light" ? pl5 : pd5} />
            </div>
            <div class="box flex items-center justify-center  w-[180px]">
              <img className="" src={theme === "Light" ? pl6 : pd6} />
            </div>
            <div class="box flex items-center justify-center  w-[180px]">
              <img className="" src={theme === "Light" ? pl7 : pd7} />
            </div>
            <div class="box flex items-center justify-center w-[180px]">
              <img className="" src={theme === "Light" ? pl8 : pd8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
