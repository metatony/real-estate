import React, { useState } from "react";
import { useGlobal } from "../../provider/GlobalProvider";
import BlogCard from "./components/BlogCard";
import SectionHeader from "../../components/SectionHeader";
import { BounceLoader } from "react-spinners";
import { searchIcon } from "../../constants/icons";
import BlogTiles from "./components/BlogTiles";
import SEO from "../../components/SEO";

const Blog = () => {
  const { data, loading } = useGlobal();
  const [search, setSearch] = useState("");

  const filteredBlogs = data.blog
    ? data.blog.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <main>
      <SEO
        title="Blog | Rubble Real Estate"
        description="SRead the latest real estate news, tips, and guides from Rubble Real Estate. Stay informed and inspired for your property journey."
        name="Rubble Real Estate"
        type="website"
      />
      <section className="py-10 lg:py-20">
        <SectionHeader
          sectionName={"Our Agents"}
          title={"Find Your Property with Guidance"}
          firstLineDesc={
            "Our agents offer support to help you navigate the property market."
          }
        />

        {/* search bar */}

        <section className="flex flex-col items-center justify-center">
          {/* search bar */}
          <div className=" flex items-center justify-between w-full lg:w-[511px] border-color-gray paragraph-text py-1.5 pr-1.5 pl-4 my-4">
            <input
              className="w-full focus:outline-none mr-2 text-[14px] font-light"
              type="text"
              placeholder="Search for blog posts..."
              aria-label="Search blog posts"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <span className="flex items-center justify-center p-2 bg-[#292929] rounded-xl">
              <img
                className="w-5 h-5 text-[#A4A4A4]"
                src={searchIcon}
                alt="search icon"
              />
            </span>
          </div>

          {/* tiles */}

          <BlogTiles />
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {loading ? (
            <div className="lg:col-span-3 flex items-center justify-center h-[50vh]">
              <BounceLoader />
            </div>
          ) : filteredBlogs.length > 0 ? (
            filteredBlogs.map((item) => (
              <BlogCard
                key={item.id}
                title={item.title}
                image={item.desktopImageUrl}
                description={item.description}
              />
            ))
          ) : (
            <div className="lg:col-span-3 text-center paragraph-text">
              No blog posts found.
            </div>
          )}
        </section>
      </section>
    </main>
  );
};

export default Blog;
