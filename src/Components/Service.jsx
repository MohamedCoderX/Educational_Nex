import React from 'react';
import img1 from '../assets/men.webp';
import img2 from '../assets/light.webp';
import img3 from '../assets/book-col.webp';
import img4 from '../assets/lap-check.webp';
import img9 from '../assets/abt-star.webp';

const Service = () => {
  return (
    <div className="flex justify-between items-center min-h-screen px-20 py-16 bg-gray-50 flex-wrap mt-7" style={{ fontFamily: "var(--primary)" }}>
      
      {/* Left Section */}
      <div className="w-1/2 pr-20">
        <div className="flex items-center gap-3">
          <img src={img9} alt="Star Icon" />
          <p className="text-green-950 text-5xl font-semibold" style={{ fontFamily: "var(--handwriting)" }}>Services</p>
        </div>
        <h1 className="text-5xl font-bold mt-5 leading-tight">
          Online Classes For <br /> Remote Learning
        </h1>
        <p className="text-gray-500 text-2xl mt-6 leading-relaxed">
          We don’t just work with concrete and steel. We work <br />
          with people <span className="underline font-medium">We are Approachable</span>, 
          with even our highest work.
        </p>
        <button className="bg-green-950 text-white font-semibold rounded-full px-8 py-4 mt-8 text-xl flex items-center gap-2">
          FIND OUT MORE →
        </button>
      </div>

      {/* Right Section - Service Boxes (Moved to the Left) */}
      <div className="grid grid-cols-2 gap-8 ml-[-100px]">
        <div className="w-80 p-8 border border-gray-200 shadow-lg rounded-2xl bg-white flex flex-col items-center text-center">
          <img src={img1} alt="Arts & Design" className="w-20 h-20 mb-4" />
          <h2 className="font-bold text-2xl">Arts & Design</h2>
          <p className="text-gray-500 text-lg">
            Awesome hexagon themed stream pack, you can change hexagon stream pack.
          </p>
        </div>

        <div className="w-80 p-8 border border-gray-200 shadow-lg rounded-2xl bg-white flex flex-col items-center text-center mt-10">
          <img src={img2} alt="Health & Fitness" className="w-20 h-20 mb-4" />
          <h2 className="font-bold text-2xl">Health & Fitness</h2>
          <p className="text-gray-500 text-lg">
            Awesome hexagon themed stream pack, you can change hexagon stream pack.
          </p>
        </div>

        <div className="w-80 p-8 border border-gray-200 shadow-lg rounded-2xl bg-white flex flex-col items-center text-center">
          <img src={img3} alt="Arts & Design" className="w-20 h-20 mb-4" />
          <h2 className="font-bold text-2xl">Arts & Design</h2>
          <p className="text-gray-500 text-lg">
            Awesome hexagon themed stream pack, you can change hexagon stream pack.
          </p>
        </div>

        <div className="w-80 p-8 border border-gray-200 shadow-lg rounded-2xl bg-white flex flex-col items-center text-center mt-10">
          <img src={img4} alt="Health & Fitness" className="w-20 h-20 mb-4" />
          <h2 className="font-bold text-2xl">Health & Fitness</h2>
          <p className="text-gray-500 text-lg">
            Awesome hexagon themed stream pack, you can change hexagon stream pack.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Service;