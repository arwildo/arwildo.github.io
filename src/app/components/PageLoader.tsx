'use client';

import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface PageLoaderProps {
  onLoadComplete: () => void;
}

const PageLoader = ({ onLoadComplete }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [sectionsLoaded, setSectionsLoaded] = useState({
    landing: false,
    products: false,
    customer: false,
    about: false,
  });

  useEffect(() => {
    // Start with initial progress
    setProgress(10);

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

      setProgress(100);
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

            // Update progress as sections load
            setProgress(prevProgress => {
              const loadedSections = Object.values(sectionsLoaded).filter(Boolean).length;
              const totalSections = Object.keys(sectionsLoaded).length;
              return Math.min(90, (loadedSections / totalSections) * 100);
            });
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
      setProgress(100);
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
        src="arwildo-software.webp" 
        alt="Custom Khanza, Modifikasi Khanza, Programming, Coding, Java, Javascript, React, Tailwind" 
        className="h-6 mx-6 mb-4 animate-bounce"
      />
      <div className="w-36 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gray-300 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default PageLoader;