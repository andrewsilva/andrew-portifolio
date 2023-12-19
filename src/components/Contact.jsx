import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/8b312448-5710-4654-983d-8662e3e85640" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>{t('contactTitle')}</p>
          <p className='text-gray-300 py-4'>{t('contactIntro')}</p>
          
        </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder={t('placeholderName')} name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder={t('placeholderEmail')} name='email' />
          <textarea className='bg-[#ccd6f6] p-2' placeholder={t('placeholderMessage')} name="message" rows="10"></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>{t('submitButton')}</button>
      </form>
    </div>
  )
}

export default Contact