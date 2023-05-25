import * as React from "react";
import SayHi from "../components/Sayhi";
import Profile from "../components/Profile";
import AboutHero from "../components/AboutHero";
import Testimonials from "../components/Testimonials";
import { graphql } from "gatsby";
import T1 from "../images/faizan /website design 3/Group 1979.png";
import T2 from "../images/faizan /website design 3/IMG_9263.png";
const IndexPage = ({ data }) => {
  return (
    <div className="dark:bg-[#111111] bg-white">
      <div className="relative z-10">
        <AboutHero />
        <div className="container px-8 md:px-0  text-black dark:text-white mx-auto max-w-xl py-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <img src={T1} className="w-full h-full object-cover" />
          <img src={T2} className="w-full h-full object-cover" />
        </div>
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
//     datoCmsHero {
//       avatar {
//         url
//         alt
//       }
//       name
//       post
//       detail
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
//     datoCmsFeaturedproject {
//       projectlist {
//         link
//         title
//         desc
//         photo {
//           url
//         }
//       }
//     }
//     datoCmsAppstack {
//       desc
//       app {
//         url
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
//     datoCmsProfile {
//       dp {
//         url
//       }
//     }
//     datoCmsFooter {
//       twitter
//     }
//     datoCmsSayhi {
//       desc
//       linkedinlink
//       emaillink
//       bubbleimage {
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
//         link
//       }
//     }
//   }
// `;
