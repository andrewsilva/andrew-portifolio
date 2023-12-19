import React from 'react';
import { useTranslation } from 'react-i18next';
import Dbc from '../assets/experience/1668687291660.jpg';
import CastGroup from '../assets/experience/cast_group_logo.jpg';
import Itau from '../assets/experience/itau_logo.jpg';
import Lovys from '../assets/experience/lovys_logo.jpg';
import Totvs from '../assets/experience/totvs_logo.jpg';

const Work = () => {
  const { t } = useTranslation();

  const renderSkills = (skillsKey) => {
    return t(skillsKey, { returnObjects: true }).map((skill, index) => (
      <React.Fragment key={index}>
        <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
        <p>{skill}</p>
      </React.Fragment>
    ));
  };

  return (
    <div name='experience' className='w-full md:h-screen text-gray-300 bg-[#0a192f] overflow-x-auto'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8 mt-20'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>{t('workExperienceTitle')}</p>
          <p className='py-6'>{t('workExperienceSubtitle')}</p>
        </div>

        {/* CastGroup Experience */}
        <div>
          <div className='flex items-center'>
            <img className='w-10 pr-2' src={CastGroup} alt="CastGroup logo" />
            <p className='text-3xl font-bold'>{t('companyCastGroup')}</p>
          </div>
          <div className='mt-5'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>{`${t('positionCastGroup')} (${t('durationCastGroup')})`}</p>
          </div>
          <p className='py-2 mt-4'>{t('descriptionCastGroup')}</p>
          <div className='flex items-center'>
            {renderSkills('skillsCastGroup')}
          </div>
        </div>

        {/* Lovys Experience */}
        <div className='mt-8'>
          <div className='flex items-center'>
            <img className='w-10 pr-2' src={Lovys} alt="Lovys logo" />
            <p className='text-3xl font-bold'>{t('companyLovys')}</p>
          </div>
          <div className='mt-5'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>{`${t('positionLovys')} (${t('durationLovys')})`}</p>
          </div>
          <p className='py-2 mt-4'>{t('descriptionLovys')}</p>
          <div className='flex items-center'>
            {renderSkills('skillsLovys')}
          </div>
        </div>

        {/* Itau Unibanco Experience */}
        <div className='mt-8'>
          <div className='flex items-center'>
            <img className='w-10 pr-2' src={Itau} alt="Itau logo" />
            <p className='text-3xl font-bold'>{t('companyItau')}</p>
          </div>
          <div className='mt-5'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>{`${t('positionItau')} (${t('durationItau')})`}</p>
          </div>
          <p className='py-2 mt-4'>{t('descriptionItau')}</p>
          <div className='flex items-center'>
            {renderSkills('skillsItau')}
          </div>
        </div>

        {/* DBC Company Experience */}
        <div className='mt-8'>
          <div className='flex items-center'>
            <img className='w-10 pr-2' src={Dbc} alt="DBC logo" />
            <p className='text-3xl font-bold'>{t('companyDbc')}</p>
          </div>
          <div className='mt-5'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>{`${t('positionDbc')} (${t('durationDbc')})`}</p>
          </div>
          <p className='py-2 mt-4'>{t('descriptionDbc')}</p>
          <div className='flex items-center'>
            {renderSkills('skillsDbc')}
          </div>
        </div>

        {/* Totvs Experience */}
        <div className='mt-8'>
          <div className='flex items-center'>
            <img className='w-10 pr-2' src={Totvs} alt="Totvs logo" />
            <p className='text-3xl font-bold'>{t('companyTotvs')}</p>
          </div>
          <div className='mt-5'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>{`${t('positionTotvs')} (${t('durationTotvs')})`}</p>
          </div>
          <p className='py-2 mt-4'>{t('descriptionTotvs')}</p>
          <div className='flex items-center'>
            {renderSkills('skillsTotvs')}
          </div>

          {/* Additional roles at Totvs */}
          <div className='mt-10'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>{`${t('positionTotvsRd')} (${t('durationTotvsRd')})`}</p>
          </div>
          <p className='py-2 mt-4'>{t('descriptionTotvsRd')}</p>
          <div className='flex items-center'>
            {renderSkills('skillsTotvsRd')}
          </div>

          <div className='mt-10'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>{`${t('positionTotvsTester')} (${t('durationTotvsTester')})`}</p>
          </div>
          <p className='py-2 mt-4'>{t('descriptionTotvsTester')}</p>
          <div className='flex items-center'>
            {renderSkills('skillsTotvsTester')}
          </div>
        </div>
    </div>
    </div>
  )
}

export default Work;
