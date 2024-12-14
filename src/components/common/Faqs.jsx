import React from 'react'

const Faqs = () => {
    return (
        <section id="faq" className="xl:py-40 lg:py-32 md:py-28 py-[100px] relative lg:bg-accordion bg-full">
            <div className="lg:block hidden absolute left-[76px] top-[142px]"><img width="113" height="94"
                className="max-w-[113px] h-[94px] animate-pulse" src="./assets/images/svg/accordion-ellip.svg"
                alt="accordion-ellip" />
            </div>
            <div className="lg:hidden block absolute left-0 top-[62px]"><img width="88" height="60" className="max-w-[88px] h-[60px]"
                src="./assets/images/svg/accordion-mobile-ellipse.svg" alt="accordion-mobile-ellip" /></div>
            <div className="sm:container lg:max-w-[966px] mx-auto px-5 xl:px-0">
                <h2
                    className="font-poppins font-normal md:text-5xl text-4xl text-dark-grey !leading-150 text-center pb-10 md:pb-[50px]">
                    FAQ<span className="font-bold text-deep-sea-green">s</span>
                </h2>
                <div className="flex flex-col" id="accordion">
                    <div
                        className="accordion-item shadow-accordionWhite cursor-pointer bg-white duration-300 ease-in-out rounded-[191px]">
                        <button id="first-acc"
                            className="accordion-button sm:ps-[32px] sm:pe-5 pl-[15px] pr-[10px] py-5 max-sm:py-[15px] flex justify-between items-center duration-300 w-full sm:gap-8"
                            onclick="toggleAccordion(this)">
                            <div className="flex gap-3 questionContainer transition-all ease-linear duration-300 items-center">
                                <span
                                    className="question-number font-semibold text-2xl !leading-150 text-deep-sea-green font-poppins transition-all duration-300 ease-linear">01</span>
                                <span
                                    className="question-text text-base md:text-2xl font-medium text-start font-poppins text-light-black transition-all duration-300 ease-linear">How
                                    can a digital agency help my business?</span>
                            </div>
                            <span className="icon-wrapper flex items-center">
                                <svg className="icon sm:size-8 size-7 transform ease-linear transition-all duration-300" width="32"
                                    height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 11.5L16 20.5L7 11.5" stroke="#292929" stroke-width="3" />
                                </svg>
                            </span>
                        </button>
                        <div className="accordion-content overflow-hidden transition-all duration-500 ease-in-out max-h-0">
                            <p
                                className="font-normal text-base leading-160 text-light-grey md:pt-[6px] max-sm:pt-0 pb-5 md:pb-5 md:pe-2 pe-0 md:ps-[70px] ps-12 custom-sm:max-w-[891px] max-w-[315px] font-poppins">
                                A digital agency can help your business establish a strong online presence, increase
                                brand awareness, drive traffic to
                                your website, generate leads, and ultimately increase sales and revenue.
                            </p>
                        </div>
                    </div>
                    <div
                        className="accordion-item shadow-accordionWhite cursor-pointer bg-white duration-300 ease-in-out rounded-[191px] mt-6">
                        <button
                            className="accordion-button sm:ps-[32px] sm:pe-5 pl-[15px] pr-[10px] py-5 max-sm:py-[15px] flex justify-between items-center duration-300  w-full sm:gap-8"
                            onclick="toggleAccordion(this)">
                            <div className="flex items-center gap-3 questionContainer transition-all ease-linear duration-300">
                                <span
                                    className="question-number font-semibold text-2xl !leading-150 text-deep-sea-green font-poppins transition-all duration-300 ease-linear">02</span>
                                <span
                                    className="question-text text-base md:text-2xl font-medium text-start font-poppins text-light-black  transition-all duration-300 ease-linear">What
                                    factors determine the cost of your services?
                                </span>
                            </div>
                            <span className="icon-wrapper flex items-center">
                                <svg className="icon sm:size-8 size-7 ease-linear transform transition-all duration-300" width="32"
                                    height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 11.5L16 20.5L7 11.5" stroke="#292929" stroke-width="3" />
                                </svg>
                            </span>
                        </button>
                        <div className="accordion-content overflow-hidden transition-all duration-500 ease-in-out max-h-0">
                            <p
                                className="font-normal text-base leading-160 text-light-grey md:pt-[6px] max-sm:pt-0 pb-5 md:pb-5 md:pe-2 pe-0 md:ps-[70px] ps-[57px] custom-sm:max-w-[891px] max-w-[315px] font-poppins">
                                A digital agency can help your business establish a strong online presence, increase
                                brand awareness, drive
                                traffic to
                                your website, generate leads, and ultimately increase sales and revenue.
                            </p>
                        </div>
                    </div>
                    <div
                        className="accordion-item shadow-accordionWhite cursor-pointer bg-white duration-300 ease-in-out rounded-[191px] mt-6">
                        <button
                            className="accordion-button sm:ps-[32px] sm:pe-5 pl-[15px] pr-[10px] py-5 max-sm:py-[15px] flex justify-between items-center duration-300 w-full sm:gap-8"
                            onclick="toggleAccordion(this)">
                            <div className="flex items-center gap-3 questionContainer transition-all ease-linear duration-300">
                                <span
                                    className="question-number font-semibold text-2xl !leading-150 text-deep-sea-green font-poppins transition-all duration-300 ease-linear">03</span>
                                <span
                                    className="question-text text-base md:text-2xl font-medium text-start font-poppins text-light-black transition-all duration-300 ease-linear">What
                                    is SEO, and why is it important for my website?</span>
                            </div>
                            <span className="icon-wrapper flex items-center">
                                <svg className="icon sm:size-8 size-7 transform ease-linear transition-all duration-300" width="32"
                                    height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 11.5L16 20.5L7 11.5" stroke="#292929" stroke-width="3" />
                                </svg>
                            </span>
                        </button>
                        <div className="accordion-content overflow-hidden transition-all duration-500 ease-in-out max-h-0">
                            <p
                                className="font-normal text-base leading-160 text-light-grey md:pt-[6px] max-sm:pt-0 pb-5 md:pb-5 md:pe-2 pe-0 md:ps-[70px] ps-[57px] custom-sm:max-w-[891px] max-w-[315px] font-poppins">
                                A digital agency can help your business establish a strong online presence, increase
                                brand awareness, drive
                                traffic to
                                your website, generate leads, and ultimately increase sales and revenue.
                            </p>
                        </div>
                    </div>
                    <div
                        className="accordion-item shadow-accordionWhite cursor-pointer bg-white duration-300 ease-in-out rounded-[191px] mt-6">
                        <button
                            className="accordion-button sm:ps-[32px] sm:pe-5 pl-[15px] pr-[10px] py-5 max-sm:py-[15px] flex justify-between items-center duration-300  w-full sm:gap-8"
                            onclick="toggleAccordion(this)">
                            <div className="flex items-center gap-3 questionContainer transition-all ease-linear duration-300">
                                <span
                                    className="question-number font-semibold text-2xl !leading-150 text-deep-sea-green font-poppins transition-all duration-300 ease-linear">04</span>
                                <span
                                    className="question-text text-base md:text-2xl font-medium text-start font-poppins text-light-black transition-all duration-300 ease-linear">Do
                                    you provide website maintenance services?</span>
                            </div>
                            <span className="icon-wrapper flex items-center">
                                <svg className="icon sm:size-8 size-7 transform ease-linear transition-all duration-300" width="32"
                                    height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 11.5L16 20.5L7 11.5" stroke="#292929" stroke-width="3" />
                                </svg>
                            </span>
                        </button>
                        <div className="accordion-content overflow-hidden transition-all duration-500 ease-in-out max-h-0">
                            <p
                                className="font-normal text-base leading-160 text-light-grey md:pt-[6px] max-sm:pt-0 pb-5 md:pb-5 md:pe-2 pe-0 md:ps-[70px] ps-[57px] custom-sm:max-w-[891px] max-w-[315px] font-poppins">
                                A digital agency can help your business establish a strong online presence, increase
                                brand awareness, drive
                                traffic to
                                your website, generate leads, and ultimately increase sales and revenue.
                            </p>
                        </div>
                    </div>
                    <div
                        className="accordion-item shadow-accordionWhite cursor-pointer bg-white duration-300 ease-in-out rounded-[191px] mt-6">
                        <button
                            className="accordion-button sm:ps-[32px] sm:pe-5 pl-[15px] pr-[10px] py-5 max-sm:py-[15px] flex justify-between items-center duration-300 w-full sm:gap-8"
                            onclick="toggleAccordion(this)">
                            <div className="flex items-center gap-3 questionContainer transition-all ease-linear duration-300">
                                <span
                                    className="question-number font-semibold text-2xl !leading-150 text-deep-sea-green font-poppins transition-all duration-300 ease-linear">05</span>
                                <span
                                    className="question-text text-base md:text-2xl font-medium text-start font-poppins text-light-black transition-all duration-300 ease-linear">Do
                                    you require long-term contracts?
                                </span>
                            </div>
                            <span className="icon-wrapper flex items-center">
                                <svg className="icon sm:size-8 size-7 transform transition-all duration-300 ease-linear" width="32"
                                    height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 11.5L16 20.5L7 11.5" stroke="#292929" stroke-width="3" />
                                </svg>
                            </span>
                        </button>
                        <div className="accordion-content overflow-hidden transition-all duration-500 ease-in-out max-h-0">
                            <p
                                className="font-normal text-base leading-160 text-light-grey md:pt-[6px] max-sm:pt-0 pb-5 md:pb-5 md:pe-2 pe-0 md:ps-[70px] ps-[57px] custom-sm:max-w-[891px] max-w-[315px] font-poppins">
                                A digital agency can help your business establish a strong online presence, increase
                                brand awareness, drive
                                traffic to
                                your website, generate leads, and ultimately increase sales and revenue.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs