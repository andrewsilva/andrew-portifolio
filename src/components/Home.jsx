import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 pb-[16.5rem] flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Andrew Keizze da Silva</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm FrontEnd Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Dedicated developer with over 9 years of experience. I've worked with Progress, Java, C#, Angular, Javascript among others, programming different types of applications for small and large companies.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'><Link to="experience" smooth={true} duration={500}>
            View Experience
          </Link> 
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3' />
          </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home