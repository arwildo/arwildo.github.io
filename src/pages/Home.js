import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Experience from '../partials/Experience';
import Projects from '../partials/Projects';
import Certifications from '../partials/Certifications';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden dark:bg-gray-900">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Experience />
        <Projects />
        <Certifications />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;
