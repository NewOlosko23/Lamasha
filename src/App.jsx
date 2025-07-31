import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Programs from "./pages/ProgramPage";
import About from "./pages/AboutPage";
import Gallery from "./pages/Gallery";
import Contact from "./pages/ContactPage";
import Enroll from "./pages/Enroll";
import BookTour from "./pages/Tour";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/tour" element={<BookTour />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
