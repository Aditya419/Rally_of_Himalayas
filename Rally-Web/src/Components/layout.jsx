import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      {/* <footer/> */}
    </>
  );
}

export default Layout;
