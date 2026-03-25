import HeroSlider from "@/components/sections/HeroSlider";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyRedAlert from "@/components/sections/WhyRedAlert";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSlider />
      <ServicesOverview />
      <WhyRedAlert />
      <StatsSection />
      <Testimonials />
      <ServiceAreas />
      <CTABanner />
    </div>
  );
}
