import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaSmile, FaHandsHelping } from "react-icons/fa";

const team = [
  {
    name: "Grace Achieng",
    title: "Founder & Director",
    image: "/images/team1.jpg",
    bio: "A passionate early childhood educator with over 10 years of experience in nurturing young minds.",
  },
  {
    name: "Samuel Otieno",
    title: "Head Caregiver",
    image: "/images/team2.jpg",
    bio: "Brings warmth and structure to the classroom, making every child feel at home.",
  },
  {
    name: "Linda Wambui",
    title: "Nutrition & Health Lead",
    image: "/images/team3.jpg",
    bio: "Ensures every child receives balanced meals and maintains top hygiene standards.",
  },
];

const values = [
  {
    icon: <FaSmile />,
    title: "Safe & Joyful Space",
    desc: "We create a loving, secure, and engaging environment where children thrive every day.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Personalized Attention",
    desc: "Small groups and trained staff ensure each child gets individual care and support.",
  },
  {
    icon: <FaStar />,
    title: "Holistic Growth",
    desc: "Our curriculum fosters social, emotional, and intellectual development at every stage.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-pink-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <FaHeart className="text-pink-500 text-4xl mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">Our Mission & Vision</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At Lamasha Daycare, our mission is to nurture little hearts and minds through love, play,
            and learning. We envision a future where every child begins their journey in a space that’s
            safe, stimulating, and full of joy.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 px-4">
          <img src="/images/about1.jpg" alt="Lamasha 1" className="rounded-xl shadow-md h-64 object-cover w-full" />
          <img src="/images/about2.jpg" alt="Lamasha 2" className="rounded-xl shadow-md h-64 object-cover w-full" />
          <img src="/images/about3.jpg" alt="Lamasha 3" className="rounded-xl shadow-md h-64 object-cover w-full" />
          <img src="/images/about4.jpg" alt="Lamasha 4" className="rounded-xl shadow-md h-64 object-cover w-full" />
        </div>

        {/* Meet the Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-pink-700 mb-10">Meet Our Amazing Team</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-lg text-left"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-xl h-48 w-full object-cover mb-4"
                />
                <h4 className="text-xl font-bold text-pink-600">{member.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Lamasha? */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-pink-700 mb-10">Why Choose Lamasha?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-pink-500 text-3xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-pink-600">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
