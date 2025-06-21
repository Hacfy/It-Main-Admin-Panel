"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const allOrganizations = Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    name: `Organization ${i + 1}`,
    description: `Information about Organization ${i + 1}`,
  }));

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = allOrganizations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = allOrganizations.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-primary">Organization Overview</h1>

        {/* Grid of Organizations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((org) => (
            <div
              key={org.id}
              className="bg-card p-6 rounded-xl shadow transition hover:shadow-xl hover:scale-[1.01]"
            >
              <h2 className="text-xl font-semibold text-black">{org.name}</h2>
              <p className="text-black mt-2">{org.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-8 text-gray-700">
          <p className="text-sm">
            {startIndex + 1}–{endIndex} of {totalItems}
          </p>

          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`text-xl ${currentPage === 1 ? "text-gray-300" : "text-gray-600 hover:text-black"}`}
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`text-xl ${currentPage === totalPages ? "text-gray-300" : "text-gray-600 hover:text-black"}`}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
