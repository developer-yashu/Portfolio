import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "#header" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#header"
          className="text-white text-2xl font-bold tracking-wide select-none"
        >
          YASHUSHARMA
        </a>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-green-400 hover:text-green-300"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul
          className={`md:flex md:items-center md:space-x-8 absolute md:static bg-gray-900 md:bg-transparent w-full md:w-auto left-0 md:left-auto top-14 md:top-auto transition-all duration-300 ease-in ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {links.map(({ name, href }) => (
            <li key={name} className="border-b md:border-none border-gray-700 md:border-transparent">
              <a
                href={href}
                className="block px-4 py-3 md:py-0 text-green-400 hover:text-green-300 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}