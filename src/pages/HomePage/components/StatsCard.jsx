import React from "react";
import { diagonalArrow } from "../../../constants/icons";

const StatsCard = ({ count, description }) => {
  return (
    <section className="border-color-gray flex flex-col justify-between p-6 h-44 lg:h-[258px]">
      <div className="flex justify-end ">
        <div className="border border-[#E5E5E5] rounded-full p-2.5">
          <img
            className="w-4 h-4 lg:w-6 lg:h-6"
            src={diagonalArrow}
            alt="diagonal arrow icon"
          />
        </div>
      </div>
      <div className="">
        <p className="text-3xl lg:text-5xl font-[400] pb-3">{count}</p>
        <p className="text-lg lg:text-xl font-light">{description}</p>
      </div>
    </section>
  );
};

export default StatsCard;
