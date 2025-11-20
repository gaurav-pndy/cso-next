import Hero from "@/components/About/Hero";
import JoinSection from "@/components/About/JoinSection";
import MissionSection from "@/components/About/MissionSection";
import PillarCards from "@/components/About/PillarsCards";

export default function Home() {
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
