import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Experience", "/experience"],
  ["Education", "/education"],
  ["Projects", "/projects"],
  ["Certifications", "/certifications"],
  ["Languages", "/languages"],
  ["Contact", "/contact"],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 hover:text-cyan-400 ${
      isActive ? "text-cyan-400" : "text-gray-300"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Ishaaq
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map(([name, path]) => (
            <NavLink
              key={name}
              to={path}
              className={navLinkClass}
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-2xl text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-4 bg-slate-900 border-t border-slate-800">
          {navLinks.map(([name, path]) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-2 transition duration-300 hover:text-cyan-400 ${
                  isActive ? "text-cyan-400" : "text-gray-300"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;