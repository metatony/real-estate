import React from "react";

const ProcessCard = ({ icon, alt, stepNumber, title }) => {
  return (
    <article className="border-color-gray p-6">
      <div className="flex justify-between items-center">
        <div className="p-3 border-color-gray">
          <img src={icon} alt={alt} width={20} height={20} />
        </div>
        <h3 className="card-header-text">{stepNumber}</h3>
      </div>
      <h3 className="card-header-text mt-[50px]">{title}</h3>
      <p className="paragraph-text pt-2">
        Find a wide selection of properties that perfectly suit your needs and
        preferences. Browse a comprehensive list of properties that offer
        detailed information.
      </p>
    </article>
  );
};

export default ProcessCard;
