"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { NAV_LINK_LIST } from '@/utils/helper';
import Cta from '../custom-ui/Cta';
import Icons from './Icons';

const NavBar = () => {
  const [show, setShow] = useState(true);
  function showNav() {
    setShow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:!overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:!overflow-hidden");
    }
  }
  return (
    <nav className="py-2 sm:py-[13px] bg-nav-background bg-no-repeat bg-header lg:bg-deep-sea-green">
      <div className="containter px-5 xl:px-0 mx-auto max-w-[1140px] flex justify-between items-center relative z-10">
        <a href="#">
          <Image
            src="/assets/images/webp/logo.webp"
            height={39}
            width={207}
            alt="navlogo"
            className="max-w-[139px] sm:max-w-[170px] lg:max-w-[190px] xl:max-w-[207px] w-full"
          />
        </a>
        <ul
          className={`flex xl:ml-8 items-center gap-4 xl:gap-6 max-lg:z-10 max-lg:justify-center max-lg:flex-col max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:bg-deep-sea-green max-lg:w-full max-lg:h-screen  duration-300 ${show ? "max-lg:translate-x-full" : "max-lg:translate-x-0"
            }`}
        >
          {NAV_LINK_LIST.map((data, index) => (
            <li key={index}>
              <a

                onClick={showNav}
                href={data.url}
                className="text-white font-poppins text-lg lg:text-base !leading-160 text-opacity-90 hover:text-opacity-100 text-stroke duration-300 relative after:absolute after:w-0 after:h-1 after:rounded-full after:-bottom-1 after:start-1/2 after:-translate-x-1/2 after:bg-white hover:after:w-[80%] after:duration-300"
              >
                {data.link}
              </a>
            </li>
          ))}
          <li
            className="absolute top-3 end-5 cursor-pointer lg:hidden"
            onClick={showNav}
          >
            <Icons icon="crossIcon" />
          </li>
          <li className="lg:hidden">
            <button
              onClick={showNav}
              href="#contact"
              className="relative flex items-center justify-center overflow-hidden py-3.5  text-center px-4 font-poppins rounded-full bg-light-green font-semibold text-base text-white !leading-160 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-deep-sea-green before:duration-500 before:ease-out hover:shadow-bg-deep-sea-green hover:before:h-56 hover:before:w-full"
            >
              <span className="relative z-10">Contact us</span>
            </button>
          </li>
        </ul>
        <div
          className="cursor-pointer lg:hidden relative z-[4]"
          onClick={showNav}
        >
          <Icons icon="navIcon" />
        </div>
        <Cta className="max-lg:hidden">Contact us</Cta>
      </div>
    </nav>
  );
}

export default NavBar