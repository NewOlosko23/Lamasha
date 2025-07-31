import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Bg from "../assets/bg.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 py-10 bg-white/20 backdrop-blur-md rounded-xl shadow-xl text-center text-white max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow">
          Safe Hands, Happy Hearts
        </h1>
        <p className="text-lg md:text-2xl font-light mb-6">
          A nurturing daycare where your child can grow, play, and thrive with
          confidence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="tour"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full font-semibold shadow-lg transition cursor-pointer"
          >
            Book a Tour
          </Link>
          <Link
            to="enroll"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full font-semibold shadow-lg transition cursor-pointer"
          >
            Enroll Now
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full font-semibold shadow-lg transition cursor-pointer"
          >
            Talk to Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
