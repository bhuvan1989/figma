import React from "react";
import "../Header/Header.css";
const NavItem = () => {
  return (
    <ul
      id="navigation"
      className="hidden md:flex space-x-6 lg:float-right text-white rounded-3xl px-20"
    >
      <li className="active">
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Features</a>
      </li>

      <li className="flex relative group">
        <a href="#" className="mr-1">
          Pages
        </a>
        <i className="fa fa-chevron-down fa-2xs self-center text-sm"></i>

        <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
          <li className="text-sm text-black hover:bg-slate-100 leading-8">
            <a href="#">Pages One</a>
          </li>
          <li className="text-sm text-black hover:bg-slate-100 leading-8">
            <a href="#">Pages Two</a>
          </li>
          <li className="text-sm text-black hover:bg-slate-100 leading-8">
            <a href="#">Pages Three</a>
          </li>
          <li className="text-sm text-black hover:bg-slate-100 leading-8">
            <a href="#">Pages Four</a>
          </li>
          <li className="text-sm text-black hover:bg-slate-100 leading-8">
            <a href="#">Pages Five</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
    </ul>
  );
};

export default NavItem;
