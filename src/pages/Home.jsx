import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Baby, BookOpenCheck, Contact, Smile } from "lucide-react";
import Hero from "./Hero";
import About from "./About";
import Programs from "./Programs";
import Contact1 from "./Contact";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Carousel />
      <Contact1 />
    </>
  );
};

export default Home;
