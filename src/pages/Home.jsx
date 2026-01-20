import profile from '../images/profile.png';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
function Home() {
    // Import the Facebook icon from react-icons

    return (
        <div className="flex h-screen flex-col md:flex-row">
            <style>{`body { overflow: hidden; }`}</style>
            {/* Left Side */}
            <div className="w-full md:w-1/2 bg-white flex items-center justify-center h-auto md:h-full">
               <img
                    src={profile}
                    alt="Profile"
                    className="max-h-[70vh] md:max-h-[90vh] w-auto object-contain rounded-lg"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
            {/* Right Side */}
            <div className="w-full md:w-1/2 bg-black flex flex-col justify-center pl-6 md:pl-24 h-1/2 md:h-full">
                <div>
                    <p className="text-lg md:text-xl text-white mb-2 font-medium">Hi, I am</p>
                    <h1 className="text-3xl md:text-5xl text-white font-bold mb-2">Medina Bunjaku</h1>
                    <p className="text-gray-400 font-semibold mb-8 text-base md:text-lg">“Director of Culture, Youth and Sports”</p>
                    <div className="flex space-x-6 mt-2">
                        <a
                            href="https://www.facebook.com/share/18ALwp5iq5/?mibextid=wwXIfr"
                            className="bg-white shadow-lg p-3 rounded-full hover:bg-blue-50 transition flex items-center justify-center"
                        >
                            <span className="sr-only">FaceBook</span>
                            <FaFacebook size={32} color="#1877F3" className="transition-transform duration-200 hover:scale-110" />
                        </a>
                        <a
                            href="https://www.instagram.com/medinabnjk?igsh=MXY0Mm1wMzUxcnVoNA=="
                            className="bg-white shadow-lg p-3 rounded-full hover:bg-pink-50 transition flex items-center justify-center"
                        >
                            <span className="sr-only">Instagram</span>
                            {/* Use react-icons for Instagram */}
                            <FaInstagram size={32} color="#E4405F" className="transition-transform duration-200 hover:scale-110" />
                        </a>
                    </div>
                    <div className="mt-8 space-y-3">
                        <div className="flex items-center text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="mr-3 text-gray-400"
                            >
                                <path fill="#fff" d="M12 12.713l11.985-9.713H.015L12 12.713zM12 15.3L.6 6.225V21h22.8V6.225L12 15.3z"/>
                            </svg>
                            <span className="text-base md:text-lg font-medium text-gray-200">Medina.bunjaku@rks-gov.net</span>
                        </div>
                        <div className="flex items-center text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="mr-3 text-gray-400"
                            >
                                <path fill="#fff" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                            </svg>
                            <span className="text-base md:text-lg font-medium text-gray-200">+383 44 246 466</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;