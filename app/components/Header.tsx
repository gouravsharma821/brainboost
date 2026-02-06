'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();

  const navClass = (path: string) =>
    pathname === path
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
      : 'text-gray-600 hover:text-gray-900';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-800">MindCare</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className={navClass('/about')}>
              About Us
            </Link>

            {/* ✅ CONTACT UPDATED */}
            <Link href="/contact" className={navClass('/contact')}>
              Contact
            </Link>

            <Link
              href="/login"
              className={
                pathname === '/login'
                  ? 'text-blue-600 font-semibold'
                  : 'text-blue-600 hover:text-blue-700'
              }
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {showMobileMenu ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {[
              { href: '/about', label: 'About Us' },
              { href: '/features', label: 'Features' },
              { href: '/resources', label: 'Resources' },
              { href: '/contact', label: 'Contact' }, // ✅ contact updated
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 font-medium ${
                  pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setShowMobileMenu(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link
                href="/login"
                className="block w-full text-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
                onClick={() => setShowMobileMenu(false)}
              >
                Sign In
              </Link>

              <Link
                href="/register"
                className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
                onClick={() => setShowMobileMenu(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}