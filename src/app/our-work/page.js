import ActionSection from "@/components/OurWork/ActionSection";
import Hero from "@/components/OurWork/Hero";
import ImpactSection from "@/components/OurWork/ImpactSection";

export const metadata = {
  title: "Our Work | Centre for Scientific Outreach",
  description:
    "Discover the impactful programs and initiatives at the Centre for Scientific Outreach (CSO). Explore projects that drive scientific literacy, innovation, and community engagement.",
};

export default function OurWorkPage() {
  return (
    <div className="relative">
      <Hero />
      <ActionSection />
      <ImpactSection />

      {/* Add more sections below */}
    </div>
  );
}
