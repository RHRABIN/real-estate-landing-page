import React from "react";
import star from "../../assests/images/Star.png";
import logo1 from "../../assests/images/logo.png";
import logo2 from "../../assests/images/logo (1).png";
import logo3 from "../../assests/images/logo (2).png";
import amazon from "../../assests/images/Union.png";
import logo4 from "../../assests/images/logo (3).png";
const LogoSection = () => {
  return (
    <div className="px-6 md:px-30 lg:px-40 mt-12">
      <section className=" flex justify-between">
        <div>
          <h1 className="font-bold text-[26px]">Bensik.</h1>
          <h4 className="font">More than 45,000+ companies trust besnik</h4>
        </div>
        <div>
          <div className="flex gap-2 mb-2 ">
            <img className="" src={star} alt="" />
            <img className="" src={star} alt="" />
            <img className="" src={star} alt="" />
            <img className="" src={star} alt="" />
            <img className="" src={star} alt="" />
          </div>
          <p>5 Star Ratings (2k+ Review)</p>
        </div>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-14 my-14">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={amazon} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
      </div>
    </div>
  );
};

export default LogoSection;
