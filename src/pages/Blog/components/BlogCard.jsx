import React from "react";

const BlogCard = (props) => {
  return (
    <section className="font-light border border-[#E5E5E5] rounded-2xl p-4 lg:p-6">
      <div>
        <img className="w-full" src={props.image} alt="blog cover image" />
      </div>

      <div className="pt-3">
        <p className="lg:text-xl">{props.title}</p>
        <p className="text-[#A4A4A4] lg:text-xl pt-2">{props.description}</p>
      </div>
    </section>
  );
};

export default BlogCard;
