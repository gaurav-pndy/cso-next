import Image from "next/image";
import Link from "next/link";
import { FaRegPlayCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative md:flex items-end px-4 min-h-screen md:min-h-160 lg:min-h-200 xl:min-h-screen bg-gray-50 overflow-hidden pb-10 md:pb-16 lg:pb-28">
      {/* Background Image */}
      <div className="absolute bottom-0 right-0 inset-0">
        <Image
          src="/GetInvolved/Hero Image.png"
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
        <div className="relative  z-20 flex flex-col max-w-xl pt-28 lg:pt-10">
          <h1 className="text-4xl text-[#0061e5] md:text-5xl lg:text-6xl font-bold mb-3 lg:leading-18">
            Get Involved with CSO
          </h1>

          <p className="text-gray-800 max-w-104 xl:max-w-full lg:text-lg lg:leading-8 mb-6">
            Join our mission to make science accessible to everyone. Whether
            you’re an educator, student, volunteer, or organization, there’s a
            way for you to contribute. Find the path that aligns with your
            passion and skills.
          </p>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-10">
            <Link
              href="/submit"
              className="bg-[#2eabb8] cursor-pointer w-full md:w-40 hover:bg-cyan-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300  focus:outline-none flex justify-center"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
