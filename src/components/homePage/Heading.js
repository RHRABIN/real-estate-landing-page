import React from "react";
import NavBar from "./NavBar";
import groupImage from "../../assests/images/Group 439.png";
const Heading = () => {
  return (
    <div className=" px-6 md:px-30 lg:px-40 bg-[#E6F0FF] min-h-[500px]">
      <NavBar />
      <section className="flex items-start lg:items-center flex-col lg:flex-row">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <p className="text-[#687690] text-[20px]">Welcome to Bensik Agency</p>
          <h1 className="text-[26px] lg:text-[56px] font-bold leading-[2rem] lg:leading-[4rem]">
            Discover a place <br />
            you'll love to live.
          </h1>
          <p className="my-4 lg:my-6 text=[#687690]">
            Get the best real estate deals first, before they hit the mass
            market! HOT FORECLOSURE DEALS with one simple search
          </p>
          <button className="btn bg-[#0F1B4C]">Mor About Us</button>
        </div>
        {/* //second section */}
        <div
          className="mr-[-100px] "
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <img
            className="w-[200px] lg:w-[480px] mt-4 lg:mt-2"
            src={groupImage}
            alt="groupImage"
          />
        </div>
      </section>
    </div>
  );
};

export default Heading;
