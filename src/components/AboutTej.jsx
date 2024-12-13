import React from 'react'
import Image from "next/image";

const AboutTej = () => {
    return (
      <div>
        <Image
          src="/assets/images/svg/about-ellipse.svg"
          height={79}
          width={116}
          alt="absolute max-sm:w-[51px] max-sm:h-[39px] animate-pulse right-[3%] xl:top-[27%] sm:top-[2%] top-[4.5%] -z-10"
          className="w-100 h-100"
        />
        <div class="pointer-event-none md:block hidden -z-10 absolute right-[3%] bottom-[-9%] size-[150px] opacity-20 rounded-full blur-[70px] bg-deep-sea-green"></div>
        <div className="container max-w-[1140px] xl:px-0">
          <div class="grid lg:gap-6 md:gap-4 gap-[50px] md:grid-cols-2 max-md:flex max-md:flex-col-reverse">
            <div id="aboutContent" class="flex flex-col md:gap-3.5 gap-4"></div>
            <div class="my-auto">
              <h2 class="font-poppins max-md:text-center !leading-150 lg:text-5xl text-4xl text-deep-sea-green font-bold">
                <span class="font-normal text-light-black text-opacity-90">
                  About
                </span>
                Tez Wealth
              </h2>
              <p class="pt-2.5 max-sm:text-opacity-80 text-base max-md:text-center font-normal md:pb-10 pb-[30px] font-poppins text-light-black text-opacity-70 !leading-163">
                Tez Wealth is an AI-driven personal finance and wealth
                management platform designed for individuals and families with a
                net worth between $100k and $2 million⁠. The platform aims to
                provide comprehensive wealth management services for High Net
                Worth Individuals (HNIs) and High Earners, Not Rich Yet
                (HENRYs)⁠.
              </p>
              <div class="flex max-md:justify-center max-md:items-center">
                <button class="relative flex items-center justify-center overflow-hidden py-3.5 text-center px-4 font-poppins rounded-full bg-light-green font-semibold text-base text-white !leading-160 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-deep-sea-green before:duration-500 before:ease-out hover:shadow-bg-deep-sea-green hover:before:h-56 hover:before:w-full">
                  <span class="relative z-10">Try Our Interactive Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutTej