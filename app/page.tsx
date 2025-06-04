'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
// import Navbar from "./components/Navbar";

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && email.trim()) {
      // In real apps you'd authenticate here
      router.push("/dashboard");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <div className="flex flex-1 flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold text-primary mb-6">Admin Panel Login</h1>
        <form onSubmit={handleLogin} className="bg-card p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4">
          <div>
            <label className="block text-left mb-1 font-medium text-black">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-300 text-gray-900"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-left mb-1 font-medium text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-300 text-gray-900"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
