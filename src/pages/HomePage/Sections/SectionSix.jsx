import React, { useRef } from "react";
import SectionHeader from "../../../components/SectionHeader";
import CustomForm from "../../../components/CustomForm";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

const SectionSix = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="py-10 lg:py-20 bg-white">
      <SectionHeader
        sectionName={"Contact Us"}
        title={"Connect to Find Your Property"}
        firstLineDesc={
          " Contact our team, and we’ll guide you every step of the way."
        }
      />

      <section className="mt-10 h-full">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-color-gray p-6 w-full ">
          {/* picture grid  cols-1*/}
          <section className="">
            <img
              src="https://res.cloudinary.com/de2vjcr29/image/upload/v1754313621/Footer_Image_avmg6e.png"
              alt="customer service advisor image"
              className="lg:col-span-1 lg:h-[546px] lg:w-[408px] h-full w-full"
            />
          </section>

          {/* from grid cols-2 */}
          <section className="lg:col-span-2">
            <CustomForm />
          </section>
        </section>
      </section>
    </section>
  );
};

export default SectionSix;
