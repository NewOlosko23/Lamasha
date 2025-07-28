import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
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
      <div className="absolute inset-0 " />

      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 py-10 bg-white/10 backdrop-blur-md rounded-xl shadow-xl text-center text-white max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow">
          Lamasha Daycare
        </h1>
        <p className="text-lg md:text-2xl font-light mb-6">
          A warm, fun, and safe place where little stars grow, play, and learn
          every day.
        </p>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full font-semibold shadow-lg transition cursor-pointer"
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
