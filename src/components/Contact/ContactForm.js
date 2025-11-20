"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function ContactForm() {
  const [phone, setPhone] = useState("");

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold text-[#0061e5] mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-800 text-center mb-12 md:text-xl">
          From classroom education to national aviation olympiad, we are
          committed to making science accessible, engaging, and inspiring for
          communities across India. Our initiatives reach students from all
          backgrounds, empowering them to explore, learn, and achieve their
          potential.
        </p>
        <form className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block mb-2 text-gray-700 font-medium"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="bg-[#f6f8fc] rounded-lg px-4 py-3 w-full border border-gray-200"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block mb-2 text-gray-700 font-medium"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="bg-[#f6f8fc] rounded-lg px-4 py-3 w-full border border-gray-200"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block mb-2 text-gray-700 font-medium"
              >
                Phone Number
              </label>
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={setPhone}
                inputProps={{
                  required: true,
                  id: "phone",
                  className:
                    "bg-[#f6f8fc] rounded-lg px-4 py-3 w-full border border-gray-200",
                }}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-gray-700 font-medium"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="bg-[#f6f8fc] rounded-lg px-4 py-3 w-full border border-gray-200"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-gray-700 font-medium"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="bg-[#f6f8fc] rounded-lg px-4 py-3 w-full border border-gray-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="bg-[#f6f8fc] rounded-lg px-4 py-3 w-full border border-gray-200 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#0061e5] text-white font-semibold py-3 px-8 rounded-2xl cursor-pointer w-fit mt-2 hover:bg-[#0b4ebd] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
