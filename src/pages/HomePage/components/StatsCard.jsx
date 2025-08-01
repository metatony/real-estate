import React from "react";
import { diagonalArrow } from "../../../constants/icons";

const StatsCard = (props) => {
  return (
    <section className="flex flex-col justify-between border p-6 h-44 lg:h-[258px] border-[#E5E5E5] rounded-xl">
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
        <p className="text-3xl lg:text-5xl font-semi-bold pb-3">
          {props.count}
        </p>
        <p className="text-base lg:text-xl font-light">{props.description}</p>
      </div>
    </section>
  );
};

export default StatsCard;
