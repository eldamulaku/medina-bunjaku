import React from "react";
import { FaGraduationCap, FaBriefcase, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const SectionCard = ({ icon: Icon, title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: delay }}
    whileHover={{
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    }}
    className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-black hover:border-gray-800 transition-all duration-300"
  >
    <div className="flex items-center mb-6">
      <motion.div
        className="p-3 bg-gray-100 rounded-lg mr-4"
        whileHover={{ rotate: [0, -10, 10, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-3xl text-black" />
      </motion.div>
      <h2 className="text-xl md:text-2xl font-bold text-black">{title}</h2>
    </div>
    <div className="text-gray-700 text-lg leading-relaxed">{children}</div>
  </motion.div>
);

function Aboutme() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-black tracking-tight mb-2 mt-16">
            About Medina Bunjaku
          </h1>
          <div className="h-1 w-24 bg-black mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {/* Education Card */}
          <SectionCard icon={FaGraduationCap} title="Education" delay={0.2}>
            <p>
              Medina Bunjaku holds a degree in Cultural Studies and has pursued
              further education in youth development and leadership. Her
              academic background has provided her with a strong foundation in
              understanding the needs and aspirations of young people.
            </p>
          </SectionCard>

          {/* Professional Work Card */}
          <SectionCard icon={FaBriefcase} title="Professional Work" delay={0.3}>
            <p>
              Medina is dedicated to empowering youth and fostering cultural
              engagement. She has worked on various projects aimed at promoting
              creativity, inclusion, and active participation among young people
              in her community.
            </p>
          </SectionCard>

          {/* Director Card */}
          <div className="md:col-span-2 lg:col-span-1">
            <SectionCard
              icon={FaStar}
              title="Director of Youth, Culture, and Sports"
              delay={0.4}
            >
              <p>
                As the Director of Youth, Culture, and Sports, Medina leads
                initiatives that support youth development, cultural expression,
                and sports activities. Her leadership is marked by a commitment
                to creating opportunities and positive environments for young
                people to thrive.
              </p>
            </SectionCard>
          </div>
        </div>
<<<<<<< HEAD
        <p className="text-gray-800 ml-8 sm:ml-12 text-base sm:text-lg leading-relaxed">
          Medina Bunjaku holds a degree in Cultural Studies and has pursued further education in youth development and leadership. Her academic background has provided her with a strong foundation in understanding the needs and aspirations of young people.
        </p>
      </section>
      <section className="mb-8 sm:mb-10">
        <div className="flex items-center mb-2 sm:mb-3">
          <span className="text-2xl sm:text-3xl text-black mr-2 sm:mr-3">
            <FaBriefcase />
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">Professional Work</h2>
        </div>
        <p className="text-gray-800 ml-8 sm:ml-12 text-base sm:text-lg leading-relaxed">
          Medina is dedicated to empowering youth and fostering cultural engagement. She has worked on various projects aimed at promoting creativity, inclusion, and active participation among young people in her community.
        </p>
      </section>
      <section>
        <div className="flex items-center mb-2 sm:mb-3">
          <span className="text-2xl sm:text-3xl text-black mr-2 sm:mr-3">
            <FaStar />
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">Director of Youth, Culture, and Sports</h2>
        </div>
        <p className="text-gray-800 ml-8 sm:ml-12 text-base sm:text-lg leading-relaxed">
          As the Director of Youth, Culture, and Sports, Medina leads initiatives that support youth development, cultural expression, and sports activities. Her leadership is marked by a commitment to creating opportunities and positive environments for young people to thrive.
        </p>
      </section>
      <section>
        <div className="flex items-center mb-2 sm:mb-3">
          <span className="text-2xl sm:text-3xl text-black mr-2 sm:mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 8V7l-9-5-9 5v1l9 5 9-5zm-9 7.5L3 10.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.5l-9 5z"/>
            </svg>
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">Contact</h2>
        </div>
        <div className="ml-8 sm:ml-12 text-base sm:text-lg text-gray-800 leading-relaxed">
          <div className="flex items-center mb-1">
            <span className="font-semibold mr-2">Email:</span>
            <a href="mailto:Medina.bunjaku@rks-gov.net" className="text-blue-600 hover:underline">Medina.bunjaku@rks-gov.net</a>
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">Phone:</span>
            <a href="tel:+38344246466" className="text-blue-600 hover:underline">+383 44 246 466</a>
          </div>
        </div>
      </section>
=======
      </motion.div>
>>>>>>> 8646ca7271f6fb92bbd199f1d0844274cc08334d
    </div>
  );
}

export default Aboutme;
