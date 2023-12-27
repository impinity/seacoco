import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ImageLightbox({
  images,
  selectedImage,
  setSelectedImage,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0.5, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-75 p-10"
        >
          <div className="md:w-[50%]">
          <Image
            width={1000}
            height={1000}
            key={selectedImage}
            src={selectedImage}
            alt="Lightbox Image Product"
            className="w-full h-auto"
          />
          </div>

          <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
