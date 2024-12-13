import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-deep-sea-green relative z-10">
            <img src="./assets/images/svg/footer-ellipse.svg" class="absolute lg:block hidden bottom-[5%] left-[3%] z-0"
                alt="footer-ellipse" />
            <div class="sm:py-[58px] pt-12 pb-11">
                <div class="container max-w-[1140px] xl:px-0 px-5 mx-auto">
                    <div class="flex flex-row custom-sm:justify-between justify-center flex-wrap -mx-3">
                        <div
                            class="lg:w-4/12 max-sm:pb-[54px] xl:px-0 px-3 max-sm:flex max-sm:flex-col max-custom-sm:items-center max-sm:justify-center sm:w-1/2">
                            <a href="#" class="flex items-start"><img src="./assets/images/svg/footer-logo.svg" alt="footer-logo" /> <span
                                class="font-comic ml-1 pt-2 text-white !leading-none text-custom-3xl font-bold">Tez Wealth</span></a>
                            <p
                                class="max-w-[306px] font-poppins max-sm:pt-6 max-custom-sm:text-center max-sm:mx-auto font-normal text-base text-white text-opacity-80 !leading-160 pt-3.5 sm:pb-[30px] pb-[35px]">
                                Secure, personalized insights with on-demand access to human advisors.</p>
                            <div class="flex gap-4">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/login"><span
                                    class="w-10 h-10 rounded-full border-[0.8px] duration-300 hover:scale-110 border-white flex justify-center items-center"><img
                                        src="./assets/images/svg/linkdin.svg" class="w-[21px] h-[21px]" alt="linkdin"/></span></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://x.com/?lang=en"><span
                                    class="w-10 h-10 rounded-full border-[0.8px] border-white duration-300 hover:scale-110 flex justify-center items-center"><img
                                        src="./assets/images/svg/twitter.svg" class="w-5 h-5" alt="twitter"/></span></a>
                                <a target="_blank" rel="noopener noreferrer"
                                    href="https://www.instagram.com/accounts/login/?next=%2Fmissionmindedmoving%2F"><span
                                        class="w-10 duration-300 h-10 hover:scale-110 rounded-full border-[0.8px] border-white flex justify-center items-center"><img
                                            src="./assets/images/svg/instagram.svg" class="w-5 h-5" alt="instagram"/></span></a>
                            </div>
                        </div>
                        <div
                            class="lg:w-5/12 w-full lg:px-0 max-sm:justify-between px-3 max-sm:flex max-sm:flex-col max-sm:items-center sm:w-1/2">
                            <div class="flex justify-between w-full flex-wrap flex-row -mx-3">
                                <div class="w-1/2 max-xl:px-3 px-2 max-sm:pl-0 max-sm:pr-5">
                                    <ul class="flex flex-col gap-4">
                                        <li class="text-white font-poppins text-base font-semibold !leading-150">Home</li>
                                        <li><a href="#about"
                                            class="text-base hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 font-poppins !leading-160 text-white text-opacity-80 font-poppins !leading-160">About
                                            Tez Wealth</a></li>
                                        <li><a href="#service"
                                            class="text-base  hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 font-poppins !leading-160 text-white text-opacity-80 font-poppins !leading-160">Our
                                            Services</a></li>
                                        <li><a href="#choose"
                                            class="text-base hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 font-poppins !leading-160 text-white text-opacity-80 font-poppins !leading-160">Why
                                            Choose Tez Wealth?</a></li>
                                        <li><a href="#faq"
                                            class="text-base hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 font-poppins !leading-160 text-white text-opacity-80 font-poppins !leading-160">FAQs</a>
                                        </li>
                                        <li><a href="#contact"
                                            class="text-base  hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 font-poppins !leading-160 text-white text-opacity-80 font-poppins !leading-160">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="w-1/2 max-lg:px-3 px-3 flex justify-center max-sm:pr-0 max-sm:pl-5">
                                    <ul class="flex flex-col gap-4">
                                        <li class="text-white font-poppins text-base font-semibold !leading-150">Quick Links</li>
                                        <li><a href=""
                                            class="text-base hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 text-white text-opacity-80 font-poppins !leading-160">Features</a>
                                        </li>
                                        <li><a href=""
                                            class="text-base hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 text-white text-opacity-80 font-poppins !leading-160">Blog</a>
                                        </li>
                                        <li><a href=""
                                            class="text-base hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 text-white text-opacity-80 font-poppins !leading-160">Demo</a>
                                        </li>
                                        <li><a href=""
                                            class="text-base hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 text-white text-opacity-80 font-poppins !leading-160">Privacy
                                            Policy</a></li>
                                        <li><a href=""
                                            class="text-base hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 text-white text-opacity-80 font-poppins !leading-160">Terms
                                            of Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-[1px] bg-white"></div>
            <p
                class="py-4 font-poppins font-normal sm:text-base !leading-160 text-sm max-sm:max-w-[223px] mx-auto text-opacity-80 text-white text-center">
                copyright ©<span id="current-year"></span> Tez Wealth | All rights reserved</p>
        </footer>
    )
}

export default Footer