"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Page-level navigation links for easy mapping
const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent py-2 px-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo + Desktop Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo-color.svg"
              alt="CSO Logo"
              width={180}
              height={80}
              priority
            />
          </Link>
          <nav className="hidden lg:flex space-x-12 text-gray-700 ">
            {navLinks.map((link) => (
              <Link
                className={`${isActive("/about") && "text-white"} ${
                  isActive(link.href) && "font-semibold"
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Donate Button */}
        <div className="hidden lg:block">
          <Link
            href="/donate"
            className="bg-linear-to-r from-[#2da9b9] to-[#0366e2] text-white px-5 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Open menu"
          className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onClick={() => setSidebarOpen(true)}
        >
          <svg width={28} height={28} fill="none">
            <rect width="28" height="4" rx="2" fill="#0366e2" />
            <rect y="12" width="28" height="4" rx="2" fill="#2da9b9" />
            <rect y="24" width="28" height="4" rx="2" fill="#0366e2" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed inset-y-0 right-0 w-[270px] bg-white shadow-lg z-50 flex flex-col p-6"
          >
            <button
              aria-label="Close menu"
              className="self-end mb-4 p-2 text-gray-500 rounded focus:outline-none"
              onClick={() => setSidebarOpen(false)}
            >
              <svg width={24} height={24} fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="#0366e2"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <nav className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-700 hover:text-cyan-600 transition"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                className="bg-linear-to-r from-[#2da9b9] to-[#0366e2] text-white px-5 py-3 rounded-lg shadow-md hover:scale-105 transition-transform mt-4 text-center"
                onClick={() => setSidebarOpen(false)}
              >
                Donate Now
              </Link>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
      {/* Overlay for closing sidebar on click */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50  z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </header>
  );
}
