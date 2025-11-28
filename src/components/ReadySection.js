"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ReadySection() {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <section className="flex flex-col  items-center w-full py-10 px-4">
      {/* Info Card */}
      <div className="bg-[#e9f4fa] rounded-3xl md:rounded-none md:rounded-tr-3xl md:rounded-tl-3xl w-full max-w-4xl px-6 py-8 mx-auto mb-6 lg:mb-0">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#213c91] mb-4 text-center">
          Ready to Get Started ?
        </h2>
        <p className="text-[#213c91] text-center mb-12 max-w-3xl mx-auto">
          Take the first step toward making science accessible to everyone.
          Connect with us today to learn how you can contribute, collaborate,
          support our programs and make a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/GetInvolved/Get_Started_Mail.svg"
              alt="Mail icon"
              width={56}
              height={56}
            />

            <div className="text-sm text-center text-[#213c91]">
              General Inquiries
              <br />
              <a
                href="mailto:info@thecso.in"
                target="_blank"
                className="font-semibold"
              >
                info@thecso.in
              </a>
            </div>

            <div className="text-sm text-center text-[#213c91]">
              Partnerships & Sponsorships
              <br />
              <a
                href="mailto:partner@thecso.in"
                target="_blank"
                className="font-semibold"
              >
                partner@thecso.in
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              src="/GetInvolved/Get_Started_Call.svg"
              alt="Call icon"
              width={56}
              height={56}
            />

            <div className="text-sm text-center text-[#213c91]">
              Phone
              <br />
              <a href="tel:+91 92112 29927" className="font-semibold">
                +91 92112 29927
              </a>
            </div>

            <div className="text-sm text-center text-[#213c91]">
              Hours
              <br />
              <span className="font-semibold">
                Monday – Friday, 9:00 AM – 6:00 PM
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/GetInvolved/Get_Started_Address.svg"
              alt="Mail icon"
              width={56}
              height={56}
            />

            <div className="text-sm text-center text-[#213c91]">
              Address
              <br />
              <span className="font-semibold">
                B-1, Third Floor, Greater Kailash Enclave – II, New Delhi -
                110048
              </span>
            </div>
          </div>
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
              href="/contact"
              className="bg-[#ffd800] w-full hover:bg-yellow-400 text-[#1d1d1f] font-semibold px-4 lg:px-8 py-3.5 md:w-fit rounded-xl transition-all duration-200 shadow flex justify-center"
            >
              Volunteer With Us
            </Link>
            <button
              onClick={() => setShowDonate(true)}
              className="bg-[#ffd800] cursor-pointer hover:bg-yellow-400 text-[#1d1d1f] font-semibold px-4 lg:px-8 py-3.5 w-full md:w-fit rounded-xl transition-all duration-200 shadow flex justify-center"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showDonate && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-9999 px-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white overflow-hidden rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] md:max-h-188 h-full relative"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                onClick={() => setShowDonate(false)}
                className="absolute top-3 right-7 text-gray-600 hover:text-black text-3xl font-bold"
              >
                ×
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://zohosecurepay.in/checkout/fq35wqxe-8t0it3x73g4s1/Donate-Now"
                style={{ border: "none" }}
                title="Donate Now"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
