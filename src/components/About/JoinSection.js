import Image from "next/image";
import Link from "next/link";

export default function JoinSection() {
  return (
    <section className="flex justify-center  py-10 px-4">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-center w-full max-w-3xl md:max-w-6xl rounded-2xl overflow-hidden bg-linear-to-tr from-[#0061e5] to-[#2ba7ba] p-8 md:p-12 shadow-lg">
        {/* Illustration - replace src path with your actual image file */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src="/About/Join Our Mission.png" // put your illustration in /public
            alt="Join Our Mission"
            width={320}
            height={200}
            className="object-contain"
          />
        </div>
        {/* Content */}
        <div className="md:w-2/3 w-full flex flex-col justify-center px-2">
          <h2 className="text-white text-2xl md:text-4xl font-semibold mb-4">
            Join Our Mission
          </h2>
          <p className="text-white text-base leading-8 opacity-90 mb-6">
            Whether you’re an educator shaping young minds, a curious student
            exploring the world of science, a dedicated volunteer, or a
            passionate supporter, there’s a meaningful role for you in our
            mission to make science exciting and inclusive.
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
