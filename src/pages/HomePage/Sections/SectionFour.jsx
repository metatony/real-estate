import React, { useRef } from "react";
import SectionHeader from "../../../components/SectionHeader";
import PropertyCard from "../../../components/PropertyCard";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

const SectionFour = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="flex flex-col bg-white justify-center items-center py-10 lg:py-20">
      <SectionHeader
        sectionName={"Popular Property"}
        title={"Explore Diverse Property Listings"}
        firstLineDesc={
          "Discover properties for every need, from cozy homes to luxury estates."
        }
      />

      <PropertyCard />
    </section>
  );
};

export default SectionFour;
