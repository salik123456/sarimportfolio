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
      <title>Sarim Khan ✦ Senior UX Designer</title>
      <meta property="og:title" content="Faizan Sayani ✦ Senior UX Designer" />
      {/* <meta property="og:image" content={data.datoCmsSeo.previewImage.url} /> */}
      {/* <meta property="og:url" content={data.datoCmsSeo.url} /> */}
      {/* <meta property="og:description" content={data.datoCmsSeo.description} /> */}
      <link rel="icon" type="image/x-icon" href="../images/faizan /Avatar/Hexagon.png" />
    </>
  );
};
