import React from "react";

const PropertyTypeTile = ({ title, icon }) => {
  return (
    <p className="flex items-center rounded-2xl border border-[#E5E5E5] px-4 py-2 mt-4 hover:bg-[#E5E5E5] text-[14px]">
      <span>
        <img width={16} height={16} className="duration-300 mr-2" src={icon} alt="" />
      </span>
      {title}
    </p>
  );
};

export default PropertyTypeTile;
