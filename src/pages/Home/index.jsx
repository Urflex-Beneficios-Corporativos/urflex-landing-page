import React from "react";
import Header from "../../components/Header";
import Presentation from "../../components/Presentation";
import Benefits from "../../components/Benefits";
import FirstSession from "../../components/FirstSession";
import SecondSession from "../../components/SecondSession";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Benefits />
      <FirstSession />
      <SecondSession />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
