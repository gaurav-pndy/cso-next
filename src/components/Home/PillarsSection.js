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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className=" rounded-3xl md:rounded-[3.5rem] overflow-hidden shadow-lg flex flex-col justify-end h-120 md:h-160  items-center relative p-4 md:p-6"
            >
              <div className="absolute inset-0">
                <Image
                  src={pillar.img}
                  alt={pillar.title}
                  fill
                  priority
                  quality={75}
                  className="object-cover! object-top!   relative!"
                />
              </div>
              <div className="z-10 h-auto xl:h-60 ">
                <h3
                  className="text-white text-lg md:text-2xl font-bold mb-2 leading-6 md:leading-normal "
                  dangerouslySetInnerHTML={{ __html: pillar.title }}
                ></h3>
                <p className="text-white text-sm md:text-lg md:mt-2">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
