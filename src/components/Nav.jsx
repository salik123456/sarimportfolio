import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./themeToggle";
import { gsap } from "gsap";
import { Link, navigate } from "gatsby";
import faizlogo from "../images/faizan /faizan logo.png";
export default function Nav() {
  const [expanded, setExpanded] = useState(false);
  const manageNav = () => {
    expanded ? collapseNav() : expandNav();
  };
  const expandNav = () => {
    const tl = gsap.timeline();
    tl.to("#navfull", {
      transform: "translateY(0rem)",
    });
    tl.to("#innernav", {
      opacity: 1,
    }).to(".li", {
      stagger: 0.1,
      opacity: 1,
    });
  };

  const collapseNav = (route) => {
    const tl = gsap.timeline();
    tl.to(".li", {
      opacity: 0,
    }).to("#navfull", {
      transform: "translateY(-20rem)",
    });
    navigate(route);
  };

  useEffect(() => {}, []);
  return (
    <header className="absolute px-4 z-20 top-0 left-0 right-0">
      <div
        id="navfull"
        className="absolute px-4 translate-y-[-20rem] top-0 left-0 right-0 h-[20rem] bg-white dark:bg-black"
      >
        <div className="pt-24 pr-2">
          <div className="flex flex-col items-start  justify-start text-2xl dark:text-white text-black text-[16px] font-medium">
            <div
              onClick={() => collapseNav("/about")}
              className="my-2 py-2 mx-4 opacity-0 li"
            >
              about
            </div>
            <div
              onClick={() => collapseNav("/work")}
              className="my-2 py-2 mx-4 opacity-0 li"
            >
              work
            </div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1G_uPzUiGnj2WdJLdx4yEnvEKUD53X9FS/view"
              className="mx-4 py-2 my-2 opacity-0 li"
            >
              resume
            </a>
          </div>
        </div>
      </div>
      <nav className="container  relative z-50 rounded-xl max-w-2xl dark:bg-black/20 bg-white/40 p-4  mx-auto mt-6 flex items-center justify-between">
        <div className="flex  items-center justify-center">
          <Link to="/">
            <Logo />
          </Link>
          <div className="md:flex hidden items-center  justify-center ml-8 dark:text-white text-black text-[16px] font-medium">
            <Link to="/about" className="mx-4">
              about
            </Link>
            <Link to="/work" className="mx-4">
              work
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1G_uPzUiGnj2WdJLdx4yEnvEKUD53X9FS/view"
              className="mx-4"
            >
              resume
            </a>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/iamfaisalmukhtar"
            className="mx-2 sm:mx-3"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.07396 0.178223C2.36817 0.178223 0.985352 1.56792 0.985352 3.2822C0.985352 4.99648 2.36817 6.38618 4.07396 6.38618C5.77975 6.38618 7.16257 4.99648 7.16257 3.2822C7.16257 1.56792 5.77975 0.178223 4.07396 0.178223ZM2.70687 3.2822C2.70687 2.52342 3.31894 1.90831 4.07396 1.90831C4.82898 1.90831 5.44105 2.52342 5.44105 3.2822C5.44105 4.04098 4.82898 4.6561 4.07396 4.6561C3.31894 4.6561 2.70687 4.04098 2.70687 3.2822Z"
                className="dark:fill-[#ECEDEE] fill-black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.441 6.89503C15.4401 6.89503 13.5212 7.69384 12.1064 9.11572C10.6916 10.5376 9.89673 12.466 9.89673 14.4769V22.3132C9.89673 22.7909 10.2821 23.1782 10.7575 23.1782H15.2131C15.6885 23.1782 16.0739 22.7909 16.0739 22.3132V14.4769C16.0739 14.1125 16.2179 13.763 16.4743 13.5054C16.7307 13.2477 17.0784 13.103 17.441 13.103C17.8036 13.103 18.1513 13.2477 18.4077 13.5054C18.6641 13.763 18.8081 14.1125 18.8081 14.4769V22.3132C18.8081 22.7909 19.1935 23.1782 19.6688 23.1782H24.1245C24.5999 23.1782 24.9853 22.7909 24.9853 22.3132V14.4769C24.9853 12.466 24.1905 10.5376 22.7756 9.11572C21.3608 7.69384 19.4419 6.89503 17.441 6.89503ZM17.441 8.62512C15.8967 8.62512 14.4157 9.24165 13.3237 10.339C12.2317 11.4365 11.6182 12.9249 11.6182 14.4769V21.4481H14.3524V14.4769C14.3524 13.6536 14.6778 12.8641 15.257 12.282C15.8362 11.6999 16.6218 11.3729 17.441 11.3729C18.2601 11.3729 19.0457 11.6999 19.625 12.282C20.2042 12.8641 20.5296 13.6536 20.5296 14.4769V21.4481H23.2638V14.4769C23.2638 12.9249 22.6503 11.4365 21.5583 10.339C20.4663 9.24165 18.9853 8.62512 17.441 8.62512Z"
                className="dark:fill-[#ECEDEE] fill-black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.985352 8.87955C0.985352 8.4018 1.37073 8.0145 1.84611 8.0145H6.30181C6.77719 8.0145 7.16257 8.4018 7.16257 8.87955V22.3132C7.16257 22.7909 6.77719 23.1782 6.30181 23.1782H1.84611C1.37073 23.1782 0.985352 22.7909 0.985352 22.3132V8.87955ZM2.70687 9.74462V21.4481H5.44105V9.74462H2.70687Z"
                className="dark:fill-[#ECEDEE] fill-black"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/beyond_uiux"
            className="mx-2 sm:mx-3"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_504)">
                <path
                  d="M8.896 0.678223C11.072 0.678223 11.344 0.678223 12.192 0.726223C13.04 0.758223 13.632 0.902223 14.144 1.09422C14.656 1.30222 15.104 1.57422 15.552 2.02222C16 2.45422 16.272 2.90222 16.48 3.43022C16.672 3.94222 16.816 4.51822 16.848 5.38222C16.88 6.23022 16.896 6.50222 16.896 8.67822C16.896 10.8542 16.88 11.1262 16.848 11.9742C16.816 12.8222 16.672 13.3982 16.48 13.9102C16.272 14.4382 16 14.8862 15.552 15.3342C15.104 15.7822 14.656 16.0542 14.144 16.2622C13.632 16.4542 13.04 16.5822 12.192 16.6302C11.344 16.6622 11.072 16.6782 8.896 16.6782C6.72 16.6782 6.448 16.6622 5.6 16.6302C4.752 16.5822 4.16 16.4542 3.664 16.2622C3.136 16.0542 2.688 15.7822 2.24 15.3342C1.792 14.8862 1.52 14.4382 1.312 13.9102C1.12 13.3982 0.991996 12.8222 0.943996 11.9742C0.911996 11.1262 0.895996 10.8542 0.895996 8.67822C0.895996 6.50222 0.911996 6.23022 0.943996 5.38222C0.975996 4.51822 1.12 3.94222 1.312 3.43022C1.52 2.90222 1.792 2.45422 2.24 2.02222C2.688 1.57422 3.136 1.30222 3.664 1.09422C4.16 0.902223 4.752 0.758223 5.6 0.726223C6.448 0.678223 6.72 0.678223 8.896 0.678223ZM8.176 2.11822C6.688 2.11822 6.4 2.11822 5.664 2.16622C4.88 2.19822 4.464 2.32622 4.176 2.43822C3.808 2.58222 3.536 2.75822 3.264 3.03022C2.992 3.30222 2.8 3.57422 2.656 3.95822C2.544 4.23022 2.416 4.66222 2.384 5.44622C2.352 6.27822 2.336 6.53422 2.336 8.67822C2.336 10.8062 2.352 11.0622 2.384 11.9102C2.416 12.6782 2.544 13.1102 2.656 13.3822C2.8 13.7662 2.976 14.0222 3.264 14.3102C3.552 14.5982 3.808 14.7582 4.176 14.9022C4.464 15.0142 4.88 15.1422 5.664 15.1902C6.512 15.2222 6.768 15.2382 8.896 15.2382C11.04 15.2382 11.28 15.2222 12.128 15.1902C12.912 15.1422 13.328 15.0142 13.616 14.9022C13.984 14.7582 14.256 14.5822 14.528 14.3102C14.816 14.0382 14.992 13.7662 15.136 13.3822C15.248 13.1102 15.376 12.6782 15.408 11.9102C15.44 11.0622 15.456 10.8062 15.456 8.67822C15.456 6.53422 15.44 6.27822 15.408 5.44622C15.376 4.66222 15.248 4.23022 15.136 3.95822C14.992 3.59022 14.816 3.31822 14.528 3.03022C14.256 2.75822 13.984 2.58222 13.616 2.43822C13.328 2.32622 12.912 2.19822 12.128 2.16622C11.28 2.11822 11.04 2.11822 8.896 2.11822C8.624 2.11822 8.4 2.11822 8.176 2.11822ZM13.168 3.44622C13.696 3.44622 14.128 3.87822 14.128 4.40622C14.128 4.93422 13.696 5.36622 13.168 5.36622C12.64 5.36622 12.208 4.93422 12.208 4.40622C12.208 3.87822 12.64 3.44622 13.168 3.44622ZM8.896 4.56622C11.168 4.56622 13.008 6.40622 13.008 8.67822C13.008 10.9502 11.168 12.7902 8.896 12.7902C6.624 12.7902 4.784 10.9502 4.784 8.67822C4.784 6.40622 6.624 4.56622 8.896 4.56622ZM8.896 6.00622C7.424 6.00622 6.224 7.20622 6.224 8.67822C6.224 10.1502 7.424 11.3342 8.896 11.3342C10.368 11.3342 11.568 10.1502 11.568 8.67822C11.568 7.20622 10.368 6.00622 8.896 6.00622Z"
                  className="dark:fill-white fill-black"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_504">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.895996 0.678223)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.dribbble.com/ThisisFaisal"
            className="mx-2 sm:mx-3"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1608 4.00376C11.3784 5.53217 12.4698 7.16581 13.419 8.88887C15.1358 8.24754 16.7528 7.40165 18.2405 6.38083C16.7334 4.76136 14.5849 3.75 12.2 3.75C11.4955 3.75 10.8124 3.83812 10.1608 4.00376ZM19.1602 7.56873C17.6038 8.64497 15.9133 9.54135 14.119 10.2278C14.4045 10.8042 14.6745 11.3896 14.9283 11.9836C15.5901 11.886 16.2671 11.8354 16.956 11.8354C18.1608 11.8354 19.3302 11.9902 20.4453 12.2813C20.4484 12.188 20.45 12.0942 20.45 12C20.45 10.3683 19.9769 8.84858 19.1602 7.56873ZM20.2567 13.784C19.2072 13.4918 18.1004 13.3354 16.956 13.3354C16.4649 13.3354 15.9806 13.3642 15.5045 13.4203C16.1424 15.1202 16.6507 16.8834 17.0175 18.6981C18.6357 17.5321 19.8135 15.795 20.2567 13.784ZM15.645 19.4987C15.2721 17.4943 14.7191 15.5532 14.0034 13.6928C11.1486 14.3976 8.687 16.1016 7.01086 18.4141C8.42859 19.5627 10.2334 20.25 12.2 20.25C13.4309 20.25 14.5973 19.9809 15.645 19.4987ZM5.92616 17.3577C7.75873 14.9121 10.3869 13.0952 13.4272 12.2916C13.1947 11.7614 12.9488 11.2384 12.6898 10.723C10.443 11.4221 8.05425 11.7988 5.578 11.7988C5.03225 11.7988 4.49066 11.7805 3.95383 11.7445C3.95125 11.8293 3.94995 11.9145 3.94995 12C3.94995 14.0452 4.6934 15.9158 5.92616 17.3577ZM4.13513 10.2531C4.6121 10.2834 5.0932 10.2988 5.578 10.2988C7.80005 10.2988 9.94618 9.97553 11.9722 9.37347C11.0118 7.66386 9.90443 6.04778 8.66709 4.54237C6.38528 5.62535 4.68014 7.72469 4.13513 10.2531ZM8.60621 2.93389C9.71928 2.49233 10.9322 2.25 12.2 2.25C15.3506 2.25 18.1523 3.74521 19.9335 6.06165C21.1978 7.70598 21.95 9.76622 21.95 12C21.95 12.4635 21.9176 12.9198 21.8548 13.3668C21.4164 16.49 19.5 19.1359 16.8384 20.5779C15.4583 21.3257 13.8775 21.75 12.2 21.75C9.60582 21.75 7.24693 20.7359 5.50071 19.084C3.623 17.3077 2.44995 14.7902 2.44995 12C2.44995 11.61 2.47288 11.2251 2.51753 10.8466C2.94369 7.23368 5.34301 4.22841 8.60621 2.93389Z"
                className="dark:fill-[#ECEDEE] fill-black"
              />
            </svg>
          </a>
          <div className="border-l dark:border-l-white/20 border-l-black/20 h-[20px] mx-1"></div>
          <ThemeToggle />
          <button
            onClick={() => {
              manageNav();
              setExpanded(!expanded);
            }}
            className="py-1 sm:hidden  ml-2"
          >
            {expanded && (
              <div className="flex relative flex-col h-8 w-8 items-center justify-evenly">
                <div className="w-5 absolute rotate-45 h-[2px] bg-black dark:bg-white"></div>
                <div className="w-5 absolute -rotate-45 h-[2px] bg-black dark:bg-white"></div>
              </div>
            )}
            {!expanded && (
              <div className="flex flex-col h-8 w-8 items-center justify-evenly">
                <div className="w-5 h-[2px] bg-black dark:bg-white"></div>
                <div className="w-5 h-[2px] bg-black dark:bg-white"></div>
                <div className="w-5 h-[2px] bg-black dark:bg-white"></div>
              </div>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
