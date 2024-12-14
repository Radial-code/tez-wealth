import Form from './common/Form'
import Heading from './custom-ui/Heading'
import Image from 'next/image'
import Paragraph from './custom-ui/Paragraph'

const YourFinances = () => {
    return (
        <section id="contact" className="xl:pb-40 lg:pb-32 md:pb-28 pb-[100px] relative overflow-x-clip lg:bg-accordion bg-full">
            <div
                className="size-[150px] rounded-full bg-deep-sea-green blur-[70px] absolute md:block hidden left-0 opacity-20 pointer-event-none top-[-21%]">
            </div>
            <div className="absolute lg:right-[66px] -right-5 lg:bottom-10 bottom-3">
                <Image width="116" height="79"
                    className="lg:max-w-[116px] lg:h-[79px] max-w-[88px] h-[60px] animate-pulse"
                    src="./assets/images/svg/form-ellipse.svg" alt="form-ellipse" /></div>
            <div className="container px-5 xl:px-0 max-w-[1140px]">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="lg:w-[43%] md:w-1/2 w-full xl:px-3 sm:pr-3 px-0 max-md:flex flex-col justify-center items-center">
                        <Heading className="max-w-[501px] lg:pb-[10px] pb-2 max-custom-sm:max-w-[276px] max-md:text-center" boldText="Your
                                Finances">We’re Here to Help You Take Control of </Heading>
                        <Paragraph className="!leading-160 !opacity-80 max-md:!text-center">Have questions? Reach out to our team for support and personalized assistance.</Paragraph>
                    </div>
                    <div className="md:w-1/2 w-full xl:px-0 px-0 lg:mt-0 mt-10">
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YourFinances