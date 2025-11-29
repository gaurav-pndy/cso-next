"use client";

import Image from "next/image";
import Link from "next/link";
import DonationModal from "./DonationModal";
import { useState } from "react";

const options = [
  {
    icon: "/GetInvolved/Support_Our_Mission_01.svg",
    title: "Monthly Giving – Sustained Impact",
    desc: "Become a monthly donor and provide consistent support to ensure our programs continue to grow and reach more students across India.",
    price: "Starting from ₹500/month",
    iframe:
      "https://zohosecurepay.in/checkout/yrkuor3t-loxzosv3sxqyv/Monthly-Sponsor",
  },
  {
    icon: "/GetInvolved/Support_Our_Mission_02.svg",
    title: "Sponsor a Child – Transform a Life",
    desc: "Fully sponsor a child’s education at Kirby Place School and empower them with access to quality education, mentorship, and daily nourishment.",
    price: "₹2,000/month per child",
    iframe:
      "https://zohosecurepay.in/checkout/daqw2aej-ki4miac1a4ykw/Sponsor-a-Child",
  },
  {
    icon: "/GetInvolved/Support_Our_Mission_03.svg",
    title: "Fund a Workshop – Inspire Curiosity",
    desc: "Sponsor a complete science workshop for a school and help students experience hands-on learning, interactive experiments, and STEM enrichment.",
    price: "₹10,000 per workshop",
    iframe:
      "https://zohosecurepay.in/checkout/3na4qnsx-xk1dk3r231lkt/Fund-a-Workshop",
  },
  {
    icon: "/GetInvolved/Support_Our_Mission_04.svg",
    title: "Support Equipment – Enable Learning",
    desc: "Help us equip classrooms and labs with essential laboratory tools, learning materials, and STEM resources, creating a better environment for scientific exploration.",
    price: "₹5,000 – ₹50,000",
    iframe:
      "https://zohosecurepay.in/checkout/yb298btk-lbtcbk26ktvgn/Support-Equipment",
  },
];

export default function SupportSection() {
  const [open, setOpen] = useState(false);
  const [iframe, setIframe] = useState("");

  const handleOpen = (link) => {
    setIframe(link);
    setOpen(true);
  };
  return (
    <section className="flex justify-center py-10 px-4">
      <DonationModal
        isOpen={open}
        onClose={() => setOpen(false)}
        iframe={iframe}
      />

      <div className="bg-[#edf2f8] rounded-3xl w-full max-w-6xl p-10 mx-auto">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold text-[#ee7500] mb-4 text-center">
          Ways to Support Our Mission
        </h2>
        <p className="text-gray-800 text-center mb-12 md:text-xl">
          Join us in shaping the future of science education in India. Your
          contribution helps us reach underserved communities, inspire young
          minds, and create lasting impact. Choose the donation option that best
          aligns with your values and capacity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {options.map((opt, i) => (
            <div
              key={opt.title}
              className="bg-linear-to-b from-[#ee7500] to-[#0261e3] flex flex-col items-center rounded-3xl shadow-lg  py-8 px-4"
            >
              <div className="mb-6 relative w-36 h-32 ">
                <Image
                  src={opt.icon}
                  alt={opt.title + " icon"}
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </div>
              <div className="flex flex-col justify-between h-68 md:h-84 lg:h-104 xl:h-84">
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2 text-white text-center">
                    {opt.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 mb-2 text-center">
                    {opt.desc}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[#ffdd03] md:text-lg font-semibold mb-4 text-center">
                    {opt.price}
                  </div>
                  <button
                    onClick={() => handleOpen(opt.iframe)}
                    className="bg-[#ff7a22] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition-shadow duration-200 shadow hover:shadow-lg text-center"
                  >
                    Support
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
