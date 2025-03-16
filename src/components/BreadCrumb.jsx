import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <>
      <nav className="text-white flex justify-start items-center text-sm ">
        <ul className="flex items-center  space-x-2">
          <li>
            <Link to="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight size={14} />
          </li>
          <li>
            <Link to="/users" className="hover:text-white">
              Talent Pool
            </Link>
          </li>
          <li>
            <ChevronRight size={14} />
          </li>
          <li className="text-indigo-500 font-semibold">View Talent</li>
        </ul>
      </nav>
    </>
  );
};

export default BreadCrumb;
