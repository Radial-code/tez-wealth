
const Input = ({ textArea, select, className, placeholder, type, name, errors, children, ...props }) => {
    const commonClass = "font-poppins font-normal text-base leading-160 text-light-black placeholder:text-light-black focus:text-deep-sea-green py-[14px] md:px-6 px-4 max-sm:h-11 h-[54px] border border-solid border-light-sea-green focus:border-dark-sea-green rounded-[102px] w-full transition-all duration-300 ease-linear bg-white";

    return (
        <div className="flex flex-col gap-1">
            {textArea ? (
                <textarea {...props}
                    className={`${className} ${commonClass} !rounded-2xl !resize-none !h-[108px]`}
                    name={name}
                    placeholder={placeholder}
                />
            ) : select ? (
                <select {...props} className={`${className} ${commonClass} max-sm:!py-2 p-4 custom-select`} name={name}>
                    {children}
                </select>
            ) : (
                <input {...props}
                    name={name}
                    type={type || "text"}
                    className={`${className} ${commonClass}`}
                    placeholder={placeholder}
                />
            )}
            {errors && <span className="text-red-400 text-sm font-poppins px-4">{errors.message}</span>}
        </div>
    );
};

export default Input