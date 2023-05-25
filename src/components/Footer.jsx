import React from "react";

export default function Footer() {
  return (
    <div className="relative">
      <div className="relative border border-white h-[40rem] overflow-hidden">
        <svg
          width="1440"
          height="634"
          className="absolute right-0 left-0 bottom-0"
          // className="absolute bottom-0 w-40 lg:w-full"
          viewBox="0 0 1440 634"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_20_100)">
            <path
              d="M787.248 500.097C730.297 507.69 710.362 455.664 634.485 475.678C538.73 500.935 246.043 311.418 263.985 424.678C287.985 576.178 628.24 804.33 757.062 787.155C885.885 769.981 956.087 740.603 980.044 708.459C1032.24 638.422 916.07 482.923 787.248 500.097Z"
              fill="url(#paint0_linear_20_100)"
            />
            <path
              d="M765.878 501.421C629.944 524.168 464.985 582.678 616.521 653.542C634.814 678.473 813.768 710.649 949.702 687.903C1085.64 665.156 1195.41 403.071 1158.99 318.179C1122.56 233.287 901.812 478.674 765.878 501.421Z"
              fill="url(#paint1_linear_20_100)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_20_100"
              x="-36.8046"
              y="0.395752"
              width="1502.85"
              height="1087.68"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_20_100"
              />
            </filter>
            <linearGradient
              id="paint0_linear_20_100"
              x1="310.628"
              y1="534.154"
              x2="595.575"
              y2="735.338"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5FECFF" />
              <stop offset="1" stop-color="#0085FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_20_100"
              x1="957.286"
              y1="343.863"
              x2="747.084"
              y2="563.794"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFB951" />
              <stop offset="1" stop-color="#F90068" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
