import React from "react";
import { Clock, AlarmClockCheck, CalendarDays, Baby } from "lucide-react";

const programs = [
  {
    title: "Full & Part-time Childcare",
    icon: <Baby className="w-10 h-10 text-sky-600" />,
    description:
      "Flexible care tailored for both working parents and part-time needs. Safe, loving, and structured routines all day long.",
  },
  {
    title: "Drop-In / Emergency Care",
    icon: <AlarmClockCheck className="w-10 h-10 text-sky-600" />,
    description:
      "Unexpected meeting or errand? We’ve got you. Convenient, on-demand childcare in a secure environment.",
  },
  {
    title: "Extended Hours / Night Care",
    icon: <Clock className="w-10 h-10 text-sky-600" />,
    description:
      "Late shift or night out? We offer caring supervision during evening hours for your peace of mind.",
  },
  {
    title: "Parents' Night Out / Weekend",
    icon: <CalendarDays className="w-10 h-10 text-sky-600" />,
    description:
      "Enjoy your evenings or weekends while your child stays engaged in fun, safe, and enriching activities.",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-pink-700 mb-6">
          Our Services
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Lamasha offers flexible programs designed for modern parents and growing kids, all in a safe, happy place.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-sky-50 p-6 rounded-xl shadow hover:shadow-lg transition text-left"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
