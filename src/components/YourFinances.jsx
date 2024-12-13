import React from 'react'
import Form from './common/Form'

const YourFinances = () => {
    return (
        <section id="contact" class="xl:pb-40 lg:pb-32 md:pb-28 pb-[100px] relative overflow-x-clip lg:bg-accordion bg-full">
            <div
                class="size-[150px] rounded-full bg-deep-sea-green blur-[70px] absolute md:block hidden left-0 opacity-20 pointer-event-none top-[-21%]">
            </div>
            <div class="absolute lg:right-[66px] right-[-20px] lg:bottom-[41px] bottom-3"><img width="116" height="79"
                class="lg:max-w-[116px] lg:h-[79px] max-w-[88px] h-[60px] animate-pulse"
                src="./assets/images/svg/form-ellipse.svg" alt="form-ellipse"/></div>
            <div class="container px-5 xl:px-0 max-w-[1140px]">
                <div class="flex flex-wrap items-center justify-between">
                    <div class="lg:w-[43%] md:w-1/2 w-full xl:px-3 sm:pr-3 px-0 max-md:flex flex-col justify-center items-center">
                        <h2
                            class="font-poppins font-normal lg:text-5xl text-4xl !leading-140 text-dark-grey max-w-[501px] lg:pb-[10px] pb-2 max-custom-sm:max-w-[276px] max-md:text-center">
                            We’re Here to Help You Take Control of <span class="text-deep-sea-green font-bold">Your
                                Finances</span>
                        </h2>
                        <p class="font-poppins font-normal text-base leading-160 text-light-black opacity-80 max-md:text-center">
                            Have
                            questions? Reach out to our team for support and personalized assistance.</p>
                    </div>
                    <div class="md:w-1/2 w-full xl:px-0 px-0 lg:mt-0 mt-10">
                        <Form />
                        <div id="popUp"
                            class="fixed bottom-[20px] right-[20px] bg-light-green text-white p-5 rounded-lg text-center text-lg z-50 hidden">
                            <div class="flex max-w-[300px] h-[150px]">
                                <p class="text-white text-xl my-auto py-auto leading-normal font-poppins text-center capitalize">
                                    message send successfully
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default YourFinances