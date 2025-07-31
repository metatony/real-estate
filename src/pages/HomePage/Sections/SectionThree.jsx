import React from "react";
import SectionHeader from "../../../components/SectionHeader";
import { servicesImageUrl1, servicesImageUrl2, servicesImageUrl3 } from "../../../constants/images";
import ServicesCard from "../../../components/ServicesCard";

const SectionThree = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10 lg:py-20">
      <SectionHeader
        sectionName={"Services We Provide"}
        title={"Complete Property Solutions"}
        firstLineDesc={
          "We offer a full range of services to help you find a property, rent or sell as needed."
        }
      />

      <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <ServicesCard
          image={servicesImageUrl1}
          title={"Buy Property"}
          description={
            "Find your property with a vast selection of options tailored to ideally match your unique preferences."
          }
        />

        <ServicesCard
          image={servicesImageUrl2}
          title={"Rent Property"}
          description={
            "Discover the perfect housing solution, whether you need a convenient and temporary stay."
          }
        />

        <ServicesCard
          image={servicesImageUrl3}
          title={"Sell Property"}
          description={
            "Sell your property with maximum visibility, easily connect with a broad audience of buyers."
          }
        />
      </section>
    </section>
  );
};

export default SectionThree;
