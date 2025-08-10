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
    <section className="lg:col-span-1">
      <div className="flex flex-col space-y-6 p-4 lg:p-6 rounded-2xl border border-[#E5E5E5] font-light">
        <p className="text-3xl font-medium">Find Your Property</p>
        <hr className="border-t border-[#E5E5E5]" />

        <div>
          <p className="text-xl font-medium">Location</p>
          <p className="flex justify-between items-center rounded-2xl border border-[#E5E5E5] px-4 py-2 mt-4 w-full">
            New York, US{" "}
            <span>
              <img width={20} height={20} src={downArrowIcon} alt="" />
            </span>
          </p>
        </div>

        <hr className="border-t border-[#E5E5E5]" />

        <div>
          <p className="text-xl font-medium">Property Status</p>
          <p className="flex justify-between items-center rounded-2xl border border-[#E5E5E5] px-4 py-2 mt-4 w-full">
            Sell{" "}
            <span>
              <img width={20} height={20} src={downArrowIcon} alt="" />
            </span>
          </p>
        </div>

        <hr className="border-t border-[#E5E5E5]" />

        <div>
          <p className="text-xl font-medium">Property Type</p>
          <div className="flex flex-wrap gap-2">
            <PropertyTypeTile icon={house} title={"House"} />
            <PropertyTypeTile icon={apartment} title={"Apartment"} />
            <PropertyTypeTile icon={office} title={"Office"} />
            <PropertyTypeTile icon={shopHouse} title={"Shop house"} />
            <PropertyTypeTile icon={medical} title={"Medical"} />
          </div>
        </div>

        <hr className="border-t border-[#E5E5E5]" />

        <div>
          <p className="text-xl font-medium">Room</p>
          <div className="flex justify-between gap-2">
            <div>
              <p className="mt-4">Bedroom</p>
              <p className="flex justify-between items-center rounded-2xl border border-[#E5E5E5] px-4 py-2 mt-4 w-[150px] md:w-[184px]">
                Any{" "}
                <span>
                  <img width={20} height={20} src={downArrowIcon} alt="" />
                </span>
              </p>
            </div>
            <div>
              <p className="mt-4">Bathroom</p>
              <p className="flex justify-between items-center rounded-2xl border border-[#E5E5E5] px-4 py-2 mt-4 w-[150px] md:w-[184px]">
                Any{" "}
                <span>
                  <img width={20} height={20} src={downArrowIcon} alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>

        <hr className="border-t border-[#E5E5E5]" />

        <div>
          <p className="text-xl font-medium">Amenities</p>
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
        </div>
      </div>
    </section>
  );
};

export default FilterArea;
