import React from 'react'

const Nav = () => {
  return (
    <div className='bg-[#00675f]'>
    <div className='flex mx-auto justify-between max-w-[85%] items-center py-8'>
        <div>
            <h1 className='text-3xl font-bold text-white'>LOGO</h1>
        </div>
        <div>
            <ul className='flex gap-10 text-white text-lg'>
                <li>Home</li>
                <li>About us</li>
                <li>Courses</li>
                <li>Contact us</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Nav