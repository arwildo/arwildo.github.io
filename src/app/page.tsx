'use client';

import LandingPage from './components/landing-page'
import ProductsSection from './components/products-section';
import ServiceSection from './components/services';
import Customer from './components/customer'
import About from './components/about'
import FlyingNav from './components/flying-nav';
import PageLoader from './components/PageLoader';
import { Suspense, useState } from 'react';

export default function Home() {
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  // Handler for when loading is complete
  const handleLoadComplete = () => {
    setIsFullyLoaded(true);
  };

  return (
    <>
      <PageLoader onLoadComplete={handleLoadComplete} />
      
      {/* Only show content when fully loaded */}
      <main className={`${isFullyLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        {isFullyLoaded && <FlyingNav />}
        <Suspense fallback={<div className="h-screen" />}>
          <section id="landing">
            <LandingPage />
          </section>
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <section id="products">
            <ProductsSection />
            <Customer />
          </section>
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <section id="services">
            <ServiceSection />
          </section>
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <section id="about">
            <About />
          </section>
        </Suspense>
      </main>
    </>
  )
}