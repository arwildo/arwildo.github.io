import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {

	const getYear =  () => {
		return new Date().getFullYear();
	}

  return (
    <footer className="flex justify-center px-4 text-gray-600 bg-white">
      <div className="container py-6 max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-200">
        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <a href="https://arwildo.com" className="text-xl font-bold">
              <img className="w-8" src={require("../images/logo.svg")} alt="Arwildo" />
            </a>
          </div>
          <div className="-mx-4">
            <div className="flex mt-4 md:m-0">
              {/* Social links */}
              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                <li>
                  <a href="https://www.youtube.com/channel/UC8d7Kp-zXf6ZuSff043mjpg" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                    <FaYoutube className="m-2"/>
                  </a>
                </li>
                <li className="ml-4">
                  <a href="https://www.instagram.com/arwildooo/" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                    <FaInstagram className="m-2"/>
                  </a>
                </li>
                <li className="ml-4">
                  <a href="https://www.facebook.com/arwildo/" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                    <FaFacebookF className="m-2"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm table mx-auto">
            <a href="https://arwildo.com">Arwildo</a> &copy; {getYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
