import React from "react";
import SectionHeader from "../../../components/SectionHeader";
import PropertyCard from "../../../components/PropertyCard";

const SectionFour = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10 lg:py-20">
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
