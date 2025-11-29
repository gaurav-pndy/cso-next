"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const pillars = [
  {
    img: "/Home/Pillar_01.png", // replace with correct image name
    title: "Education <br/> for All",
    desc: "Through Kirby Place School, we provide free, quality education to underprivileged children, opening doors to brighter futures.",
  },
  {
    img: "/Home/Pillar_02.png", // replace with correct image name
    title: "Scientific <br/> Outreach",
    desc: "We make science engaging and accessible with workshops, talks, and community programs that spark curiosity and learning.",
  },
  {
    img: "/Home/Pillar_03.png", // replace with correct image name
    title: "Aviation <br/> & Technology",
    desc: "Through the National Aviation Olympiad 2026 and awareness initiatives, we prepare youth to explore careers in aviation and aerospace.",
  },
  {
    img: "/Home/Pillar_04.png", // replace with correct image name
    title: "Sustainability <br/> & Innovation",
    desc: "We promote eco-friendly solutions with recycling, green technology, and community projects driving sustainable growth.",
  },
];

function PillarCard({ pillar }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className=" rounded-3xl md:rounded-[3.5rem]   flex flex-col justify-end h-72 md:h-80 lg:h-96 xl:h-110  items-center relative perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full "
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className=" p-4 cursor-pointer shadow-lg rounded-3xl md:rounded-[3.5rem] bg-yellow-500  flex flex-col h-full justify-end"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0">
            <Image
              src={pillar.img}
              alt={pillar.title}
              fill
              priority
              quality={75}
              className="object-cover! object-top!  rounded-3xl md:rounded-[3.5rem] relative!"
            />
          </div>
          <h3
            className="text-white z-10 text-lg md:text-xl lg:text-2xl font-bold mb-2 leading-6 md:leading-normal "
            dangerouslySetInnerHTML={{ __html: pillar.title }}
          ></h3>
        </div>
        <div
          className="absolute inset-0 bg-[#0061e5] rounded-3xl md:rounded-[3.5rem] p-6 xl:py-10 xl:px-10  text-white flex flex-col h-full justify-center items-center text-center shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-white text-sm md:text-base lg:text-xl ">
            {pillar.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function PillarsSection() {
  return (
    <section className="bg-[#f7f7fb] py-14 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold text-[#0061e5] mb-4">
          Our Four Pillars of Impact
        </h2>
        <p className="text-gray-800 mb-10 md:text-xl">
          Building a foundation of knowledge, opportunity, and empowerment
          <br className="hidden md:block" /> through four transformative
          initiatives.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {pillars.map((pillar, idx) => (
            <PillarCard key={idx} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
