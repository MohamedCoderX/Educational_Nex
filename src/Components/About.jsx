import React from 'react'
import img1 from '../assets/abt-certified.webp'
import img2 from '../assets/abt-img.webp'
import img3 from '../assets/abt-img2.webp'
import img4 from '../assets/abt-star.webp'
import img5 from '../assets/abt-img3.webp'
import img6 from '../assets/abt-img4.webp'
import img7 from '../assets/abt-img5.webp'
import { CheckCircle } from "lucide-react"

const About = () => {
  return (
    <div className='flex items-center justify-center flex-wrap mt-10' style={{ fontFamily: "var(--primary)" }}>
      {/* img section */}
      <div className='relative w-[40%]'>
        <img src={img1} alt="" className='absolute -top-10'/>
        <img src={img2} alt="" />
        <img src={img3} alt="" className='absolute -bottom-10 -right-20 -' />

        </div>
        {/* written section */}
        <div className='w-[50%]'>
          <div className='flex  gap-3 '>
          <img src={img4} alt="" />
          <p className='text-5xl  text-green-950' style={{ fontFamily: "var(--handwriting)" }}>Guarented & certified</p>
          </div>

          <h1 className='text-5xl mt-4 font-bold'>Online Learning Wherever <br></br>
            And Whenever</h1>
          <p className='text-gray-500 text-2xl mt-5'>We don't just work with concrete and steel We work with people We are<br></br>
             Approachable with even our highest work work <br></br>
             withconcrete and steel We work with people</p>
             <div className='flex mt-5 gap-5 items-center ml-6 relative left-18'>
              <div className=' rounded-full  h-[100px]'>
          <img src={img5} alt=""  className='h-full w-28 rounded-full'/>
          </div>
          <div className='h-[100px] w-65 rounded-full'>
          <img src={img6} alt=""  className='h-full w-65 rounded-full' /></div>
          <div className='h-[100px] rounded-full'>
          <img src={img7} alt="" className='h-full w-28 rounded-full' />
          </div>
          </div>

<div className='flex-row relative left-18'>
<div className='flex gap-20 mt-7 ml-5'>
          <div className='flex gap-2'>
         <CheckCircle size={24} /> 
          <p><b>Top Instructo</b>r</p>
          </div>
          <div className='flex gap-2'>
          <CheckCircle size={24} />
          <p><b>6000 Membership</b></p>
          </div>
          </div>

          <div className='flex gap-10 mt-3 ml-5 '>
          <div className='flex gap-2'>
          <CheckCircle size={24} />
          <p><b>3020 Online course</b></p>
          </div>
          <div className='flex gap-2'>
          <CheckCircle size={24} />
          <p><b>Online certifications</b></p>
          </div>
          </div>
          </div>
<button className='bg-green-950 rounded-full p-4 text-white mt-7 ml-5 relative left-18'>FIND OUT MORE--</button>

        </div>
    </div>
  )
}
export default About