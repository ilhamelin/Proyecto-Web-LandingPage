const ImageWithDecoration = ({ src, decorate = false, alt, text }) => {
    return (
        <div className="relative flex w-full h-auto group cursor-pointer transition-all duration-300">
            <div className="relative flex flex-col items-center justify-center w-full h-auto transform transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:z-10">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto object-cover rounded"
                />
                {decorate && (
                    <img
                        src="https://www.arcane.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/arcane/assets/playerSquare.svg"
                        alt="Decoración SVG"
                        className="absolute max-w-full max-h-full sm:max-w-[25px] sm:max-h-[25px] md:max-w-[32px] md:max-h-[32px] lg:max-w-[45px] lg:max-h-[45px] 2xl:max-h-full  2xl:max-w-full pointer-events-none transform transition-all ease-in-out duration-[310ms] group-hover:scale-[115%] "
                    />
                )}
                {text && (
                    <p className="absolute bottom-0 left-0 ml-4 mb-4 mt-1 sm:text-[7px] md:text-[10px] xl:text-[14px] 2xl:text-[16px]  font-tungsten font-[375] text-center text-white text-sm transition-all duration-300 group-hover:text-blue-300">
                        {text}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ImageWithDecoration;
