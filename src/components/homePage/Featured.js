import React from "react";
import { BsArrowRight } from "react-icons/bs";
import image1 from "../../assests/images/image.png";
import image2 from "../../assests/images/image (1).png";
import image3 from "../../assests/images/image (2).png";
import bed1 from "../../assests/images/bed.png";
import bed2 from "../../assests/images/bed2.png";
import bed3 from "../../assests/images/square.png";
const Featured = () => {
  return (
    <div className="px-6 py-12 md:px-30 lg:px-40 min-h-[585px] bg-[#F5FAFE]">
      <h1 className="text-2xl text-[#000339] font-bold">Featured Properties</h1>
      <div className="flex justify-between">
        <p className="text-[#5A6473]">
          Everything you need to know when you're looking
        </p>
        <h2 className="flex gap-2 justify-center items-center text-[#0689FF] hover:cursor-pointer text-sm">
          View all properties <BsArrowRight />
        </h2>
      </div>
      {/* card parent */}
      <div className="my-12 flex flex-col lg:flex-row gap-8">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          class="card card-compact max-w-[350px] max-h-[357px] bg-base-100 shadow-xl"
        >
          <figure>
            <img src={image1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title font-bold text-[#000339]">$3500</h2>
            <p className="text-[#A3A6AB] text-[15.5px]">
              8502 Preston Rd. Inglewood, Maine 98280
            </p>
            <div class="flex gap-2 justify-between mt-2">
              <div className="flex gap-2">
                <img src={bed1} alt="" />
                <p className="font-semibold">5 Beds</p>
              </div>
              <div className="flex gap-2">
                <img src={bed2} alt="" />
                <p className="font-semibold">2 Both</p>
              </div>
              <div className="flex gap-2">
                <img src={bed3} alt="" />
                <p className="font-semibold">2000 Sqft</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-shine"
          class="card card-compact max-w-[350px] max-h-[357px] bg-base-100 shadow-xl"
        >
          <figure>
            <img src={image2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title font-bold text-[#000339]">$3500</h2>
            <p className="text-[#A3A6AB] text-[15.5px]">
              8502 Preston Rd. Inglewood, Maine 98280
            </p>
            <div class="flex gap-2 justify-between mt-2">
              <div className="flex gap-2">
                <img src={bed1} alt="" />
                <p className="font-semibold">5 Beds</p>
              </div>
              <div className="flex gap-2">
                <img src={bed2} alt="" />
                <p className="font-semibold">2 Both</p>
              </div>
              <div className="flex gap-2">
                <img src={bed3} alt="" />
                <p className="font-semibold">2000 Sqft</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-shine"
          class="card card-compact max-w-[350px] max-h-[357px] bg-base-100 shadow-xl"
        >
          <figure>
            <img src={image3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title font-bold text-[#000339]">$3500</h2>
            <p className="text-[#A3A6AB] text-[15.5px]">
              8502 Preston Rd. Inglewood, Maine 98280
            </p>
            <div class="flex gap-2 justify-between mt-2">
              <div className="flex gap-2">
                <img src={bed1} alt="" />
                <p className="font-semibold">5 Beds</p>
              </div>
              <div className="flex gap-2">
                <img src={bed2} alt="" />
                <p className="font-semibold">2 Both</p>
              </div>
              <div className="flex gap-2">
                <img src={bed3} alt="" />
                <p className="font-semibold">2000 Sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
