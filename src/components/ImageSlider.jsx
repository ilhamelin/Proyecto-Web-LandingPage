import { useRef, useEffect, useState } from 'react';
import ImageWithDecoration from '../components/ImageWithDecoration';
import '../index.css';

import img1 from "../assets/Scroll Image/Imagen_Scroll_1.png";
import img2 from "../assets/Scroll Image/Imagen_Scroll_2.png";
import img3 from "../assets/Scroll Image/Imagen_Scroll_3.png";
import img4 from "../assets/Scroll Image/Imagen_Scroll_4.png";
import img5 from "../assets/Scroll Image/Imagen_Scroll_5.png";
import img6 from "../assets/Scroll Image/Imagen_Scroll_6.png";
import img7 from "../assets/Scroll Image/Imagen_Scroll_7.png";

const ImageSlider = () => {
    const sliderRef = useRef(null);
    const imageRef = useRef(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const images = [
        { src: img1, text: "HEXCORE NIGHTS EN CDMX", link: "https://www.arcane.com/es-mx/news/announcements/arcane-hexcore-nights-in-mexico-city/" },
        { src: img2, text: "THE LINE | VIDEO MUSICAL", link: "https://www.youtube.com/watch?v=E2Rj2gQAyPA" },
        { src: img3, text: "PAINT THE TOWN BLUE", link: "https://www.youtube.com/watch?v=pl2K9rvsS74" },
        { src: img4, text: "COME PLAY", link: "https://www.youtube.com/watch?v=3jf6xOg6e7Y" },
        { src: img5, text: "ARCANE: TEMPORADA 2 | TRAILER OFICIAL", link: "https://www.youtube.com/watch?v=_Ke8AVNsZCY" },
        { src: img6, text: "ARCANE: TEMPORADA 2 | TRAILER OFICIAL", link: "https://www.youtube.com/watch?v=SGUPywQs3EE" },
        { src: img7, text: "AVANCE DE ARCANE DENTRO DEL JUEGO: VEN A JUGAR", link: "https://www.youtube.com/watch?v=rR5vyzjGwmk" },
    ];

    const updateScrollButtons = () => {
        const slider = sliderRef.current;
        if (slider) {
            const { scrollLeft, scrollWidth, clientWidth } = slider;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // tolerancia de 1px
        }
    };

    const scrollLeft = () => {
        if (sliderRef.current && imageRef.current) {
            const imageWidth = imageRef.current.offsetWidth + 8; // 8px por el gap-2
            sliderRef.current.scrollBy({
                left: -imageWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current && imageRef.current) {
            const imageWidth = imageRef.current.offsetWidth + 8; // 8px por el gap-2
            sliderRef.current.scrollBy({
                left: imageWidth,
                behavior: 'smooth',
            });
        }
    };

    const handleImageClick = (index, link) => {
        if (index >= 1) {
            setVideoUrl(link);
        } else {
            window.open(link, '_blank'); // solo la primera imagen
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Verifica en el primer render
        updateScrollButtons();

        // Añade listener
        slider.addEventListener('scroll', updateScrollButtons);
        return () => slider.removeEventListener('scroll', updateScrollButtons);
    }, []);




    return (
        <div data-testid="image-slider" className="w-full h-auto overflow-hidden scrollbar-hide my-2 pb-4 bg-gradient-to-t from-black/90">
            {/* Botones de navegación arriba del slider */}
            <div className="flex justify-end pr-4 mb-2 gap-2">
                <button
                    aria-label="scroll left"
                    onClick={scrollLeft}
                    className="p-1 rounded-full"
                    disabled={!canScrollLeft}

                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.45459 16.6034L17.9088 23L17.7702 22.6536C17.4519 21.8578 17.4681 20.9672 17.8152 20.1835L17.9088 19.9722C14.3887 18.6521 14.3977 17.4972 14.3977 15.8832C14.3977 14.2693 14.3867 13.1144 17.9088 11.8054C17.5049 11.0346 17.4585 10.1258 17.7816 9.31787L17.9088 9L6.45459 15.2939L6.45459 16.6034ZM13.8921 18.3925L9.70144 15.9058L13.8921 13.4726C13.4668 14.3924 13.2527 15.1751 13.2527 15.9058C13.2527 16.6254 13.4668 17.4854 13.8921 18.3925Z"
                            fill={canScrollLeft ? "#A7B6E3" : "#535353"}
                        />
                    </svg>
                </button>
                <button
                    aria-label="scroll right"
                    onClick={scrollRight}
                    className="p-1 rounded-full"
                    disabled={!canScrollRight}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M25.5454 16.6034L14.0912 23L14.2298 22.6536C14.5481 21.8578 14.5319 20.9672 14.1848 20.1835L14.0912 19.9722C17.6113 18.6521 17.6023 17.4972 17.6023 15.8832C17.6023 14.2693 17.6133 13.1144 14.0912 11.8054C14.4951 11.0346 14.5415 10.1258 14.2184 9.31787L14.0912 9L25.5454 15.2939L25.5454 16.6034ZM18.1079 18.3925L22.2986 15.9058L18.1079 13.4726C18.5332 14.3924 18.7473 15.1751 18.7473 15.9058C18.7473 16.6254 18.5332 17.4854 18.1079 18.3925Z"
                            fill={canScrollRight ? "#A7B6E3" : "#535353"}
                        />
                    </svg>
                </button>
            </div>

            {/* Carrusel */}
            <div className="flex flex-col">
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto scrollbar-hide scroll-smooth items-center gap-3 px-10 pt-3 pb-3"
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[18.5%] sm:w-[25%] md:w-[20%] lg:w-[18%]"
                            ref={index === 0 ? imageRef : null}
                            onClick={() => handleImageClick(index, image.link)}
                        >
                            <ImageWithDecoration
                                src={image.src}
                                alt={`Imagen ${index + 1}`}
                                decorate={index >= 1}
                                text={image.text}
                                link={null}
                                onClick={index >= 1 ? () => setVideoUrl(image.link) : null}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {videoUrl && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex justify-center items-center">
                    <div className="relative w-[80%] h-[80%]">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={videoUrl.replace("watch?v=", "embed/")}
                            title="Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                        <button
                            onClick={() => setVideoUrl(null)}
                            className="absolute -top-0 -right-12 border-none rounded-[3px] text-[15px] text-white bg-opacity-50 px-3 py-1 bg-[#3D528F]"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
