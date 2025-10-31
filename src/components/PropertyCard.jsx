import React from "react";
import { useGlobal } from "../provider/GlobalProvider";
import {
  bathIcon,
  bedIcon,
  locationIcon,
  maximizeIcon,
} from "../constants/icons";
import { BounceLoader } from "react-spinners";
import { Link } from "react-router";

const PropertyCard = () => {
  const { data, loading } = useGlobal();

  if (loading)
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <BounceLoader />
      </div>
    );

  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-3 w-full">
      {data.properties.slice(0, 6).map(function (item) {
        return (
          <article
            key={item.id}
            className="flex flex-col p-4 lg:p-6 border-color-gray"
          >
            <Link to={`/property/${item.id}`}>
              <img
                className="w-full"
                src={item.desktopImageUrl}
                alt={`Property image ${item.id}`}
              />

              <section className="font-light">
                {/* title and price */}
                <section className="flex justify-between item-center pt-4 pb-2 text-[20px] lg:text-xl font-[400] text-[#292929]">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </section>

                {/* location */}
                <section className="flex items-center gap-1">
                  <img
                    className="w-4 h-4"
                    src={locationIcon}
                    alt="location icon"
                  />
                  <span className="paragraph-text">{item.location}</span>
                </section>

                {/* facilities */}
                <section className="flex gap-2 items-center justify-between mt-5">
                  <div className="flex items-center gap-1 py-1 px-2 border-color-gray">
                    <img className="w-4 h-4" src={bedIcon} alt="bed icon" />
                    <span className="text-[#292929] text-[14px] md:text-[12px] xl:text-[18px] font-light leading-none">
                      {item.bedCount}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 py-1 px-2 border-color-gray">
                    <img
                      className="w-4 h-4"
                      src={bathIcon}
                      alt="bathtub icon"
                    />
                    <span className="text-[#292929] text-[14px] md:text-[12px] xl:text-[18px] font-light leading-none">
                      {item.bathCount}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 py-1 px-2 border-color-gray">
                    <img
                      className="w-4 h-4"
                      src={maximizeIcon}
                      alt="square footage icon"
                    />
                    <span className="text-[#292929] text-[14px] md:text-[12px] xl:text-[18px] font-light leading-none">
                      {item.squareFootage}
                    </span>
                  </div>
                </section>
              </section>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default PropertyCard;
