import React from "react";
import { audienceCardDetails } from "../../../constants/audience";
import ServicesCard from "../../HomePage/components/ServicesCard";
import SectionHeader from "../../../components/SectionHeader";

const SectionTwo = () => {
  return (
    <section className="py-10 lg:py-20">
      <SectionHeader
        sectionName={"Our Audience"}
        title={"Rubble Group Expansive Audience"}
        firstLineDesc={
          "Trusted platform to grow your business and connect with your ideal audience."
        }
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
        {audienceCardDetails.map(function (item) {
          return (
            <ServicesCard
              image={item.audienceServicesImageUrl}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </section>
    </section>
  );
};

export default SectionTwo;
