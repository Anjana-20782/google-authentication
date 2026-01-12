import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-200 font-semibold">Home</Link>
        {token && <Link to="/dashboard" className="hover:text-gray-200 font-semibold">Dashboard</Link>}
      </div>
      <div>
        {token ? (
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/"
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
