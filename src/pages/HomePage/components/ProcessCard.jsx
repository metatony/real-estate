import React from "react";

const ProcessCard = (props) => {
  return (
    <article className="font-light border border-[#E5E5E5] p-6 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="p-3 border border-[#E5E5E5] rounded-xl">
          <img
            className=" "
            src={props.icon}
            alt={props.alt}
            width={20}
            height={20}
          />
        </div>
        <p className="text-2xl lg:text-3xl">{props.stepNumber}</p>
      </div>
      <p className="text-2xl lg:text-3xl mt-[50px]">{props.title}</p>
      <p className="text-lg lg:text-2xl text-[#A4A4A4] pt-2">
        Find a wide selection of properties that perfectly suit your needs and
        preferences. Browse a comprehensive list of properties that offer
        detailed information.
      </p>
    </article>
  );
};

export default ProcessCard;
