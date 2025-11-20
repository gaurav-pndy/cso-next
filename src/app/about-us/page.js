import Hero from "@/components/About/Hero";
import JoinSection from "@/components/About/JoinSection";
import MissionSection from "@/components/About/MissionSection";
import PillarCards from "@/components/About/PillarsCards";

export const metadata = {
  title: "About CSO",
  description:
    "Building a foundation of knowledge, opportunity, and empowerment through four transformative initiatives.",
};

export default function AboutPage() {
  return (
    <div className="relative">
      <Hero />
      <MissionSection />
      <PillarCards />
      <JoinSection />

      {/* Add more sections below */}
    </div>
  );
}
