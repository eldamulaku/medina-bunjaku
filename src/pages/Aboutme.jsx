import React from 'react';



function Aboutme() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">About Medina Bunjaku</h1>
      <section className="mb-8">
        <div className="flex items-center mb-2">
          <span className="text-2xl text-blue-600 mr-2">
            <i className="ri-graduation-cap-line"></i>
          </span>
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <p className="text-gray-700 ml-8">
          Medina Bunjaku holds a degree in Cultural Studies and has pursued further education in youth development and leadership. Her academic background has provided her with a strong foundation in understanding the needs and aspirations of young people.
        </p>
      </section>
      <section className="mb-8">
        <div className="flex items-center mb-2">
          <span className="text-2xl text-green-600 mr-2">
            <i className="ri-briefcase-4-line"></i>
          </span>
          <h2 className="text-2xl font-semibold">Professional Work</h2>
        </div>
        <p className="text-gray-700 ml-8">
          Medina is dedicated to empowering youth and fostering cultural engagement. She has worked on various projects aimed at promoting creativity, inclusion, and active participation among young people in her community.
        </p>
      </section>
      <section>
        <div className="flex items-center mb-2">
          <span className="text-2xl text-purple-600 mr-2">
            <i className="ri-star-smile-line"></i>
          </span>
          <h2 className="text-2xl font-semibold">Director of Youth, Culture, and Sports</h2>
        </div>
        <p className="text-gray-700 ml-8">
          As the Director of Youth, Culture, and Sports, Medina leads initiatives that support youth development, cultural expression, and sports activities. Her leadership is marked by a commitment to creating opportunities and positive environments for young people to thrive.
        </p>
      </section>
    </div>
    
  )
}
export default Aboutme;