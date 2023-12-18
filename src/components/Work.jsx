import React from 'react'
import Dbc from '../assets/experience/1668687291660.jpg'
import CastGroup from '../assets/experience/cast_group_logo.jpg'
import Itau from '../assets/experience/itau_logo.jpg'
import Lovys from '../assets/experience/lovys_logo.jpg'
import Totvs from '../assets/experience/totvs_logo.jpg'

const Work = () => {
  return (
    <div name='experience' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Experience</p>
          <p className='py-6'>/ See my experience</p>
        </div>
      
        <div>
          <div className='flex items-center'>
            <img className='w-10 pr-2' src={CastGroup} alt="" />
            <p className='text-3xl font-bold'>CastGroup</p>
          </div>

          <div className='mt-5'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>FrontEnd Developer (04/2023 - )</p>
          </div>
          
          <p className='py-2 mt-4'>As a front-end developer specializing in Angular 16, my current focus is on creating and enhancing software for São Paulo City Hall's SIGAM (SIMA), specifically within the Secretariat of Environment, Infrastructure, and Logistics. My responsibilities range from interface architecture to the development of innovative solutions and ongoing product maintenance. Currently, I am dedicated to modernizing and adapting legacy codes to advanced technologies that align with current market trends.</p>
          
          <div className='flex items-center'>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2'></div>
            <p>Angular</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>HTML</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Css</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>NX</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Cypress</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Tests</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Typescript</p>
          </div>
        </div>

        <div className='mt-8'>
          <div className='flex items-center'>
            <img className='w-10 pr-2' src={Lovys} alt="" />
            <p className='text-3xl font-bold'>Lovys</p>
          </div>

          <div className='mt-5'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>Software Developer Sr (03/2022 - 11/2022)</p>
          </div>
          
          <p className='py-2 mt-4'>As a Developer, I contributed to the B2C project for FNAC, focused on the
            development of subscription-based insurance software. I used Angular as
            the primary framework to turn Figma mockups into a functional and
            engaging application. Additionally, I played an active role in conducting
            manual tests and the code review process, ensuring code quality and
            integrity. I also participated in feasibility discussions with the UX/UI team to
            ensure a user-friendly experience.</p>
          
          <div className='flex items-center'>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2'></div>
            <p>Angular</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>HTML</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Css</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Code Review</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Jest</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Tests</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Typescript</p>
          </div>
        </div>

        <div className='mt-8'>
          <div className='flex items-center'>
            <img className='w-10 pr-2' src={Itau} alt="" />
            <p className='text-3xl font-bold'>Itau Unibanco</p>
          </div>

          <div className='mt-5'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>Software Engenieer Sr (01/2022 - 03/2022)</p>
          </div>
          
          <p className='py-2 mt-4'>FrontEnd Developer in the Financing area, where I converted mockups
            into real implementations. Additionally, I played a crucial role in conducting
            unit and integration tests, performed code reviews, and participated in A/B
            testing. My work involved using the Angular framework in conjunction with
            a Java backend to ensure efficient communication between systems.</p>
          
          <div className='flex items-center'>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2'></div>
            <p>Angular</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>HTML</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Css</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Code Review</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>NgRx</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Tests</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Typescript</p>
          </div>
        </div>

        <div className='mt-8'>
          <div className='flex items-center'>
            <img className='w-10 pr-2' src={Dbc} alt="" />
            <p className='text-3xl font-bold'>DBC Company</p>
          </div>

          <div className='mt-5'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>FrontEnd Developer (06/2021 - 12/2021)</p>
          </div>
          
          <p className='py-2 mt-4'>I worked on the Open Finance project at GetNet (Santander Group),
          serving as a FrontEnd Developer. My responsibilities included translating
          Figma mockups into code and conducting manual and automated tests
          using tools like Jest and Karma.</p>
          
          <div className='flex items-center'>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2'></div>
            <p>Angular</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>HTML</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Css</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Bootstrap</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Javascript</p>
          </div>
        </div>

        <div className='mt-8'>
          <div className='flex items-center'>
            <img className='w-10 pr-2' src={Totvs} alt="" />
            <p className='text-3xl font-bold'>Totvs</p>
          </div>

          <div className='mt-5'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>FrontEnd Developer (09/2020 - 06/2021)</p>
          </div>
          
          <p className='py-2 mt-4'>I worked as a developer in a SaaS-based logistics suite, integrated with
          the Manufacturing team. My responsibilities included converting mockups
          into code, running automated and manual tests, participating in code
          reviews, and integrating with Azure for scalability and security
          improvements.</p>
          
          <div className='flex items-center'>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2'></div>
            <p>Angular</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>HTML</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Css</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Agile</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Javascript</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Cypress</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Jasmine</p>
          </div>

          <div className='mt-10'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>Research and Development Engineer (01/2014 - 08/2020)</p>
          </div>
          
          <p className='py-2 mt-4'>I worked in the Framework/Foundation area of Datasul and Logix
          products, performing activities related to innovation and maintenance. My
          responsibilities included requirements gathering, documentation, database
          modeling, and application development using the mentioned
          languages/technologies.
          Among the activities, I highlight the conversion of screens from OpenEdge
          Progress technology to the web platform using Angular2 framework. I
          conducted tests, both manual and automated, using tools like Protractor
          and Postman. Additionally, I had the opportunity to create APIs for internal
          and external clients.</p>
          
          <div className='flex items-center'>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2'></div>
            <p>Angular</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>HTML</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Css</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Agile</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Javascript</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Jenkins</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Progress 4Gl</p>
          </div>

          <div className='mt-10'>
            <p className='font-bold inline border-b-2 text-gray-300 border-pink-600'>Automation Tester (05/2012 - 01/2014)</p>
          </div>
          
          <p className='py-2 mt-4'>I developed test automation using company-approved tools, such as IBM
          Rational Robot (Visual Basic) and Visual Studio (C#). Additionally, I
          worked with tools that enhance the strategic work of Business Analysts,
          including Jenkins and JUnit.</p>
          
          <div className='flex items-center'>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2'></div>
            <p>Automated tests</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>C#</p>
            <div className='bg-pink-600 rounded-full w-2 h-2 mr-2 ml-2'></div>
            <p>Jenkins</p>
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default Work