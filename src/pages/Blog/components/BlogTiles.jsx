import React from "react";

const BlogTiles = () => {
  return (
    <div className="flex flex-wrap items-center lg:justify-between paragraph-text mb-6 lg:mb-20 gap-3 lg:text-xl tracking-wide ">
      <p className="py-1.5 px-2.5 lg:px-3 lg:py-1 border-color-gray hover:bg-[#292929] hover:text-white">
        Latest Property Trends
      </p>
      <p className="py-1.5 px-2.5 lg:px-3 lg:py-1 border-color-gray hover:bg-[#292929] hover:text-white">
        Ideal Property Location
      </p>
      <p className="py-1.5 px-2.5 lg:px-3 lg:py-1 border-color-gray hover:bg-[#292929] hover:text-white">
        Property Buying Guide
      </p>
    </div>
  );
};

export default BlogTiles;
