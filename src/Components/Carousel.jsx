import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

// Importing image assets
import web from "../assets/web.webp";
import girl from "../assets/girl.webp";
import app from "../assets/app.webp";
import bg from "../assets/course-bg.webp";
import star from "../assets/abt-star.webp";

// Registering GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Dummy data for courses (can be replaced with dynamic data from API)
const courses = [
  {
    id: 1,
    title: "The Full Stack Web Development MERN",
    lessons: 0,
    weeks: 0,
    price: "$29",
    students: 0,
    rating: 1,
    img: web,
  },
  {
    id: 2,
    title: "Graphic Design Master Class Learn GREAT",
    lessons: 1,
    weeks: 1,
    price: "$15",
    students: 3,
    rating: 4,
    img: app,
  },
  {
    id: 3,
    title: "Become A Certified Web Developer: HTML",
    lessons: 1,
    weeks: 1,
    price: "$59",
    students: 0,
    rating: 3,
    img: girl,
  },
  {
    id: 4,
    title: "Become A Certified Web Developer: HTML",
    lessons: 1,
    weeks: 1,
    price: "$59",
    students: 0,
    rating: 3,
    img: girl,
  },
];

// Buttons for category filtering (functionality can be expanded later)
const buttons = ["Web Development", "Marketing", "IT & Technology"];

const Carousel = () => {
  const [click, setClick] = useState("");
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const butRef = useRef(null);

  useEffect(() => {
    setClick(0)
    const el = containerRef.current;
    const text = textRef.current;
    const but = butRef.current;

    if (el && text) {
      // Animation for text section
      gsap.fromTo(
        text,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation for buttons
      gsap.fromTo(
        but,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: but,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation for course cards
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="max-w-7xl mx-auto py-10"
        style={{ fontFamily: "var(--primary)" }}
      >
        {/* Header Section */}
        <div className="flex justify-between">
          <div ref={textRef} className="flex flex-col items-start py-6">
            <h2
              className="text-[50px] text-green-800 flex items-center gap-2"
              style={{ fontFamily: "var(--handwriting)" }}
            >
              <img src={star} alt="star" /> Get To Know Us
            </h2>
            <h2 className="text-5xl font-bold mb-6">Most Popular Courses</h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-4 items-center" ref={butRef}>
            {buttons.map((item, index) => (
              <button
                key={index}
                onClick={() => setClick(index)}
                className={`buts relative px-4 py-3 rounded-full font-bold text-xl ${
                  click === index
                    ? "bg-green-800 text-white"
                    : "bg-white text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Course Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="crim w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold py-3 hover:text-yellow-500">
                    {course.title}
                  </h3>
                  <p className="text-gray-900 text-lg font-bold">
                    {course.lessons} Lessons | {course.weeks} Week
                  </p>
                  <p className="text-gray-700 mt-2 text-lg">
                    Awesome hexagon-themed stream pack, you can change
                  </p>
                  <span className="bg-white text-black absolute top-3 right-8 px-3 py-1 rounded-full">
                    {course.price}
                  </span>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-600 text-lg">
                      {course.students} Students
                    </p>
                    <div className="flex items-center space-x-1 mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          size={24}
                          className={
                            star <= course.rating
                              ? "text-yellow-500"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h3 className="text-center text-xl pb-10" style={{ fontFamily: "var(--primary)" }}>
        We Help You Find the Perfect Tutor. It’s completely free.{" "}
        <b>Explore all Courses</b>
      </h3>
    </div>
  );
};

export default Carousel;
