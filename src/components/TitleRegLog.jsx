import React from "react";
import { Link } from "react-router-dom";

const TitleRegLog = ({ titleName }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        {titleName} to{" "}
        <Link to={"/"} className="text-indigo-700 hover:text-indigo-500">
          OutsourSync.
        </Link>
      </h2>
    </div>
  );
};

export default TitleRegLog;
