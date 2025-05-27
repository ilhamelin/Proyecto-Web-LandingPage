// Noticias.jsx
import React, { useEffect, useState } from 'react';


import { BsArrowUpRight } from "react-icons/bs";

import imageNotice1 from './assets/image/Arcane_Fondo_Decoracion/1fb3ff7f7899591a3b8c1300ba1ef7bf57fc335c-1920x1080.avif'
import imageNotice2 from './assets/image/Arcane_Fondo_Decoracion/47222b86ade6a92edc056f0b9cd4917178b81f44-1920x1080.avif'
import imageNotice3 from './assets/image/Arcane_Fondo_Decoracion/b69eea14def2b4c38dea244436b31def2140e1b1-1920x1080.avif'
import imageNotice4 from './assets/image/Arcane_Fondo_Decoracion/0f22bccbab8c3d769e435c39a2c8330528bcad00-1920x1080.webp'
import imageNotice5 from './assets/image/Arcane_Fondo_Decoracion/c4115d233f6483627474d40f43b2f8d15f881534-1920x1080.avif'
import imageNotice6 from './assets/image/Arcane_Fondo_Decoracion/06fa18bf8e5e108639003324f0a6330e9e53cfc9-1536x864.webp'

const Noticias = () => {


    return (
        <div className="">
            <section className='relative min-h-[20rem] bg-[#0A0A0A] py-[64px]'>
                <div className='mx-44 px-11'>
                    <div className='flex items-center pt-[96px]'>
                        <h1 className='text-white text-[96px] font-tungsten '>
                            NOTICIAS
                        </h1>
                    </div>
                </div>
            </section>
            <section className='relative min-h-[55rem] '>
                <div className='mx-44 mt-10'>
                    <div className='grid grid-cols-3 gap-x-2 gap-y-5 justify-items-center'>
                        <div className='flex flex-col gap-y-1 max-w-[434.328px] max-h-[438.312px]'>
                            <div className='overflow-hidden transition-all duration-300'>
                                <img
                                    className='w-[434.328px] h-[244.297px] rounded-md object-cover transition-transform duration-500 hover:scale-110 cursor-pointer'
                                    src={imageNotice1}
                                />
                                <div className='absolute right-[78.9rem] top-[11.9rem]'>
                                    <button>
                                        <img src="https://www.arcane.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/arcane/assets/linkSquare.svg"
                                            title='External Link'
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-1 mt-3 font-inter'>
                                <p className='font-[700] text-[14px] leading-[22px]'>
                                    ANUNCIOS
                                </p>
                                <p className='flex justify-center items-center border-r-[1px] border-[#C4C4C4] my-[4px] w-[1px] px-[1px]'></p>
                                <p className='font-[500] text-[14px] leading-[22px]'>
                                    28/04/2025
                                </p>
                            </div>
                            <div className='text-[30px] font-[700] font-tungsten leading-[32px]'>
                                Hexcore Nights en CDMX
                            </div>
                            <div className='text-[16px] font-[400] leading-[24px] font-inter'>
                                Baila toda la noche con Arcane: Hexcore Nights en CDMX
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-1 max-w-[434.328px] max-h-[438.312px]'>
                            <div className='overflow-hidden transition-all duration-300'>
                                <img
                                    className='w-[434.328px] h-[244.297px] rounded-md object-cover transition-transform duration-500 hover:scale-110 cursor-pointer'
                                    src={imageNotice2}
                                />

                            </div>
                            <div className='flex gap-1 mt-3 font-inter'>
                                <p className='font-[700] text-[14px] leading-[22px]'>
                                    ANUNCIOS
                                </p>
                                <p className='flex justify-center items-center border-r-[1px] border-[#C4C4C4] my-[4px] w-[1px] px-[1px]'></p>
                                <p className='font-[500] text-[14px] leading-[22px]'>
                                    25/11/2024
                                </p>
                            </div>
                            <div className='text-[30px] font-[700] font-tungsten leading-[32px]'>
                                The Line | Video musical
                            </div>
                            <div className='text-[16px] font-[400] leading-[24px] font-inter'>
                                "The Line" - Twenty One Pilots
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-1 max-w-[434.328px] max-h-[438.312px]'>
                            <div className='overflow-hidden transition-all duration-300'>
                                <img
                                    className='w-[434.328px] h-[244.297px] rounded-md object-cover transition-transform duration-500 hover:scale-110 cursor-pointer'
                                    src={imageNotice3}
                                />
                                <div className='absolute right-[13.9rem] top-[11.9rem]'>
                                    <button>
                                        <img src="https://www.arcane.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/arcane/assets/linkSquare.svg"
                                            title='External Link'
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-1 mt-3 font-inter'>
                                <p className='font-[700] text-[14px] leading-[22px]'>
                                    ANUNCIOS
                                </p>
                                <p className='flex justify-center items-center border-r-[1px] border-[#C4C4C4] my-[4px] w-[1px] px-[1px]'></p>
                                <p className='font-[500] text-[14px] leading-[22px]'>
                                    12/11/2024
                                </p>
                            </div>
                            <div className='text-[30px] font-[700] font-tungsten leading-[32px]'>
                                Colección de Hayabusa Arcane
                            </div>

                        </div>
                        <div className='flex flex-col gap-y-1 max-w-[434.328px] max-h-[438.312px]'>
                            <div className='overflow-hidden transition-all duration-300'>
                                <img
                                    className='w-[434.328px] h-[244.297px] rounded-md object-cover transition-transform duration-500 hover:scale-110 cursor-pointer'
                                    src={imageNotice4}
                                />
                                <div className='absolute right-[78.9rem] top-[36.4rem]'>
                                    <button>
                                        <img src="https://www.arcane.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/arcane/assets/linkSquare.svg"
                                            title='External Link'
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-1 mt-3 font-inter '>
                                <p className='font-[700] text-[14px] leading-[22px]'>
                                    ANUNCIOS
                                </p>
                                <p className='flex justify-center items-center border-r-[1px] border-[#C4C4C4] my-[4px] w-[1px] px-[1px]'></p>
                                <p className='font-[500] text-[14px] leading-[22px]'>
                                    28/10/2024
                                </p>
                            </div>
                            <div className='text-[30px] font-[700] font-tungsten leading-[32px] wrap-break-word'>
                                Estreno de la T2 de Arcane con la comunidad: directrices y recompensas por cotransmisión
                            </div>
                            <div className='text-[16px] font-[400] leading-[24px] font-inter  wrap-break-word'>
                                Cómo transmitir el primer episodio de la T2 de Arcane en Twitch y ganar recompensas exclusivas.
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-1 max-w-[434.328px] max-h-[438.312px]'>
                            <div className='overflow-hidden transition-all duration-300'>
                                <img
                                    className='w-[434.328px] h-[244.297px] rounded-md object-cover transition-transform duration-500 hover:scale-110 cursor-pointer'
                                    src={imageNotice5}
                                />
                            </div>
                            <div className='flex gap-1 mt-3 font-inter '>
                                <p className='font-[700] text-[14px] leading-[22px]'>
                                    ANUNCIOS
                                </p>
                                <p className='flex justify-center items-center border-r-[1px] border-[#C4C4C4] my-[4px] w-[1px] px-[1px]'></p>
                                <p className='font-[500] text-[14px] leading-[22px]'>
                                    25/10/2024
                                </p>
                            </div>
                            <div className='text-[30px] font-[700] font-tungsten leading-[32px] wrap-break-word'>
                                Come Play
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-1 max-w-[434.328px] max-h-[438.312px]'>
                            <div className='overflow-hidden transition-all duration-300 '>
                                <img
                                    className='w-[434.328px] h-[244.297px] rounded-md object-cover transition-transform duration-500 hover:scale-110 cursor-pointer'
                                    src={imageNotice6}
                                />
                                <div className='absolute right-[13.9rem] top-[36.4rem]'>
                                    <button>
                                        <img src="https://www.arcane.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/arcane/assets/linkSquare.svg"
                                            title='External Link'
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-1 mt-3 font-inter '>
                                <p className='font-[700] text-[14px] leading-[22px]'>
                                    ANUNCIOS
                                </p>
                                <p className='flex justify-center items-center border-r-[1px] border-[#C4C4C4] my-[4px] w-[1px] px-[1px]'></p>
                                <p className='font-[500] text-[14px] leading-[22px]'>
                                    10/10/2024
                                </p>
                            </div>
                            <div className='text-[30px] font-[700] font-tungsten leading-[32px] wrap-break-word'>
                                Mira, juega, vive la experiencia: así celebraremos el estreno de la segunda temporada de Arcane en todo el mundo
                            </div>
                            <div className='text-[16px] font-[400] leading-[24px] font-inter  wrap-break-word'>
                                ¡Nos complace compartir más información sobre los eventos de Arcane para celebrar la segunda temporada!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Noticias;
