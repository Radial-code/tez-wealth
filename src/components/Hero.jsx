import React from 'react'
import NavBar from './common/NavBar'
import Image from "next/image";
import Cta from './custom-ui/Cta';
import Paragraph from './custom-ui/Paragraph';
import Icons from './common/Icons';

const Hero = () => {
    return (
      <section className="lg:h-[810px] overflow-x-clip bg-sky-blue lg:bg-hero-background relative bg-cover">
        <Image
          src="/assets/images/svg/hero-ellipse.svg"
          height={79}
          width={116}
          alt="hero-ellipse"
          className="absolute z-[1] start-[-10px] lg:start-3 top-20 lg:top-[115px] max-w-[53px] sm:max-w-[80px] lg:max-w-[116px] animate-pulse"
        />
        <NavBar />
        <Image
          src="/assets/images/webp/hero-img.webp"
          height={810}
          width={732}
          alt="hero-img"
          className="max-w-[50%] 2xl:max-w-[45%] w-full z-0 absolute xl:right-0 md:right-[-55px] h-full top-0 max-lg:hidden 2xl:object-fill"
        />
        <div className="container px-5 lg:h-[720px] mx-auto max-w-[1180px] flex flex-wrap items-center  max-lg:h-auto max-lg:pb-3 max-custom-sm:pb-0 max-lg:pt-5">
          <div className="w-full my-auto lg:w-6/12 max-lg:text-center">
            <p className="text-light-black font-semibold text-base md:text-lg lg:text-xl leading-150 font-poppins text-opacity-90 flex items-center max-lg:justify-center gap-3.5">
              <Icons icon="heroIcon" />
              <span>Welcome to Tez Wealth</span>
            </p>
            <h1 className="xl:text-6xl md:text-5xl text-4xl text-off-green font-poppins !leading-110 pt-5 pb-3.5 md:py-4">
              Achieve Financial Freedom with
              <span className="font-bold text-deep-sea-green">
                AI-Powered Insights
              </span>
            </h1>
            <Paragraph className="text-base md:text-lg max-lg:!text-center lg:text-xl !leading-163 text-light-black text-opacity-90 max-w-[558px] max-lg:mx-auto">
              {" "}
              AI-driven personal finance and wealth management for high net
              worth individuals and HENRYs
            </Paragraph>
            <div className="max-lg:flex max-lg:justify-center">
              <Cta className="mt-6 w-full z-0 custom-sm:w-auto md:mt-10 max-lg:text-center relative flex items-center justify-center">
                Get Started
              </Cta>
            </div>
          </div>
          <div className="w-full lg:w-6/12 max-custom-sm:h-[380px] max-lg:h-[500px] mt-10 lg:mt-0">
            {/* <Image
              src="/assets/images/webp/hero-img.webp"
              height={810}
              width={732}
              alt="hero-img"
              className="max-w-[60%] max-2xl:max-w-[50%] w-full z-0 absolute xl:right-0 md:right-[-55px] h-full top-0 max-lg:hidden 2xl:object-fill"
            /> */}
            <Image
              src="/assets/images/webp/graph.webp"
              height={454}
              width={267}
              alt="graph"
              className="max-w-[260px] w-full custom-sm:max-w-[363px] md:max-w-[470px] relative lg:absolute lg:bottom-10 md:-right-[15%] lg:right-[5%] xl:right-[14%] custom-xl:right-[18%] z-[3] drop-shadow-hero-graph"
            />
            <Image
              src="/assets/images/webp/small-hero-image.webp"
              height={454}
              width={267}
              alt="hero-image"
              className="max-w-[353px] custom-sm:max-w-[450px] max-custom-sm:h-[356px] w-full lg:hidden absolute end-0 bottom-[43px]"
            />
          </div>
        </div>
      </section>
    );
}

export default Hero