import React from "react";

const BlogCard = ({ image, title, description }) => {
  return (
    <section className="border-color-gray p-4 lg:p-6">
      <div>
        <img className="w-full" src={image} alt="blog cover image" />
      </div>

      <div className="pt-3">
        <h3 className="card-header-text">{title}</h3>
        <p className="paragraph-text pt-2">{description}</p>
      </div>
    </section>
  );
};

export default BlogCard;
