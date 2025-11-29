import Image from "next/image";

const works = [
  {
    id: 1,
    title: "Kirby Place School",
    subtitle: "Education for All",
    description:
      "Transforming lives through accessible education in New Delhi’s underserved communities.",
    highlights: [
      "Free education for underprivileged children",
      "Daily nutritious meals to fuel learning",
      "Focused programs on literacy, numeracy, and scientific curiosity",
      "Personalized mentoring and guidance for every child",
      "Building strong foundations for lifelong learning",
    ],
    image: "/Work/01.png", // use image with gradient+photo as one
  },
  {
    id: 2,
    title: "Scientific Outreach Programs",
    subtitle: "Making Science Accessible",
    description:
      "We aim to make science exciting, approachable, and inspiring for thousands of students across India. Our outreach programs bridge the gap between curiosity and knowledge, encouraging young minds to explore the wonders of science.",
    highlights: [
      "Interactive science workshops in schools and colleges",
      "Public science talks, exhibitions, and demonstrations",
      "Teacher training programs to enhance STEM education",
      "Citizen science projects fostering community participation",
      "Community-based learning initiatives",
    ],
    image: "/Work/02.png", // use image with gradient+photo as one
  },
  {
    id: 3,
    title: "National Aviation Olympiad 2026",
    subtitle: "Aviation & Technology Awareness",
    description:
      "Preparing India’s youth for careers in the fast-growing aviation and aerospace sector, the National Aviation Olympiad is a platform that combines learning, competition, and career preparation.",
    highlights: [
      "India’s first large-scale aviation-focused Olympiad",
      "Connecting students with industry experts, academia, and policymakers",
      "Career guidance and preparation for aviation and aerospace professions",
      "National platform for talent recognition and skill development",
      "Nurturing the next generation of aviation professionals",
    ],
    image: "/Work/03.png", // use image with gradient+photo as one
  },
];

export default function ActionSection() {
  return (
    <section className="py-16 px-4">
      <div className=" max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold text-[#0061e5] mb-4 text-center">
          Our Work in Action
        </h2>
        <p className="text-gray-800 text-center mb-12 md:text-xl">
          From classroom education to national aviation olympiad, we are
          committed to making science accessible, engaging, and inspiring for
          communities across India. Our initiatives reach students from all
          backgrounds, empowering them to explore, learn, and achieve their
          potential.
        </p>
        {/* Cards */}
        <div className="flex flex-col gap-8">
          {works.map((work, idx) => (
            <div
              key={work.title}
              className="relative rounded-2xl overflow-hidden shadow-lg w-full h-128 bg-yellow-300 md:h-132 lg:h-120 flex items-center"
            >
              {/* Full-background Image */}
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover md:object-left  z-0"
                priority={idx === 0}
              />
              {/* Overlay content */}
              <div className="absolute  inset-0 flex items-center justify-end">
                <div className="px-6 py-6 w-full md:w-2/3 text-white bg-transparent">
                  <span className="font-medium text-sm md:text-base lg:text-xl mb-1 block opacity-70">
                    {work.subtitle}
                  </span>
                  <h3 className="font-semibold text-xl md:text-2xl lg:text-4xl mb-2">
                    {work.title}
                  </h3>
                  <p className="mb-2 text-sm md:text-base lg:text-lg opacity-90">
                    {work.description}
                  </p>
                  <span className="font-semibold opacity-90 md:text-lg lg:text-xl">
                    Key Highlights:
                  </span>
                  <ul className="list-disc ml-4 space-y-2  text-sm md:text-base lg:text-lg opacity-90">
                    {work.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {work.id === 3 && (
                    <a
                      href="https://nationalaviationolympiad.com/"
                      target="_blank"
                      className="bg-[#eb6747] text-white w-fit mt-4  cursor-pointer hover:bg-[#e8532e] py-3 px-6 rounded-lg font-semibold flex justify-center items-center transition-all duration-300 focus:outline-none"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
