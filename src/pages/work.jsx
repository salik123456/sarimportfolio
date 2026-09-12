import * as React from "react";
import SayHi from "../components/Sayhi";
import Profile from "../components/Profile";
import { StaticQuery, graphql } from "gatsby";
import WorkHero from "../components/WorkHero";
import Featuerd from "../components/Featured";
import EndingLine from "../components/EndingLine";
import FigCommunity from "../components/FigCommunity";

const IndexPage = ({ data }) => {
  return (
    <div className="dark:bg-[#111111] bg-white">
      <div className="relative z-10">
        <WorkHero />
        <EndingLine />
        <Featuerd showHeading={false} />
        <FigCommunity />
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
