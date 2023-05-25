import React from "react";
import l1 from "../images/faizan /website design 2/1.png";
import l2 from "../images/faizan /website design 2/2.png";
import l3 from "../images/faizan /website design 2/3.png";
import l4 from "../images/faizan /website design 2/4.png";
import l5 from "../images/faizan /website design 2/5.png";
import l6 from "../images/faizan /website design 2/6.png";
import l7 from "../images/faizan /website design 2/7.png";
import l8 from "../images/faizan /website design 2/8.png";
import l9 from "../images/faizan /website design 2/9.png";
import l10 from "../images/faizan /website design 2/10.png";
import l11 from "../images/faizan /website design 2/11.png";
import l12 from "../images/faizan /website design 2/12.png";
import l13 from "../images/faizan /website design 2/13.png";
import l14 from "../images/faizan /website design 2/14.png";
import l15 from "../images/faizan /website design 2/15.png";

const applist = [
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  l8,
  l9,
  l10,
  l11,
  l12,
  l13,
  l14,
  l15,
];

export default function AppStack({ content }) {
  return (
    <div className="flex flex-col mt-20 items-center justify-center pb-8 p-4">
      <div className="tgrad text-[32px] font-bold">Appstack</div>
      <p className=" text-[18px] dark:text-white/30 text-black/30 mt-4 lg:w-1/3 sm:w-1/2 text-center">
        Sharing my on-the-go app stack from working, managing, entertaining and
        more{" "}
      </p>
      <div className="sm:w-[50%] md:w-[33%] mt-8 w-full grid grid-cols-3 px-4 lg:grid-cols-5 gap-3">
        {applist.map((t, ind) => (
          <div
            key={ind}
            className="col-span-1 w-full aspect-square flex items-center justify-center"
          >
            <img src={t} className="w-[60px] h-[60px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
