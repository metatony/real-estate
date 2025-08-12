import React from "react";
import SEO from "../components/SEO";
import SectionHeader from "../components/SectionHeader";
import PropertyCard from "./components/PropertyCard";
import { useGlobal } from "../provider/GlobalProvider";
import { useParams } from "react-router";
import { imageGallery1, imageGallery2 } from "../constants/images";
import { BounceLoader } from "react-spinners";

const PropertyDetail = () => {
  const { id } = useParams();
  const { data, loading } = useGlobal();
  const house = data?.properties?.find((item) => item.id.toString() === id);

  if (loading)
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <BounceLoader />;
      </div>
    );

  return (
    <section className="mt-6 lg:mt-12 ">
      <SEO
        title="Property Detail"
        description="Detailed view of the property"
      />

      {/* image gallery */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 bg-red-300">
        <div className="lg:col-span-2 w-full">
          <img
            src={house.desktopImageUrl}
            alt={house.title}
            className="w-full lg:h-[592px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-1 grid lg:grid-cols-1 gap-6 justify-between items-center lg:h-[592px] ">
          <img src={imageGallery1} alt={house.title} className="w-full h-full object-cover" loading="lazy" />
          <img src={imageGallery2} alt={house.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </section>

      <SectionHeader
        sectionName={"Related Properties"}
        title="Explore More Related Properties"
        firstLineDesc="Discover your next ideal residence among our top recommendations."
      />

      <PropertyCard />
    </section>
  );
};

export default PropertyDetail;
