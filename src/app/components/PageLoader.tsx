'use client';
import React, { useState, useEffect } from 'react';

interface PageLoaderProps {
  onLoadComplete: () => void;
}

const PageLoader = ({ onLoadComplete }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [sectionsLoaded, setSectionsLoaded] = useState({
    landing: false,
    products: false,
    customer: false,
    about: false,
  });

  useEffect(() => {
    const checkReadyState = () => {
      if (document.readyState === 'complete') {
        handleFullLoad();
      }
    };

    const handleFullLoad = () => {
      ['landing', 'products', 'customer', 'about'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          setSectionsLoaded(prev => ({
            ...prev,
            [id]: true
          }));
        }
      });
      
      setTimeout(() => {
        setIsLoading(false);
        onLoadComplete();
      }, 500);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionsLoaded(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    ['landing', 'products', 'customer', 'about'].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('load', handleFullLoad);
    document.addEventListener('readystatechange', checkReadyState);
    checkReadyState();

    return () => {
      observer.disconnect();
      window.removeEventListener('load', handleFullLoad);
      document.removeEventListener('readystatechange', checkReadyState);
    };
  }, [onLoadComplete]);

  useEffect(() => {
    const allSectionsLoaded = Object.values(sectionsLoaded).every(Boolean);
    if (allSectionsLoaded) {
      setTimeout(() => {
        setIsLoading(false);
        onLoadComplete();
      }, 500);
    }
  }, [sectionsLoaded, onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <img 
        src="logo.webp" 
        alt="Custom Khanza, Modifikasi Khanza, Programming, Coding, Java, Javascript, React, Tailwind" 
        className="h-9 mx-6 mb-4"
      />
      <div className="w-36 h-1 bg-gray-100 rounded-full overflow-hidden relative">
        <div 
          className="absolute h-full w-8 bg-blue-400 rounded-full animate-loading-bar"
        />
      </div>
    </div>
  );
};

export default PageLoader;