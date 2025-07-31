import React from "react";
import SectionHeader from "../../../components/SectionHeader";
import { light300 } from "../../../constants/themes";
import { statsDesktopImageUrl, statsMobileImageUrl } from "../../../constants/images";
import StatsCard from "../../../components/StatsCard";

const SectionTwo = () => {
  return (
    <section className="flex flex-col justify-center items-center py-20 lg:h-screen">
      <SectionHeader
        sectionName={"About Rubble"}
        title={"Trusted Partner for Your Journey"}
        firstLineDesc={"We manage properties efficiently, ensuring"}
        secondLineDesc={"the best renting or selling experience."}
      />

      <section className="grid grid-cols-1 lg:grid-cols-5 gap-7 ">
        <article
          className={`lg:col-span-3 border border-[#E5E5E5] px-6 py-5 font-light rounded-xl`}
        >
          <h2 className="text-2xl lg:text-3xl">
            Partner for Every Property Need
          </h2>
          <p className={`text-[${light300}] mb-4`}>
            As a leading property platform, we provide full-service solutions to
            meet your needs. With top <br /> properties and dedicated experts,
            we ensure a seamless experience for buying, selling, or renting.
          </p>
          <img className="w-full hidden lg:block" src={statsDesktopImageUrl} alt="property image" />
          <img className="w-full lg:hidden" src={statsMobileImageUrl} alt="property image" />

        </article>

        {/* statistics  */}
        <section className="lg:col-span-2 ">
          <div className="grid grid-cols-2 font-light gap-5">
            <StatsCard count={"800+"} description={"Properties Available"} />
            <StatsCard count={"460+"} description={"Satisfied Customers"} />
            <StatsCard count={"280+"} description={"Total Partners"} />
            <StatsCard count={"120+"} description={"Awards Winning"} />
          </div>
        </section>
      </section>
    </section>
  );
};

export default SectionTwo;
