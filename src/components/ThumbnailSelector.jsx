import { useState } from "react";

const ThumbnailSelector = ({ slides = [], activeSlide, setActiveSlide }) => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div className="absolute left-2 top-[177px] flex flex-col space-y-2 z-10">
            {slides.map((slide) => {
                const isActive = activeSlide?.id === slide.id;
                const isHovered = hoveredId === slide.id;

                return (
                    <button
                        key={slide.id}
                        onClick={() => setActiveSlide(slide)}
                        onMouseEnter={() => setHoveredId(slide.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="w-[60px] h-16 border-2 rounded-sm overflow-hidden transition-all duration-300"
                        style={{
                            borderColor: isActive || isHovered ? slide.bgColor : "white",
                        }}
                    >
                        <img
                            src={slide.thumbnail}
                            alt={`Thumbnail ${slide.id}`}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                        />
                    </button>
                );
            })}
        </div>
    );
};


export default ThumbnailSelector;
