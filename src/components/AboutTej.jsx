import Image from "next/image";
import { ABOUT_TEZ_LIST } from '@/utils/helper';
import Heading from "./custom-ui/Heading";
import Paragraph from "./custom-ui/Paragraph";

const AboutTej = () => {
    return (
      <div className="xl:pt-40 lg:pt-32 md:pt-28 pt-[100px] relative z-0">
        <Image
          src="/assets/images/svg/about-ellipse.svg"
          height={79}
          width={116}
          alt="ellipse"
          className="absolute max-sm:w-[51px] max-sm:h-[39px] animate-pulse right-[3%] xl:top-[27%] sm:top-[2%] top-[4.5%] -z-10"
        />
        <div className="pointer-event-none md:block hidden -z-10 absolute right-[3%] bottom-[-9%] size-[150px] opacity-20 rounded-full blur-[70px] bg-deep-sea-green"></div>
        <div className="container max-w-[1140px] xl:px-0">
          <div className="grid lg:gap-6 md:gap-4 gap-[50px] md:grid-cols-2 max-md:flex max-md:flex-col-reverse">
            <div className="flex flex-col gap-3.5">
              {ABOUT_TEZ_LIST.map((data, index) => (
                <div
                  key={index}
                  className="border group bg-white overflow-hidden flex max-custom-sm:h-[124px] max-md:flex-col md:items-center border-deep-sea-green border-opacity-60 rounded-[10px]"
                >
                  <div className="bg-deep-sea-green group-hover:bg-light-green max-md:w-[46px] max-md:max-w-[46px] max-md:h-[46px]  max-md:rounded-br-[10px] duration-300  md:min-w-[69px] h-full flex justify-center items-center">
                    <Image
                      src={data.icon}
                      height={32}
                      width={39}
                      alt={data.description}
                      className="max-md:size-[30px]"
                    />
                  </div>
                  <Paragraph className="lg:py-4 sm:p-2.5 !text-start lg:text-base text-sm pb-2.5 px-2.5 !leading-160 lg:pr-4 ">
                    {data.description}
                  </Paragraph>
                </div>
              ))}
            </div>

            <div className="my-auto">
              <Heading className="!text-left" boldText=" Tez Wealth" center>
                About
              </Heading>
              <Paragraph className="pt-2.5 max-sm:!text-opacity-80 md:pb-10 pb-[30px]">
                Tez Wealth is an AI-driven personal finance and wealth
                management platform designed for individuals and families with a
                net worth between $100k and $2 million⁠. The platform aims to
                provide comprehensive wealth management services for High Net
                Worth Individuals (HNIs) and High Earners, Not Rich Yet
                (HENRYs)⁠.
              </Paragraph>
              <div className="flex max-md:justify-center max-md:items-center">
                <button className="relative flex items-center justify-center overflow-hidden py-3.5 text-center px-4 font-poppins rounded-full bg-light-green font-semibold text-base text-white !leading-160 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-deep-sea-green before:duration-500 before:ease-out hover:shadow-bg-deep-sea-green hover:before:h-56 hover:before:w-full">
                  <span className="relative z-10">
                    Try Our Interactive Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutTej