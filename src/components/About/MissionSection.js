"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    img: "/About/SFE_01.png",
    title: "Science is for Everyone",
    desc: "Scientific discovery isn't just for labs or elite institutions—it belongs to every curious mind. We believe everyone deserves the chance to learn, explore, and engage with science regardless of background.",
  },
  {
    img: "/About/SFE_02.png",
    title: "Real-World Impact",
    desc: "We aim for more than theory. Our programmes are designed to translate scientific knowledge into practical action that improves lives. From hands-on workshops to community science fairs, we create opportunities that foster growth, understanding, and empowerment.",
  },
  {
    img: "/About/SFE_03.png",
    title: "Inclusive Education",
    desc: "Quality science education is a fundamental right—not a privilege. We work to break down socioeconomic, geographic, and resource-based barriers so that students everywhere in India can access meaningful learning.",
  },
  {
    img: "/About/SFE_04.png",
    title: "Sustainable Future",
    desc: "We are committed to environmental consciousness and green innovation. Every project at CSO is designed with sustainability in mind—because we believe science should serve humanity and protect our planet for future generations.",
  },
];

function FeatureCard({ feature }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full min-h-72 lg:min-h-90 h-full cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <div
          className="bg-[#0061e5] h-full rounded-lg p-6 xl:py-10 xl:px-10  text-white flex flex-col justify-center items-center text-center shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-36 h-36 mb-8 relative">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-center ">
            {feature.title}
          </h3>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 bg-[#0061e5] rounded-lg p-6 xl:py-10 xl:px-10  text-white flex flex-col items-center text-center shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-white text-lg lg:text-base text-center leading-relaxed">
            {feature.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function MissionSection() {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <FeatureCard key={idx} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
