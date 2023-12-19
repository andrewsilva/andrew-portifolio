import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import Logo from "../assets/logo1.png";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [nav, setNav] = useState(false);
  const { t } = useTranslation();
  const handleClick = () => setNav(!nav);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "70px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="fi fi-br flag-icons" onClick={() => changeLanguage('pt')}></li>
        <li className="fi fi-us flag-icons ml-2" onClick={() => changeLanguage('en')}></li>
        <li>
          <Link to="home" smooth={true} duration={500}>
            {t('navHome')}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            {t('navAbout')}
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            {t('navSkills')}
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>
            {t('navExperience')}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            {t('navContact')}
          </Link>
        </li>
      </ul>

      {/* Hamburguer */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <div className="ml-4">
            <li className="fi fi-br flag-icons" onClick={() => changeLanguage('pt')}></li>
            <li className="fi fi-us flag-icons" onClick={() => changeLanguage('en')}></li>
          </div>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>
            {t('navHome')}
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {t('navAbout')}
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {t('navSkills')}
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="experience" smooth={true} duration={500}>
            {t('navExperience')}
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {t('navContact')}
          </Link></li>
        </ul>
      </div>

      {/* Social */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/andrew-ksilva/"
            >
              {t('socialLinkedin')} <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/andrewsilva"
            >
              {t('socialGithub')} <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="andrew.keizze@gmail.com"
            >
              {t('socialEmail')} <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1BTQaUcMAjjcYYsgcMIHahCKojpcDW1pj/view?usp=sharing"
            >
              {t('socialResume')} <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
