import React from "react";

const JoinCard = (props) => {
  return (
    <section className="font-light border border-[#E5E5E5] rounded-2xl p-4 lg:p-6">
      <div>
        <img className="w-full" src={props.image} alt="services cover image" />
      </div>

      <div className="pt-3 text-lg">
        <p className="lg:text-2xl">{props.title}</p>
        <p className="text-[#A4A4A4] lg:text-xl pt-2">{props.description}</p>
      </div>

      <button className="text-center lg:text-xl mt-3 py-3 border border-[#E5E5E5] w-full rounded-xl hover:bg-[#292929] hover:text-white">
        Join Now
      </button>
    </section>
  );
};

export default JoinCard;
