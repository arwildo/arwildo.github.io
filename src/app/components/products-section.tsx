'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { HiArrowSmallRight, HiArrowSmallDown } from 'react-icons/hi2'
import useEmblaCarousel from 'embla-carousel-react'

const products = [
  {
    title: 'Custom Khanza',
    description: 'Custom Healthcare Software Solutions: Trusted by Medical Institutions Across Indonesia. Build with Java, PHP, SQL.',
    images: ['/images/projects/jasa-modifikasi-custom-simrs-khanza-simkes-erm.webp'],
    link: 'https://arwildo.com/custom-khanza',
  },
  {
    title: 'Akunter',
    description: 'Full-stack DRRM (Django, React, Redux, MySQL) application to handle accounting and databases of small businesses.',
    images: ['/images/projects/akunter.webp'],
    link: 'https://arwildo.com/akunter',
  },
  {
    title: 'SpaceV',
    description: 'React app to explore space objects like the moon, mars, and the night sky through an interactive map view. Built with NASA and Google APIs.',
    images: ['/images/projects/space-view.webp'],
    link: 'https://arwildo.com/space-view',
  },
  {
    title: 'BlueO',
    description: 'Portfolio website to showcase personal projects. Driven by a clean UI theme, design with Figma built with React.',
    images: ['/images/projects/blue-bubble-portfolio.webp'],
    link: 'https://arwildo.com/blue-bubble',
  },
  {
    title: 'TexTul',
    description: 'Web App for text manipulation. Design with Figma builds with React.',
    images: ['/images/projects/textul.webp'],
    link: 'https://arwildo.com/textul',
  },
  {
    title: 'TradeTul',
    description: 'Web App for Calculate Risk Reward when Trading. Build for Cypto Company with React and Tailwind.',
    images: ['/images/projects/tradetul.webp'],
    link: 'https://arwildo.com/tradetul',
  },
  {
    title: 'Unfollower',
    description: 'Discover who doesn’t follow you back and who has unfollowed you on Instagram. Built with Next.js and Tailwind CSS.',
    images: ['/images/projects/view-instagram-unfollower.webp'],
    link: 'https://arwildo.com/unfollower',
  },
]

interface Product {
  title: string;
  description: string;
  images: string[];
  link: string; // Added link property
}

function ProductCard({ product }: { product: Product }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out h-full border border-gray-200">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {product.images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img src={image} alt={`${product.title} - Image ${index + 1}`} className="w-full h-62 object-cover" />
              </div>
            ))}
          </div>
        </div>
        {product.images.length > 1 && (
          <>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-600 p-1 rounded-full transition duration-200 shadow-md"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-600 p-1 rounded-full transition duration-200 shadow-md"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-400 hover:text-blue-700 transition duration-200">
          Get <HiArrowSmallRight className="w-5 h-5 ml-1" />
        </a>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 6, products.length));
  };

  return (
    <section className="bg-white text-gray-900 py-18 relative">
      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.slice(0, visibleProducts).map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {visibleProducts < products.length && (
          <div
            className="flex justify-center items-center mt-8" // Added items-center
          >
            <button
              onClick={loadMoreProducts}
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 flex items-center border"
            >
              Load More <HiArrowSmallDown className="w-5 h-5 ml-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}