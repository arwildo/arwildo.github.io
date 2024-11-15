'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const customers = [
  { name: 'Bunda Pengharapan Hospital', logo: '/images/clients/bunda-pengharapan-hospital.webp' },
  { name: 'Harmoni Clinic', logo: '/images/clients/harmoni-clinic.webp' },
  { name: 'Heart & Surgery Hospital', logo: '/images/clients/heart-surgery-hospital.webp' },
  { name: 'Santa Lusia Clinic', logo: '/images/clients/santa-lusia-clinic.webp' },
  { name: 'Santa Elisabeth Pharmacy', logo: '/images/clients/santa-elisabeth-pharmacy.webp' },
  { name: 'Doctor Adolf Practice\'s', logo: '/images/clients/doctor-adolf-practice.webp' },
  { name: 'Mitra Keluarga Clinic', logo: '/images/clients/mitra-keluarga-clinic.webp' },
  { name: 'Other Hospital and Clinic', logo: '/images/clients/other-hospital-clinic.webp' },
]

const PhotoCarousel = () => {
  return (
    <div className="overflow-hidden w-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      <motion.div
        className="flex"
        animate={{
          x: [0, -100 * customers.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...customers, ...customers].map((customer, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-44 mx-4 flex items-center justify-center">
            <Image
              src={customer.logo}
              alt={`${customer.name} logo`}
              width={200}
              height={200}
              className="rounded-lg object-contain grayscale hover:filter-none transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function CustomerSection() {
  return (
    <section className="bg-white py-2 md:py-4 relative">
      <div className="container mx-auto px-4 py-4 relative z-10">
        <PhotoCarousel />
      </div>
    </section>
  )
}