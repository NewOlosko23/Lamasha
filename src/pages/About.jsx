import React from "react";
import { Smile, Heart, Leaf } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-pink-700 mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          At Lamasha Daycare, we believe in nurturing every child’s unique
          potential. Our warm, welcoming space helps children grow emotionally,
          socially, and intellectually — while having fun!
        </p>

        {/* Core Values / Highlights */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Smile className="text-pink-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Play & Learn
            </h3>
            <p className="text-gray-600">
              We blend structured learning with play to spark curiosity and joy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Heart className="text-pink-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Safe & Loving
            </h3>
            <p className="text-gray-600">
              A caring and secure environment where every child feels valued.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Leaf className="text-pink-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Growth & Nature
            </h3>
            <p className="text-gray-600">
              We encourage exploration and learning through nature and
              creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
