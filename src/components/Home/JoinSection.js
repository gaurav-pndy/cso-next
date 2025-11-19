"use client";

import { useState } from "react";

export default function JoinSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#0061e5] py-20 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-3 text-center">
          Join Us in Making Science Accessible
        </h2>
        <p className="text-white text-base md:text-lg opacity-80 text-center mb-2">
          Whether you’re a school, volunteer, donor, or just passionate about
          education,
        </p>
        <p className="text-white text-base md:text-lg opacity-80 text-center mb-6">
          there’s a place for you in our mission.
        </p>
        <form
          className="flex flex-col md:flex-row items-center gap-3 "
          onSubmit={(e) => {
            e.preventDefault();
            // Add your form submit logic here
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address..."
            className="flex-1 py-3.5 px-4 md:px-8 rounded-xl text-md focus:outline-none bg-white focus:ring-2 focus:ring-yellow-400 w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-[#ffd800] hover:bg-yellow-400 text-[#1d1d1f] font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 w-full md:w-auto"
          >
            Get Involved Today
          </button>
        </form>
        <p className="text-white w-full opacity-80 mt-4 text-sm text-left">
          We’ll never share your email with anyone else.
        </p>
      </div>
    </section>
  );
}
