import React from "react";
import Featuerd from "./Featured";

export default function WorkHero() {
  return (
    <div className="container px-8 md:px-4  text-black dark:text-white mx-auto max-w-2xl pt-36 flex  flex-col items-center justify-center">
      <h1 className="text-transparent bg-gradient-to-r from-[#DC79FF] to-[#256BFA] bg-clip-text text-[32px] font-bold">
        Work
      </h1>
      <p className="md:w-[75%] mx-auto text-center text-[18px]">
        Over the course of the year, I spent a significant amount of time
        creating resources and tools for the community and many projects for
        brands.
      </p>
    </div>
  );
}
