import { WEALTH_DATA } from "@/utils/helper";
import Image from "next/image";

const WhyChoose = () => {
    return (
      <div className="md:py-20 lg:bg-horizontal bg-full py-[50px] bg-sky-blue z-0 overflow-x-clip relative">
        <Image
          src="/assets/images/webp/wealth-sky-ellipse.webp"
          height={600}
          width={463}
          alt="wealth-sky-ellipse"
          className="absolute md:block h-[730px] hidden -z-10 left-0 bottom-0"
        />
        <div className="max-w-[840px] mx-auto xl:px-0 px-5">
          <h2 class="font-poppins text-center max-custom-sm:mb-[50px] mb-[38px] max-md:text-center !leading-150 lg:text-5xl text-4xl text-deep-sea-green font-bold">
            <span class="font-normal text-light-black text-opacity-90">
              Why Choose{" "}
            </span>
            Tez Wealth?
          </h2>
          <div>
            {WEALTH_DATA.map((data, index) => (
              <div key={index} className="relative">
                {/* Optional Images */}
                {data.leftImage && (
                  <img
                    src={data.leftImage}
                    alt="left-decor"
                    className="absolute md:bottom-[-28%] max-custom-sm:block custom-md:block hidden bottom-[-36%] max-sm:-rotate-[9deg] left-0 -z-10 md:left-[48%] md:right-1/2 md:-translate-x-1/2"
                  />
                )}
                {data.rightImage && (
                  <img
                    src={data.rightImage}
                    alt="right-decor"
                    className="absolute top-[24%] max-custom-sm:block custom-md:block hidden -z-10 md:left-[52%] max-sm:rotate-[9deg] left-[3%] md:right-1/2 md:-translate-x-1/2"
                  />
                )}

                {/* Items */}
                {data.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`flex items-center ${
                      itemIndex > 0 ? "mt-10" : ""
                    } gap-[45px] mt-10 custom-sm:gap-3.5 md:gap-6 ${
                      itemIndex % 2 === 0
                        ? "justify-start "
                        : "justify-end max-custom-sm:gap-3.5"
                    }`}
                  >
                    {itemIndex % 2 !== 0 ? ( // Check if index is not divisible by 2
                      <>
                        <img
                          src={item.icon}
                          className="w-[50px] md:w-[73px] md:h-[73px] max-custom-sm:ml-[31px] h-[50px] rounded-full"
                          alt="icon"
                        />
                        <p className="font-medium text-base max-w-[311px] !leading-150  font-poppins text-light-black">
                          {item.text}
                        </p>
                      </>
                    ) : (
                      <>
                        <img
                          src={item.icon}
                          className="w-[50px] sm:hidden block md:w-[73px] md:h-[73px] h-[50px] rounded-full"
                          alt="icon"
                        />
                        <p className="font-medium text-base max-w-[311px] !leading-150 sm:text-right font-poppins text-light-black">
                          {item.text}
                        </p>
                        <img
                          src={item.icon}
                          className="w-[50px] sm:block hidden md:w-[73px] md:h-[73px] h-[50px] rounded-full"
                          alt="icon"
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      // <section id="choose" className="md:py-20 lg:bg-horizontal bg-full py-[50px] bg-sky-blue z-0 overflow-x-clip relative">
      //     <img src="./assets/images/svg/wealth-green-ellipse.svg"
      //         className="custom-sm:right-[2%] right-[-3%] max-sm:w-[88px] absolute sm:top-[18%] top-[-9%] animate-pulse"
      //         alt="wealth-green-ellipse" />
      //     <img src="./assets/images/webp/wealth-sky-ellipse.webp" className="absolute md:block hidden -z-10 left-0 bottom-0"
      //         alt="wealth-sky-ellipse" />
      //     <div className="container max-w-[840px] mx-auto xl:px-0 px-5">
      //         <h2
      //             className="font-poppins text-center max-custom-sm:mb-[50px] mb-[38px] max-md:text-center !leading-150 lg:text-5xl text-4xl text-deep-sea-green font-bold">
      //             <span className="font-normal text-light-black text-opacity-90">Why Choose </span>
      //             Tez Wealth?
      //         </h2>

      //         <div>
      //             <div className="relative">
      //                 <img src="./assets/images/svg/welth-left.svg"
      //                     className="absolute md:bottom-[-28%] max-custom-sm:block custom-md:block hidden bottom-[-36%] max-sm:-rotate-[9deg] left-[-1%] -z-10 md:left-[48%] md:right-1/2 md:-translate-x-1/2"
      //                     alt="welth-left" />
      //                 <img src="./assets/images/svg/welth-right.svg"
      //                     className="absolute top-[24%] max-custom-sm:block custom-md:block hidden -z-10 md:left-[52%] max-sm:rotate-[9deg] left-[3%] md:right-1/2 md:-translate-x-1/2"
      //                     alt="welth-right" />
      //                 <div className="flex items-center gap-[45px] custom-sm:gap-3.5 md:gap-6">
      //                     <img src="./assets/images/svg/wealth-tailored.svg" className="md:hidden w-[50px] h-[50px] rounded-full block"
      //                         alt="wealth-tailored" />
      //                     <p className="font-medium text-base max-w-[311px] !leading-150 md:text-right font-poppins text-light-black">
      //                         Tailored for net worth between $100k and $2 million</p>
      //                     <img src="./assets/images/svg/wealth-tailored.svg" className="max-md:hidden w-[73px] h-[73px] rounded-full"
      //                         alt="wealth-tailored" />
      //                 </div>
      //                 <div className="flex items-center justify-end mt-10 gap-3.5 max-md:ml-[31px] md:gap-6">
      //                     <img src="./assets/images/svg/wealth-advanced.svg"
      //                         className="w-[50px] md:w-[73px] md:h-[73px] h-[50px] rounded-full" alt="wealth-advanced" />
      //                     <p className="font-medium text-base max-w-[311px] !leading-150 text-left font-poppins text-light-black">Advanced
      //                         AI technology for personalized advice</p>
      //                 </div>
      //             </div>
      //             <div className="relative">
      //                 <img src="./assets/images/svg/welth-left.svg"
      //                     className="absolute max-custom-sm:block custom-md:block hidden md:bottom-[-28%] bottom-[-38%] -z-10 md:left-[48%] md:right-1/2 md:-translate-x-1/2"
      //                     alt="wealth-left" />
      //                 <img src="./assets/images/svg/welth-right.svg"
      //                     className="absolute md:top-[21%] max-custom-sm:block custom-md:block hidden top-[19%] left-[3%] -z-10 md:left-[52%] md:right-1/2 md:-translate-x-1/2"
      //                     alt="wealth-right" />
      //                 <div className="flex items-center mt-10 gap-[45px] custom-sm:gap-3.5 md:gap-6">
      //                     <img src="./assets/images/svg/holistic.svg" className="md:hidden w-[50px] h-[50px] rounded-full block"
      //                         alt="wealth-holistic" />
      //                     <p className="font-medium text-base max-w-[311px] !leading-150 md:text-right font-poppins text-light-black">
      //                         Holistic approach to wealth management</p>
      //                     <img src="./assets/images/svg/holistic.svg" className="max-md:hidden w-[73px] h-[73px] rounded-full"
      //                         alt="wealth-holistic" />
      //                 </div>
      //                 <div className="flex items-center max-md:ml-[31px] justify-end mt-10 gap-3.5 md:gap-6">
      //                     <img src="./assets/images/svg/wealth-focus.svg"
      //                         className="w-[50px] md:w-[73px] md:h-[73px] h-[50px] rounded-full" alt="wealth-focus" />
      //                     <p className="font-medium text-base max-w-[311px] !leading-150 text-left font-poppins text-light-black">Focus on
      //                         achieving financial independence</p>
      //                 </div>
      //             </div>
      //             <div className="flex items-center mt-10 gap-[45px] custom-sm:gap-3.5 md:gap-6">
      //                 <img src="./assets/images/svg/seamless.svg" className="md:hidden w-[50px] h-[50px] rounded-full block"
      //                     alt="wealth-seamless" />
      //                 <p className="font-medium text-base max-w-[311px] !leading-150 md:text-right font-poppins text-light-black">
      //                     Seamless integration with your existing accounts</p>
      //                 <img src="./assets/images/svg/seamless.svg" className="max-md:hidden w-[73px] h-[73px] rounded-full"
      //                     alt="wealth-seamless" />
      //             </div>
      //         </div>
      //     </div>
      // </section>
    );
}

export default WhyChoose