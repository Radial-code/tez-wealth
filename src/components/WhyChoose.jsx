import { WEALTH_DATA } from "@/utils/helper";
import Image from "next/image";

const WhyChoose = () => {
    return (
      <div id="choose" className="md:py-20 lg:bg-horizontal bg-full py-[50px] bg-sky-blue z-0 overflow-x-clip relative">
        <Image
          src="./assets/images/svg/wealth-green-ellipse.svg"
          height={79}
          width={116}
          alt="wealth-green-ellipse"
          className="custom-sm:right-[2%] right-[-3%] max-sm:w-[88px] absolute sm:top-[18%] top-[-9%] animate-pulse"
        />
        <Image
          src="/assets/images/webp/wealth-sky-ellipse.webp"
          height={600}
          width={463}
          alt="wealth-sky-ellipse"
          className="absolute md:block h-[792px] hidden -z-10 left-0 bottom-0"
        />
        <div className="max-w-[840px] mx-auto xl:px-0 px-5">
          <h2 className="font-poppins text-center max-custom-sm:mb-[50px] mb-[38px] max-md:text-center !leading-150 lg:text-5xl text-4xl text-deep-sea-green font-bold">
            <span className="font-normal text-light-black text-opacity-90">
              Why Choose{" "}
            </span>
            Tez Wealth?
          </h2>
          <div className="max-sm:max-w-[400px] max-sm:mx-auto">
            {WEALTH_DATA.map((data, index) => (
              <div key={index} className="relative">
                {data.leftImage && (
                  <Image
                    src={data.leftImage}
                    height={80}
                    width={80}
                    alt="left-decor"
                    className="absolute max-sm:size-[72px] md:bottom-[-28%] max-sm:block custom-md:block hidden bottom-[-36%] max-sm:-rotate-[9deg] left-0 -z-10 md:left-[48%] md:right-1/2 md:-translate-x-1/2"
                  />
                )}
                {data.rightImage && (
                  <Image
                    src={data.rightImage}
                    height={80}
                    width={80}
                    alt="right-decor"
                    className="absolute max-sm:size-[72px] top-[20%] max-sm:block custom-md:block hidden -z-10 md:left-[52%] max-sm:rotate-[9deg] left-[3%] md:right-1/2 md:-translate-x-1/2"
                  />
                )}

                {data.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`flex items-center ${
                      itemIndex > 0 ? "mt-10" : ""
                    } gap-[45px] mt-10 sm:gap-3.5 md:gap-6 ${
                      itemIndex % 2 === 0
                        ? "justify-start "
                        : "sm:justify-end max-sm:gap-3.5"
                    }`}
                  >
                    {itemIndex % 2 !== 0 ? (
                      <>
                        <Image
                          src={item.icon}
                          height={73}
                          width={73}
                          alt="icon"
                          className="w-[50px] md:w-[73px] md:h-[73px] max-sm:ml-[31px] h-[50px] rounded-full"
                        />
                        <p className="font-medium text-base max-w-[311px] !leading-150  font-poppins text-light-black">
                          {item.text}
                        </p>
                      </>
                    ) : (
                      <>
                        <Image
                          src={item.icon}
                          height={73}
                          width={73}
                          alt="icon"
                          className="w-[50px] sm:hidden block md:w-[73px] md:h-[73px] h-[50px] rounded-full"
                        />
                        <p className="font-medium text-base max-w-[311px] !leading-150 sm:text-right font-poppins text-light-black">
                          {item.text}
                        </p>
                        <Image
                          src={item.icon}
                          height={73}
                          width={73}
                          alt="icon"
                          className="w-[50px] sm:block hidden md:w-[73px] md:h-[73px] h-[50px] rounded-full"
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
    );
}

export default WhyChoose