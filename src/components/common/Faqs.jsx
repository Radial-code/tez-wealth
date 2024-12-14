"use client"
import { useState } from "react";
import Image from "next/image";
import Heading from "../custom-ui/Heading";
import Paragraph from "../custom-ui/Paragraph";
import { FAQS_DATA_LIST } from "@/utils/helper";

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="xl:py-40 lg:py-32 md:py-28 py-[100px] relative lg:bg-accordion bg-full">
            <div className="lg:block hidden absolute left-[76px] top-[142px]">
                <Image
                    width="113"
                    height="94"
                    className="max-w-[113px] h-[94px] animate-pulse"
                    src="./assets/images/svg/accordion-ellip.svg"
                    alt="accordion-ellip"
                />
            </div>
            <div className="lg:hidden block absolute left-0 top-[62px]">
                <Image
                    width="88"
                    height="60"
                    className="max-w-[88px] h-[60px]"
                    src="./assets/images/svg/accordion-mobile-ellipse.svg"
                    alt="accordion-mobile-ellip"
                />
            </div>
            <div className="sm:container lg:max-w-[966px] mx-auto px-5 xl:px-0">
                <Heading boldText="s" center className="pb-10 md:pb-[50px]">FAQ</Heading>
                <div className="flex flex-col space-y-6">
                    {FAQS_DATA_LIST.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div key={index} className={`shadow-accordionWhite rounded-full cursor-pointer transition-all duration-100 ${isActive ? "bg-sky-blue  !rounded-2xl" : "bg-white"}`}>
                                <button onClick={() => toggleAccordion(index)}
                                    className={`sm:ps-[32px] sm:pe-5 pl-[15px] pr-[10px] py-5 max-sm:py-[15px] flex justify-between items-center duration-300 w-full sm:gap-8 ${isActive ? "pb-0" : "pb-5"}`}>
                                    <div className={`flex gap-3 transition-all duration-300 items-center ${isActive ? "max-custom-sm:!items-start" : ""}`}>
                                        <Paragraph darkBlue semibold xxl leadingFull
                                            className={`transition-all duration-300 ${isActive ? "text-light-green" : "text-deep-sea-green"}`}>0{index + 1}
                                        </Paragraph>
                                        <Paragraph medium xxl className={`transition-all font-medium duration-300 ${isActive
                                            ? "text-stroke-black"
                                            : "text-light-grey font-medium"}`}>
                                            {item.title}
                                        </Paragraph>
                                    </div>
                                    <span className="flex items-center">
                                        <svg className={`sm:size-8 size-7 transform transition-all duration-300 ${isActive ? "rotate-180" : ""}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25 11.5L16 20.5L7 11.5" stroke="#292929" strokeWidth="3" />
                                        </svg>
                                    </span>
                                </button>
                                <div className={`overflow-hidden grid transition-all duration-500 ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                    <div className="overflow-hidden">
                                        <Paragraph leadingFull
                                            className="md:pt-[6px] max-sm:pt-0 pb-5 md:pb-5 md:pe-2 pe-0 md:ps-[70px] ps-12 custom-sm:max-w-[891px] max-w-[315px]">
                                            {item.description}
                                        </Paragraph>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
