import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const pillars = [
  {
    number: "Pillar 01",
    color: "#2eabb8",
    title: "Education for All",
    desc: "  At the Centre for Scientific Outreach (CSO), we believe education is the true foundation of empowerment. At our school in Kirby Place, New Delhi,        we provide underprivileged children with free, holistic education that        combines learning, care, and opportunity.",
    list: [
      "Quality education supporting both academic and personal growth",
      "Nutritious daily meals to boost health and focus",
      "Mentoring and guidance tailored to each child",
      "Strong literacy and numeracy foundations",
      "Early exposure to science to spark curiosity and confidence",
    ],
    footerDesc:
      "Through Education for All, we offer not just classrooms but futures full of possibility.",
    image: "/About/Four_Pillars_Impact_01.png",
    button: "#22A2FE",
  },
  {
    number: "Pillar 02",
    color: "#0061e5",
    title: "Scientific Outreach",
    desc: "We believe that science should be exciting, engaging, and accessible to all. Our programs go beyond textbooks, bringing science to life for schools and communities across Delhi and India.",
    list: [
      "Hands-on workshops in schools and colleges that ignite curiosity.",
      "Public talks, exhibitions, and festivals that make science exciting for all ages",
      "Training for teachers to use creative ways of teaching STEM",
      "Citizen science projects where communities join real research",
      " Easy-to-understand activities that make science relatable and inspiring",
    ],
    footerDesc:
      "Through Scientific Outreach, we turn learning into exploration and discovery.",
    image: "/About/Four_Pillars_Impact_02.png",
    button: "#1385DC",
  },
  {
    number: "Pillar 03",
    color: "#2eabb8",
    title: "Aviation & Technology Awareness",
    desc: "India is entering a new era in aviation and aerospace, and CSO is helping prepare the next generation for it. Through our initiatives, we bring together students, educators, industry experts, and policymakers to build a future-ready ecosystem.",
    list: [
      "Hosting India’s first National Aviation Olympiad 2026, a platform to discover and celebrate young talent",
      "Connecting academia, industry, and policy to create real opportunities for students",
      "Offering mentoring, exposure, and skill-building programs for aviation and aerospace careers",
      "Recognising talent nationally, encouraging innovators and dreamers to aim high",
      "Raising awareness about emerging technologies like drones and sustainable aviation",
    ],
    footerDesc:
      "Through Aviation & Technology Awareness, CSO is shaping the path for India’s future aviators, engineers, and innovators.",
    image: "/About/Four_Pillars_Impact_03.png",
    button: "#1385DC",
  },
  {
    number: "Pillar 04",
    color: "#0061e5",
    title: "Sustainability & Innovation",
    desc: "At the CSO, we believe science must serve both humanity and the environment. Our sustainability and innovation programs empower communities while advancing eco-friendly solutions for India’s future.",
    list: [
      "Run waste recycling and management projects for cleaner cities",
      "Launch green technology initiatives with local communities",
      "Create employment opportunities through eco-conscious enterprises",
      "Promote environmental awareness with science-based education",
      "Develop innovation labs focused on sustainable technologies",
    ],
    footerDesc:
      "Through Sustainability & Innovation, CSO is building a future where scientific progress and environmental responsibility go hand in hand.",
    image: "/About/Four_Pillars_Impact_04.png",
    button: "#1385DC",
  },
];

export default function PillarCards() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold text-[#0061e5] mb-4 text-center">
          Our Four Pillars of Impact
        </h2>
        <p className="text-gray-800 text-center mb-12 md:text-xl">
          At the Centre for Scientific Outreach (CSO), our mission is to make
          science accessible, meaningful, and transformative. Guided by four
          core pillars, we work across Delhi, India, and beyond to create
          lasting impact and empower future generations through science
          education and outreach.
        </p>
        <div className="flex flex-col gap-16 lg:gap-20">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="flex flex-col md:flex-row  md:justify-between gap-16"
            >
              <div className="flex-1">
                <span className="font-semibold text-[#eead64]">
                  {pillar.number}
                </span>
                <h3 className="text-[#0061e5] text-2xl lg:text-3xl font-bold mt-1 mb-4">
                  {pillar.title}
                </h3>

                <div className="text-gray-800 text-sm lg:text-base mb-4">
                  <p className="text-gray-800 text-sm lg:text-base mb-2">
                    {pillar.desc}
                  </p>
                  <span className="block font-medium text-[#2eabb8]  text-xl">
                    What We Do:
                  </span>
                  <ul className="list-disc ml-6 mb-2">
                    {pillar.list.map((item, index) => (
                      <li key={index} className="">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>{pillar.footerDesc}</p>
                </div>
                <button
                  className={`text-white py-3 px-8 mt-2 rounded-xl font-semibold cursor-pointer shadow-md`}
                  style={{ backgroundColor: pillar.color }}
                >
                  Support
                </button>
              </div>
              <div className="flex-1  h-full flex items-center justify-center relative">
                {/* Card with Play Button */}
                <div className="rounded-2xl   relative w-72 h-52 md:w-full md:h-96">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                  />
                  <button
                    className={`absolute left-[-26px] top-1/2 -translate-y-1/2 z-20 shadow-lg rounded-xl p-2 text-white flex items-center justify-center`}
                    style={{
                      width: 56,
                      height: 56,
                      backgroundColor: pillar.color,
                    }}
                    aria-label="Play Video"
                  >
                    <FaPlay size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
