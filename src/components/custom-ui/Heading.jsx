

const Heading = ({ children, className, center, boldText }) => {

    return (
        <h2 className={`font-poppins font-normal opacity-90 lg:text-5xl text-4xl !leading-140 text-dark-grey ${className} ${center ? "text-center mx-auto" : "text-start"}`}>
            {children}<span className="!font-bold text-deep-sea-green">{boldText}</span>
        </h2>
    )
}

export default Heading