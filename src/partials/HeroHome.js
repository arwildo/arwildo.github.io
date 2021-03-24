import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';

function HeroHome() {

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#BEE3F8" offset="0%" />
              <stop stopColor="#4299E1" offset="77.402%" />
              <stop stopColor="#3182CE" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-16 pb-12 md:pb-36">

          {/* Section header */}
          <div className="flex mx-5">

            {/* Left section */}
            <div className="w-1/2">
              <div className="text-left pb-12 md:pb-16 mt-16">
                <h1 className="h3 font-bold leading-tighter tracking-tighter mb-4 dark:text-gray-200" data-aos="zoom-y-out">Arwildo Belekubun.</h1>
                <div className="max-w-3xl mx-auto">

                  <p className="text-lg text-gray-600 mb-4" >
                    Hello, my name is Arwildo. <br />
                    I like to train <span className="text-blue-500">Deep Neural Nets</span> on large<br />
                    datasets and build <span className="text-blue-500">Web Apps</span>.
                  </p>

                  {/* Social links */}
                  <ul className="flex mb-4 md:order-1 md:mb-0">
                    <li>
                      <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white dark:text-blue-500 dark:bg-gray-800 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                        <FaTwitter className="m-2" />
                      </Link>
                    </li>
                    <li className="ml-4">
                      <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white dark:text-blue-500 dark:bg-gray-800 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                        <FaGithub className="m-2" />
                      </Link>
                    </li>
                    <li className="ml-4">
                      <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white dark:text-blue-500 dark:bg-gray-800 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Dribbble">
                        <FaDribbble className="m-2" />
                      </Link>
                    </li>
                    <li className="ml-4">
                      <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white dark:text-blue-500 dark:bg-gray-800 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Dribbble">
                        <FaLinkedin className="m-2" />
                      </Link>
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="w-1/2">
              <img className="mx-auto float-right" data-aos="zoom-y-out" data-aos-delay="150" src={require('../images/profile-image.svg')} width="300" alt="Arwildo Profile" />
            </div>

          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img src={require('../images/hero-image.png')} width="768" height="432" alt="Animation" />
                <div className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto">

                  {/* Rotating object animation */}
                  <iframe title="Rotating Planet" className="w-full h-full" src="https://arwildo.com/iframes/rotating-planet/" />

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;
