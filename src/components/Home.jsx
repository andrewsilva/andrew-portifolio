import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";


const Home = () => {
  const { t } = useTranslation();

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 pb-[16.5rem] flex flex-col justify-center h-full'>
        <p className='text-pink-600'>{t('homeGreeting')}</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>{t('homeName')}</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>{t('homeTitle')}</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>{t('homeDescription')}</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'><Link to="experience" smooth={true} duration={500}>
            {t('homeButton')}
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