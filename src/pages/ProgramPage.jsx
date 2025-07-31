import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBaby, FaBook, FaHeart, FaUsers } from "react-icons/fa";

const ageGroups = [
  {
    label: "7–12 Months",
    description: "Gentle beginnings with sensory play and bonding activities.",
    schedule: ["Morning Cuddles", "Tummy Time", "Nap", "Feeding", "Storytime"],
    curriculum: [
      "Tactile Exploration",
      "Visual Stimulation",
      "Music & Movement",
    ],
    ratio: "1:3",
    image: "/images/babies.jpg",
  },
  {
    label: "1–2 Years",
    description: "Exploration and discovery with safe, guided play.",
    schedule: [
      "Circle Time",
      "Snack",
      "Outdoor Play",
      "Nap",
      "Songs & Stories",
    ],
    curriculum: ["Colors & Shapes", "Fine Motor Skills", "First Words"],
    ratio: "1:5",
    image: "/images/toddlers.jpg",
  },
  {
    label: "2–3 Years",
    description: "Confidence-building through structured fun and learning.",
    schedule: [
      "Alphabet Songs",
      "Creative Art",
      "Lunch",
      "Stations",
      "Quiet Time",
    ],
    curriculum: ["Language Building", "Counting", "Social Skills"],
    ratio: "1:7",
    image: "/images/preschoolers.jpg",
  },
];

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = ageGroups[activeIndex];

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-b from-pink-50 to-white px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-12">
          Our Nurturing Programs
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {ageGroups.map((group, idx) => (
            <button
              key={group.label}
              onClick={() => setActiveIndex(idx)}
              className={`px-6 py-2 rounded-full border transition font-medium text-sm ${
                activeIndex === idx
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-white border-pink-300 text-pink-700 hover:bg-pink-100"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <motion.img
              src={active.image}
              alt="program"
              className="rounded-3xl w-full object-cover shadow-xl h-[320px]"
              whileHover={{ scale: 1.02 }}
            />

            {/* Details */}
            <div>
              <h3 className="text-3xl font-semibold text-pink-600 mb-2">
                {active.label}
              </h3>
              <p className="text-gray-600 mb-6">{active.description}</p>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-pink-500 flex items-center gap-2 mb-1">
                    <FaBook /> Daily Schedule
                  </h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {active.schedule.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-500 flex items-center gap-2 mb-1">
                    <FaHeart /> Curriculum Highlights
                  </h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {active.curriculum.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="text-gray-700 flex items-center gap-2 mt-2">
                  <FaUsers className="text-pink-500" />
                  <span className="font-medium">Caregiver Ratio:</span>{" "}
                  {active.ratio}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Divider */}
        <div className="my-20 border-t border-pink-200" />

        {/* Drop-In / Emergency Care */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-pink-600 mb-4">
            Drop-In & Emergency Care
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Life happens — and we're here for you. Use our flexible drop-in or
            emergency care when you need it most. No stress, just loving hands.
          </p>
          <a
            href="#"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Quick Sign-Up
          </a>

          {/* FAQs */}
          <div className="mt-10 max-w-2xl mx-auto text-left">
            <details className="mb-4 bg-white p-4 rounded shadow cursor-pointer">
              <summary className="font-semibold text-pink-700">
                How fast can I book?
              </summary>
              <p className="text-sm mt-2 text-gray-600">
                You can request same-day care for emergencies if space is
                available.
              </p>
            </details>
            <details className="mb-4 bg-white p-4 rounded shadow cursor-pointer">
              <summary className="font-semibold text-pink-700">
                Are weekends covered?
              </summary>
              <p className="text-sm mt-2 text-gray-600">
                Yes! Weekend care is available with prior booking. Please
                contact us to check availability.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
