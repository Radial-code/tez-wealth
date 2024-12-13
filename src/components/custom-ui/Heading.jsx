import React from 'react'

const Heading = ({ children, className }) => {
    return (
        <h2
            class={`font-poppins font-normal lg:text-5xl text-4xl !leading-140 text-dark-grey max-w-[501px] lg:pb-[10px] pb-2 max-custom-sm:max-w-[276px] max-md:text-center ${className}`}>
            {children}
        </h2>
    )
}

export default Heading