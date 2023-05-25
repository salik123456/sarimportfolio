import React from "react";

import Nav from "./Nav";
import HeaderGradient from "./HeaderGradient";

export default function Layout({ children }) {
  return (
    <div className="">
      <Nav />
      <div className="absolute top-0">
        <HeaderGradient />
      </div>
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
