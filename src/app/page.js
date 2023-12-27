"use client";
import Image from "next/image";
import BannerSection from "./components/BannerSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";
import FeaturedSection from "./components/FeaturedSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductSection";
import ContactButton from "./components/ContactButton";
import DiscountSection from "./components/DiscountSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loading key="loading" onComplete={handleComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0.5, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, x: 50 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <BannerSection />
            <FeaturedSection />
            <AboutSection />
            <ProductSection />
            <DiscountSection />
            <ContactButton />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
