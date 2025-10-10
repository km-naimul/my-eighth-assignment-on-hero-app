import React, { useEffect, useState } from "react";
import logoImg from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [location]);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 font-semibold border-b-2 border-purple-600 px-3 py-1"
            : "text-gray-700 hover:text-purple-500 px-3 py-1 transition-colors"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/allApps"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 font-semibold border-b-2 border-purple-600 px-3 py-1"
            : "text-gray-700 hover:text-purple-500 px-3 py-1 transition-colors"
        }
      >
        App
      </NavLink>

      <NavLink
        to="/installation"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 font-semibold border-b-2 border-purple-600 px-3 py-1"
            : "text-gray-700 hover:text-purple-500 px-3 py-1 transition-colors"
        }
      >
        Installation
      </NavLink>
    </>
  );

  return (
    <>
      
      <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 md:px-8 lg:px-12 relative z-50">
        
        <div className="navbar-start">
       
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* ✅ Mobile menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-48 p-2 shadow-md"
            >
              {links}
            </ul>
          </div>

          <NavLink
            to="/"
            className="flex items-center gap-2 text-purple-800 font-bold text-lg sm:text-xl"
          >
            <img
              className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]"
              src={logoImg}
              alt="Logo"
            />
            HERO.IO
          </NavLink>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <div className="flex gap-6">{links}</div>
        </div>

       
        <div className="navbar-end">
          <a
            href="https://github.com/km-naimul"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#9F62F2] hover:bg-[#7d46c9] text-white border-none text-sm sm:text-base px-3 sm:px-5 flex items-center gap-2 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className="hidden sm:inline">Contribute</span>
          </a>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white text-center z-40 transition-opacity duration-500 px-4">
          <div className="animate-spin border-t-4 border-purple-500 border-solid rounded-full h-16 w-16 sm:h-20 sm:w-20 mb-6"></div>
          <p className="text-2xl sm:text-3xl font-semibold">
            Page Loading...
          </p>
          <p className="text-sm sm:text-base text-gray-300 mt-2">
            Please wait a moment.
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;
