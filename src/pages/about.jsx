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
      <title>Sarim Khan ✦ Senior UX Designer</title>
      <meta property="og:title" content="Faizan Sayani ✦ Senior UX Designer" />
      {/* <meta property="og:image" content={data.datoCmsSeo.previewImage.url} /> */}
      {/* <meta property="og:url" content={data.datoCmsSeo.url} /> */}
      {/* <meta property="og:description" content={data.datoCmsSeo.description} /> */}
      <link rel="icon" type="image/x-icon" href="../images/faizan /Avatar/Hexagon.png" />
    </>
  );
};
