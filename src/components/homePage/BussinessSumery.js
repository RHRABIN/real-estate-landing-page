import React from "react";
import home from "../../assests/images/home.png";
import users from "../../assests/images/users.png";
const BussinessSumery = () => {
  return (
    <div className="px-6 py-6 lg:py-10 md:px-30 lg:px-40 max-h-[685px] ">
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="relative"
        >
          <div class="card w-[229px]   bg-base-100 shadow-xl absolute z-10">
            <div class="card-body">
              <h2 class="card-title font-bold text-[#000339]">4000+</h2>
              <p>By avarage for 2 bedroom apments in San Francisco, CA</p>
              <div>
                <img src={users} alt="" />
              </div>
            </div>
          </div>
          <img className="ml-20 mt-24 lg:mt-0" src={home} alt="" />
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="w-[326px] mt-6 lg:mt-24 ml-0 lg:ml-[30px]"
        >
          <h1 className="font-bold text-3xl text-[#000339]">
            You’ve found a
            <br />
            neighborhood
            <br />
            you love.
          </h1>
          <p className="mt-6">
            When you own a home, you’re committing to living in one location for
            a while. In a recent Trulia survey, we found that five out of six
            respondents said finding the right neighborhood{" "}
          </p>
        </div>
      </section>
      <section className="flex justify-between gap-4  flex-row px-2  lg:px-44 mt-8 lg:mt-[-50px] mb-10">
        <div>
          <h1 className="font-bold text-4xl text-[#000339]">2,500</h1>
          <p className="text-xs text-[#7B8087] mt-2">Homes For Safe</p>
        </div>
        <div>
          <h1 className="font-bold text-4xl text-[#000339]">5,000+</h1>
          <p className="text-xs text-[#7B8087] mt-2">Homes Recently Sold</p>
        </div>
        <div>
          <h1 className="font-bold text-4xl text-[#000339]">100+</h1>
          <p className="text-xs text-[#7B8087] mt-2">Price Reduced</p>
        </div>
      </section>
    </div>
  );
};

export default BussinessSumery;
