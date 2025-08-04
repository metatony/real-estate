import React from "react";

const CustomForm = () => {
  return (
    <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-light w-full lg:h-full">
      {/* full name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter full name"
          className="border border-[#E5E5E5] p-2 rounded-lg text-[#A4A4A4]"
        />
      </div>

      {/* email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email address"
          className="border border-[#E5E5E5] p-2 rounded-lg text-[#A4A4A4]"
        />
      </div>

      {/* phone number */}
      <div className="flex flex-col">
        <label htmlFor="number" className="mb-1">Phone Number</label>
        <input
          id="phoneNumber"
          type="tel"
          placeholder="Enter phone number"
          className="border border-[#E5E5E5] p-2 rounded-lg text-[#A4A4A4]"
        />
      </div>

      {/* property type */}
      <div className="flex flex-col">
        <label htmlFor="property" className="mb-1">Property Type</label>
        <select
          id="propertyType"
          name="cars"
          defaultValue=""
          className="border border-[#E5E5E5] p-2 rounded-lg text-[#A4A4A4]"
        >
          <option value="" disabled>Select type</option>
          <option value="house">house</option>
          <option value="apartment">apartment</option>
          <option value="condo">condo</option>
          <option value="townhouse">townhouse</option>
        </select>
      </div>

      {/* Budget range */}
      <div className="flex flex-col">
        <label htmlFor="budgetRange" className="">Budget Range</label>
        <select
          id="budgetRange"
          name="budget"
          defaultValue=""
          className="border  border-[#E5E5E5] p-2 rounded-lg text-[#A4A4A4]"
        >
          <option value="" disabled>Select budget range</option>
          <option value="0-100k">$0 - $100,000</option>
          <option value="100k-200k">$100,000 - $200,000</option>
          <option value="200k-300k">$200,000 - $300,000</option>
          <option value="300k-400k">$300,000 - $400,000</option>
        </select>
      </div>

      {/* location preference */}
      <div className="flex flex-col">
        <label htmlFor="locationPreferences" className="">Budget Range</label>
        <select
          id="locationPreferences"
          name="locationPreferences"
          defaultValue=""
          className="border border-[#E5E5E5] p-2 rounded-lg text-[#A4A4A4]"
        >
          <option value="" disabled>Select location</option>
          <option value="dallas">Dallas, TX</option>
          <option value="miami">Miami, FL</option>
          <option value="seattle">Seattle, WA</option>
          <option value="newYork">New York, NY</option>
        </select>
      </div>

      {/* text area */}
      <div className="lg:col-span-2 flex flex-col">
        <label htmlFor="message" className="mb-1">Message</label>
        <textarea
          id="message"
          placeholder="Write message"
          className="border border-[#E5E5E5] p-2 rounded-lg h-32 text-[#A4A4A4]"
        ></textarea>
      </div>

      {/* submit button */}
      <button
        type="submit"
        className="bg-[#292929] text-white p-2 rounded-lg lg:col-span-2"
      >
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
