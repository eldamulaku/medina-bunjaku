import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Me", path: "/aboutme" },
  ];

  // Dynamic text color logic
  // Default (Home Top): Logo Black (on White), Links White (on Black)
  // Scrolled or Other Page: All Black (on White Nav)
  const shouldUseDarkText = scrolled || !isHome || menuOpen;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldUseDarkText
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Always Black on Left (White Background) unless navbar is dark mode which it isn't */}
          <Link to="/" className="flex-shrink-0 z-50">
            <motion.span
              className="text-2xl font-bold tracking-tighter text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MedinaBunjaku<span className="text-blue-600">.</span>
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group py-2"
              >
                <span
                  className={`text-lg font-medium transition-colors duration-300 ${
                    shouldUseDarkText
                      ? "text-gray-800 hover:text-black"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.title}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${
                      shouldUseDarkText ? "bg-black" : "bg-white"
                    }`}
                  />
                )}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    shouldUseDarkText ? "bg-black" : "bg-white"
                  } ${location.pathname === link.path ? "w-full" : ""}`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Black because it's on the Right. 
                        Wait, on Mobile Home Top, the background is White (Vertical Stack).
                        So Button should be Black.
                    */}
          <button
            className="md:hidden z-50 p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black rounded-full transition-all"
              ></motion.span>
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-black rounded-full transition-all"
              ></motion.span>
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
                }
                className="w-full h-0.5 bg-black rounded-full transition-all"
              ></motion.span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 bg-white z-40 flex items-center justify-center"
          >
            <motion.div
              className="flex flex-col space-y-8 text-center"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 },
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-3xl font-bold ${
                      location.pathname === link.path
                        ? "text-black"
                        : "text-gray-400"
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavBar;
