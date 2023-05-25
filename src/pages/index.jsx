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
          <ImageMarquee />
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

//     datoCmsAppstack {
//       desc
//       app {
//         url
//       }
//     }

//     datoCmsReel {
//       images {
//         bwimage {
//           url
//         }
//         colored {
//           url
//         }
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
