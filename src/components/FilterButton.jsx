import { Filter } from "lucide-react";
import React from "react";

const FilterButton = () => {
  return (
    <button className="flex items-center gap-2 text-white bg-gradient-to-r from-indigo-900 to-purple-950 px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-800 transition mb-6">
      <Filter size={18} />
      <span>Filter</span>
    </button>
  );
};

export default FilterButton;
