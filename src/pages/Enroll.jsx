import React, { useState } from "react";
import {
  FaUpload,
  FaArrowRight,
  FaArrowLeft,
  FaComments,
} from "react-icons/fa";

const Enroll = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "",
    days: [],
    timeSlot: "",
    documents: null,
  });

  const programs = ["7–12 Months", "1–2 Years", "2–3 Years"];
  const timeSlots = [
    "Full Day",
    "Half Day (AM)",
    "Half Day (PM)",
    "Night Care",
  ];
  const daysOptions = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documents") {
      setFormData({ ...formData, documents: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleDay = (day) => {
    const updated = formData.days.includes(day)
      ? formData.days.filter((d) => d !== day)
      : [...formData.days, day];
    setFormData({ ...formData, days: updated });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <section id="enroll" className="bg-pink-50 py-20 px-6 mt-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">
          Enroll Your Child
        </h2>

        {/* Step Tracker */}
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-8">
          {["Parent Info", "Program", "Schedule", "Documents"].map(
            (label, idx) => (
              <div
                key={idx}
                className={`flex-1 sm:flex-none text-center py-2 px-3 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                  step === idx + 1
                    ? "bg-pink-500 text-white"
                    : "bg-pink-100 text-pink-600"
                }`}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* Step 1: Parent & Child Info */}
        {step === 1 && (
          <div className="space-y-4">
            <input
              name="parentName"
              type="text"
              placeholder="Parent's Full Name"
              value={formData.parentName}
              onChange={handleChange}
              className="w-full border border-pink-200 px-4 py-2 rounded-md"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-pink-200 px-4 py-2 rounded-md"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-pink-200 px-4 py-2 rounded-md"
            />
            <input
              name="childName"
              type="text"
              placeholder="Child's Full Name"
              value={formData.childName}
              onChange={handleChange}
              className="w-full border border-pink-200 px-4 py-2 rounded-md"
            />
            <input
              name="childAge"
              type="text"
              placeholder="Child's Age (e.g., 2 years)"
              value={formData.childAge}
              onChange={handleChange}
              className="w-full border border-pink-200 px-4 py-2 rounded-md"
            />
          </div>
        )}

        {/* Step 2: Program */}
        {step === 2 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-600">
              Select Program
            </label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full border border-pink-200 px-4 py-2 rounded-md"
            >
              <option value="">-- Choose Age Group --</option>
              {programs.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Step 3: Schedule */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Select Days
              </label>
              <div className="flex flex-wrap gap-2">
                {daysOptions.map((day) => (
                  <button
                    key={day}
                    type="button"
                    className={`px-4 py-2 border rounded-full transition ${
                      formData.days.includes(day)
                        ? "bg-pink-500 text-white"
                        : "bg-pink-100 text-pink-600"
                    }`}
                    onClick={() => toggleDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Time Slot
              </label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="w-full border border-pink-200 px-4 py-2 rounded-md"
              >
                <option value="">-- Select Time --</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 4: Upload */}
        {step === 4 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Upload Child’s Birth Certificate / Immunization Card
            </label>
            <label className="flex items-center gap-3 border border-pink-300 rounded-md px-4 py-2 cursor-pointer bg-pink-50 text-pink-600 hover:bg-pink-100">
              <FaUpload />
              <span>{formData.documents?.name || "Choose a file..."}</span>
              <input
                type="file"
                name="documents"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-between">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-md hover:bg-pink-200"
            >
              <FaArrowLeft /> Back
            </button>
          ) : (
            <span></span>
          )}
          {step < 4 ? (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
            >
              Next <FaArrowRight />
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Submit Enrollment
            </button>
          )}
        </div>

        {/* Help Prompt */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <FaComments className="inline text-pink-400 mr-1" />
          Need help?{" "}
          <a
            href="https://wa.me/254712345678"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 hover:underline"
          >
            Chat with us now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
