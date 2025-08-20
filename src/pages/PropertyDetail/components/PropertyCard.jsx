import React from "react";
import { BounceLoader } from "react-spinners";
import { useGlobal } from "../../../provider/GlobalProvider";
import {
  maximizeIcon,
  bathIcon,
  bedIcon,
  locationIcon,
} from "../../../constants/icons";
import { Link } from "react-router";

const PropertyCard = () => {
  const { data, loading } = useGlobal();

  if (loading)
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <BounceLoader />;
      </div>
    );

  const randomItems = [...data.properties].sort(function () {
    return Math.random() - 0.5;
  });

  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-3 w-full">
      {randomItems.slice(0, 3).map(function (item) {
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
            </Link>

            <section className="font-light">
              {/* title and price */}
              <section className="flex justify-between item-center card-header-text pt-4 pb-2">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </section>

              {/* location */}
              <section className="flex items-center space-x-1">
                <img
                  width={20}
                  height={20}
                  src={locationIcon}
                  alt="location icon"
                />
                <p className="paragraph-text">{item.location}</p>
              </section>

              {/* facilities */}
              <section className="flex items-center justify-between mt-5">
                <div className="flex items-center space-x-1 py-1 px-2 border-color-gray">
                  <img
                    width={20}
                    height={20}
                    src={bedIcon}
                    alt="location icon"
                  />
                  <p className="paragraph-text">{item.bedCount}</p>
                </div>

                <div className="flex items-center space-x-1 py-1 px-2 border-color-gray">
                  <img
                    width={20}
                    height={20}
                    src={bathIcon}
                    alt="bathtub icon"
                  />
                  <p className="paragraph-text">{item.bathCount}</p>
                </div>

                <div className="flex items-center space-x-1 py-1 px-2 border-color-gray">
                  <img
                    height={20}
                    src={maximizeIcon}
                    alt="square footage icon"
                  />
                  <p className="paragraph-text">{item.squareFootage}</p>
                </div>
              </section>
            </section>
          </article>
        );
      })}
    </section>
  );
};

export default PropertyCard;
