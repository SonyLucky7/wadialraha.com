import Link from "next/link";
import { SERVICES, COMPANY, FAQS } from "@/lib/constants";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { EmergencyCTASection } from "@/components/home/EmergencyCTASection";
import { ServiceProcess } from "@/components/home/ServiceProcess";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { MaintenanceSection } from "@/components/home/MaintenanceSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ServiceCoverage } from "@/components/home/ServiceCoverage";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <WhoWeAre />
      <ServicesOverview />
      <EmergencyCTASection />
      <ServiceProcess />
      <WhyChooseUs />
      <MaintenanceSection />
      <IndustriesSection />
      <ServiceCoverage />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}
