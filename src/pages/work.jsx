import * as React from "react";
import SayHi from "../components/Sayhi";
import Profile from "../components/Profile";
import { StaticQuery, graphql } from "gatsby";
import WorkHero from "../components/WorkHero";
import Featuerd from "../components/Featured";
import EndingLine from "../components/EndingLine";
import Testimonials from "../components/Testimonials";

const IndexPage = ({ data }) => {
  return (
    <div className="dark:bg-[#111111] bg-white">
      <div className="relative z-10">
        <WorkHero />
        <EndingLine />
        <Featuerd showHeading={false} />
        {/* <Testimonials content={data.datoCmsAboutTitle} /> */}
        {/* <SayHi content={data.datoCmsSayhi} /> */}
        <Profile />
      </div>
    </div>
  );
};

export default IndexPage;

// export const Head = ({ data }) => {
//   return (
//     <>
//       <title>{data.datoCmsSeo.title}</title>
//       <meta property="og:title" content={data.datoCmsSeo.title} />
//       <meta property="og:image" content={data.datoCmsSeo.previewImage.url} />
//       <meta property="og:url" content={data.datoCmsSeo.url} />
//       <meta property="og:description" content={data.datoCmsSeo.description} />
//       <link rel="icon" type="image/x-icon" href={data.datoCmsSeo.favicon.url} />
//     </>
//   );
// };
// export const data = graphql`
//   query AboutQuery {
//     datoCmsFeaturedproject {
//       projectlist {
//         title
//         desc
//         photo {
//           url
//         }
//         isfeatured
//         link
//       }
//     }
//     datoCmsSeo {
//       description
//       url
//       title

//       previewImage {
//         url
//       }
//       favicon {
//         url
//       }
//     }
//     datoCmsAboutTitle {
//       testimonals {
//         photo {
//           url
//         }
//         name
//         location
//         desc
//       }
//       webinars {
//         text
//         place
//       }
//     }
//     datoCmsSayhi {
//       desc
//       linkedinlink
//       emaillink
//       bubbleimage {
//         url
//       }
//     }
//   }
// `;
