import React from 'react';

function Articles() {
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
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h3 mb-4">Articles</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              My passion for programming and cybersecurity poured into words.
            </p>
          </div>


        </div>
      </div>

    </section>

  );
}

export default Articles;
