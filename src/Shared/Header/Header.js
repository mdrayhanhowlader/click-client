import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../contexts/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };
  return (
    <div>
      <header className="p-4  dark:text-gray-900">
        <div className="container flex justify-between h-16 mx-auto">
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/media"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Media
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/about"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                About
              </Link>
            </li>
          </ul>
          <Link
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://t3.ftcdn.net/jpg/01/42/75/66/240_F_142756661_CMyTukjzm7URk3JvyvqaqDxvAXpEOgeQ.jpg"
              alt=""
            />
          </Link>
          <div className="flex items-center md:space-x-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 dark:text-gray-100"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none text-white"
              />
            </div>
            {user?.uid ? (
              <button
                onClick={handleSignOut}
                type="button"
                className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-red-400 text-white"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/register">
                <button
                  onClick={handleSignOut}
                  type="button"
                  className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-red-400 text-white"
                >
                  Sign In
                </button>
              </Link>
            )}
          </div>
          <button title="Open menu" type="button" className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
