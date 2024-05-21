import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full fixed z-50 top-0 h-[11vh] bg-[#131b26] shadow-md">
        <div className="flex items-center justify-between flex-wrap w-[80%] mx-auto h-full">
          <h1 className="flex-[0.7] cursor-pointer text-xl text-white font-extrabold ">
            <Link to="/">
              WEB<span className="text-[#f021b2]">DEV</span>
            </Link>
          </h1>

          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/skills" className="nav-link">
            Skills
          </Link>
          <Link to="/project" className="nav-link">
            Projects
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
