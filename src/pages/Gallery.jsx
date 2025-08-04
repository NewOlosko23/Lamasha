import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Import all 14 images
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import image4 from "../assets/4.jpeg";
import image5 from "../assets/5.jpeg";
import image6 from "../assets/6.jpeg";
import image7 from "../assets/7.jpeg";
import image8 from "../assets/8.jpeg";
import image9 from "../assets/9.jpeg";
import image10 from "../assets/10.jpeg";
import image11 from "../assets/11.jpeg";
import image12 from "../assets/12.jpeg";
import image13 from "../assets/13.jpeg";
import image14 from "../assets/14.jpeg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
];

const IMAGES_PER_PAGE = 9;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const goToPage = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="bg-white py-20 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-12">
          Our Happy Moments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer rounded-2xl shadow-lg overflow-hidden"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Daycare ${startIndex + index + 1}`}
                className="w-full h-64 object-cover transition duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 rounded-full ${
                currentPage === i + 1
                  ? "bg-pink-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-pink-500 hover:text-white transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative bg-white rounded-xl shadow-xl overflow-hidden"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 shadow"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedImage}
                  alt="Zoomed daycare"
                  className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
