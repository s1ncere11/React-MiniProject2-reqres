import React, { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import FilterButton from "../components/FilterButton";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (page) => {
    const response = await getUsers(page);
    console.log("Data dari API:", response);
    setUsers(response.data);
    setTotalPages(response.total_pages);
  };
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });
  const displayedUsers = searchQuery ? filteredUsers : users;

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen h-auto px-4 bg-cover bg-center bg-no-repeat ">
        <Navbar />
        {/* overlay blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative container mx-auto max-w-7xl p-6 flex flex-col justify-start min-h-screen"
        >
          <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg mt-26">
            Explore Our Talents
          </h2>
          <div className="flex items-center justify-center gap-4 w-full">
            <FilterButton />
            <div className="flex-grow">
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </div>

          <div className="min-h-[300px] flex flex-col items-start gap-2">
            {displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <UserCard key={user.id} user={user} />
              ))
            ) : (
              <p className="text-white text-center text-lg">Talent Not Found</p>
            )}
          </div>

          {/* pagination  */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              className="px-5 py-2 bg-white/30 text-white font-semibold rounded-xl shadow-lg backdrop-blur-md transition duration-300 hover:bg-white/40 disabled:opacity-50"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Prev
            </button>
            <span className="text-lg font-semibold text-white">
              Page {page} of {totalPages}
            </span>
            <button
              className="px-5 py-2 bg-white/30 text-white font-semibold rounded-xl shadow-lg backdrop-blur-md transition duration-300 hover:bg-white/40 disabled:opacity-50"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default UserList;
