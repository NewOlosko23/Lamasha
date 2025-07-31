import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-12">
          Our Happy Moments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Daycare ${index + 1}`}
              onClick={() => setSelectedImage(src)}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer rounded-xl shadow-md object-cover h-48 w-full transition duration-300"
            />
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
                className="relative bg-white rounded-xl shadow-lg overflow-hidden"
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
                  className="max-w-full max-h-[80vh] object-contain rounded-xl"
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
