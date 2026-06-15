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
      <title>Sarim Khan ✦ Senior Product Designer</title>
      <meta property="og:title" content="Sarim Khan ✦ Senior Product Designer" />
      <meta property="og:image" content="../images/faizan/ogimage.png" />
      {/* <meta property="og:url" content={data.datoCmsSeo.url} /> */}
      <meta property="og:description" content="Senior Product Designer with 6 years of experience in fintech, SaaS, and Web3. Based in UAE." />
      <link rel="icon" type="image/x-icon" href="../images/faizan /Avatar/Hexagon.png" />
    </>
  );
};
