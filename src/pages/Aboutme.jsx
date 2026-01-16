import React from 'react';
import { FaGraduationCap, FaBriefcase, FaStar } from "react-icons/fa";



function Aboutme() {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-xl mt-6 sm:mt-10 md:mt-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 text-center text-black tracking-tight drop-shadow">
        About Medina Bunjaku
      </h1>
      <section className="mb-8 sm:mb-10">
        <div className="flex items-center mb-2 sm:mb-3">
          <span className="text-2xl sm:text-3xl text-black mr-2 sm:mr-3">
            <FaGraduationCap />
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">Education</h2>
        </div>
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
    </div>
  )
}
export default Aboutme;