'use client';
import { motion } from 'framer-motion';
import { Laptop, PanelTop, PencilRuler, Cross, Youtube, GalleryHorizontalEnd } from 'lucide-react';

const gradients = [
  'linear-gradient(400deg, #9F7AEA, #60A5FA)',
  'linear-gradient(400deg, #6EE7B7, #34D399)',
  'linear-gradient(400deg, #FCD34D, #FBBF24)',
  'linear-gradient(400deg, #FCA5A5, #F87171)',
  'linear-gradient(400deg, #93C5FD, #60A5FA)',
  'linear-gradient(400deg, #C4B5FD, #A78BFA)',
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
  return (
    <div className="bg-white py-8 px-6 sm:py-8 lg:px-8">
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
              className="relative flex items-start space-x-4 bg-white p-8 rounded-2xl hover:shadow-sm border hover:border-gray-200"
            >
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: gradients[index % gradients.length], // Cycle through the gradients array
                    border: '2px solid transparent',
                    backgroundOrigin: 'border-box',
                    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-opacity-100 bg-gray-100 hover:bg-opacity-0">
                    <feature.icon className="w-6 h-6 text-carcoal transition-colors duration-300" />
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