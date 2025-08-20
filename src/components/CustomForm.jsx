import React, { useState } from "react";
import { downArrowIcon } from "../constants/icons";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  propertyType: "",
  budgetRange: "",
  locationPreferences: "",
  message: "",
};

const CustomForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Full name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!form.propertyType)
      newErrors.propertyType = "Property type is required";
    if (!form.budgetRange) newErrors.budgetRange = "Budget range is required";
    if (!form.locationPreferences)
      newErrors.locationPreferences = "Location is required";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-light w-full h-full text-lg"
    >
      {/* full name */}
      <div className="flex flex-col">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="e.g. John Doe"
          className="border-color-gray p-2 paragraph-text"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name} !</span>
        )}
      </div>

      {/* email */}
      <div className="flex flex-col">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          className="border-color-gray p-2 paragraph-text"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email} !</span>
        )}
      </div>

      {/* phone number */}
      <div className="flex flex-col">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="tel"
          placeholder="e.g. +1 234 567 8901"
          className="border-color-gray p-2 paragraph-text"
          value={form.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <span className="text-red-500 text-sm">{errors.phoneNumber} !</span>
        )}
      </div>

      {/* property type */}
      <div className="relative flex flex-col">
        <label htmlFor="propertyType">Property Type</label>
        <select
          id="propertyType"
          name="propertyType"
          defaultValue=""
          className="border-color-gray p-2 paragraph-text appearance-none"
          value={form.propertyType}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select type
          </option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="Townhouse">Townhouse</option>
        </select>
        <div>
          <img
            className="pointer-events-none absolute right-3 top-10"
            src={downArrowIcon}
            alt="down arrow icon"
          />
        </div>
        {errors.propertyType && (
          <span className="text-red-500 text-sm">{errors.propertyType} !</span>
        )}
      </div>

      {/* Budget range */}
      <div className="relative flex flex-col ">
        <label htmlFor="budgetRange">Budget Range</label>
        <select
          id="budgetRange"
          name="budgetRange"
          defaultValue=""
          className="border-color-gray p-2 rounded-lg paragraph-text appearance-none"
          value={form.budgetRange}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select budget range
          </option>
          <option value="0-100k">$0 - $100,000</option>
          <option value="100k-200k">$100,000 - $200,000</option>
          <option value="200k-300k">$200,000 - $300,000</option>
          <option value="300k-400k">$300,000 - $400,000</option>
        </select>
        <div>
          <img
            className="pointer-events-none absolute right-3 top-10"
            src={downArrowIcon}
            alt="down arrow icon"
          />
        </div>
        {errors.budgetRange && (
          <span className="text-red-500 text-sm">{errors.budgetRange} !</span>
        )}
      </div>

      {/* location preference */}
      <div className="relative flex flex-col">
        <label htmlFor="locationPreferences">Location Preference</label>
        <select
          id="locationPreferences"
          name="locationPreferences"
          defaultValue=""
          className="border-color-gray p-2 rounded-lg paragraph-text appearance-none"
          value={form.locationPreferences}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select location
          </option>
          <option value="dallas">Dallas, TX</option>
          <option value="miami">Miami, FL</option>
          <option value="seattle">Seattle, WA</option>
          <option value="newYork">New York, NY</option>
        </select>
        <div>
          <img
            className="pointer-events-none absolute right-3 top-10"
            src={downArrowIcon}
            alt="down arrow icon"
          />
        </div>
        {errors.locationPreferences && (
          <span className="text-red-500 text-sm">
            {errors.locationPreferences} !
          </span>
        )}
      </div>

      {/* text area */}
      <div className="lg:col-span-2 flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="e.g. I am interested in a 3-bedroom apartment in Miami. Please contact me with more details."
          className="border-color-gray p-2 lg:h-28 paragraph-text"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message} !</span>
        )}
      </div>
      
      {/* submit button */}
      <button
        type="submit"
        className="bg-[#4b4b4b] text-white py-3 rounded-xl lg:col-span-2"
      >
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
