import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex justify-end w-full px-0.5  mb-6 ">
      {" "}
      <form onSubmit={handleChange} className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="w-full right-2 px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-2 px-3 py-1 text-gray-600  rounded-full hover:bg-indigo-700 transition-all"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
