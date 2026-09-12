import * as React from "react";
import Hero from "../components/Hero";
import ImageMarquee from "../components/ImageMarquee";
import Featuerd from "../components/Featured";
import AppStack from "../components/AppStack";
import SayHi from "../components/Sayhi";
import Profile from "../components/Profile";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <div className="dark:bg-[#111] bg-white  overflow-hidden">
      <div className="relative z-10">
        <Hero />
        <div className="container mx-auto max-w-2xl relative overflow-hidden">
          <div className="hidden dark:block">
            <ImageMarquee theme={"Dark"} />
          </div>
          <div className="dark:hidden ">
            <ImageMarquee theme={"Light"} />
          </div>
        </div>
        <Featuerd />
        <AppStack />
        <SayHi />
        <Profile />
      </div>
    </div>
  );
};

export default IndexPage;
export const Head = () => {
  return (
    <>
      <title>Sarim Khan ✦ Senior UX/ Product Designer</title>
      <meta property="og:title" content="Sarim Khan ✦ Senior UX/ Product Designer" />
      <meta property="og:image" content="../images/faizan/ogimage.png" />
      {/* <meta property="og:url" content={data.datoCmsSeo.url} /> */}
      <meta property="og:description" content="Senior UX/ Product Designer with 7 years of experience across fintech, SaaS, and Web3. Currently at Finstreet in Abu Dhabi, where I lead design across multiple financial products and own the design system end to end. I design for clarity, for compliance, and for real users making real decisions." />
      <link rel="icon" type="image/x-icon" href="../images/faizan /Avatar/Hexagon.png" />
    </>
  );
};
