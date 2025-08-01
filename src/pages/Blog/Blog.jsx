import React from "react";
import { useGlobal } from "../../provider/GlobalProvider";
import BlogCard from "./components/BlogCard";
import SectionHeader from "../../components/SectionHeader";
import { BounceLoader } from "react-spinners";
import { searchIcon } from "../../constants/icons";
import BlogTiles from "./components/BlogTiles";

const Blog = () => {
  const { data, loading } = useGlobal();

  return (
    <main className="">
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
          <div className=" flex items-center justify-between w-full lg:w-[511px] border border-[#E5E5E5] rounded-xl text-[#A4A4A4] py-1.5 pr-1.5 pl-4 my-4  ">
            <input className="w-full focus:outline-none mr-2" type="text" placeholder="Search" />

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

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {loading ? (
            <div className="lg:col-span-3 flex items-center justify-center h-[50vh]">
              <BounceLoader />;
            </div>
          ) : (
            data.blog.map(function (item) {
              return (
                <BlogCard
                  key={item.id}
                  title={item.title}
                  image={item.desktopImageUrl}
                  description={item.description}
                />
              );
            })
          )}
        </section>
      </section>
    </main>
  );
};

export default Blog;
