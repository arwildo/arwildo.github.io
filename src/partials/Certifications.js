import React from 'react';

function Certifications() {
  return (
    <section className="relative px-4">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="1018" viewBox="0 0 1760 1018" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1390" cy="75" r="60" />
            <circle cx="348" cy="258" r="30" />
            <circle cx="398" cy="308" r="20" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-200">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-2">
            <h2 className="h3 mb-4">Certifications</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              My passion for programming and data science.
            </p>
          </div>

        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <main className="w-full overflow-y-auto">
          <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">

            <div className="relative flex flex-col justify-center items-center max-w-sm mx-auto my-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img src={require("../images/CERT-Android.jpg")} className="bg-gray-300 w-full rounded-lg shadow-md bg-cover bg-center" alt="Mastering Mobile Programming Android Certifications" />
              <div className="w-52 shadow bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div className="py-2 mx-4 text-center tracking-wide text-sm font-bold text-gray-800">Mastering Mobile Programming Android</div>
                <div className="bg-gray-100 items-center justify-between py-2 px-3 shadow-lg">
                  <div className="text-gray-600 text-sm font-light text-center">Skill Academy</div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center items-center max-w-sm mx-auto my-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img src={require("../images/CERT-UI.jpg")} className="bg-gray-300 w-full rounded-lg shadow-md bg-cover bg-center" alt="User Interface Fundametals Certifications" />
              <div className="w-52 shadow bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div className="py-2 mx-4 text-center tracking-wide text-sm font-bold text-gray-800">User Interface Fundametals</div>
                <div className="bg-gray-100 items-center justify-between py-2 px-3 shadow-lg">
                  <div className="text-gray-600 text-sm font-light text-center">Hacktiv8</div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>

    </section>

  );
}

export default Certifications;
