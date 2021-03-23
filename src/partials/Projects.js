import React from 'react';

// Get projects data
const database = require('../db.json');
console.log(database)

function Projects() {
  return (
    <section className="relative">

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
            <circle cx="1580" cy="158" r="110" />
            <circle cx="188" cy="881" r="60" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

            <main className="w-full overflow-y-auto">
              <div className="px-6 grid grid-cols-4 lg:grid-cols-2 gap-8 lg:gap-16">

                {/* Project card */}
                <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col">
                  <div className="bg-white rounded-lg mt-5">
                    <img src={require("../images/akunter.png")} className="h-60 rounded-md shadow" alt="Akunter" />
                  </div>
                  <div className="">
                    <div className="py-5 px-5">
                      <span className="font-bold text-gray-800 text-xl">Akunter</span>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-600 font-light">
                          Full-stack DRRM (Django, React, Redux, MySQL) application to handle accounting and databases of small businesses. 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </main>

        </div>
      </div>

    </section>
  );
}

export default Projects;
