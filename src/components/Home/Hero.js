import Image from "next/image";
import Link from "next/link";
import { FaRegPlayCircle } from "react-icons/fa";
import { Montserrat_Alternates } from "next/font/google";

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section className="relative md:flex items-end px-4 min-h-screen md:min-h-160 lg:min-h-200 xl:min-h-screen bg-gray-50 overflow-hidden pb-10 md:pb-16 xl:pb-28">
      {/* Background Image */}
      <div className="absolute h-[30%] md:h-auto bottom-0 right-0 md:inset-0">
        <Image
          src="/hero-img.png"
          alt="Hero Image"
          fill
          priority
          quality={75}
          className=" object-cover! relative!"
          sizes="100vw"
        />
      </div>
      {/* Overlay for readability */}

      {/* Content */}
      <section className="max-w-7xl  w-full mx-auto">
        <div className="relative  z-20 flex flex-col max-w-2xl pt-28 lg:pt-10">
          <h1
            className={`text-4xl text-[#24242e] md:text-5xl lg:text-6xl font-bold mb-3 lg:leading-18 ${montserrat.className} `}
          >
            Centre for{" "}
            <span className="text-[#0061e5]">Scientific Outreach (CSO)</span>
          </h1>
          <p className="text-[#46b4c1] font-medium text-sm md:text-xl mb-2 md:mb-4">
            सा विद्या या विमुक्तये — That is knowledge which liberates.
          </p>
          <p className="text-gray-700 max-w-104 xl:max-w-full lg:text-lg lg:leading-8">
            At CSO, we believe that science and technology should be within
            everyone’s reach. We are a not-for-profit organization committed to
            breaking barriers and opening doors of opportunity
          </p>
          <p className="text-gray-700 max-w-104 xl:max-w-full lg:text-lg mb-2 md:mb-4 lg:leading-8">
            From nurturing curiosity in young minds from underserved communities
            to empowering the next generation of scientists, innovators, and
            aviators, CSO is creating pathways where knowledge meets
            possibility.{" "}
          </p>
          <p className="text-gray-800 max-w-104 lg:max-w-full font-medium lg:text-lg mb-4 md:mb-8 lg:leading-8">
            Together, we’re not just spreading education — we’re igniting
            futures.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-10">
            <Link
              href="/about-us"
              className="bg-[#2eabb8] cursor-pointer w-full hover:bg-cyan-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300  focus:outline-none flex justify-center"
            >
              Read More
            </Link>
            <a
              href="https://nationalaviationolympiad.com/"
              target="_blank"
              className="bg-[#eb6747] text-white w-full cursor-pointer hover:bg-[#e8532e] py-4 px-6 rounded-lg font-semibold flex justify-center items-center transition-all duration-300 focus:outline-none"
            >
              National Aviation Olympiad
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
