import React from "react";

const ServicesCard = (props) => {
  return (
    <article className="flex flex-col p-4 lg:p-6 rounded-lg border border-[#E5E5E5]">
      <img
        className=""
        src={props.image}
        alt="Services image of real estate agents"
      />
      <div className="text-center font-light">
        <h2 className="text-2xl lg:text-3xl mt-4 mb-2">{props.title}</h2>
        <p className="text-lg lg:text-xl text-[#A4A4A4]">{props.description}</p>
      </div>
    </article>
  );
};

export default ServicesCard;
