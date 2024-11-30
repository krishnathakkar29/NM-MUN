import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImagesSlider= ({ images, autoplayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const loadImages = async () => {
      const loadPromises = images.map((image) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = reject;
        });
      });

      try {
        const loadedImages = await Promise.all(loadPromises);
        setLoadedImages(loadedImages);
      } catch (error) {
        console.error("Failed to load images", error);
      }
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplayInterval, handleNext]);

  const slideVariants = {
    initial: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1.0] }
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <div className="h-screen w-full bg-[#0d0d0d] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <AnimatePresence mode="wait">
        {loadedImages.length > 0 && (
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-30">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          aria-label="Previous image"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          aria-label="Next image"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImagesSlider;

