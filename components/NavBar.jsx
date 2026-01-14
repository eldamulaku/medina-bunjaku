import { useState } from "react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-black relative">
            {/* Left side: Black background with white logo */}
            <div className="bg-white px-8 py-3 flex-1 flex items-center justify-center sm:justify-start">
                <span className="text-xl font-bold text-black">MedinaBunjaku</span>
            </div>
          
            <button
                className="absolute right-4 top-4 sm:hidden flex flex-col justify-center items-center w-8 h-8 bg-white border border-black rounded"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Toggle menu"
            >
                <span className={`block h-1 w-6 bg-black mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block h-1 w-6 bg-black mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block h-1 w-6 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
            {/* Right side: White background with black links */}
            <ul
                className={`
                    bg-white px-8 py-3 flex-col space-y-2
                    sm:flex sm:flex-row sm:space-y-0 sm:space-x-6 sm:static sm:bg-white sm:px-8 sm:py-3 sm:items-center
                    flex-1 justify-center sm:justify-end items-center
                    absolute top-full left-0 right-0 z-10
                    transition-all duration-300
                    ${menuOpen ? "flex" : "hidden"}
                    sm:flex
                `}
            >
                <li>
                    <a href="/" className="text-black hover:text-blue-700 transition-colors">Home</a>
                </li>
                <li>
                    <a href="/aboutme" className="text-black hover:text-grey-700 transition-colors">AboutMe</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
