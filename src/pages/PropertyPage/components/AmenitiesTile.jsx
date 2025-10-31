import React from "react";

const AmenitiesTile = ({ title }) => {
  return (
    <p className="flex items-center rounded-2xl border border-[#E5E5E5] px-4 py-2 mt-4 hover:bg-[#292929] hover:text-white text-[14px]">
      <span>{title}</span>
    </p>
  );
};

export default AmenitiesTile;
