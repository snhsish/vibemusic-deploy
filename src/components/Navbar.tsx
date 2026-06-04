"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const categories = [
    { name: "Pianos & Keyboards", href: "/pianos" },
    { name: "Guitars & Basses", href: "/guitars" },
    { name: "Drums & Percussion", href: "/drums" },
    { name: "Studio & Audio", href: "/studio" },
    { name: "Deals", href: "/deals", highlight: true },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent mix-blend-exclusion"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand/Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none"
            >
              {/* Elegant SVG logo - Stylized Keyboard / Waveform */}
              <svg
                className="w-8 h-8 text-white group-hover:text-zinc-300 transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <span className="font-sans text-xl font-bold tracking-widest text-white uppercase group-hover:text-zinc-300 transition-colors">
                VIBE MUSIC
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-zinc-300 text-white"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Right Action Icons (Search, Account, Wishlist, Cart) */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Search Bar / Icon */}
            <div className="relative flex items-center">
              {searchOpen && (
                <input
                  type="text"
                  placeholder="Search instruments..."
                  className="bg-black/90 text-white text-xs px-3 py-1.5 rounded-full border border-white/50 focus:outline-none w-44 transition-all duration-300 mr-2"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
              )}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white hover:text-zinc-300 transition-colors"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </button>
            </div>

            {/* Account Icon */}
            <Link
              href="/account"
              className="text-white hover:text-zinc-300 transition-colors"
              aria-label="Account"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>

            {/* Wishlist Icon */}
            <Link
              href="/wishlist"
              className="relative text-white hover:text-zinc-300 transition-colors"
              aria-label="Wishlist"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-white text-[10px] text-black font-bold h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative text-white hover:text-zinc-300 transition-colors"
              aria-label="Cart"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-white text-[10px] text-black font-bold h-4 w-4 rounded-full flex items-center justify-center">
                1
              </span>
            </Link>
          </div>

          {/* Mobile hamburger menu / search buttons */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Simple Mobile Cart */}
            <Link
              href="/cart"
              className="relative text-white hover:text-zinc-300 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-white text-[10px] text-black font-bold h-4 w-4 rounded-full flex items-center justify-center">
                1
              </span>
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-zinc-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-lg animate-in fade-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {/* Search Input for Mobile */}
            <div className="pt-2 pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search instruments..."
                  className="w-full bg-zinc-900 text-white text-sm px-4 py-2 rounded-lg border border-zinc-800 focus:outline-none focus:border-amber-500"
                />
                <span className="absolute right-3 top-2.5 text-zinc-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Menu Links */}
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-semibold tracking-wider uppercase py-2 border-b border-zinc-900/50 ${
                  category.highlight ? "text-amber-500" : "text-zinc-200"
                }`}
              >
                {category.name}
              </Link>
            ))}

            {/* Quick Actions (Account/Wishlist) in Mobile menu */}
            <div className="flex items-center space-x-6 pt-4">
              <Link
                href="/account"
                onClick={() => setIsOpen(false)}
                className="flex items-center text-sm font-semibold tracking-wider uppercase text-zinc-400 hover:text-white"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Profile
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setIsOpen(false)}
                className="flex items-center text-sm font-semibold tracking-wider uppercase text-zinc-400 hover:text-white"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
