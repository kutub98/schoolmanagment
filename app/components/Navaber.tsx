"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Programs", href: "#programs" },
    { name: "About", href: "#about" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 md:px-0 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">ABC School</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-indigo-600 transition">{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <XMarkIcon className="w-6 h-6 text-indigo-600" /> : <XMarkIcon className="w-6 h-6 text-indigo-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-md flex flex-col space-y-4 px-6 py-4">
          {links.map(link => (
            <li key={link.name}>
              <a href={link.href} className="block hover:text-indigo-600 transition" onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
