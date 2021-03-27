import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaComment, FaHome } from 'react-icons/fa';

function Header() {

  const location = useLocation().pathname;

  return (
    <header className="relative w-full transition duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Arwildo">
              <img className="mx-auto w-8" src={require('../images/logo.svg')} alt="Arwildo" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
              {location === "/" ?
                <Link to="/contact" className="bg-white btn-sm text-blue-500 hover:bg-blue-400 hover:text-white dark:bg-grey-800 dark:text-blue-500">
                  <span>Contact</span>
                  <FaComment className="ml-2" />
                </Link> :
                <Link to="/" className="bg-white btn-sm text-blue-500 hover:bg-blue-400 hover:text-white dark:bg-grey-800 dark:text-blue-500">
                  <span>Home</span>
                  <FaHome className="ml-2" />
                </Link> 
              }
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
