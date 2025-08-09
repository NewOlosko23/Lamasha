import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPlay } from "react-icons/fa";

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

import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";
import Video3 from "../assets/video3.mp4";

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

const videos = [Video1, Video2, Video3];

const IMAGES_PER_PAGE = 9;
const VIDEOS_PER_PAGE = 6;

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [currentImagePage, setCurrentImagePage] = useState(1);
  const [currentVideoPage, setCurrentVideoPage] = useState(1);

  const totalImagePages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const totalVideoPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  const currentImages = images.slice(
    (currentImagePage - 1) * IMAGES_PER_PAGE,
    currentImagePage * IMAGES_PER_PAGE
  );

  const currentVideos = videos.slice(
    (currentVideoPage - 1) * VIDEOS_PER_PAGE,
    currentVideoPage * VIDEOS_PER_PAGE
  );

  const Pagination = ({ totalPages, currentPage, onPageChange }) => (
    <div className="flex justify-center items-center gap-3 mt-8">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
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
  );

  return (
    <section id="gallery" className="bg-white py-20 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* VIDEO SECTION FIRST */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-4">
          Our Happy Moments – Videos
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Relive the laughter, playtime, and joy through our collection of short
          clips. These videos capture the energy and excitement that fill our
          days, giving you a glimpse into our happy little world in motion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentVideos.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer rounded-2xl shadow-lg overflow-hidden relative group"
              onClick={() => {
                setSelectedMedia(src);
                setMediaType("video");
              }}
            >
              <video
                src={src}
                className="w-full h-64 object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <FaPlay />
              </div>
            </motion.div>
          ))}
        </div>
        <Pagination
          totalPages={totalVideoPages}
          currentPage={currentVideoPage}
          onPageChange={setCurrentVideoPage}
        />

        {/* IMAGE SECTION SECOND */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mt-20 mb-4">
          Our Happy Moments – Photos
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Every smile tells a story. Explore our photo gallery to see candid
          moments, creative activities, and heartwarming scenes that make each
          day special.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer rounded-2xl shadow-lg overflow-hidden"
              onClick={() => {
                setSelectedMedia(src);
                setMediaType("image");
              }}
            >
              <img
                src={src}
                alt={`Daycare photo ${index + 1}`}
                className="w-full h-64 object-cover transition duration-300"
              />
            </motion.div>
          ))}
        </div>
        <Pagination
          totalPages={totalImagePages}
          currentPage={currentImagePage}
          onPageChange={setCurrentImagePage}
        />

        {/* MODAL */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedMedia(null);
                setMediaType(null);
              }}
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
                  onClick={() => {
                    setSelectedMedia(null);
                    setMediaType(null);
                  }}
                >
                  <FaTimes />
                </button>
                {mediaType === "image" ? (
                  <img
                    src={selectedMedia}
                    alt="Zoomed daycare"
                    className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
                  />
                ) : (
                  <video
                    src={selectedMedia}
                    controls
                    autoPlay
                    className="max-w-[90vw] max-h-[85vh] rounded-xl"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
