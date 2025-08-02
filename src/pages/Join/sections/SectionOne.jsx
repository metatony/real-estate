import React from "react";
import { joinCardDetails } from "../../../constants/joinCardDetails";
import SectionHeader from "../../../components/SectionHeader";
import JoinCard from "../components/JoinCard";

const SectionOne = () => {
  return (
    <section className="py-10 lg:py-20">
      <SectionHeader
        sectionName={"Join Us"}
        title={"Partner with Rubble to Grow"}
        firstLineDesc={
          "Reach millions of buyers, sellers, and renters on the largest real estate network."
        }
      />

      <section className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
        {joinCardDetails.map(function (item) {
          return (
            <JoinCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </section>
    </section>
  );
};

export default SectionOne;
