import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-pink-700 mb-10">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-sky-700">
              Contact Information
            </h3>
            <p className="text-gray-700 mb-6">
              We’re here to answer any questions you may have. Reach out to us
              via phone, email, or drop by!
            </p>

            <div className="space-y-4 text-gray-800">
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-600" />
                +254 712 345 678
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-600" />
                contact@lamashadaycare.co.ke
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-sky-600" />
                Site, Homa Bay, Kenya
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-pink-600 text-white font-semibold px-6 py-2 rounded hover:bg-pink-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
