import React from 'react';
import logoImg from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

  const links = <>
    <li className='m-2 font-medium'>Home</li>
    <li className='m-2 font-medium'>Apps</li>
    <li className='m-2 font-medium'>Installation</li>
  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm px-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="text-medium font-bold text-purple-800 flex justify-between items-center">
          <img className='w-[30px] h-[30px]' src={logoImg} alt="Logo" />
          HERO.IO
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/km-naimul"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-[#9F62F2] text-amber-50 flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faGithub} />  
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
