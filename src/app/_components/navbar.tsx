"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "Study Groups", href: "/study-groups" },
    { label: "Resources", href: "/resources" },
    { label: "Sign Up/Login", href: "/signup" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <section className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/home">
            <Image
              src="/image/page-logo.png"
              alt="logo"
              className="h-16 w-16"
              width={64}
              height={64}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 aria-[current=page]:bg-orange-900 aria-[current=page]:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)} // close on click
                aria-current={pathname === link.href ? "page" : undefined}
                className="block rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 aria-[current=page]:bg-orange-900 aria-[current=page]:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </section>
    </nav>
  );
}
