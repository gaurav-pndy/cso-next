import BenefitsSection from "@/components/GetInvolved/BenefitsSection";
import Hero from "@/components/GetInvolved/Hero";
import InvolveSection from "@/components/GetInvolved/InvolveSection";
import ReadySection from "@/components/ReadySection";
import SupportSection from "@/components/GetInvolved/SupportSection";

export const metadata = {
  title: "Get Involved | Centre for Scientific Outreach",
  description:
    "Join our mission to make science accessible! Whether you're a school, volunteer, donor, or passionate supporter, there's a role for you at the Centre for Scientific Outreach to empower education and innovation.",
};

export default function GetInvolvedPage() {
  return (
    <div className="relative">
      <Hero />
      <InvolveSection />
      <SupportSection />
      <BenefitsSection />
      <ReadySection />
      {/* Add more sections below */}
    </div>
  );
}
