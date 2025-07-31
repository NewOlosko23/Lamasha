import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-pink-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-12">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-pink-700">
            <div className="flex items-start gap-4">
              <FaPhone className="text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-700">+254 712 345678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaWhatsapp className="text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <a
                  href="https://wa.me/254712345678"
                  className="text-green-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-700">info@lamashadaycare.co.ke</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-700">Ngege Road, Homa Bay, Kenya</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaClock className="text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Operating Hours</h4>
                <p className="text-gray-700">
                  Mon – Fri: 7:00 AM – 6:00 PM <br />
                  Saturday: 8:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <h4 className="text-xl font-semibold text-pink-600">
              Send Us a Message
            </h4>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-pink-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-pink-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border border-pink-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-20 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.323745135284!2d34.470179946716306!3d-0.5274229611055164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa6bb88f04fbf%3A0xd1847caaa2a3b7f5!2sHoma%20Bay!5e0!3m2!1sen!2ske!4v1696338780742!5m2!1sen!2ske"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            title="Lamasha Location"
            className="w-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
