import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Card from "../Components/Hero2/Card";
import Winners from "../Components/Winners/Winners";

const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Winners />
    </>
  );
};

export default Home;
