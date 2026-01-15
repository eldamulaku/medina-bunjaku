import profile from '../images/profile.png';

function Home() {
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="#1877F3"
                                viewBox="0 0 24 24"
                                className="transition-transform duration-200 hover:scale-110"
                            >
                                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.326V1.326C24 .592 23.405 0 22.675 0"/>
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/medinabnjk?igsh=MXY0Mm1wMzUxcnVoNA=="
                            className="bg-white shadow-lg p-3 rounded-full hover:bg-pink-50 transition flex items-center justify-center"
                        >
                            <span className="sr-only">Instagram</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="#E4405F"
                                viewBox="0 0 24 24"
                                className="transition-transform duration-200 hover:scale-110"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.851c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 5.741 2 6.151 2 12c0 5.849.013 6.259.072 7.539.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.69.072-7.539 0-5.849-.013-6.259-.072-7.539-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                            </svg>
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