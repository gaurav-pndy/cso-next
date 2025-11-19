import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="relative z-10 py-16 px-4  ">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center lg:items-center gap-12  xl:gap-48">
        {/* Images Grid */}
        <div className="relative flex-shrink-0">
          {/* Top Row */}
          <div className="flex gap-4 lg:gap-8 mb-4 lg:mb-8">
            {/* Top Left - Tall image */}
            <div className="w-1/2 h-60 md:w-1/2 md:h-90 rounded-3xl overflow-hidden  bg-gray-100">
              <Image
                src="/Home/Vision_01.png"
                alt="Student with airplane"
                width={200}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Top Right - Square image (positioned higher) */}
            <div className="w-1/2 h-44 mt-8 md:mt-16 md:w-1/2 md:h-60 rounded-3xl overflow-hidden  bg-gray-100 ">
              <Image
                src="/Home/Vision_02.png"
                alt="Student outdoor with model"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap-4 lg:gap-8">
            {/* Bottom Left - Wide image */}
            <div className="w-1/2 h-44 md:w-1/2 md:h-60 rounded-3xl overflow-hidden  bg-gray-100">
              <Image
                src="/Home/Vision_03.png"
                alt="Students at desk"
                width={200}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Bottom Right - Wide image */}
            <div className="w-1/2 -mt-8 md:-mt-14 h-44 md:w-1/2 md:h-60 rounded-3xl overflow-hidden  bg-gray-100">
              <Image
                src="/Home/Vision_04.png"
                alt="Student with electronics kit"
                width={200}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex-1 text-center md:text-left max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#292933]">
            Our Vision
          </h2>
          <p className="text-[#2678e9] font-semibold text-xl md:text-2xl mb-6 leading-relaxed">
            A world where science drives innovation, equality, and growth.
          </p>
          <p className="text-[#515159] font-medium text-base md:text-lg leading-relaxed">
            To be a leading catalyst for scientific literacy, innovation and
            community engagement by bridging the gap between science and
            society.
          </p>
        </div>
      </div>
    </section>
  );
}
