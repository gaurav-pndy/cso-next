import Image from "next/image";
import Link from "next/link";

// Data for contacts
const contacts = [
  {
    icon: "/GetInvolved/Get_Started_Mail.svg", // replace with your actual icon
    label: "General Inquiries",
    value: "info@cso.in",
    label2: "Partnerships & Sponsorships",
    value2: "partner@cso.in",
  },
  {
    icon: "/GetInvolved/Get_Started_Call.svg", // replace with your actual icon
    label: "Phone",
    value: "+91 92112 29927",
    label2: "Hours",
    value2: "Monday – Friday, 9:00 AM – 6:00 PM",
  },
  {
    icon: "/GetInvolved/Get_Started_Address.svg", // replace with your actual icon
    label: "Address",
    value: "B-1, Third Floor, Greater Kailash Enclave – II, New Delhi - 110048",
    label2: "",
    value2: "",
  },
];

export default function ReadySection() {
  return (
    <section className="flex flex-col  items-center w-full py-10 px-4">
      {/* Info Card */}
      <div className="bg-[#e9f4fa] rounded-3xl md:rounded-tr-3xl md:rounded-tl-3xl w-full max-w-4xl px-6 py-8 mx-auto mb-6 lg:mb-0">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#213c91] mb-4 text-center">
          Ready to Get Started ?
        </h2>
        <p className="text-[#213c91] text-center mb-12 max-w-3xl mx-auto">
          Take the first step toward making science accessible to everyone.
          Connect with us today to learn how you can contribute, collaborate,
          support our programs and make a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              {c.icon && (
                <Image src={c.icon} alt={c.label} width={56} height={56} />
              )}
              <div className="text-sm text-center text-[#213c91]">
                {c.label}
                <br />
                <span className="font-semibold">{c.value}</span>
              </div>
              {c.label2 && (
                <div className="text-sm text-center text-[#213c91]">
                  {c.label2}
                  <br />
                  <span className="font-semibold">{c.value2}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* CTA Gradient Card */}
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-center w-full max-w-3xl md:max-w-6xl rounded-3xl overflow-hidden bg-linear-to-tr from-[#0061e5] via-[#0061e5] via-20% to-[#2ca7bb] p-4 md:p-12 shadow-lg">
        {/* Illustration - replace src path with your actual image file */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src="/GetInvolved/Movement.png" // put your illustration in /public
            alt="Movement image"
            width={320}
            height={200}
            className="object-contain"
          />
        </div>
        {/* Content */}
        <div className="md:w-2/3 w-full flex flex-col justify-center px-2">
          <h2 className="text-white text-2xl md:text-4xl font-semibold mb-4">
            Join the Movement
          </h2>
          <p className="text-white text-base leading-8 opacity-90 mb-6">
            Every step in science is a step toward knowledge, opportunity, and
            empowerment. Take that step with us and help shape the next
            generation of innovators.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link
              href="/get-involved"
              className="bg-[#ffd800] w-full hover:bg-yellow-400 text-[#1d1d1f] font-semibold px-4 lg:px-8 py-3.5 md:w-fit rounded-xl transition-all duration-200 shadow flex justify-center"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/get-involved"
              className="bg-[#ffd800] hover:bg-yellow-400 text-[#1d1d1f] font-semibold px-4 lg:px-8 py-3.5 w-full md:w-fit rounded-xl transition-all duration-200 shadow flex justify-center"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
