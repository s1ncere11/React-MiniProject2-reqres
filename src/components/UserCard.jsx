import { Mail, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

// Daftar role dummy
const roles = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Full Stack Developer",
  "Mobile Developer",
  "DevOps Engineer",
];

const UserCard = ({ user }) => {
  // Tentukan role berdasarkan user.id
  const role = roles[user.id % roles.length];

  return (
    <div className="flex items-center justify-between border border-slate-700 bg-black/70 text-white rounded-lg p-4 shadow-sm hover:shadow-[0_0_30px_rgba(99,102,241,1)] transition w-full h-auto flex-col md:flex-row space-y-5">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt={user.first_name}
          className="w-16 h-16 rounded-full transition-transform duration-300 hover:rotate-45"
        />

        <div>
          {/* Nama */}
          <h3 className="text-lg font-semibold">
            {user.first_name} {user.last_name}
          </h3>

          {/* Badge role di bawah nama */}

          <p className="text-sm flex items-center gap-1 mt-2">
            <Mail size={14} /> {user.email}
          </p>
          <p className="text-sm flex items-center gap-1">
            <Phone size={14} /> +1 (555) {user.id}23-4567
          </p>
          <span className="bg-indigo-700 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mt-2">
            {role}
          </span>
        </div>
      </div>
      <Link
        to={`/users/${user.id}`}
        className="bg-gradient-to-r from-indigo-900 to-purple-950 text-white px-28 md:px-6 py-3 font-semibold rounded-xl md:rounded-2xl transition cursor-pointer 
                    hover:shadow-[0_0_5px_rgba(99,102,241,1)] 
                   hover:from-indigo-700 hover:to-purple-800 duration-300"
      >
        View
      </Link>
    </div>
  );
};

export default UserCard;
