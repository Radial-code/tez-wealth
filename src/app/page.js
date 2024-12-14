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
      <div class="lg:bg-accordion bg-full">
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
