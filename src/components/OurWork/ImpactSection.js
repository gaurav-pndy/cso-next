import Image from "next/image";
import Link from "next/link";

export default function ImpactSection() {
  return (
    <section className="flex justify-center  py-10 px-4">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-center w-full max-w-3xl md:max-w-6xl rounded-2xl overflow-hidden bg-linear-to-tr from-[#0061e5] via-[#0061e5] via-20% to-[#e1740d] p-4 md:p-12 shadow-lg">
        {/* Illustration - replace src path with your actual image file */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src="/Work/Impact.png" // put your illustration in /public
            alt="Impact image"
            width={320}
            height={200}
            className="object-contain"
          />
        </div>
        {/* Content */}
        <div className="md:w-2/3 w-full flex flex-col justify-center px-2">
          <h2 className="text-white text-2xl md:text-4xl font-semibold mb-4">
            Be Part of Our Impact
          </h2>
          <p className="text-white text-base leading-8 opacity-90 mb-6">
            Join us in creating lasting change through science education and
            outreach. Together, we can make science accessible to everyone and
            inspire a generation of curious minds.
          </p>
          <Link
            href="/get-involved"
            className="bg-[#ffd800] hover:bg-yellow-400 text-[#1d1d1f] font-semibold px-8 py-3.5 w-fit rounded-xl transition-all duration-200 shadow"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}
