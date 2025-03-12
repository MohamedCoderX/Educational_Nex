import React, { useEffect, useRef } from 'react'
import chart from "../assets/chart.webp"
import edu from "../assets/edu.webp"
import light from "../assets/light.webp"
import men from "../assets/men.webp"
import rose from "../assets/rose-circle.webp"
import ser from '../assets/ser-1.webp'
import star from "../assets/abt-star.webp";
import ser2 from "../assets/ser-2.webp"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import "animate.css"
const Know = () => {
    //gsap animation
    const divRef = useRef(null);
    const imgRef = useRef(null);
    const rotref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { opacity: 0, x: 300 }, // Start state: Invisible, shifted right
      {
        opacity: 1,
        x: 0, // Moves into position
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 80%", // Animation starts when div is 80% in view
          end: "top 40%", // Ends when div reaches 30%
          scrub: 4, // Smooth animation on scroll
          toggleActions: "play reverse play reverse", // Plays on scroll down, reverses on scroll up
        },
      }
    );
    gsap.fromTo(
        rotref.current,
        { opacity: 0, x: 200,rotateY:90 }, // Start state: Invisible, shifted right
        {
          opacity: 1,
          x: 0, // Moves into position
          duration: 3,
          rotateY:0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rotref.current,
            start: "top 80%", // Animation starts when div is 80% in view
            end: "top 20%", // Ends when div reaches 30%
            scrub: 2, // Smooth animation on scroll
            toggleActions: "play reverse play reverse", // Plays on scroll down, reverses on scroll up
          },
        }
      );
    gsap.fromTo(
        imgRef.current,
        { opacity: 0, y: -300 }, // Start state: Invisible, shifted right
        {
          opacity: 1,
          y: 0, // Moves into position
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 60%", // Animation starts when div is 80% in view
            end: "top 20%", // Ends when div reaches 30%
            scrub: 5, // Smooth animation on scroll
            toggleActions: "play reverse play reverse", // Plays on scroll down, reverses on scroll up
          },
        }
      );
      
  }, []);
  return (
    <div className='max-w-[90%] mx-auto mt-20 relative'>
          <div className='bge absolute bg-[#241442] w-[77%] bottom-0 right-0 h-80 z-[-1]'></div>

<div className='flex justify-around items-start gap-20' style={{ fontFamily: "var(--primary)" }}>

    <div className='w-[40%] relative top-7'>
<img src={ser} alt="img" className=' border-white rounded-full border-10' ref={imgRef} />
<img src={ser2} alt="img" className='animate__animated hover:animate__jello animate__repeat-1  absolute top-80 -left-8'/>
<img src={rose} alt="circle" className='absolute -z-2 top-0' ref={rotref}/>
<img src={chart} alt="chart" className='absolute -top-6 -right-25'/>
    </div>
    <div className='w-1/2'>
    <div className="flex flex-col items-start">
            <h2
              className="text-[50px] text-green-800 flex items-center gap-2"
              style={{ fontFamily: "var(--handwriting)" }}
            >
              <img src={star} alt="star" /> Get To Know Us
            </h2>
            <h2 className="text-5xl font-bold mb-6">Don’t Know How To
            Start Quiklearn Courses</h2>
          </div>
          <p className='text-gray-500 font-light text-lg'>We don’t just work with concrete and steel. We work with people We are Approachable, with even our highest work</p>
          <div className='flex items-center gap-7 py-10 relative'>
            
<div className='w-1/2'>
<img src={edu} alt="edu" className='' />
</div>
<div className='w-1/2 '>

    <div className='flex items-start gap-3 py-10 text-white'>
<img src={light} alt="light" className='w-13' />
<div>
    <h3 className='font-bold text-2xl'>Skilled Lectures</h3>
    <p>Awesome hexagon themed stream You can change hexagon</p>
</div>
    </div>
    <div className='flex items-start gap-3 text-white'>
<img src={men} alt="light" className='w-13'/>
<div>
    <h3 className='font-bold text-2xl'>Skilled Lectures</h3>
    <p>Awesome hexagon themed stream You can change hexagon</p>
</div>
    </div>
</div>
          </div>
          
    </div>

</div>

    </div>
  )
}

export default Know