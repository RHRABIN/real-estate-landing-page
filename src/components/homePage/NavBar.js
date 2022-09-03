import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="flex-none">
        <button className="text-xl font-bold">Bensik.</button>
      </div>
      <div className="flex-1 ml-0 hidden lg:block lg:ml-12">
        <a href="/#" className="btn btn-ghost normal-case ">
          Home
        </a>
        <a href="/#" className="btn btn-ghost normal-case ">
          Feature
        </a>
        <a href="/#" className="btn btn-ghost normal-case ">
          Service
        </a>
        <a href="/#" className="btn btn-ghost normal-case ">
          Listed
        </a>
        <a href="/#" className="btn btn-ghost normal-case ">
          Contact
        </a>
      </div>
      <div className="flex-none">
        <button className="btn bt-xs btn-ghost">Signup</button>
        <button className="btn btn-xs ">Register</button>
      </div>
    </div>
  );
};

export default NavBar;
