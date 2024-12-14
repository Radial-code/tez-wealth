import React from 'react'

const Paragraph = ({children,className}) => {
  return (
    <p
      className={`text-base max-md:text-center font-normal font-poppins text-light-black text-opacity-70 !leading-163 ${className} `}
    >
      {children}
    </p>
  );
}

export default Paragraph