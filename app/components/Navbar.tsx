'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 border-b bg-primary text-white">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold">Admin Panel</div>
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/create" className="hover:underline">Create</Link>
          {/* <Link href="/logout" className="hover:underline text-red-300">Logout</Link> */}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block bg-white text-primary text-center font-bold rounded-full w-9 h-9 flex items-center justify-center">
          T
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <FiMenu size={24} />
        </button>
      </div>

      {open && (
        <div className="absolute top-16 right-4 bg-white shadow-xl rounded-lg p-4 flex flex-col gap-2 text-black">
          <Link href="/">Dashboard</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/logout" className="text-red-500">Logout</Link>
        </div>
      )}
    </nav>
  );
}
