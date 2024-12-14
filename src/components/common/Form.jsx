import React from 'react'

const Form = () => {
    return (
        <form id="contactForm"
            className="lg:py-[50px] md:py-8 py-[30px] lg:px-8 custom-sm:px-4 px-5 bg-sky-blue rounded-2xl max-w-[558px] lg:min-h-[502px] max-md:mx-auto">
            <div className="md:mb-3 mb-2">
                <input type="text" id="first-name" name="first-name" placeholder="Full Name"
                    className="font-poppins font-normal text-base leading-160 text-light-black placeholder:text-light-black focus:text-deep-sea-green py-[14px] md:px-6 px-4 max-sm:h-11 h-[54px] border border-solid border-light-sea-green focus:border-dark-sea-green rounded-[102px] w-full transition-all duration-300 ease-linear bg-white" />
                <div id="first-name-error" className="text-red-400 text-sm font-poppins px-4 pt-1"></div>
            </div>
            <div className="md:mb-3 mb-2">
                <input type="email" id="email" name="email" placeholder="Email Address"
                    className="font-poppins font-normal text-base leading-160 text-light-black placeholder:text-light-black focus:text-deep-sea-green py-[14px] md:px-6 px-4 max-sm:h-11 h-[54px] border border-solid border-light-sea-green focus:border-dark-sea-green  rounded-[102px] w-full transition-all duration-300 ease-linear bg-white" />
                <div id="email-error" className="text-red-400 text-sm font-poppins px-4 pt-1"></div>
            </div>
            <div className="md:mb-3 mb-2">
                <div id="subject" className="custom-select-wrapper ">
                    <div
                        className="custom-select relative border border-solid border-light-sea-green focus:border-dark-sea-green rounded-[102px] md:py-[14px] py-2 md:px-6 px-4 cursor-pointer bg-white"
                        id="customSelect-new" tabindex="0">
                        <div className="flex justify-between items-center">
                            <span
                                className="font-poppins font-normal text-base leading-160 text-light-black select-text">Subject</span>
                            <img width="24" height="24" src="./assets/images/svg/select-arrow.svg" alt="select-arrow"
                                className="select-arrow transition-all ease-linear duration-300 sm:size-6 size-[14px]" />
                        </div>
                        <ul
                            className="select-options absolute top-[100%] left-0 right-0 bg-white border border-solid border-deep-sea-green sm:rounded-xl rounded-lg hidden max-h-[150px] overflow-y-auto z-20 mt-2">
                            <li
                                className="cursor-pointer sm:p-2 p-2 font-poppins text-sm text-light-black hover:bg-light-green hover:text-white"
                                data-value="General Inquiry">General Inquiry</li>
                            <li
                                className="cursor-pointer sm:p-2 p-2 font-poppins text-sm text-light-black hover:bg-light-green hover:text-white"
                                data-value="Feedback">Feedback</li>
                            <li
                                className="cursor-pointer sm:p-2 p-2 font-poppins text-sm text-light-black hover:bg-light-green hover:text-white"
                                data-value="Support">Support</li>
                        </ul>
                    </div>
                </div>
                <div id="subject-error" className="text-red-400 text-sm font-poppins px-4 pt-1"></div>
            </div>
            <div className="md:mb-[25px] mb-[18px]">
                <textarea id="message" name="message" placeholder="Message" rows="4"
                    className="font-poppins resize-none font-normal text-base leading-160 text-light-black placeholder:text-light-black focus:text-deep-sea-green py-[14px] md:px-6 px-4 h-[108px] border border-solid border-light-sea-green focus:border-dark-sea-green  rounded-2xl w-full transition-all duration-300 ease-linear bg-white"></textarea>
                <div id="message-error" className="text-red-400 text-sm font-poppins px-4 pt-[-1px]"></div>
            </div>

            <div>
                <button type="submit" aria-label="submit"
                    className=" w-full
                        relative flex items-center justify-center overflow-hidden sm:py-[15px] py-2 text-center px-4 font-poppins rounded-full bg-light-green font-semibold text-base text-white !leading-160 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-deep-sea-green before:duration-500 before:ease-out hover:shadow-bg-deep-sea-green hover:before:h-[61px] hover:before:w-full">
                    <span className="relative">Send Message</span>
                </button>
            </div>
        </form>
    )
}

export default Form