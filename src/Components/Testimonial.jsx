import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import test1 from '../assets/men-sht.webp'
import test2 from "../assets/girl-sit.webp"
import star from "../assets/star-white.webp";
import Call from "./Call";

const testimonials = [
  {
    name: "Jalima Kargis",
    title: "Behavioral Science",
    text: "Awesome Hexagon Themed Stream Pack, You Can Change Hexagon Stream Pack Awesome Stream Pack, You Can.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    src:test1,
  },
  {
    name: "Sarah Johnson",
    title: "Software Engineer",
    text: "An amazing experience with this platform. It helped me improve my skills and gain confidence.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    src:test2,
  },
]

const Testimonial = () => {
  return (
    <section className="testt px-5 md:px-16 pt-20 pb-30 relative " style={{ fontFamily: "var(--primary)" }}>
      <div className=" mx-auto flex  flex-wrap justify-around items-center">
        
        {/* Left Side Content */}
        <div className="text-white space-y-6 w-1/3">
        <div className="flex flex-col items-start">
            <h2
              className="text-[50px] text-white flex items-center gap-2"
              style={{ fontFamily: "var(--handwriting)" }}
            >
              <img src={star} alt="star" /> Get To Know Us
            </h2>
            <h2 className="text-6xl font-bold " >What Students
            Have To Say</h2>
          </div>
          <p className="text-gray-300">
            We don’t just work with concrete and steel. We work with people{" "}
            <span className="underline">We are Approachable</span>, with even our highest work.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            FIND OUT MORE →
          </a>
        </div>

        {/* Right Side: Swiper Carousel */}
        <div className="relative w-[60%]">
          <Swiper
             slidesPerView={1}
             spaceBetween={20}
             loop={true}
             autoplay={{ delay: 4000, disableOnInteraction: false }}
             
             modules={[Autoplay, Navigation]}
            className="flex flex-wrap w-full bg-white rounded-lg relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
               <div className="flex  flex-wrap items-center justify-between gap-10">
               <div className="w-[44%]">
                <img src={testimonial.src} alt="img" className="w-[100%] h-[450px] object-cover" />
               </div>
               <div className="w-[50%]">
               <p className="text-yellow-500 text-xl">★★★★★</p>
                <p className="text-gray-700 mt-4">{testimonial.text}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                  />
                  <div className="ml-3">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
               </div>
               </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
<div className="absolute w-[90%] -left-50 -right-50 -bottom-40 rounded-full mx-auto">
    <Call/>
</div> 
    </section>
    
  );
};

export default Testimonial;
