import React from "react";
import { useGlobal } from "../provider/GlobalProvider";
import { bathIcon, bedIcon, locationIcon, maximizeIcon } from "../constants/icons";
import { BounceLoader } from "react-spinners";
import { Link } from "react-router";

const PropertyCard = () => {
  const { data, loading } = useGlobal();

  if (loading)
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <BounceLoader />;
      </div>
    );

  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-3 w-full">
      {data.properties.slice(0,6).map(function (item) {
        return (
            <article key={item.id} className="flex flex-col p-4 lg:p-6 rounded-2xl border border-[#E5E5E5]">
              <Link to={`/property/${item.id}`}>
                <img
                  className=""
                  src={item.desktopImageUrl}
                  alt="Services image of real estate agents"
                />
              </Link>
              <div className="font-light">

                {/* title and price */}
                <div className="flex justify-between item-center">
                    <p className="lg:text-xl mt-4 mb-2">{item.title}</p>
                    <p className="lg:text-xl mt-4 mb-2">{item.price}</p>
                </div>

                {/* location */}
                <div className="flex items-center space-x-1">
                    <img width={20} height={20} src={locationIcon} alt="location icon" />
                    <p className="text-lg lg:text-xl text-[#A4A4A4]">{item.location}</p>
                </div>

                {/* facilities */}

                <div className="flex items-center justify-between mt-5">

                    <div className="flex items-center space-x-1 border border-[#E5E5E5] py-1 px-2 rounded-lg">
                        <img width={20} height={20} src={bedIcon} alt="location icon" />
                        <p className="text-[#A4A4A4]">{item.bedCount}</p>
                    </div>

                    <div className="flex items-center space-x-1 border border-[#E5E5E5] py-1 px-2 rounded-lg">
                        <img width={20} height={20} src={bathIcon} alt="location icon" />
                        <p className="text-[#A4A4A4]">{item.bathCount}</p>
                    </div>

                    <div className="flex items-center space-x-1 border border-[#E5E5E5] py-1 px-2 rounded-lg">
                        <img width={20} height={20} src={maximizeIcon} alt="location icon" />
                        <p className="text-[#A4A4A4]">{item.squareFootage}</p>
                    </div>

                </div>

             
               </div>
            </article>
        );
      })}
    </section>
  );
};

export default PropertyCard;
