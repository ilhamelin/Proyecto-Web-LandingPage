import React from 'react';

const VideoModal = ({ url, onClose }) => {
    if (!url) return null;

    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black/80 z-30 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="relative w-[85%] h-[100%]"
                onClick={(e) => e.stopPropagation()}
            >
                <iframe
                    className="w-full h-full rounded-lg"
                    src={url.replace("watch?v=", "embed/")}
                    title="Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
                <button
                    onClick={onClose}
                    className="absolute top-2 -right-[120px] border-none rounded-[3px] text-[18px] text-white bg-opacity-50 px-2 py-0.5 bg-[#3D528F]"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default VideoModal;
