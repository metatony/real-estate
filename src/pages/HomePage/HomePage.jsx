import React from "react";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";
import SectionFive from "./Sections/SectionFive";
import SectionSix from "./Sections/SectionSix";
import SEO from "../../components/SEO";

const HomePage = () => {
  return (
    <main>
      <SEO
        title="Rubble Real Estate | Find Your Dream Property"
        description="Discover the best real estate listings and find your dream home with Rubble Real Estate."
        name="Rubble Real Estate"
        type="website"
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
  );
};

export default HomePage;
