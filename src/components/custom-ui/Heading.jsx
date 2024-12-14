
const Heading = ({ boldText, className }) => {
  return (
    <h2
      className={`font-normal text-light-black text-opacity-90 font-poppins max-md:text-center !leading-150 lg:text-5xl text-4xl  ${className}`}
    >
      <span className="text-deep-sea-green font-bold">{boldText}</span>
      {leadingText}
    </h2>
  );
};

export default Heading;