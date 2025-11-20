import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { Montserrat_Alternates } from "next/font/google";

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cards = [
  {
    color: "#2eabb8",
    title: "Educational Partnerships – For Schools",
    desc: "Partner with CSO to bring hands-on science workshops, competitions, and Olympiads directly to your students. Together, we can spark curiosity, enhance STEM learning, and inspire the innovators of tomorrow.",
    list: [
      "Conduct interactive science workshops for students",
      "Facilitate teacher training and professional development programs",
      "Encourage participation in the National Aviation Olympiad 2026",
      "Provide customized STEM curriculum support for classrooms",
      "Guide students in science fairs and exhibitions",
    ],

    image: "/GetInvolved/Get_Involved_01.png",
    button: "#22A2FE",
  },
  {
    color: "#0061e5",
    title: "Contribute Your Time, Knowledge, and Mentorship",
    desc: "Help us reach more communities and inspire young minds by sharing your expertise, passion, and time.",
    list: [
      "Teach at Kirby Place School and empower students with quality education",
      " Lead science workshops and hands-on demonstrations",
      "Mentor students in STEM subjects and nurture their curiosity",
      "Help organize community outreach events",
      "Contribute to curriculum development for impactful learning",
    ],

    image: "/GetInvolved/Get_Involved_02.png",
    button: "#1385DC",
  },
  {
    color: "#2eabb8",
    title: "Invest in Future Scientists",
    desc: "Support our mission financially and create a lasting impact in underserved communities.",
    list: [
      "Fund education for underprivileged children",
      "Sponsor science equipment, materials, and lab resources",
      "Support the National Aviation Olympiad and other STEM initiatives",
      "Enable teacher training programs",
      "Create scholarships for deserving students",
    ],

    image: "/GetInvolved/Get_Involved_03.png",
    button: "#1385DC",
  },
  {
    color: "#0061e5",
    title: "Corporate Partnerships – Amplify Your Impact",
    desc: "Join as a corporate partner to expand our reach and strengthen STEM education in India, while creating meaningful social impact for your organization.",
    list: [
      "Explore CSR partnership opportunities aligned with science education",
      "Launch employee volunteer programs to engage your team",
      "Sponsor major events, competitions, and science fairs",
      "Co-develop educational content and curriculum initiatives",
      "Gain brand visibility in the education and STEM sector",
    ],

    image: "/GetInvolved/Get_Involved_04.png",
    button: "#1385DC",
  },
];

export default function InvolveSection() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold text-[#0061e5] mb-4 text-center">
          Get Involved with CSO
        </h2>
        <p className="text-gray-800 text-center mb-12 md:text-xl">
          Join our mission to make science accessible to everyone. Whether
          you’re an educator, student, volunteer, or organization, there’s a way
          for you to contribute. Find the path that aligns with your passion and
          skills.
        </p>
        <div className="flex flex-col gap-16 lg:gap-20">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="flex flex-col md:flex-row  md:justify-between gap-16"
            >
              <div className="flex-1">
                <h3
                  className={`text-[#0061e5] text-2xl lg:text-3xl font-bold mt-1 mb-4 ${montserrat.className} `}
                >
                  {card.title}
                </h3>

                <div className="text-gray-800 text-sm lg:text-base mb-4">
                  <p className="text-gray-800 text-sm lg:text-base mb-2">
                    {card.desc}
                  </p>
                  <span className="block font-medium text-[#2eabb8]  text-xl">
                    What We Do:
                  </span>
                  <ul className="list-disc ml-6 mb-2">
                    {card.list.map((item, index) => (
                      <li key={index} className="">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`text-white py-3 px-8 mt-2 rounded-xl font-semibold cursor-pointer shadow-md`}
                  style={{ backgroundColor: card.color }}
                >
                  Support
                </button>
              </div>
              <div className="flex-1  h-full flex items-center justify-center relative">
                {/* Card with Play Button */}
                <div className="rounded-2xl   relative w-72 h-52 md:w-full md:h-80">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
