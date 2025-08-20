import React from "react";

const SectionHeader = ({ sectionName, firstLineDesc, secondLineDesc, title }) => {
  return (
    <article className="flex flex-col text-center items-center justify-center mb-10">
      <p
        className="border-color-gray text-[#828282] py-1 lg:py-1 px-6 mb-4"
      >
        {sectionName}
      </p>
      <h2 className="section-header-title">{title}</h2>
      <p className="paragraph-text mt-3 font-light">
        {firstLineDesc} <br className="lg:hidden" />
        {secondLineDesc}
      </p>
    </article>
  );
};

export default SectionHeader;
