"use client";
import { SERVICE_DATA_LIST } from "@/utils/helper";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const OurServices = () => {
  return (
    <div className="xl:pt-40 lg:pt-32 md:pt-28 pt-[100px] overflow-x-clip relative z-0">
      <div className="size-[150px] rounded-full bg-deep-sea-green blur-[70px] absolute md:block hidden right-[-5%] opacity-30 pointer-event-none bottom-[-3%]"></div>
      <Image
        src="/assets/images/svg/service-mobile.svg"
        height={39}
        width={42}
        alt="service-mobile"
        className="max-sm:block hidden absolute pointer-event-none top-[6%] left-0 animate-pulse"
      />
      <Image
        src="/assets/images/svg/service-blue-ellipse.svg"
        height={107}
        width={69}
        alt="service-blue-ellipse"
        className="absolute md:block hidden bottom-[18%] left-[5%] animate-pulse"
      />
      <div className="size-[150px] rounded-full bg-deep-sea-green blur-[70px] absolute md:block hidden left-[3%] opacity-20 pointer-event-none bottom-[20%]"></div>
      <div className="container max-w-[1140px] xl:px-0">
        <h2 className="font-poppins text-center pb-[50px] max-md:text-center !leading-150 lg:text-5xl text-4xl text-deep-sea-green font-bold">
          <span className="font-normal text-light-black text-opacity-90">
            Our
          </span>{" "}
          Services
        </h2>
        <div className="flex max-lg:hidden flex-wrap justify-center -mx-3 flex-row">
          {SERVICE_DATA_LIST.map((data, index) => (
            <div key={index} className="w-1/3 xl:px-3 px-2 pt-6">
              <div
                className={`rounded-2xl group max-w-[364px] h-[400px] relative ${data.bgClass} bg-cover bg-no-repeat`}
              >
                <div className="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-4 flex justify-center items-center">
                  <p className="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                    {data.description}
                  </p>
                </div>
                <div className="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-10 left-0 right-0 rounded-b-2xl bottom-0"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden max-lg:block">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true, // Optional for dynamic effects
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
            }}
          >
            {SERVICE_DATA_LIST.map((data, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`rounded-2xl group max-w-[364px] h-[400px] relative ${data.bgClass} bg-cover bg-no-repeat`}
                >
                  <div className="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-4 flex justify-center items-center">
                    <p className="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                      {data.description}
                    </p>
                  </div>
                  <div className="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-10 left-0 right-0 rounded-b-2xl bottom-0"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="my-custom-pagination text-center mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
