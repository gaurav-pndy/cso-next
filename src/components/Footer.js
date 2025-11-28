import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9fb] text-[#24242e] px-4 pt-12 pb-2 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-xl text-[#0061e5] mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/our-work">
                <span>Our Work</span>
              </Link>
            </li>
            <li>
              <Link href="/get-involved">
                <span>Get Involved</span>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h4 className="font-semibold text-xl text-[#0061e5] mb-6">
            Contact Us
          </h4>
          <div className="space-y-3 ">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#2173e7]" />
              <a href="mailto:info@cso.in">info@cso.in</a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-[#2173e7]" />
              <a href="tel:+91921122927">+91 9211229927</a>
            </div>
            <div className="flex items-start gap-2">
              <FaGlobe className="text-[#2173e7] mt-1.5" />
              <span>
                B-1, Third Floor,
                <br />
                Greater Kailash Enclave – II,
                <br />
                New Delhi - 110048
              </span>
            </div>
          </div>
        </div>
        {/* Resources */}
        <div>
          <h4 className="font-semibold text-xl text-[#0061e5] mb-6">
            Resources
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/privacy">
                <span>Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <span>Terms & Conditions</span>
              </Link>
            </li>
            <li>
              <Link href="/refund">
                <span>Refund Policy</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Get in Touch */}
        <div>
          <h4 className="font-semibold text-xl text-[#0061e5] mb-6">
            Get in Touch
          </h4>
          <p className="mb-3  opacity-80">
            Stay connected with us and let’s hear more stories about Science and
            education.
          </p>
          <div className="flex flex-wrap gap-4 xl:gap-6 text-[#2173e7] text-xl">
            <a
              className="bg-[#e1ebf9] p-2 rounded-full"
              href="https://www.facebook.com/scientific.outreach"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              className="bg-[#e1ebf9] p-2 rounded-full"
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              className="bg-[#e1ebf9] p-2 rounded-full"
              href="https://www.instagram.com/cso_foundation/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              className="bg-[#e1ebf9] p-2 rounded-full"
              href="https://www.linkedin.com/company/csofoundation/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      {/* Logo and Copyright */}
      <div className="bg-[#f5f5fa] mt-6 pt-4   ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-3 md:mb-0">
            <Image
              src="/logo-color.svg"
              alt="CSO Logo"
              width={148}
              height={80}
            />
            <span className="text-[#46b4c1] font-medium text-xs lg:text-sm">
              सा विद्या या विमुक्तये <br />
              <span className="text-[#24242e]">
                That is knowledge which liberates.
              </span>
            </span>
          </div>
          <div className="text-xs lg:text-sm opacity-90">
            © 2025{" "}
            <Link
              href="/"
              className="text-[#0061e5] font-medium hover:underline"
            >
              Centre for Scientific Outreach
            </Link>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
