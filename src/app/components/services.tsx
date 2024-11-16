'use client';
import { motion } from 'framer-motion';
import { Laptop, PanelTop, PencilRuler, Cross, Youtube, GalleryHorizontalEnd } from 'lucide-react';
import { useEffect, useRef } from 'react';

const gradients = [
  'linear-gradient(400deg, #93C5FD, #60A5FA)',
];

const features = [
  {
    title: 'Software Development',
    description: 'Develop scalable applications using modern tech stack, delivering reliable solutions for complex business needs.',
    icon: Laptop
  },
  {
    title: 'Web Development',
    description: 'Build responsive web applications, driving measurable business growth and user engagement.',
    icon: PanelTop
  },
  {
    title: 'Customize Application',
    description: 'Create tailored software solutions based on your specific requirements and business objectives.',
    icon: PencilRuler
  },
  {
    title: 'Error Fix',
    description: 'Quickly identify and resolve software issues while implementing preventive measures for future stability.',
    icon: Cross
  },
  {
    title: 'Video Promotion',
    description: 'Promote your product through my social media with 100k+ followers total, reaching targeted audiences.',
    icon: Youtube
  },
  {
    title: 'Post / Story Promotion',
    description: 'Boost your brand visibility through strategic social media content across multiple platforms.',
    icon: GalleryHorizontalEnd
  }
];

const ServiceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cursor = cursorRef.current;
    let section = sectionRef.current;

    if (!cursor || !section) return;

    let cursorVisible = false;
    let cursorScale = 1;
    let mouseX = 0;
    let mouseY = 0;
    let currentScale = 1;

    const updateProperties = (elem: HTMLElement, x: number, y: number, scale: number) => {
      elem.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    };

    const updateCursor = () => {
      if (!cursorVisible) {
        cursor.style.display = 'none';
        return;
      }
      cursor.style.display = 'block';

      // Smooth cursor movement
      const x = mouseX;
      const y = mouseY;
      currentScale += (cursorScale - currentScale) * 0.2;
      updateProperties(cursor, x, y, currentScale);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      cursorVisible =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursorScale = 2;
    };

    const handleMouseLeave = () => {
      cursorScale = 1;
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    const cards = section.querySelectorAll('.service-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    // Animation loop
    const render = () => {
      updateCursor();
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white py-8 px-6 sm:py-8 lg:px-8 relative cursor-none overflow-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 w-8 h-8 -ml-4 -mt-4"
        style={{ display: 'none' }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border border-blue-500" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Services I Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            The best solutions for your business, brand, clinic, or hospital.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card relative flex items-start space-x-4 bg-white hover:bg-blue-100 p-8 rounded-2xl border hover:border-gray-200 transition-colors duration-500"
            >
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: gradients[index % gradients.length],
                    border: '2px solid transparent',
                    backgroundOrigin: 'border-box',
                    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-opacity-100 bg-gray-100 hover:bg-opacity-0 text-gray-800 hover:text-white transition-colors duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;