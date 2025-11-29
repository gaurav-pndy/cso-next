import Image from "next/image";
import Link from "next/link";

export default function BenefitsSection() {
  return (
    <section className="flex justify-center  py-10 px-4">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-center w-full max-w-3xl md:max-w-6xl rounded-3xl overflow-hidden bg-[#ffdd03] p-4 md:p-12 shadow-lg">
        {/* Illustration - replace src path with your actual image file */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src="/GetInvolved/Benefits.png" // put your illustration in /public
            alt="Key Benefits"
            width={320}
            height={200}
            className="object-contain"
          />
        </div>
        {/* Content */}
        <div className="md:w-2/3 w-full flex flex-col justify-center px-2">
          <h2 className="text-[#0061e5] text-2xl md:text-4xl font-semibold mb-4">
            Key Benefits of Supporting CSO
          </h2>
          <p className="text-gray-800 text-base leading-8 opacity-90 mb-6">
            Trusted programs impacting students across New Delhi and India
            <br />
            Transparent and accountable use of donations
            <br />
            Opportunities to see tangible results in education and outreach
            <br />
            Strengthening the foundation of STEM learning and innovation <br />
            Tax exemption (80G) certificate
          </p>
        </div>
      </div>
    </section>
  );
}
