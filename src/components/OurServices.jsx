import Image from 'next/image'
import React from 'react'

const OurServices = () => {
    return (
        <section id="service" class="xl:pt-40 lg:pt-32 md:pt-28 pt-[100px] overflow-x-clip relative z-0">
            <div
                class="size-[150px] rounded-full bg-deep-sea-green blur-[70px] absolute md:block hidden right-[-5%] opacity-30 pointer-event-none bottom-[-3%]">
            </div>
            <img src="./assets/images/svg/service-mobile.svg"
                class="max-sm:block hidden absolute pointer-event-none top-[6%] left-0 animate-pulse" alt="service-mobile" />
            <img src="./assets/images/svg/service-blue-ellipse.svg"
                class="absolute md:block hidden bottom-[18%] left-[5%] animate-pulse" alt="service-blue-ellipse" />
            <div
                class="size-[150px] rounded-full bg-deep-sea-green blur-[70px] absolute md:block hidden left-[3%] opacity-20 pointer-event-none bottom-[20%]">
            </div>
            <div class="container max-w-[1140px] mx-auto xl:px-0 px-5">
                <h2
                    class="font-poppins text-center pb-[50px] max-md:text-center !leading-150 lg:text-5xl text-4xl text-deep-sea-green font-bold">
                    <span class="font-normal text-light-black text-opacity-90">Our</span>
                    Services
                </h2>
                <div class="flex max-lg:hidden flex-wrap justify-center -mx-3 flex-row">
                    <div class="w-1/3 xl:px-3 px-2">
                        <div class="rounded-2xl group max-w-[364px] h-[400px] relative bg-service-ai bg-cover bg-no-repeat">
                            <div
                                class="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-4 flex justify-center items-center">
                                <p class="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                                    AI-powered financial insights
                                </p>
                            </div>
                            <div
                                class="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-10 left-0 right-0 rounded-b-2xl bottom-0">
                            </div>
                        </div>
                    </div>
                    <div class="w-1/3 xl:px-3 px-2">
                        <div class="rounded-2xl group max-w-[364px] h-[400px] relative bg-service-management bg-cover bg-no-repeat">
                            <div
                                class="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-4 flex justify-center items-center">
                                <p class="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                                    Comprehensive wealth management
                                </p>
                            </div>
                            <div
                                class="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-10 left-0 right-0 rounded-b-2xl bottom-0">
                            </div>
                        </div>
                    </div>
                    <div class="w-1/3 xl:px-3 px-2">
                        <div class="rounded-2xl max-w-[364px] h-[400px] relative group bg-service-fire bg-cover bg-no-repeat">
                            <div
                                class="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-4 flex justify-center items-center">
                                <p class="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                                    FIRE (Financial Independence, Retire Early) planning
                                </p>
                            </div>
                            <div
                                class="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-0 left-0 right-0 rounded-b-2xl bottom-0">
                            </div>
                        </div>
                    </div>
                    <div class="w-1/3 px-1 lg:px-3 pt-6">
                        <div class="rounded-2xl max-w-[364px] h-[400px] relative group bg-service-interest bg-cover bg-no-repeat">
                            <div
                                class="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-4 flex justify-center items-center">
                                <p class="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                                    Interest-earning capabilities
                                </p>
                            </div>
                            <div
                                class="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-0 left-0 right-0 rounded-b-2xl bottom-0">
                            </div>
                        </div>
                    </div>
                    <div class="w-1/3 px-1 lg:px-3 pt-6">
                        <div class="rounded-2xl max-w-[364px] h-[400px] relative group bg-service-network bg-cover bg-no-repeat">
                            <div
                                class="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-1 flex justify-center items-center">
                                <p class="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                                    On-demand access to human advisors⁠⁠ using existing providers
                                    and their network.
                                </p>
                            </div>
                            <div
                                class="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-0 left-0 right-0 rounded-b-2xl bottom-0">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-container pb-12 overflow-hidden lg:hidden">
                    <div class="swiper-wrapper lg:hidden">
                        <div class="swiper-slide">
                            <div class="rounded-2xl group max-w-[364px] h-[400px] relative bg-service-ai bg-cover bg-no-repeat">
                                <div
                                    class="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-4 flex justify-center items-center">
                                    <p
                                        class="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                                        AI-powered financial insights
                                    </p>
                                </div>
                                <div
                                    class="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-10 left-0 right-0 rounded-b-2xl bottom-0">
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div
                                class="rounded-2xl group max-w-[364px] h-[400px] relative bg-service-management bg-cover bg-no-repeat">
                                <div
                                    class="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-4 flex justify-center items-center">
                                    <p
                                        class="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                                        Comprehensive wealth management
                                    </p>
                                </div>
                                <div
                                    class="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-10 left-0 right-0 rounded-b-2xl bottom-0">
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="rounded-2xl max-w-[364px] h-[400px] relative group bg-service-fire bg-cover bg-no-repeat">
                                <div
                                    class="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-4 flex justify-center items-center">
                                    <p
                                        class="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                                        FIRE (Financial Independence, Retire Early) planning
                                    </p>
                                </div>
                                <div
                                    class="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-0 left-0 right-0 rounded-b-2xl bottom-0">
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="rounded-2xl max-w-[364px] h-[400px] relative group bg-service-interest bg-cover bg-no-repeat">
                                <div
                                    class="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-4 flex justify-center items-center">
                                    <p
                                        class="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                                        Interest-earning capabilities
                                    </p>
                                </div>
                                <div
                                    class="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-0 left-0 right-0 rounded-b-2xl bottom-0">
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="rounded-2xl max-w-[364px] h-[400px] relative group bg-service-network bg-cover bg-no-repeat">
                                <div
                                    class="bg-white absolute z-20 left-2.5 right-2.5 bottom-2.5 rounded-2xl h-[84px] px-1 flex justify-center items-center">
                                    <p
                                        class="font-poppins font-normal text-base text-light-black text-opacity-70 !leading-160 text-center">
                                        On-demand access to human advisors⁠⁠ using existing providers
                                        and their network.
                                    </p>
                                </div>
                                <div
                                    class="bg-deep-sea-green group-hover:bg-light-green duration-300 h-[57px] absolute z-0 left-0 right-0 rounded-b-2xl bottom-0">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>
    )
}

export default OurServices