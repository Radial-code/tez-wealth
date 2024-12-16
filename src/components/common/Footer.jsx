import Image from 'next/image'
import Link from 'next/link'
import Paragraph from '../custom-ui/Paragraph'
import { FOOTER_LINKS_DATA_LIST, SOCAL_MEDIA_DATA_LIST } from '@/utils/helper'

const Footer = () => {
    return (
        <footer className="bg-deep-sea-green relative z-10">
            <Image width={114} height={95} src="/assets/images/svg/footer-ellipse.svg" className="absolute lg:block hidden bottom-[5%] left-[3%] z-0"
                alt="footer-ellipse" />
            <div className="sm:py-[58px] pt-12 pb-11">
                <div className="container max-w-[1140px] xl:px-0 px-5 mx-auto">
                    <div className="flex flex-row custom-sm:justify-between justify-center flex-wrap -mx-3">
                        <div
                            className="lg:w-4/12 max-sm:pb-[54px] xl:px-0 px-3 max-sm:flex max-sm:flex-col max-custom-sm:items-center max-sm:justify-center sm:w-1/2">
                            <Link href="#" className="flex items-start"> <Image
                                        src="/assets/images/webp/logo.webp"
                                        height={39}
                                        width={207}
                                        alt="footerlogo"
                                        className=" max-w-[207px] w-full"
                                      />
                                </Link>
                            <Paragraph
                                className="max-w-[306px] max-sm:pt-6 max-custom-sm:text-center max-sm:mx-auto !text-white text-opacity-80 !leading-160 pt-3.5 sm:pb-[30px] pb-[35px]">
                                Secure, personalized insights with on-demand access to human advisors.</Paragraph>
                            <div className="flex gap-4">
                                {SOCAL_MEDIA_DATA_LIST.map((link, index) => (
                                    <Link
                                        key={index}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={link.href}
                                        className="w-10 h-10 rounded-full border-[0.8px] border-white duration-300 hover:scale-110 flex justify-center items-center"
                                    >
                                        <Image width={20} height={20} src={link.imgSrc} alt={link.alt} className="w-5 h-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-5/12 w-full lg:px-0 max-sm:justify-between px-3 max-sm:flex max-sm:flex-col max-sm:items-center sm:w-1/2">
                            <div className="flex justify-between w-full flex-wrap flex-row -mx-3">
                                {FOOTER_LINKS_DATA_LIST.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="w-1/2 max-xl:px-3 px-2 max-sm:pl-0 max-sm:pr-5">
                                        <ul className="flex flex-col gap-4 lg:-ml-7">
                                            <li className="text-white font-poppins text-base font-semibold !leading-150">
                                                {section.title}
                                            </li>
                                            {section.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <Link href={link.href} className="text-base hover:after:right-0 after:bg-white duration-300 after:absolute hover:after:left-0 after:bottom-0 after:w-0 after:left-[50%] after:h-[1px] after:bg-dark-white relative hover:text-opacity-100 hover:after:w-full after:duration-300 text-white text-opacity-80 font-poppins !leading-160">
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p
                className="py-4 border-t border-white font-poppins font-normal sm:text-base !leading-160 text-sm flex justify-center w-full text-opacity-80 text-white text-center">
                copyright ©{new Date().getFullYear()} Tez Wealth | All <br className='sm:hidden'/> rights reserved</p>
        </footer>
    )
}

export default Footer