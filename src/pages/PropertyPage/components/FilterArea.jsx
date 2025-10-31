import React from "react";
import {
  apartment,
  downArrowIcon,
  house,
  medical,
  office,
  shopHouse,
} from "../../../constants/icons";
import PropertyTypeTile from "./Tile";
import AmenitiesTile from "./AmenitiesTile";

const FilterArea = () => {
  return (
    <section className="lg:col-span-1 lg:sticky lg:top-20 lg:h-fit">
      <div className="flex flex-col space-y-6 p-4 lg:p-6 border-color-gray font-light">
        <h3 className="text-3xl font-[400]">Find Your Property</h3>
        <hr className="border-t border-[#E5E5E5]" />

        <section>
          <h4 className="text-xl font-[300]">Location</h4>
          <button className="flex justify-between items-center border-color-gray px-4 py-2 mt-4 w-full text-[14px]">
            New York, US{" "}
            <span>
              <img width={20} height={20} src={downArrowIcon} alt="down arrow icon" />
            </span>
          </button>
        </section>

        <hr className="border-t border-[#E5E5E5]" />

        <section>
          <h4 className="text-xl font-[300]">Property Status</h4>
          <button className="flex justify-between items-center border-color-gray px-4 py-2 mt-4 w-full text-[14px]">
            Sell{" "}
            <span>
              <img width={20} height={20} src={downArrowIcon} alt="down arrow icon" />
            </span>
          </button>
        </section>

        <hr className="border-t border-[#E5E5E5]" />

        <section>
          <h4 className="text-xl font-[300]">Property Type</h4>
          <div className="flex flex-wrap gap-2">
            <PropertyTypeTile icon={house} title={"House"} />
            <PropertyTypeTile icon={apartment} title={"Apartment"} />
            <PropertyTypeTile icon={office} title={"Office"} />
            <PropertyTypeTile icon={shopHouse} title={"Shop house"} />
            <PropertyTypeTile icon={medical} title={"Medical"} />
          </div>
        </section>

        <hr className="border-t border-[#E5E5E5]" />

        <section>
          <h4 className="text-xl font-[300]">Room</h4>
          <div className="flex justify-between gap-2">
            <div>
              <p className="mt-4 text-[14px]">Bedroom</p>
              <button className="flex justify-between items-center border-color-gray px-4 py-2 mt-4 w-[150px] md:w-[130px] xl:w-[170px] text-[14px]">
                Any{" "}
                <span>
                  <img width={20} height={20} src={downArrowIcon} alt="down arrow icon" />
                </span>
              </button>
            </div>
            <div>
              <p className="mt-4 text-[14px]">Bathroom</p>
              <button className="flex justify-between items-center border-color-gray px-4 py-2 mt-4 w-[150px] md:w-[130px] xl:w-[170px] text-[14px]">
                Any{" "}
                <span>
                  <img width={20} height={20} src={downArrowIcon} alt="down arrow icon" />
                </span>
              </button>
            </div>
          </div>
        </section>

        <hr className="border-t border-[#E5E5E5]" />

        <section>
          <h4 className="text-xl font-[300]">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            <AmenitiesTile title={"Backyard"} />
            <AmenitiesTile title={"Garden"} />
            <AmenitiesTile title={"Fireplace"} />
            <AmenitiesTile title={"Gym"} />
            <AmenitiesTile title={"Swimming pool"} />
            <AmenitiesTile title={"Garage"} />
            <AmenitiesTile title={"Playground"} />
            <AmenitiesTile title={"Surveillance Cameras"} />
            <AmenitiesTile title={"Laundry"} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default FilterArea;
