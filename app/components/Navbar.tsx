'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 border-b bg-primary text-white relative">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold">Admin Panel</div>
        <div className="hidden md:flex gap-6">
          <Link href="/dashboard" className="hover:underline">Home</Link>
          <Link href="/create" className="hover:underline">Create</Link>
        </div>
      </div>

      <div className="flex items-center gap-4 relative">
        {/* User Circle */}
        <button
          className="hidden md:block bg-white text-primary text-center font-bold rounded-full w-9 h-9 flex items-center justify-center focus:outline-none"
          onClick={() => setUserDropdownOpen(!userDropdownOpen)}
        >
          T
        </button>

        {/* Dropdown for User Circle */}
        {userDropdownOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-xl rounded-lg p-4 flex flex-col gap-2 text-black z-50 min-w-[180px]">
            <Link href="/mainAdmin/create" className="hover:text-primary">Create Main Admin</Link>
            {/* <Link href="/profile" className="hover:text-primary">Profile</Link> */}
            <Link href="/" className="text-red-500 hover:text-red-700">Logout</Link>
          </div>
        )}

        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu size={24} />
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-xl rounded-lg p-4 flex flex-col gap-2 text-black z-50">
            <Link href="/">Dashboard</Link>
            <Link href="/settings">Settings</Link>
            <Link href="/" className="text-red-500">Logout</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
