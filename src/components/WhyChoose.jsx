import React from 'react'

const WhyChoose = () => {
    return (
        <section id="choose" class="md:py-20 lg:bg-horizontal bg-full py-[50px] bg-sky-blue z-0 overflow-x-clip relative">
            <img src="./assets/images/svg/wealth-green-ellipse.svg"
                class="custom-sm:right-[2%] right-[-3%] max-sm:w-[88px] absolute sm:top-[18%] top-[-9%] animate-pulse"
                alt="wealth-green-ellipse" />
            <img src="./assets/images/webp/wealth-sky-ellipse.webp" class="absolute md:block hidden -z-10 left-0 bottom-0"
                alt="wealth-sky-ellipse" />
            <div class="container max-w-[840px] mx-auto xl:px-0 px-5">
                <h2
                    class="font-poppins text-center max-custom-sm:mb-[50px] mb-[38px] max-md:text-center !leading-150 lg:text-5xl text-4xl text-deep-sea-green font-bold">
                    <span class="font-normal text-light-black text-opacity-90">Why Choose </span>
                    Tez Wealth?
                </h2>

                <div>
                    <div class="relative">
                        <img src="./assets/images/svg/welth-left.svg"
                            class="absolute md:bottom-[-28%] max-custom-sm:block custom-md:block hidden bottom-[-36%] max-sm:-rotate-[9deg] left-[-1%] -z-10 md:left-[48%] md:right-1/2 md:-translate-x-1/2"
                            alt="welth-left" />
                        <img src="./assets/images/svg/welth-right.svg"
                            class="absolute top-[24%] max-custom-sm:block custom-md:block hidden -z-10 md:left-[52%] max-sm:rotate-[9deg] left-[3%] md:right-1/2 md:-translate-x-1/2"
                            alt="welth-right" />
                        <div class="flex items-center gap-[45px] custom-sm:gap-3.5 md:gap-6">
                            <img src="./assets/images/svg/wealth-tailored.svg" class="md:hidden w-[50px] h-[50px] rounded-full block"
                                alt="wealth-tailored" />
                            <p class="font-medium text-base max-w-[311px] !leading-150 md:text-right font-poppins text-light-black">
                                Tailored for net worth between $100k and $2 million</p>
                            <img src="./assets/images/svg/wealth-tailored.svg" class="max-md:hidden w-[73px] h-[73px] rounded-full"
                                alt="wealth-tailored" />
                        </div>
                        <div class="flex items-center justify-end mt-10 gap-3.5 max-md:ml-[31px] md:gap-6">
                            <img src="./assets/images/svg/wealth-advanced.svg"
                                class="w-[50px] md:w-[73px] md:h-[73px] h-[50px] rounded-full" alt="wealth-advanced" />
                            <p class="font-medium text-base max-w-[311px] !leading-150 text-left font-poppins text-light-black">Advanced
                                AI technology for personalized advice</p>
                        </div>
                    </div>
                    <div class="relative">
                        <img src="./assets/images/svg/welth-left.svg"
                            class="absolute max-custom-sm:block custom-md:block hidden md:bottom-[-28%] bottom-[-38%] -z-10 md:left-[48%] md:right-1/2 md:-translate-x-1/2"
                            alt="wealth-left" />
                        <img src="./assets/images/svg/welth-right.svg"
                            class="absolute md:top-[21%] max-custom-sm:block custom-md:block hidden top-[19%] left-[3%] -z-10 md:left-[52%] md:right-1/2 md:-translate-x-1/2"
                            alt="wealth-right" />
                        <div class="flex items-center mt-10 gap-[45px] custom-sm:gap-3.5 md:gap-6">
                            <img src="./assets/images/svg/holistic.svg" class="md:hidden w-[50px] h-[50px] rounded-full block"
                                alt="wealth-holistic" />
                            <p class="font-medium text-base max-w-[311px] !leading-150 md:text-right font-poppins text-light-black">
                                Holistic approach to wealth management</p>
                            <img src="./assets/images/svg/holistic.svg" class="max-md:hidden w-[73px] h-[73px] rounded-full"
                                alt="wealth-holistic" />
                        </div>
                        <div class="flex items-center max-md:ml-[31px] justify-end mt-10 gap-3.5 md:gap-6">
                            <img src="./assets/images/svg/wealth-focus.svg"
                                class="w-[50px] md:w-[73px] md:h-[73px] h-[50px] rounded-full" alt="wealth-focus" />
                            <p class="font-medium text-base max-w-[311px] !leading-150 text-left font-poppins text-light-black">Focus on
                                achieving financial independence</p>
                        </div>
                    </div>
                    <div class="flex items-center mt-10 gap-[45px] custom-sm:gap-3.5 md:gap-6">
                        <img src="./assets/images/svg/seamless.svg" class="md:hidden w-[50px] h-[50px] rounded-full block"
                            alt="wealth-seamless" />
                        <p class="font-medium text-base max-w-[311px] !leading-150 md:text-right font-poppins text-light-black">
                            Seamless integration with your existing accounts</p>
                        <img src="./assets/images/svg/seamless.svg" class="max-md:hidden w-[73px] h-[73px] rounded-full"
                            alt="wealth-seamless" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose