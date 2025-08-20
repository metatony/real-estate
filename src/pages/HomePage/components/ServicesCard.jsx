import React from "react";

const ServicesCard = ({ image, title, description }) => {
  return (
    <article className="border-color-gray flex flex-col p-4 lg:p-6 ">
      <img
        src={image}
        alt="Services image of real estate agents"
      />
      <div className="text-center">
        <h3 className="card-header-text mt-4 mb-2">{title}</h3>
        <p className="paragraph-text">{description}</p>
      </div>
    </article>
  );
};

export default ServicesCard;
