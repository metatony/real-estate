import React from "react";
import { diagonalArrow } from "../constants/icons";

const StatsCard = (props) => {
  return (
    <section className="flex flex-col justify-between border p-6 h-44 lg:h-64 w-40 lg:w-60 border-[#E5E5E5] rounded-xl">
      <div className="flex justify-end ">
        <img
          className="rounded-full border p-2.5 border-[#E5E5E5] "
          src={diagonalArrow}
          alt=""
        />
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
