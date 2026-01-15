"use client";
import { useState } from "react";
import { Bars2Icon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import CartSlideOver from "../component/Cart";
import ThemeToggle from "./ThemeToggle";

export default function NavbarPro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Programs", href: "#programs" },
    { name: "About", href: "#about" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white  shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 md:px-0 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">ABC School</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-indigo-600 transition font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
          <ThemeToggle/>
        </ul>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <button
            className="relative"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCartIcon className="w-6 h-6 text-indigo-600 hover:text-indigo-500 transition" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              3
            </span>
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <Bars2Icon className="w-6 h-6 text-indigo-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-Canvas Menu */}
      <CartSlideOver isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      
    </nav>
  );
}
