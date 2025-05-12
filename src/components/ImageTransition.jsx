import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ImageTransition({ activeSlide }) {
    const [prevSlide, setPrevSlide] = useState(null);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        if (!activeSlide) return;

        setShowImage(false);

        const timeout = setTimeout(() => {
            setPrevSlide(activeSlide);
            setShowImage(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [activeSlide]);

    if (!activeSlide) return null;


    return (
        <div className="relative w-full h-full max-h-screen overflow-hidden">
            {/* Fondo de color */}
            <motion.div
                key={activeSlide.id + "-bg"}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    type: "tween",
                }}
                className="absolute inset-0 z-0"
                style={{ backgroundColor: activeSlide.bgColor }}
            />

            {/* Imagen del slide */}
            {prevSlide && showImage && prevSlide.image && (
                <motion.img
                    key={prevSlide.id + "-img"}
                    src={prevSlide.image}
                    alt="Slide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.2,
                    }}
                    className="absolute inset-0 w-full h-full max-h-screen object-cover z-10"
                />
            )}
        </div>
    );
}
