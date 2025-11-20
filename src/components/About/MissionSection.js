import Image from "next/image";

const features = [
  {
    img: "/About/SFE_01.png", // replace with actual file name
    title: "Science is for Everyone",
    desc: "Scientific discovery isn’t just for labs or elite institutions—it belongs to every curious mind. We believe everyone deserves the chance to learn, explore, and engage with science regardless of background.",
  },
  {
    img: "/About/SFE_02.png", // replace with actual file name
    title: "Real-World Impact",
    desc: "We aim for more than theory. Our programmes are designed to translate scientific knowledge into practical action that improves lives. From hands-on workshops to community science fairs, we create opportunities that foster growth, understanding, and empowerment.",
  },
  {
    img: "/About/SFE_03.png", // replace with actual file name
    title: "Inclusive Education",
    desc: "Quality science education is a fundamental right—not a privilege. We work to break down socioeconomic, geographic, and resource-based barriers so that students everywhere in India can access meaningful learning.",
  },
  {
    img: "/About/SFE_04.png", // replace with actual file name
    title: "Sustainable Future",
    desc: "We are committed to environmental consciousness and green innovation. Every project at CSO is designed with sustainability in mind—because we believe science should serve humanity and protect our planet for future generations.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-14 px-4 ">
      <div className="grid grid-cols-1 max-w-4xl mx-auto md:grid-cols-2 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-[#0061e5] rounded-lg p-6 py-10 md:px-10 md:py-14 text-white flex flex-col items-center text-center shadow-lg"
          >
            <div className="mb-4 w-32 h-32 flex items-center justify-center">
              <Image
                src={f.img}
                alt={f.title + " icon"}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg md:text-2xl font-bold my-4">{f.title}</h3>
            <p className="text-base md:text-lg opacity-90">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
