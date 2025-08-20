import React from "react";

const JoinCard = ({ image, title, description }) => {
  return (
    <section className="font-light border border-[#E5E5E5] rounded-2xl p-4 lg:p-6">
      <div>
        <img className="w-full" src={image} alt="services cover image" />
      </div>

      <div className="pt-3">
        <p className="card-header-text">{title}</p>
        <p className="paragraph-text pt-2">{description}</p>
      </div>

      <button className="text-center text-lg xl:text-xl mt-3 py-3 border-color-gray w-full hover:bg-[#292929] hover:text-white">
        Join Now
      </button>
    </section>
  );
};

export default JoinCard;
