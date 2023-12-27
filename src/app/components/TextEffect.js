"use client"
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function TextEffect({children}) {
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ],
        });
    };

    return (
        <motion.span
        className="inline-block font-bold md:text-5xl text-3xl text-yellow-900"
        animate={controls}
        onMouseOver={() => {
            if (!isPlaying) rubberBand()
        }}
        onAnimationComplete={() => setIsPlaying(false)}
        >
            {children}
        </motion.span>
    )
}