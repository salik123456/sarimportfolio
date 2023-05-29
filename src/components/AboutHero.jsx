import React from "react";
import frameImg from "../images/faizan/collage.png";
import EndingLine from "./EndingLine";
const certificates = [
  { name: "Google UX Design Professional", provider: "Google" },
  { name: "User Experience Design A-Z", provider: "Udemy" },
  { name: "UI/ UX Design Specialization", provider: "Coursera" },
  {
    name: "Designing Micro interactions with Figma",
    provider: "LinkedIn Learn",
  },
  { name: "Figma for UX Design", provider: "LinkedIn Learn" },
  { name: "Adobe XD Essential Training: Design", provider: "LinkedIn Learn" },
];

const publications = [
  { name: "Laws of UX = A Myth To Land Your First Job", provider: "Medium" },
  {
    name: "How Instagram Ctrl+C The Book “Steal Like An Artist”",
    provider: "Medium",
  },
];

export default function AboutHero({ webinars }) {
  return (
    <div className="container px-8 md:px-4  text-black dark:text-white mx-auto max-w-2xl pt-36 flex  flex-col items-center justify-center">
      <h1 className="text-transparent bg-gradient-to-r from-[#DC79FF] to-[#256BFA] bg-clip-text text-[32px] font-bold">
        About
      </h1>
      <p className="md:w-[77%] mx-auto text-center text-[18px]">
        It is that easy like snapping to search for me on the internet, just
        type sarim.design. Scroll down to know more about me.{" "}
      </p>

      <EndingLine />
      <div className="relative  overflow-hidden p-4 rounded-2xl">
        <img src={frameImg} className="w-full h-full object-cover" />
      </div>
      <p className="max-w-lg my-12 font-[500]">
        I have been using my designs to add a splash of color to the internet
        for the last 3 years. I specialize in helping businesses to perfect
        their visual aesthetics, in order to make their products more attractive
        and user-friendly. Additionally, I am a part of the Figma community, in
        the capacity of an educator. I share my insights with my peers and
        design fanatics by giving out open-source design materials.
        <br />
        <br />
      </p>
      <div className="text-[14px] uppercase font-bold opacity-30 text-left max-w-lg w-full tracking-[0.2em]">
        What I do when i’m free{" "}
      </div>
      <p className="max-w-lg mt-4 mb-12">
        Working as independent contractor and freelancer to help brands with web
        and mobile design. You can find me on @fiverr or @insta. Other than
        that, I spend most of my time helping community, design resources,
        learning Product Design, experimenting in Figma, exploring the
        possibilities of web3.
        <span className="link-grad">Figma community</span> and actively helping
        people on social platforms such as Discord and LinkedIn.
      </p>
      <div className="text-[14px] uppercase font-bold opacity-30 text-left max-w-lg w-full tracking-[0.2em]">
        Certifications
      </div>
      <div className="flex flex-col items-start w-full max-w-lg pt-4 mb-12">
        {certificates.map((w, ind) => (
          <a
            key={ind}
            href={w.link}
            target="_blank"
            className="my-1 hover:underline transition-all duration-300 cursor-pointer"
          >
            {w.name}, <span className="opacity-40">{w.provider}</span>
          </a>
        ))}
      </div>

      <div className="text-[14px] uppercase font-bold opacity-30 text-left max-w-lg w-full tracking-[0.2em]">
        Serious enquiry{" "}
      </div>
      <div className="max-w-lg mt-4">
        For partnerships, collaborations, sponsorships, commissions, events, you
        can reach out to me at{" "}
        <a href="mailto:hi@sarim.me" className="link-grad">
          <strong>hi@sarim.me</strong>
        </a>{" "}
        or{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/iamfaisalmukhtar"
          className="link-grad"
        >
          <strong>linkedin</strong>.
        </a>
        <p className="mt-2 opacity-50 text-[14px]">
          PS: Just have a cup of coffee while I’m sending you the love
        </p>
      </div>
    </div>
  );
}
