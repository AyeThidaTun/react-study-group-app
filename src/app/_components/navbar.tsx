"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "Study Groups", href: "/study-groups" },
    { label: "Resources", href: "/resources" },
    { label: "Book Room", href: "/book-room" },
    { label: "Sign Up/Login", href: "/signup" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <section className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/home">
            <Image
              src="/image/page-logo.png"
              alt="logo"
              className="h-20 w-20"
              width={100}
              height={100}
            />
          </Link>

          <div className="flex space-x-4">
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
        </div>
      </section>
    </nav>
  );
}
