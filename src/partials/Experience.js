import React from 'react';

function Experience() {

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 dark:bg-gray-900 dark:border-gray-800 dark:border-t dark:border-b pointer-events-none mb-full" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h3 mb-4 dark:text-gray-200">Experience</h1>
            <p className="text-xl text-gray-600">
              Over four years experience on 
            </p>

            <ul className="text-md text-gray-500 leading-loose" data-aos="zoom-y-out" data-aos-delay="50">
              <span className="mr-2 mt-2 bg-white btn-sm text-blue-500 dark:bg-gray-800 dark:text-blue-500" data-aos="zoom-y-out" data-aos-delay="100">
                UI / UX
              </span>
              <span className="mr-2 mt-4 bg-white btn-sm text-blue-500 dark:bg-gray-800 dark:text-blue-500" data-aos="zoom-y-out" data-aos-delay="150">
                Frontend
              </span>
              <span className="mr-2 mt-4 bg-white btn-sm text-blue-500 dark:bg-gray-800 dark:text-blue-500 " data-aos="zoom-y-out" data-aos-delay="200">
                Web Development
              </span>
              <span className="mr-2 mt-4 bg-white btn-sm text-blue-500 dark:bg-gray-800 dark:text-blue-500 " data-aos="zoom-y-out" data-aos-delay="250">
                Android Development
              </span>
              <span className="mr-2 mt-4 bg-white btn-sm text-blue-500 dark:bg-gray-800 dark:text-blue-500 " data-aos="zoom-y-out" data-aos-delay="300">
                Software Enginnering
              </span>
            </ul>

          </div >

        </div >
      </div >
    </section >
  );
}

export default Experience;
