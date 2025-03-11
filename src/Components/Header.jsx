import React, { useEffect, useState } from 'react'
import img from '../assets/h1-bg-1.png'
import star from '../assets/header-sqr.webp'
import star2 from '../assets/star-2.webp'
import arrow from '../assets/header-arr.webp'
import curve from '../assets/head-curve.webp'
import man from '../assets/h1-img-1.webp'
import hed from '../assets/header-img.webp'
import hed1 from '../assets/yellow-crc.webp'
import '../App.css'
import TextTransition, { presets } from 'react-text-transition';
import 'animate.css'
const TEXTS = ['Education.', 'Learning.', 'Growing.'];
const Header = () => {
  //for text typrewiritng
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);
  //end
  return (
    <div className='flex justify-around bg-cover  pb-70 pt-20 items-center' style={{ backgroundImage: `url(${img})` }}>
<div className='animate__animated animate__fadeInLeft animate__delay-2s max-w-1/2 flex flex-col items-start justify-center flex-wrap gap-5'>
<div className='flex gap-3 items-center mt-20'>
<img src={star2} alt="star" />
<h2 className='text-yellow-500 text-5xl' style={{ fontFamily: "var(--handwriting)" }}>Guarantee Certified</h2>
</div>
<h1 className='text-8xl font-extrabold text-white ' style={{ fontFamily: "var(--primary)" }}>
      Online Platform <br />
      <span className="text-yellow-500">
        <TextTransition springConfig={presets.wobbly}>
         For {TEXTS[index]}
        </TextTransition>
      </span>
    </h1>
<p className='text-xl text-white font-light' style={{ fontFamily: "var(--primary)"}}>We don’t just work with concrete and steel. We work with people <br />We are Approachable, with even our highest work work with <br />concrete and steel. We work with people
</p>
<button className='but relative bg-black px-8 py-4 text-white cursor-pointer rounded-4xl'>Find Out More</button>
</div>
<div className='w-1/3 relative'>

<div className='w-full relative -top-10'>
<img src={man} alt="man-img" loading='lazy' className='animate__animated animate__zoomIn animate__delay-3s absolute z-10 right-40  w-[100%]'/>
<img src={arrow} alt="img" className='animate__animated animate__rotateIn animate__delay-2s absolute top-26 right-20'/>
<div className="relative w-[400px] h-[400px] rin">
  <img src={hed} alt="img" className="animate__animated  animate__flipInX animate__delay-1s relative rounded-full z-3 w-full h-full" />
</div>
<img src={hed1} alt="img"  className='animate__animated  animate__fadeInUpBig absolute left-7 top-10 '/>
<img src={star} alt="star" className='animate__animated  animate__fadeInUpBig absolute -bottom-30 right-0 z-20' />
<img src={curve} alt="curve" className=' animate__animated  animate__fadeInUpBig absolute z-10  -bottom-40  -left-80' />
</div>
</div>
    </div>
  )
}

export default Header