"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreate = () => {
    // Just a log for now, you can replace this with API call logic
    console.log("User Created:", { name, email });
    alert(`User Created!\nName: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-primary">Create Organization</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
        />
        <button
          onClick={handleCreate}
          className="w-full bg-primary text-white p-3 rounded-lg text-lg hover:opacity-90 transition"
        >
          Create
        </button>
      </div>
    </div>
    </>
  );
}
