import React from "react";
import BussinessSumery from "./BussinessSumery";
import Featured from "./Featured";
import FetaureProperty from "./FetaureProperty";
import Footer from "./Footer";
import Guidlines from "./Guidlines";
import Heading from "./Heading";
import LogoSection from "./LogoSection";

const Home = () => {
  return (
    <div>
      <Heading />
      <LogoSection />
      <Guidlines />
      <Featured />
      <BussinessSumery />
      <FetaureProperty />
      <Footer />
    </div>
  );
};

export default Home;
