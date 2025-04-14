"use client"
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-2xl" aria-label="Accueil" tabIndex="0">
          SPEEDGROUPIE
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-300 hover:text-white transition-colors text-xl"
              aria-label={label}
              tabIndex="0"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          onKeyDown={(e) => e.key === "Enter" && setMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle mobile menu"
          tabIndex="0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="block text-gray-300 hover:text-white transition-colors"
              aria-label={label}
              tabIndex="0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}