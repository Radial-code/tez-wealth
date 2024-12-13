import React from 'react'

const Cta = ({ children, ...props }) => {
    return (
        <button {...props} href="#contact"
            class="relative flex items-center max-lg:hidden justify-center overflow-hidden py-3.5 text-center px-4 font-poppins rounded-full bg-light-green font-semibold text-base text-white !leading-160 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-deep-sea-green before:duration-500 before:ease-out hover:shadow-bg-deep-sea-green hover:before:h-56 hover:before:w-full hover:border-white border-transparent border transition-all ease-linear duration-500">
            <span class="relative z-10">{children}</span>
        </button>
    )
}

export default Cta