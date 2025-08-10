import React from "react";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SEO from "../../components/SEO";

const Join = () => {
  return (
    <main>
      <SEO
        title="Join Us | Rubble Real Estate"
        description="Become a part of Rubble Real Estate. Join our team or community and start your journey in real estate today."
        name="Rubble Real Estate"
        type="website"
      />
      <SectionOne />

      <SectionTwo />
    </main>
  );
};

export default Join;
