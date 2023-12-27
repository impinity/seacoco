import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading({ onComplete }) {
  return (
    <motion.div
      onAnimationComplete={onComplete}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-row gap-5 w-full h-screen items-center justify-center text-center p-10">
        <motion.span
          initial={{ scale: 0.5, y: -100 }}
          animate={{ scale: 1, y: 0, rotate: 15 }}
          exit={{ opacity: 0.5, scale: 0.5, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1 }}
          className="font-bold text-yellow-900 md:text-7xl text-4xl drop-shadow-lg border border-yellow-900 p-5 rounded-lg"
        >
          SeaCoco.id
        </motion.span>
      </div>
    </motion.div>
  );
}
