import React from "react";
import { dark500 } from "../../../constants/themes";

const SectionOne = ({ onGetStarted }) => {
  return (
    <section
      className="hero h-screen flex flex-col pb-10 "
      style={{ height: "calc(100vh - 90px)" }}
    >
      <div className=" text-white text-center pt-28">
        <h1 className="text-5xl lg:text-7xl">
          Discover Your <br className="lg:hidden" /> Dream Home{" "}
          <br className="hidden lg:block" /> Right <br className="lg:hidden" />{" "}
          at Your Fingertips
        </h1>

        <p className="pt-5 pb-10 font-light text-base lg:text-lg">
          With customized searches, we help you find properties{" "}
          <br className="lg:hidden" /> that match your desired{" "}
          <br className="hidden lg:block" />
          location, price and type. <br className="lg:hidden" /> Start the
          journey to your ideal property!
        </p>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <button
          className={`border lg:border-none border-gray-200 bg-[${dark500}] text-white py-2 lg:py-3 px-6 rounded-md`}
          onClick={onGetStarted}
        >
          Get Started
        </button>
        <button
          className={`py-2 lg:py-3 px-6 rounded-md bg-white text-[${dark500}] `}
        >
          Watch Demo
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
