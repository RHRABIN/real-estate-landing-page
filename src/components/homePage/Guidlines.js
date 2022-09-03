import React from "react";
import icon1 from "../../assests/images/icon.png";
import icon2 from "../../assests/images/icon (1).png";
import icon3 from "../../assests/images/icon (2).png";
import { BsArrowRight } from "react-icons/bs";
const Guidlines = () => {
  return (
    <div className="px-6 md:px-30 lg:px-40 min-h-[285px] flex justify-center items-center my-28">
      <section>
        <h3 className="font-bold text-[35px] text-[#000339] text-center">
          How it works
        </h3>
        <p className="text-center text-[#5A6473]">
          Everything you need to know when you're looking to buy,
          <br /> rent, or sell - all in one place.
        </p>
        <div className="my-14 flex flex-col lg:flex-row gap-6 justify-center items-center">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1500"
            className="w-[200px] "
          >
            <img src={icon1} className="block w-[50] ml-auto mr-auto" alt="" />
            <h1 className="text-center text-xl">Buyer Guides</h1>
            <h1 className="flex gap-2 justify-center items-center text-[#0689FF] hover:cursor-pointer text-sm">
              How to Bye <BsArrowRight />
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="w-[200px] "
          >
            <img src={icon2} className="block w-[50] ml-auto mr-auto" alt="" />
            <h1 className="text-center text-xl">How to rent</h1>
            <h1 className="flex gap-2 justify-center items-center text-[#0689FF] hover:cursor-pointer text-sm">
              How to Bye <BsArrowRight />
            </h1>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-duration="1500"
            className="w-[200px] "
          >
            <img src={icon3} className="block w-[50] ml-auto mr-auto" alt="" />
            <h1 className="text-center text-xl">How to sell</h1>
            <h1 className="flex gap-2 justify-center items-center text-[#0689FF] hover:cursor-pointer text-sm">
              How to Bye <BsArrowRight />
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn bg-[#0F1B4C]">See full Guidelines</button>
        </div>
      </section>
    </div>
  );
};

export default Guidlines;
