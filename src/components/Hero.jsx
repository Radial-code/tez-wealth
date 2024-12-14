import React from 'react'
import NavBar from './common/NavBar'
import Image from "next/image";

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
          className="max-w-[60%] max-2xl:max-w-[50%] w-full z-0 absolute xl:right-0 md:right-[-55px] h-full top-0 max-lg:hidden 2xl:object-fill"
        />
        <div className="container px-5 lg:h-[720px] mx-auto max-w-[1180px] flex flex-wrap items-center  max-lg:h-auto max-lg:pb-3 max-custom-sm:pb-0 max-lg:pt-5">
          <div className="w-full my-auto lg:w-6/12 max-lg:text-center">
            <p className="text-light-black font-semibold text-base md:text-lg lg:text-xl leading-150 font-poppins text-opacity-90 flex items-center max-lg:justify-center gap-3.5">
              <svg
                className="size-6 md:size-[30px]"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.05559 7.59632C4.83984 7.04818 6.02206 7.15331 6.72621 7.73482L5.9186 6.56095C5.26868 5.63403 5.50145 4.6312 6.4292 3.98044C7.35695 3.33218 9.98585 5.07505 9.98585 5.07505C9.33008 4.13896 9.45272 2.95257 10.3888 2.29597C11.3249 1.64188 12.6164 1.86797 13.2722 2.80573L21.9657 15.0867L20.8577 25.8284L11.6111 22.4562L3.54583 10.498C2.88423 9.55611 3.11283 8.25709 4.05559 7.59632Z"
                  fill="#EF9645"
                />
                <path
                  d="M2.24851 14.4285C2.24851 14.4285 1.30408 13.0519 2.68152 12.1083C4.05729 11.1647 5.00089 12.5405 5.00089 12.5405L9.38184 18.9296C9.53285 18.6776 9.69804 18.429 9.88242 18.1837L3.80199 9.31753C3.80199 9.31753 2.85839 7.94176 4.235 6.99816C5.61077 6.05456 6.55437 7.43033 6.55437 7.43033L12.2735 15.7709C12.4863 15.5974 12.704 15.423 12.9285 15.252L6.29824 5.58151C6.29824 5.58151 5.35464 4.20574 6.73124 3.26214C8.10701 2.31853 9.05062 3.69431 9.05062 3.69431L15.6809 13.3631C15.9245 13.2137 16.1656 13.0844 16.4075 12.9476L10.2103 3.91039C10.2103 3.91039 9.2667 2.53462 10.6425 1.59102C12.0182 0.647419 12.9618 2.02319 12.9618 2.02319L19.5145 11.5793L20.5107 13.0327C16.3825 15.8643 15.9895 21.1914 18.3481 24.6312C18.8195 25.3195 19.5078 24.8482 19.5078 24.8482C16.677 20.7192 17.5414 16.0796 21.6703 13.2488L20.4531 7.15668C20.4531 7.15668 19.9984 5.55147 21.6028 5.09594C23.208 4.64125 23.6635 6.24645 23.6635 6.24645L25.0693 10.4213C25.6266 12.0766 26.2198 13.726 27.0049 15.2862C29.2216 19.6913 27.8976 25.166 23.7177 28.0335C19.1582 31.1597 12.9251 29.9975 9.79816 25.4388L2.24851 14.4285Z"
                  fill="#FFDC5D"
                />
                <path
                  d="M10.0117 26.6978C6.67449 26.6978 3.30222 23.3256 3.30222 19.9883C3.30222 19.527 2.96433 19.154 2.50295 19.154C2.04158 19.154 1.63361 19.527 1.63361 19.9883C1.63361 24.9942 5.00587 28.3664 10.0117 28.3664C10.4731 28.3664 10.846 27.9585 10.846 27.4971C10.846 27.0357 10.4731 26.6978 10.0117 26.6978Z"
                  fill="#1BC47A"
                />
                <path
                  d="M5.84015 28.3314C3.33723 28.3314 1.66861 26.6628 1.66861 24.1599C1.66861 23.6985 1.29568 23.3255 0.834307 23.3255C0.372935 23.3255 0 23.6985 0 24.1599C0 27.4971 2.50292 30 5.84015 30C6.30152 30 6.67445 29.6271 6.67445 29.1657C6.67445 28.7043 6.30152 28.3314 5.84015 28.3314ZM20.0234 1.63358C19.5628 1.63358 19.1891 2.00734 19.1891 2.46788C19.1891 2.92842 19.5628 3.30219 20.0234 3.30219C23.3606 3.30219 26.6978 6.29652 26.6978 9.97664C26.6978 10.4372 27.0716 10.8109 27.5321 10.8109C27.9927 10.8109 28.3664 10.4372 28.3664 9.97664C28.3664 5.37628 25.0292 1.63358 20.0234 1.63358Z"
                  fill="#1BC47A"
                />
                <path
                  d="M24.1949 0C23.7344 0 23.3606 0.338728 23.3606 0.799266C23.3606 1.2598 23.7344 1.66861 24.1949 1.66861C26.6978 1.66861 28.3314 3.52495 28.3314 5.80511C28.3314 6.26564 28.7394 6.63941 29.2007 6.63941C29.6621 6.63941 30 6.26564 30 5.80511C30 2.60387 27.5321 0 24.1949 0Z"
                  fill="#1BC47A"
                />
              </svg>
              <span>Welcome to Tez Wealth</span>
            </p>
            <h1 className="xl:text-6xl md:text-5xl text-4xl text-off-green font-poppins !leading-110 pt-5 pb-3.5 md:py-4">
              Achieve Financial Freedom with
              <span className="font-bold text-deep-sea-green">
                AI-Powered Insights
              </span>
            </h1>
            <p className="font-poppins text-base md:text-lg lg:text-xl !leading-163 text-light-black text-opacity-90 max-w-[558px] max-lg:mx-auto">
              AI-driven personal finance and wealth management for high net
              worth individuals and HENRYs
            </p>
            <div className="max-lg:flex max-lg:justify-center">
              <button className="mt-6 w-full custom-sm:w-auto md:mt-10 max-lg:text-center relative flex items-center justify-center overflow-hidden py-3.5 text-center px-4 font-poppins rounded-full bg-light-green font-semibold text-base text-white !leading-160 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-deep-sea-green before:duration-500 before:ease-out hover:shadow-bg-deep-sea-green hover:before:h-56 hover:before:w-full">
                <span className="relative z-0"> Get Started</span>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 max-custom-sm:h-[380px] max-lg:h-[500px] mt-10 lg:mt-0">
            <img
              src="./assets/images/webp/graph.webp"
              className="max-w-[260px] custom-sm:max-w-[363px] md:max-w-[470px] relative lg:absolute lg:bottom-10 md:-right-[15%] lg:right-[5%] xl:right-[19%] z-[3] drop-shadow-hero-graph"
              alt="graph"
            />
            <img
              src="./assets/images/webp/small-hero-image.webp"
              alt="hero-image"
              className="max-w-[353px] custom-sm:max-w-[450px] max-custom-sm:h-[356px] w-full lg:hidden absolute end-0 bottom-[43px]"
            />
          </div>
        </div>
      </section>
    );
}

export default Hero