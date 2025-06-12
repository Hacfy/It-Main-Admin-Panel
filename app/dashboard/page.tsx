'use client';

import Navbar from "../components/Navbar";

export default function Dashboard() {
  // Sample data: This can be fetched from your DB or API later
  const organisations = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Organization ${i + 1}`,
    description: `Information about Organization ${i + 1}`,
  }));

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-primary">Organization Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {organisations.map(org => (
            <div
              key={org.id}
              className="bg-card p-6 rounded-xl shadow transition hover:shadow-xl hover:scale-[1.01]"
            >
              <h2 className="text-xl font-semibold text-black">{org.name}</h2>
              <p className="text-black mt-2">{org.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
