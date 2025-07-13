import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header className="shadow-md">
      <div className="flex justify-between items-center px-4 py-4 sm:px-8  max-w-7xl mx-auto ">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <p className="text-2xl font-bold text-primary">LestaBnb</p>
        </Link>
        {/* Search Bar */}
        <Link
          to="/"
          className="hidden lg:flex items-center border border-gray-300 rounded-full px-6 py-2"
        >
          <p className="pr-4 border-r border-r-gray-300 cursor-pointer">
            Qualquer lugar
          </p>
          <p className="px-4 border-r border-r-gray-300 cursor-pointer">
            Qualquer semana
          </p>
          <p className="px-4 cursor-pointer">Hóspedes?</p>
          <div className="bg-primary p-2 rounded-full text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </Link>
        {/* User Profile */}
        <Link
          to={user ? "/account" : "/login"}
          className="flex items-center gap-2 border border-gray-300 rounded-full px-6 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          {user ? (
            <p className="sm:max-w-none max-w-25 truncate">{user.name}</p>
          ) : (
            <></>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
