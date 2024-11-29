'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['SOFTWARE ENGINEER', 'WEB DEVELOPER', 'DESIGNER', 'CONTENT CREATOR'];

  useEffect(() => {
    setMounted(true);
    const typewriterEffect = () => {
      const currentWord = roles[currentRole];
      const updateText = () => {
        if (!isDeleting && displayedText !== currentWord) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        } else if (isDeleting && displayedText !== '') {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else if (displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      };

      const typingSpeed = isDeleting ? 50 : 150;
      setTimeout(updateText, typingSpeed);
    };

    if (mounted) {
      typewriterEffect();
    }
  }, [mounted, currentRole, displayedText, isDeleting]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="font-avenir">
      <div className="relative min-h-screen">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 h-auto md:w-1/2 overflow-visible"
        >
          <img 
            src="images/blueprint-grids.svg" 
            alt="Grid Blueprint" 
            className="absolute top-0 right-0 w-auto h-auto opacity-70"
          />
          <img 
            src="images/fly-objects.webp" 
            alt="Background" 
            className="absolute top-0 right-0 w-auto h-auto"
          />
        </motion.div>

        {/* Header */}
        <header className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/">
                <img src="logo.webp" alt="Custom Khanza, Modifikasi Khanza, Programming, Coding, Java, Javascript, React, Tailwind" className="h-12 mx-6 my-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 flex min-h-screen"
        >
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="px-4">
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.h1 
                  className="text-5xl md:text-7xl font-black text-carcoal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Arwildo
                </motion.h1>
                <motion.div
                  className="text-md text-gray-600 font-normal tracking-widest h-6 flex items-center justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span>{displayedText}</span>
                  <span className="w-1 h-5 bg-gray-600 ml-1 animate-ping"></span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Blinking Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-0.5 h-7 bg-carcoal animate-bounce rounded-full"></div>
        </motion.div>

      </div>
    </div>
  );
}