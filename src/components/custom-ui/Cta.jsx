import React from 'react'

const Cta = ({ className, children, ...props }) => {
    return (
        <button {...props} href="#contact"
            className={`relative flex items-center justify-center overflow-hidden py-[13px] text-center px-[15px] font-poppins rounded-full bg-light-green font-semibold text-base text-white !leading-160 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-bg-deep-sea-green hover:before:h-56 hover:before:w-full hover:border-light-green hover:text-light-green border-transparent border-2 ease-linear duration-500 ${className}`}>
            <span className="relative z-10">{children}</span>
        </button>
    )
}

export default Cta