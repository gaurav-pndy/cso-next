"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function DonationModal({ isOpen, onClose, iframe }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-[#e0e0e0] rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] sm:max-h-[95vh] relative overflow-hidden flex flex-col pt-10">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-2 right-4 sm:top-3 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors cursor-pointer text-gray-600 hover:text-black"
                aria-label="Close modal"
              >
                <span className="text-lg sm:text-xl font-bold">✖</span>
              </button>

              {/* Iframe Container */}
              <div className="w-full h-full min-h-140 sm:min-h-[500px] md:min-h-[500px]  xl:min-h-150">
                <iframe
                  src={iframe}
                  width="100%"
                  height="100%"
                  className="rounded-xl"
                  style={{ border: "none", minHeight: "inherit" }}
                  title="Donation form"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
