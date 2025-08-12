import React from "react";
import { dark500, light300 } from "../constants/themes";

const SectionHeader = ({ sectionName, firstLineDesc, secondLineDesc, title }) => {
  return (
    <article className="flex flex-col text-center items-center justify-center mb-10">
      <p
        className={`text-[${light300}] border border-[#E5E5E5] py-1 lg:py-1 px-6 rounded-lg mb-4  `}
      >
        {sectionName}
      </p>
      <p className={`text-3xl lg:text-6xl text-[${dark500}]`}>{title}</p>
      <p className={`mt-3 text-[${light300}] text-lg lg:text-xl font-light `}>
        {firstLineDesc} <br className="lg:hidden" />{" "}
        {secondLineDesc}
      </p>
    </article>
  );
};

export default SectionHeader;
