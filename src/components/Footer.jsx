import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-pink-500">Lamasha Daycare</h3>
          <p className="text-sm mt-3 text-gray-300">
            Nurturing little minds with love and care. We provide a safe and
            engaging environment for your child's growth and happiness.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-3 text-sky-400">
            Contact Us
          </h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +254 724 414 548
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contact@lamashadaycare.co.ke
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Site, Homa Bay, Kenya
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3 text-sky-400">
            Quick Links
          </h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <Link to="/" className="hover:text-pink-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-pink-400 transition">
                Our Programs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider and Socials */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Lamasha Daycare. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
