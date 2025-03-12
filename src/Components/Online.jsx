import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import book from "../assets/book.webp";
import web from "../assets/lap.webp";
import app from "../assets/phn.webp";
import pen from "../assets/pencil.webp";
import star from "../assets/abt-star.webp";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: 1, title: "Art & Humanities", image: book },
  { id: 2, title: "Web Development", image: web },
  { id: 3, title: "Graphic Design", image: app },
  { id: 4, title: "Photography", image: pen },
  { id: 5, title: "Marketing", image: app },
  { id: 6, title: "Business", image: book },
  { id: 7, title: "Data Science", image: web },
];

const Online = () => {
 
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", // Start animation when 85% of section is in viewport
            end: "top 20%", // End animation when 20% of section is in viewport
            scrub: true, // Smooth transition
            toggleActions: "play reverse play reverse", // Fades in and out
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="mt-10 flex flex-row items-center justify-center text-center py-10 opacity-0" style={{ fontFamily: "var(--primary)" }}>
      <div className="w-1/4 flex flex-col items-start">
        <h2 className="text-4xl text-green-800 font-light flex items-center gap-2" style={{ fontFamily: "var(--handwriting)" }}>  
          <img src={star} alt="star" className="-mt-3"/>Online Classes
        </h2>
        <h1 className="text-4xl font-bold mt-2 text-gray-700">Popular Category</h1>
        <p className="text-lg text-gray-600 mt-2 text-left">
          We don’t just work with concrete and steel. We are Approachable.
        </p>
        <button className="mt-4 px-6 py-3 bg-green-800 text-white rounded-lg">
          Find Out More
        </button>
      </div>

      <div className="w-4xl max-w-5xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={false}
          className="w-full"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="on flex flex-col flex-wrap items-center justify-center w-full">
                <div className="bg-[#f9f9f9] rounded-md py-4 px-6 w-30">
                  <img src={category.image} alt={category.title} className="object-contain max-w-full"/>
                </div>
                <p className="-mt-1 text-sm font-light bg-blue-600 text-white px-4 py-2 rounded-full">
                  {category.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Online;
