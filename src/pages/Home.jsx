import profile from "../images/profile.png";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row overflow-hidden font-sans">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 pt-28 md:p-0 md:pt-20 relative z-10"
      >
        <div className="relative">
          {/* Decorative background circle */}
          <div className="absolute inset-0 bg-gray-100 rounded-full scale-90 blur-3xl opacity-50 -z-10"></div>
          <motion.img
            src={profile}
            alt="Profile"
            className="max-h-[50vh] md:max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl"
            style={{ maxWidth: "100%", height: "auto" }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 bg-black flex flex-col justify-center pl-8 md:pl-24 pr-8 py-12 md:py-0 relative z-10"
      >
        <div className="max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-white mb-3 font-medium tracking-wide"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl md:text-6xl text-white font-bold mb-2 leading-tight"
          >
            Medina Bunjaku
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-400 font-semibold mb-10 text-lg md:text-xl italic"
          >
            “Director of Culture, Youth and Sports”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex space-x-6 mb-12"
          >
            <motion.a
              href="https://www.facebook.com/share/18ALwp5iq5/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-xl p-4 rounded-full flex items-center justify-center group"
              whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "#ebf8ff" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">FaceBook</span>
            <FaFacebookF size={32} color="#1877F3" className="transition-transform duration-300 group-hover:drop-shadow-md" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/medinabnjk?igsh=MXY0Mm1wMzUxcnVoNA=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-xl p-4 rounded-full flex items-center justify-center group"
              whileHover={{
                scale: 1.1,
                rotate: -5,
                backgroundColor: "#fff5f7",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Instagram</span>
            <FaInstagram size={32} color="#E1306C" className="transition-transform duration-300 group-hover:drop-shadow-md" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-6 pt-6"
          >
            <motion.div
              className="flex items-center text-white group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <div className="bg-gray-800 p-3 rounded-full mr-4 group-hover:bg-gray-700 transition-colors shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M12 12.713l11.985-9.713H.015L12 12.713zM12 15.3L.6 6.225V21h22.8V6.225L12 15.3z"
                  />
                </svg>
              </div>
              <span className="text-base md:text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                Medina.bunjaku@rks-gov.net
              </span>
            </motion.div>

            <motion.div
              className="flex items-center text-white group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <div className="bg-gray-800 p-3 rounded-full mr-4 group-hover:bg-gray-700 transition-colors shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
                  />
                </svg>
              </div>
              <span className="text-base md:text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                +383 44 246 466
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
