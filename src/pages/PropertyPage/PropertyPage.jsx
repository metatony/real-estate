import React from "react";
import SEO from "../../components/SEO";
import SectionHeader from "../../components/SectionHeader";
import PropertyCard from "./components/PropertyCard";
import FilterArea from "./components/FilterArea";

const PropertyPage = () => {
  return (
    <main className="py-5 lg:py-12">
      <SEO
        title="Properties | Rubble Real Estate"
        description="Browse our latest property listings for sale and rent. Find your dream home or investment property with Rubble Real Estate."
        name="Rubble Real Estate"
        type="website"
      />

      <SectionHeader
        sectionName={"Property"}
        title={"Find Your Dream Property Easily"}
        firstLineDesc={
          " Start your search and find the ideal home for investment or living."
        }
      />

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5 lg:mt-20">
        {/* advanced search */}
        <FilterArea />

        {/* property listings */}

        <section className="lg:col-span-2">
          <PropertyCard />
        </section>
      </section>
    </main>
  );
};

export default PropertyPage;
