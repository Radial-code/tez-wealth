import React from 'react'

const NavBar = () => {
    return (
        <nav class="py-2 sm:py-[13px] bg-nav-background bg-no-repeat bg-header lg:bg-deep-sea-green">
            <div class="containter px-5 mx-auto max-w-[1180px] flex justify-between items-center relative z-10">

                <a href="#">
                    <img src="./assets/images/webp/logo.webp" alt="logo"
                        class="max-w-[139px] sm:max-w-[170px] lg:max-w-[207px] w-full" />
                </a>
                <ul
                    class="navbar flex items-center gap-4 xl:gap-6 max-lg:z-10 max-lg:justify-center max-lg:flex-col max-lg:fixed max-lg:top-0 max-lg:-start-full duration-300 max-lg:bg-deep-sea-green max-lg:w-full max-lg:h-screen">
                    <li class="absolute top-3 end-5 cursor-pointer lg:hidden" onclick="toggleMenu()">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.8 26.125L6.875 24.2L14.575 16.5L6.875 8.8L8.8 6.875L16.5 14.575L24.2 6.875L26.125 8.8L18.425 16.5L26.125 24.2L24.2 26.125L16.5 18.425L8.8 26.125Z"
                                fill="white" />
                        </svg>
                    </li>
                    <li>
                        <a href="#" onclick="toggleMenu()"
                            class="text-white font-poppins text-lg lg:text-base leading-160 text-opacity-90 hover:text-opacity-100 text-stroke duration-300 relative after:absolute after:w-0 after:h-1 after:rounded-full after:-bottom-1 after:start-1/2 after:-translate-x-1/2 after:bg-white hover:after:w-[80%] !leading-150 after:duration-300">Home</a>
                    </li>
                    <li>
                        <a onclick="toggleMenu()" href="#about"
                            class="text-white font-poppins text-lg lg:text-base leading-160 text-opacity-90 hover:text-opacity-100 text-stroke duration-300 relative after:absolute after:w-0 after:h-1 after:rounded-full after:-bottom-1 after:start-1/2 after:-translate-x-1/2 after:bg-white hover:after:w-[80%] !leading-150 after:duration-300">About
                            Tez Wealth</a>
                    </li>
                    <li>
                        <a onclick="toggleMenu()" href="#service"
                            class="text-white font-poppins text-lg lg:text-base leading-160 text-opacity-90 hover:text-opacity-100 text-stroke duration-300 relative after:absolute after:w-0 after:h-1 after:rounded-full after:-bottom-1 after:start-1/2 after:-translate-x-1/2 after:bg-white hover:after:w-[80%] !leading-150 after:duration-300">Our
                            Services</a>
                    </li>
                    <li>
                        <a onclick="toggleMenu()" href="#choose"
                            class="text-white font-poppins text-lg lg:text-base leading-160 text-opacity-90 hover:text-opacity-100 text-stroke duration-300 relative after:absolute after:w-0 after:h-1 after:rounded-full after:-bottom-1 after:start-1/2 after:-translate-x-1/2 after:bg-white hover:after:w-[80%] !leading-150 after:duration-300">Why
                            Choose Tez Wealth?</a>
                    </li>
                    <li>
                        <a onclick="toggleMenu()" href="#faq"
                            class="text-white font-poppins text-lg lg:text-base leading-160 text-opacity-90 hover:text-opacity-100 text-stroke duration-300 relative after:absolute after:w-0 after:h-1 after:rounded-full after:-bottom-1 after:start-1/2 after:-translate-x-1/2 after:bg-white hover:after:w-[80%] !leading-150 after:duration-300">FAQs</a>
                    </li>
                    <li class="lg:hidden"> <button onclick="toggleMenu()" href="#contact"
                        class="relative flex items-center  justify-center overflow-hidden py-3.5  text-center px-4 font-poppins rounded-full bg-light-green font-semibold text-base text-white !leading-160 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-deep-sea-green before:duration-500 before:ease-out hover:shadow-bg-deep-sea-green hover:before:h-56 hover:before:w-full">
                        <span class="relative z-10">Contact us</span>
                    </button></li>
                </ul>
                <div class="cursor-pointer lg:hidden relative z-[4]" onclick="toggleMenu()">
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.125 24.75V22H28.875V24.75H4.125ZM4.125 17.875V15.125H28.875V17.875H4.125ZM4.125 11V8.25H28.875V11H4.125Z"
                            fill="#292929" />
                    </svg>
                </div>
                <button href="#contact"
                    class="relative flex items-center max-lg:hidden justify-center overflow-hidden py-3.5 text-center px-4 font-poppins rounded-full bg-light-green font-semibold text-base text-white !leading-160 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-deep-sea-green before:duration-500 before:ease-out hover:shadow-bg-deep-sea-green hover:before:h-56 hover:before:w-full hover:border-white border-transparent border transition-all ease-linear duration-500">
                    <span class="relative z-10">Contact us</span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar