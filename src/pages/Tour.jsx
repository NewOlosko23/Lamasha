import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaUser, FaCheckCircle } from "react-icons/fa";

const Tour = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    date: "",
    time: "",
  });

  const times = [
    "9:00 AM",
    "10:30 AM",
    "12:00 PM",
    "2:00 PM",
    "3:30 PM",
    "5:00 PM",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd send data to backend or Firebase
    setSubmitted(true);
  };

  return (
    <section
      id="book-tour"
      className="py-20 px-6 bg-gradient-to-b from-white to-pink-50 mt-10"
    >
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-8">
          Book a Daycare Tour
        </h2>

        {submitted ? (
          <div className="text-center text-pink-600">
            <FaCheckCircle className="text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Tour Booked!</h4>
            <p className="text-gray-600">
              Thank you, {form.parentName}. We’ll contact you shortly to confirm
              your visit on <strong>{form.date}</strong> at{" "}
              <strong>{form.time}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Parent Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-pink-400" />
                <input
                  type="text"
                  name="parentName"
                  required
                  value={form.parentName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+254 712 345678"
                className="w-full px-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="parent@example.com"
                className="w-full px-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Child's Name
              </label>
              <input
                type="text"
                name="childName"
                required
                value={form.childName}
                onChange={handleChange}
                placeholder="Little One"
                className="w-full px-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Preferred Date
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-3 text-pink-400" />
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Preferred Time
                </label>
                <div className="relative">
                  <FaClock className="absolute left-3 top-3 text-pink-400" />
                  <select
                    name="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  >
                    <option value="">-- Choose a time --</option>
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md transition"
            >
              Book Tour
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Tour;
