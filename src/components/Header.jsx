import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";

import Logo from "../assets/17.jpeg";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const navLinks = [
    user
      ? { name: "Dashboard", path: "/dashboard" }
      : { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Lamasha Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-2xl font-bold text-pink-600 whitespace-nowrap">
            Lamasha Daycare
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ name, path }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={path}
                className="text-gray-700 hover:text-sky-500 font-medium"
              >
                {name}
              </Link>
            </motion.div>
          ))}

          {user && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="ml-4 px-4 py-1 text-sm bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
            >
              Logout
            </motion.button>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-pink-600" />
            ) : (
              <Menu className="text-sky-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map(({ name, path }, i) => (
              <Link
                key={i}
                to={path}
                className="text-gray-800 font-medium hover:text-pink-500"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}

            {user && (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-pink-600 font-medium hover:underline"
              >
                Logout
              </button>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
