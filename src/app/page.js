import Hero from "@/components/Home/Hero";
import JoinSection from "@/components/Home/JoinSection";
import MissionSection from "@/components/Home/MissionSection";
import PillarsSection from "@/components/Home/PillarsSection";
import VisionSection from "@/components/Home/VisionSection";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <VisionSection />
      <MissionSection />
      <PillarsSection />
      <JoinSection />
      {/* Add more sections below */}
    </div>
  );
}
