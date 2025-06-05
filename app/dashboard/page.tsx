'use client';

import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-primary">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-black">Branch1</h2>
            <p className="text-black mt-2">Branch details</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-black">Branch2</h2>
            <p className="text-black mt-2">Branch details</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-black">Branch3</h2>
            <p className="text-black mt-2">Branch details</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-black">Branch4</h2>
            <p className="text-black mt-2">Branch details</p>
          </div>
        </div>
      </div>
    </div>
  );
}
