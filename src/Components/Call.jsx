import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import img from '../assets/slide-img.webp'
const Call = () => {
  return (
    <section className="bg-[#2B2E7A] text-white  flex items-center justify-between rounded-xl">
      {/* Left Side: Contact Information */}
      <div className="flex flex-col space-y-2 pl-10 ">
        <h2 className="text-2xl md:text-3xl font-bold">
          Thousands Of Courses <br /> Authored By Industry
        </h2>
        <div className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg w-fit mt-2">
          <FaPhoneAlt />
          <p className="font-semibold">Info@Edublink.Com</p>
        </div>
      </div>

      {/* Middle Section: Statistics */}
      <div className="text-center">
        <h3 className="text-4xl font-bold">45k</h3>
        <p className="text-lg">Active Students</p>
      </div>

      <div className="hidden md:block h-12 w-[2px] bg-white"></div>

      <div className="text-center">
        <h3 className="text-4xl font-bold">120+</h3>
        <p className="text-lg">Best Instructors</p>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block w-1/4 ">
        <img
          src={img}
          alt="Student"
          className="imgimg w-full rounded-xl"
        />
      </div>
    </section>
  );
};

export default Call;
