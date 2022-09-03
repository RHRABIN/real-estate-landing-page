import React from "react";
import phone from "../../assests/images/phone.png";
const FetaureProperty = () => {
  return (
    <div className="px-6 md:mx-32 mt-60 lg:mt-0 lg:px-40 min-h-[685px] md:min-h-[485px] lg:min-h-[285px]  relative  bg-[#063183] mb-12 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <div>
          <h1 className="font-bold text-[35px] text-white">
            Featured Properties
          </h1>
          <p className="text-white mt-2">
            Everything you need to know when you're looking
          </p>
          <button className="btn bg-white text-black hover:text-white mt-4">
            Getting Started Now
          </button>
        </div>
      </div>
      <div className="">
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="absolute mt-[-80px]"
          width={450}
          src={phone}
          alt=""
        />
      </div>
    </div>
  );
};

export default FetaureProperty;
