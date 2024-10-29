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

const photos = [
  '/images/photos/photo1.webp',
  '/images/photos/photo2.webp',
  '/images/photos/photo3.webp',
  '/images/photos/photo4.webp',
  '/images/photos/photo5.webp',
  '/images/photos/photo6.webp',
  '/images/photos/photo7.webp',
  '/images/photos/photo8.webp',
  '/images/photos/photo9.webp',
]

const CustomerLogo = ({ name, logo, size }: { name: string; logo: string; size: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={size}
        height={size / 2.5}
        className={`transition-all duration-300 ${isHovered ? 'filter-none' : 'filter grayscale'}`}
      />
    </div>
  )
}

const PhotoCarousel = () => {
  return (
    <div className="overflow-hidden w-full mt-8 relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      <motion.div
        className="flex"
        animate={{
          x: [0, -100 * photos.length],
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
        {[...photos, ...photos].map((photo, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-44 mx-4">
            <Image
              src={photo}
              alt={`Customer photo ${index + 1}`}
              width={256}
              height={176}
              className="rounded-lg object-cover w-64 h-44"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function CustomerSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="bg-white py-8 md:py-16 relative">
      <div className="container mx-auto px-4 py-10 relative z-10">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Clients</h2>
        <div ref={ref} className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-12 mb-4">
          {customers.slice(0, 8).map((customer, index) => (
            <motion.div
              key={customer.name}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CustomerLogo {...customer} size={180} />
            </motion.div>
          ))}
        </div>
      </div>
      <PhotoCarousel />
    </section>
  )
}