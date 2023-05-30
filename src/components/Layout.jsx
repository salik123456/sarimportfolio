import React from "react";

import Nav from "./Nav";
import HeaderGradient from "./HeaderGradient";

export default function Layout({ children }) {
  return (
    <div className="">
      <Nav />
      <div className="absolute top-0">
        <HeaderGradient />
      </div>
      <main>{children}</main>
      {/* <Footer /> */}
      <div className=" relative z-[100] b">
        <svg
          width="1440"
          className="absolute -bottom-2 right-[10rem] -left-[40rem] sm:right-0 sm:left-0 sm:w-screen "
          height="659"
          viewBox="0 0 1440 659"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_497)">
            <g opacity="0.3" filter="url(#filter0_f_1_497)">
              <path
                d="M787.262 525.419C730.311 533.012 710.377 480.986 634.5 501C538.744 526.256 246.058 336.74 264 450C288 601.5 628.254 829.651 757.077 812.477C885.9 795.303 956.101 765.925 980.058 733.781C1032.26 663.743 916.085 508.245 787.262 525.419Z"
                fill="url(#paint0_linear_1_497)"
              />
              <path
                d="M765.893 526.743C629.959 549.489 465 608 616.535 678.864C634.829 703.795 813.783 735.971 949.717 713.224C1085.65 690.478 1195.42 428.392 1159 343.5C1122.58 258.608 901.826 503.996 765.893 526.743Z"
                fill="url(#paint1_linear_1_497)"
              />
            </g>
          </g>
          <defs>
            <filter id="filter0_f_1_497" x="-36.79" y="25.7175" width="1502.85" height="1087.68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1_497" />
            </filter>
            <linearGradient id="paint0_linear_1_497" x1="310.643" y1="559.476" x2="595.589" y2="760.66" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7EB3F1" />
              <stop offset="1" stop-color="#5790F6" />
            </linearGradient>
            <linearGradient id="paint1_linear_1_497" x1="957.301" y1="369.185" x2="747.099" y2="589.116" gradientUnits="userSpaceOnUse">
              <stop stop-color="#907CEE" />
              <stop offset="1" stop-color="#936FEE" />
            </linearGradient>
            <clipPath id="clip0_1_497">
              <rect width="1440" height="659" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>{" "}
    </div>
  );
}
