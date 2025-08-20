import React from "react";

const SectionOne = ({ onGetStarted }) => {
  return (
    <section
      className="hero h-screen flex flex-col pb-10 "
      style={{ height: "calc(100vh - 90px)" }}
    >
      <article className="text-white text-center pt-28 relative z-10">
        <h1 className="text-5xl lg:text-7xl font-[400]">
          Discover Your <br className="lg:hidden" /> Dream Home
          <br className="hidden lg:block" /> Right <br className="lg:hidden" />
          at Your Fingertips
        </h1>

        <p className="pt-5 pb-10 text-white text-lg lg:text-xl font-light">
          With customized searches, we help you find properties{" "}
          <br className="lg:hidden" /> that match your desired{" "}
          <br className="hidden lg:block" />
          location, price and type. <br className="lg:hidden" /> Start the
          journey to your ideal property!
        </p>
      </article>
      <div className="flex items-center justify-center space-x-4 relative z-10">
        <button
          className="border lg:border-none border-gray-200 bg-[#292929] text-white py-2 lg:py-3 px-6 rounded-md"
          onClick={onGetStarted}
        >
          Get Started
        </button>
        <button className="py-2 lg:py-3 px-6 rounded-md bg-white text-[#292929]">
          Watch Demo
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
