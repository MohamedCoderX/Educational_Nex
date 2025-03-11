import React from 'react'
import img from '../assets/h1-bg-1.png'
import star from '../assets/header-sqr.webp'
import star2 from '../assets/star-2.webp'
import arrow from '../assets/header-arr.webp'
import curve from '../assets/head-curve.webp'
import man from '../assets/h1-img-1.webp'
const Header = () => {
  return (
    <div className='flex justify-between'>
<div className=''>
<div className='flex'>
<img src={star2} alt="star" />
<h2>Guarantee Certified</h2>
</div>
<h1 className='text-4xl'>Heading</h1>

</div>
<div>
<h1>Heading-2</h1>
<div className='relative'>
<img src={man} alt="man-img" loading='lazy' />
<img src={arrow} alt="" />

<img src={star} alt="star" />
<img src={curve} alt="curve" />
</div>
</div>
    </div>
  )
}

export default Header