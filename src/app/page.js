import AboutTej from "@/components/AboutTej";
import Faqs from "@/components/common/Faqs";
import Footer from "@/components/common/Footer";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import WhyChoose from "@/components/WhyChoose";
import YourFinances from "@/components/YourFinances";

export default function Home() {
  return (
    <div className="flex flex-col max-w-[1920px] mx-auto">
      <Hero />
      <div class="lg:bg-accordion xl:pb-40 lg:pb-32 md:pb-28 pb-[100px] bg-full">
        <AboutTej />
        <OurServices />
      </div>
      <WhyChoose />
      <Faqs />
      <YourFinances />
      <Footer />
    </div>
  );
}
