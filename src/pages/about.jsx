import * as React from "react";
import SayHi from "../components/Sayhi";
import Profile from "../components/Profile";
import AboutHero from "../components/AboutHero";
import Testimonials from "../components/Testimonials";
import { graphql } from "gatsby";
import T1 from "../images/faizan/website design 3/Group 1979.png";
import T2 from "../images/faizan/website design 3/IMG_9263.png";
const IndexPage = ({ data }) => {
  return (
    <div className="dark:bg-[#111111] bg-white">
      <div className="relative z-10">
        <AboutHero />
        <Testimonials />

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
