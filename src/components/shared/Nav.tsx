"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Log In" },
  ];

  return (
    <nav
      className={`relative ${
        pathname === "/dashboard" ||
        "/dashboard/blogs" ||
        "/dashboard/blogs/create" ||
        "/dashboard/projects" ||
        "/dashboard/projects/create" ||
        "/dashboard/messages"
          ? "hidden"
          : "flex"
      }  items-center justify-between py-4 px-6 border-b border-gray-500 bg-black text-white`}
    >
      <div className="text-xl font-bold">MH DODUL</div>

      <div className="hidden md:flex items-center gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="hover:text-gray-300 transition"
          >
            {label}
          </Link>
        ))}
        <button className="w-44 h-12 text-white relative overflow-hidden group z-10 border border-gray-400 rounded-full hover:border-transparent hover:text-white duration-1000">
          <span className="absolute bg-[#021035] w-48 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
          <span className="absolute bg-[#0B2E82] w-48 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
          Download Resume
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-6 shadow-lg z-50 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-lg hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              <button
                className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-transparent backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#0B2E82] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                type="submit"
              >
                {label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 19"
                  className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                >
                  <path
                    className="fill-gray-800 group-hover:fill-gray-800"
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  ></path>
                </svg>
              </button>
            </Link>
          ))}
          <button className="w-44 h-12 text-white bg-gradient-to-r to-[#021035] from-[#0B2E82]  relative overflow-hidden group z-10 border border-gray-400 rounded-full hover:border-transparent hover:text-white duration-1000">
            <span className="absolute bg-[#021035] w-48 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-[#0B2E82] w-48 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
