import React, { useEffect } from "react";
import { gsap } from "gsap";
import p1 from "../images/faizan /proj/BullionFX.png";
import p2 from "../images/faizan /proj/Cyberstella.png";
import p3 from "../images/faizan /proj/Frame 2029.png";
import p4 from "../images/faizan /proj/image 16.png";
import p5 from "../images/faizan /proj/image 6.png";
import p6 from "../images/faizan /proj/image 844.png";
import p7 from "../images/faizan /proj/image 846.png";
import p8 from "../images/faizan /proj/image 847.png";

export default function ImageMarquee({ reel }) {
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
              <img className="w-[150px]" src={p1} />
            </div>
            <div class="box flex items-center justify-center w-[180px]">
              <img className="w-[150px]" src={p2} />
            </div>
            <div class="box flex items-center justify-center w-[180px]">
              <img className="w-[150px]" src={p3} />
            </div>
            <div class="box flex items-center justify-center w-[180px]">
              <img className="w-[150px]" src={p4} />
            </div>
            <div class="box flex items-center justify-center w-[180px]">
              <img className="w-[150px]" src={p5} />
            </div>
            <div class="box flex items-center justify-center  w-[180px]">
              <img className="w-[150px]" src={p6} />
            </div>
            <div class="box flex items-center justify-center  w-[180px]">
              <img className="w-[150px]" src={p7} />
            </div>
            <div class="box flex items-center justify-center w-[180px]">
              <img className="w-[150px]" src={p8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
