import React, { useRef } from "react";
import SectionHeader from "../../../components/SectionHeader";
import {
  statsDesktopImageUrl,
  statsMobileImageUrl,
} from "../../../constants/images";
import StatsCard from "../components/StatsCard";
import useScrollAnimation from "../../../hooks/useScrollAnimation";



const SectionTwo = () => {

  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="flex bg-white flex-col justify-center items-center py-10 lg:py-20">
      <SectionHeader
        sectionName={"About Rubble"}
        title={"Trusted Partner for Your Journey"}
        firstLineDesc={"We manage properties efficiently, ensuring"}
        secondLineDesc={"the best renting or selling experience."}
      />

      <section className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
        <article className="border-color-gray lg:col-span-3 px-6 py-5">
          <h3 className="card-header-text">Partner for Every Property Need</h3>
          <p className="paragraph-text mt-2 mb-2">
            As a leading property platform, we provide full-service solutions to
            meet your needs. With top properties and dedicated experts,
            we ensure a seamless experience for buying, selling, or renting.
          </p>
          <img
            className="w-full lg:h-[388px] hidden lg:block"
            src={statsDesktopImageUrl}
            alt="picture of a property for presentation purposes"
          />
          <img
            className="w-full lg:hidden"
            src={statsMobileImageUrl}
            alt="picture of a property for presentation purposes"
          />
        </article>

        {/* statistics  */}
        <section className="lg:col-span-2 lg:flex flex-col lg:items-center lg:gap-5">
          <section className="grid grid-cols-2 gap-5 w-full">
            <StatsCard count={"800+"} description={"Properties Available"} />
            <StatsCard count={"460+"} description={"Satisfied Customers"} />
            <StatsCard count={"280+"} description={"Total Partners"} />
            <StatsCard count={"120+"} description={"Awards Winning"} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default SectionTwo;
