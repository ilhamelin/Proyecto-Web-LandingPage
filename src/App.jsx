import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './index.css';
import ImageSlider from './components/ImageSlider.jsx';

import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


// Referencias útiles:
// https://www.tiktok.com/@midudev/video/7348460383558028577
// https://www.youtube.com/watch?v=UEWZtTNcw68
// https://tailwindcss.com/
// https://arcane.fandom.com/wiki/Category:Characters
// https://www.reddit.com/r/arcane/comments/v8b6ws/
// https://htmlcolorcodes.com/es/rgb-a-hex/?r=10&g=10&b=10
// https://www.arcane.com/es-mx/
// https://www.onlinewebfonts.com/fonts

// Seccion 1
import logoArcane from './assets/Arcane-Logo-1.png';
import fondoVideo from './assets/Fondo-Video-Audio-Arcane.mp4';
import fondoVideo2 from './assets/ArcaneWeb_Fondo.mp4';
import LogoArcaneMini from './assets/Logo_Arcane_Basico.png'

// Sección 2

import jinx_Section2 from './assets/Jinx/Icons_Jinx_SinFondo.png';
import Vi_Section2 from './assets/Vi/Vi_Perfil_Icons-SinFondo.png';
import logoArcaneV2 from './assets/Logo_Arcane_League_Of_Legends.png';

import Fondo_Section_2 from './assets/Images Fondos Section/Piltover_Puente_Image_1.png';

// Videos sección 3
import video1 from './assets/Jinx/Video_Fondo/Arcane_Final_Jinx.mp4';
import video2 from './assets/Vi/Video_Fondo/vi arcane.mp4';
import video3 from './assets/Ekko/Video_Fondo/Arcane.mp4';
import video4 from './assets/Viktor/Video_Fondo/Viktor Pose edit Arcane y Daddy Yankee.mp4';

import img1_Right from './assets/Jinx/Jinx_Perfil_Icons.png';

import Fondo_Section_3 from './assets/Images Fondos Section/Piltover_Puente_Image_1.png';

import img1 from './assets/Vi/Vi_Perfil_Icons.png';
import img2 from './assets/Jinx/Jinx_Perfil_Icons.png';
import img3 from './assets/Viktor/Victor_Perfil_Icons.png';
import img4 from './assets/Caitlyn Kiramman/Caitlyn_Perfil_Icons.png';
import img5 from './assets/Ekko/Ekko_Perfil_Icons.png';
import img6 from './assets/Jayce Talis/Jayce_Perfil_Icons.png';


// Seccion 4
import Fondo_Section_4 from './assets/Images Fondos Section/Fondo_Azul_Gradiante_image_2.png';

// Seccion 5
import Fondo_Section_5 from './assets/Images Fondos Section/Guarida_Jinx_Imagen_3.png';

// Iconos
import iconsJinx from './assets/Jinx/Icons_Jinx.png';
import iconsVi from './assets/Vi/Icons_Vi.png';
import IconsEkko from './assets/Ekko/Icons_Ekko.png';
import IconsViktor from './assets/Viktor/Icons_Viktor.png';
import IconsCaitlyn from './assets/Caitlyn Kiramman/Icons_Caitlyn.png';
import IconsJayce from './assets/Jayce Talis/Icons_Jayce.png';

// imageMap
import LeagueOfLegends from './assets/imageMap/9f6c08831b0d22c4c929fc50ada08d29650f1917-1280x721.jpg';
import Valorant from './assets/imageMap/7157a3af53e8b9a2795f146133e7803e11b1c1d8-1920x1080.jpg';
import TeamFightTactic from './assets/imageMap/477ce1d7a875eb99fd00319870bfaad642da220c-1920x1080.jpg';
import RunaTerra from './assets/imageMap/95f244060cf64373f7b30e9db7edbbd41f705f04-1920x1080.jpg';
import WildRift from './assets/imageMap/a0d4a04e8059f9e9426b8a8ed7a2b0174886e754-1320x743.jpg';
import ConvRgence from './assets/imageMap/96d6ec42a3be4ed02195fb31816bb2f188c5121d-1320x743.jpg';
import HextechMathem from './assets/imageMap/410485481cef2bf4a4a15e2beedf9b929012a0c3-1320x743.jpg';
import TheMagesseker from './assets/imageMap/02281bbdccf6311df4ae705d099ed45beb42f64e-1920x1080.jpg';
import RuinedKing from './assets/imageMap/904be9b7fb2dc287fc1a8f30f0421134eed3a35d-1320x743.jpg';
import SonsOfNunu from './assets/imageMap/8b0fd50a7bbd02b24bc2c5df278b1a556cf0cecf-1320x743.jpg';
import RiotForgeGames from './assets/imageMap/887a22f93dff0593674b4df1a267b840f85b01e7-1320x743.jpg';
import LolEsports from './assets/imageMap/8459546a9d8a91074ef7f4ef8e43ebd561d30396-1920x1080.jpg';
import ValorantEsports from './assets/imageMap/46e6f7f8295ccf1ffa2480d7f0c1b9926204c08f-1920x1080.jpg';
import Arcane from './assets/imageMap/70361f54e9202cccae3852adebdc567246d83179-1320x743.jpg';
import Universo from './assets/imageMap/ada5282be4b3fa4225027ac9170014db245deb58-1320x743.jpg';
import RiotGameMusic from './assets/imageMap/73a9ef5885cacca97a8589c4263d324c290cf536-1320x743.jpg';


const gameDetails = {
  'LEAGUE OF LEGENDS': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/e003b58a6493371450b6afe73853a9c3ff5149a2-146x55.svg',
    description: 'ENFRÉNTATE EN LA ARENA DE BATALLA 5 CONTRA 5 DEFINITIVA',
    image: LeagueOfLegends,
    icon: '🖱️',
  },
  'VALORANT': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/8eea1401b06cc6ab8e0ebef79866326d6169e1f4-146x98.svg?',
    description: 'PRESUME ANTE TUS ENEMIGOS EN ESTE SHOOTER TACTICO 5 CONTRA 5 DEFINITIVA',
    image: Valorant,
    icon: '🖱️',
  },
  'TEAMFIGHT TACTICS': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/764f2bdcebd378556494a6eb10135be4e265352c-146x101.svg?',
    description: 'UNA BATALLA DE INGENIOS PARA ARMAR EQUIPOS',
    image: TeamFightTactic,
    icon: '🖱️',
  },
  'LEGENDS OF RUNATERRA': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/f1a5f3b7368dfc270e62a5a0994cc71377fc067b-146x48.svg?',
    description: 'DOMINA CADA MOMENTO EN ESTE JUEGO DE CARTAS ESTRATEGICO',
    image: RunaTerra,
    icon: '🖱️',
  },
  'LOL: WILD RIFT': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/1f3220a2d73cfa313e05c224efcdf5dcdc8a3ef4-144x95.svg?',
    description: 'LEAGUE OF LEGENDS, AHORA PARA DISPOSITIVOS MOVILES',
    image: WildRift,
    icon: '🖱️',
  },
  // FORGE y ESPORTS
  'CONV/RGENCE': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/52ed2c5cd26fab4d34a7908c90a6c903c410eeba-1600x486.png?',
    description: 'EXPLORA ZAUN COMO EKKO EN ESTE JUEGO DE PLATAFORMA LLENO DE ACCION',
    image: ConvRgence,
    icon: '🖱️',
  },
  'HEXTECH MATHEM': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/903b6c2931a1a5e57e60037b2aab2ddcf3225445-262x165.svg?',
    description: 'RIOT FORGE PRESENTA HEXTECH MAYHEM',
    image: HextechMathem,
    icon: '🖱️',
  },
  'THE MAGESEEKER': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/47eddbfb9494161a0297c80be917ee6065d1c64b-400x210.png?',
    description: 'JUEGA COMO SYLAS Y LIBERA DEMACIA DE LA TIRANIA EN ESTE RPG DE ACCION',
    image: TheMagesseker,
    icon: '🖱️',
  },
  'RUINED KING': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/a4d1eb7a2d3122dfefb2180bd6661448b9ce3cba-406x295.svg?',
    description: 'VENCE A LA RUINA EN ESTE JUEGO RPG POR TURNOS',
    image: RuinedKing,
    icon: '🖱️',
  },
  'SONG OF NUNU': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/40c381c01bfaaf46654ab0bc146be3b720fc0606-350x108.png?',
    description: 'UNA CANCION SIEMPRE VIVIRA',
    image: SonsOfNunu,
    icon: '🖱️',
  },
  'RIOT FORGE GAMES': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/024a377f9e1c195cab9bb8eee1ea10fdaa7db4d3-54x53.svg?',
    description: 'EDITOR DE EXPERIENCIAS COMPLETABLES DEL UNIVERSO DE LOL',
    image: RiotForgeGames,
    icon: '🖱️',
  },
  'LOL ESPORTS': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/8f34104a42ab1e5e4b6251d33ae007ffdab70cba-3997x1000.png?',
    description: 'PRESUME ANTE TUS ENEMIGOS EN ESTE SHOOTER TACTICO 5 CONTRA 5 DEFINITIVA',
    image: LolEsports,
    icon: '🖱️',
  },
  'VALORANT ESPORTS': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/e038e934212b5055a402dbb66e92949e55f6b222-1003x720.png?',
    description: 'PRESUME ANTE TUS ENEMIGOS EN ESTE SHOOTER TACTICO 5 CONTRA 5 DEFINITIVA',
    image: ValorantEsports,
    icon: '🖱️',
  },
  // ENTRETENIMIENTO y NEGOCIOS
  'ARCANE': {
    svgTitle: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/b5f67842576be722a65c8f6a50e21bad34b0a294-148x45.svg?',
    description: 'PRESUME ANTE TUS ENEMIGOS EN ESTE SHOOTER TACTICO 5 CONTRA 5 DEFINITIVA',
    image: Arcane,
    icon: '🖱️',
  },
  'UNIVERSO': {
    svgTitle: "UNIVERSO",
    description: 'PRESUME ANTE TUS ENEMIGOS EN ESTE SHOOTER TACTICO 5 CONTRA 5 DEFINITIVA',
    image: Universo,
    icon: '🖱️',
  },
  'RIOT GAMES MUSIC': {
    svgTitle: "UNIVERSO",
    description: 'PRESUME ANTE TUS ENEMIGOS EN ESTE SHOOTER TACTICO 5 CONTRA 5 DEFINITIVA',
    image: RiotGameMusic,
    icon: '🖱️',
  },
};

const slides = [
  {
    id: 1,
    image: img2,
    thumbnail: iconsJinx,
    title: "Jinx",
    subtitle: "Cuyo verdadero nombre es Powder",
    description: "¡Es una de las protagonistas de Arcane...",
    bgColor: "#075184",
    link: "https://arcane.fandom.com/wiki/Jinx",
    titleColor: "text-[#075184]",
    subtitleColor: "text-[#075184]",
    buttonBgColor: "bg-[#075184]",
    buttonTextColor: "text-black",
    buttonHoverBgColor: "hover:bg-[#075184]/60",
  },
  {
    id: 2,
    image: img1,
    thumbnail: iconsVi,
    title: "Violet",
    subtitle: "Comúnmente conocida como Vi",
    description: "Es una de las protagonistas de Arcane...",
    bgColor: "#d52d55",
    link: "https://arcane.fandom.com/wiki/Vi",
    titleColor: "text-[#d52d55]",
    subtitleColor: "text-[#d52d55]",
    buttonBgColor: "bg-[#d52d55]",
    buttonTextColor: "text-black",
    buttonHoverBgColor: "hover:bg-[#d52d55]/60",
  },
  {
    id: 3,
    image: img5,
    thumbnail: IconsEkko,
    title: "Ekko",
    subtitle: "Es un personaje importante de Arcane",
    description: "Uno de los muchos niños que crecieron en los Caminos.",
    bgColor: "#d5cebc",
    link: "https://arcane.fandom.com/wiki/Ekko",
    titleColor: "text-[#bcb0ac]",
    subtitleColor: "text-[#bcb0ac]",
    buttonBgColor: "bg-[#bcb0ac]",
    buttonTextColor: "text-black",
    buttonHoverBgColor: "hover:bg-[#bcb0ac]/60",
  },
  {
    id: 4,
    image: img3,
    thumbnail: IconsViktor,
    title: "Viktor",
    subtitle: "También conocido como el Heraldo...",
    description: "Fue un personaje principal de Arcane...",
    bgColor: "#3b3c41",
    link: "https://arcane.fandom.com/wiki/Viktor",
    titleColor: "text-[#501b25]",
    subtitleColor: "text-[#501b25]",
    buttonBgColor: "bg-[#501b25]",
    buttonTextColor: "text-black",
    buttonHoverBgColor: "hover:bg-[#501b25]/60",
  },
  {
    id: 5,
    image: img4,
    thumbnail: IconsCaitlyn,
    title: "Caitlyn Kiramman",
    subtitle: "Es una de las protagonistas de Arcane",
    description: "Es la hija hábil, decidida y justiciera...",
    bgColor: "#3b3c41",
    link: "https://arcane.fandom.com/wiki/Caitlyn",
    titleColor: "text-[#2d2a5e]",
    subtitleColor: "text-[#2d2a5e]",
    buttonBgColor: "bg-[#2d2a5e]",
    buttonTextColor: "text-black",
    buttonHoverBgColor: "hover:bg-[#2d2a5e]/60",
  },
  {
    id: 6,
    image: img6,
    thumbnail: IconsJayce,
    title: "Jayce Talis",
    subtitle: "Fue un personaje principal de Arcane",
    description: "Un hombre ambicioso, inteligente y compasivo...",
    bgColor: "#3b3c41",
    link: "https://arcane.fandom.com/wiki/Caitlyn",
    titleColor: "text-[#c4a463]",
    subtitleColor: "text-[#c4a463]",
    buttonBgColor: "bg-[#c4a463]",
    buttonTextColor: "text-black",
    buttonHoverBgColor: "hover:bg-[#c4a463]/60",
  },
];

function App() {


  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(slides[0]); // Slider Section 3

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [hoveredTitle, setHoveredTitle] = useState(null);

  const renderHoverItem = (text) => (
    <p
      className="text-gray-600 py-[4px] px-[10px] text-[13px] hover:bg-gray-400/40 hover:rounded-md cursor-pointer"
      onMouseEnter={() => setHoveredTitle(text)}
    >
      {text}
    </p>
  );


  const sectionVariants = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 1 },
    },
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-auto antialiased font-stretch-expanded scrollbar-hide">
      {/* Sección 1 con el video de fondo */}
      <section ref={containerRef} className="snap-start min-h-screen bg-[#B0DFE5] flex flex-col relative ">

        {/* header */}
        <div className='fixed top-0 left-0 w-full z-40 bg-[#161616] text-white px-9 py-[26px] shadow-md'>
          <div className='flex flex-row items-center justify-start gap-4'>
            <div className='flex'>
              <button onClick={toggleDropdown} className='flex logo-hover items-center'>
                <svg viewBox="0 0 590 140" width="85px" height="27px" xmlns="http://www.w3.org/2000/svg" fill='white'>
                  <path d="M 98.77 0.33 L 0 46.07 l 24.61 93.66 l 18.73 -2.3 l -5.15 -58.89 l 6.15 -2.74 L 54.96 136 l 32.01 -3.93 l -5.69 -65 l 6.09 -2.71 l 11.68 66.23 l 32.38 -3.98 l -6.23 -71.25 l 6.16 -2.74 l 12.77 72.43 l 32.01 -3.93 V 19.71 L 98.77 0.33 Z m 2.32 142.05 l 1.63 9.22 l 73.42 12.24 v -30.68 l -75.01 9.22 h -0.04 Z m 144.49 -19.22 v 12.63 h 15.57 a 14.84 14.84 0 0 1 -1.92 7.31 a 13 13 0 0 1 -5.6 5.11 a 20 20 0 0 1 -8.9 1.8 a 17.53 17.53 0 0 1 -10 -2.8 a 17.87 17.87 0 0 1 -6.44 -8.14 a 33.06 33.06 0 0 1 -2.27 -12.93 a 31.81 31.81 0 0 1 2.32 -12.81 a 18.14 18.14 0 0 1 6.5 -8 a 17.27 17.27 0 0 1 9.82 -2.78 a 19.31 19.31 0 0 1 5.36 0.71 a 14.15 14.15 0 0 1 4.33 2.09 a 12.92 12.92 0 0 1 3.18 3.29 a 15.61 15.61 0 0 1 2 4.44 h 17.27 a 27.22 27.22 0 0 0 -3.46 -10.28 a 28.84 28.84 0 0 0 -7.05 -8.1 a 32.6 32.6 0 0 0 -9.91 -5.29 a 37.91 37.91 0 0 0 -12.06 -1.86 a 37.32 37.32 0 0 0 -14 2.6 a 32.6 32.6 0 0 0 -11.36 7.61 a 35 35 0 0 0 -7.61 12.21 a 46.15 46.15 0 0 0 -2.73 16.44 q 0 11.94 4.54 20.59 a 32.4 32.4 0 0 0 12.69 13.27 a 39.84 39.84 0 0 0 35.84 0.84 a 28.39 28.39 0 0 0 11.67 -11 q 4.25 -7.19 4.24 -17.2 v -9.76 Z m 215.03 40.81 V 88.53 h 51.67 v 13.96 h -34.62 v 16.76 h 27.99 v 13.96 h -27.99 v 16.8 h 34.7 v 13.96 h -51.75 Z m 101.83 -53.3 a 9 9 0 0 0 -3.54 -6.64 c -2.09 -1.59 -5 -2.38 -8.69 -2.38 a 16.63 16.63 0 0 0 -6.26 1 a 8.62 8.62 0 0 0 -3.83 2.78 a 6.74 6.74 0 0 0 -1.33 4 a 6.2 6.2 0 0 0 0.79 3.29 a 7.27 7.27 0 0 0 2.4 2.45 a 16.54 16.54 0 0 0 3.7 1.79 a 40.14 40.14 0 0 0 4.64 1.31 l 6.63 1.54 a 47.19 47.19 0 0 1 9.45 3.08 a 27.46 27.46 0 0 1 7.2 4.68 a 18.84 18.84 0 0 1 4.58 6.39 a 20.37 20.37 0 0 1 1.61 8.29 a 20.65 20.65 0 0 1 -3.54 12.11 a 22.56 22.56 0 0 1 -10.15 7.85 a 41.31 41.31 0 0 1 -15.93 2.76 a 42.69 42.69 0 0 1 -16.17 -2.81 a 23.22 23.22 0 0 1 -10.72 -8.48 q -3.83 -5.66 -4 -14.12 h 16.43 a 10.68 10.68 0 0 0 7.05 9.94 a 19.37 19.37 0 0 0 7.24 1.26 a 18.44 18.44 0 0 0 6.66 -1.09 a 10 10 0 0 0 4.33 -3 a 7.22 7.22 0 0 0 1.57 -4.48 a 6.16 6.16 0 0 0 -1.42 -4 a 10.86 10.86 0 0 0 -4.14 -2.81 a 42.07 42.07 0 0 0 -6.89 -2.14 l -8.07 -1.95 q -9.65 -2.3 -15.23 -7.26 t -5.54 -13.44 a 19.86 19.86 0 0 1 3.72 -12.12 a 24.74 24.74 0 0 1 10.33 -8.11 a 36.74 36.74 0 0 1 15 -2.91 a 35.62 35.62 0 0 1 14.92 2.91 a 23.43 23.43 0 0 1 9.91 8.14 a 21.54 21.54 0 0 1 3.6 12.12 Z m -113.99 53.3 h -16.87 v -57.35 l -1.73 -0.02 l -17.04 57.37 h -16.86 l -16.58 -57.37 l -2.15 0.02 v 57.35 h -16.87 V 88.53 h 28.67 l 14.48 50.56 h 1.75 l 14.48 -50.56 h 28.72 v 75.44 Z m -114.66 0 h 18.27 l -25.33 -75.43 h -23.15 l -25.37 75.43 h 18.3 l 4.93 -16.54 h 27.42 Z m -28.43 -29.7 l 8.22 -27.65 h 3.1 l 8.26 27.65 Z m 278.58 -37.76 a 4 4 0 0 1 -3.67 -2.44 a 4 4 0 0 1 0 -3.1 a 4 4 0 0 1 0.85 -1.27 a 4.25 4.25 0 0 1 1.27 -0.86 a 4.15 4.15 0 0 1 3.1 0 a 4.13 4.13 0 0 1 1.27 0.86 a 4.08 4.08 0 0 1 0.86 1.27 a 4 4 0 0 1 0 3.1 a 4.08 4.08 0 0 1 -0.86 1.27 a 4 4 0 0 1 -1.27 0.86 a 4 4 0 0 1 -1.55 0.31 Z m 0 -1.09 a 2.84 2.84 0 0 0 1.47 -0.39 a 2.94 2.94 0 0 0 1.05 -1 a 2.93 2.93 0 0 0 0 -2.92 a 3 3 0 0 0 -1.06 -1 a 2.93 2.93 0 0 0 -2.92 0 a 3 3 0 0 0 -1 1 a 2.86 2.86 0 0 0 0 2.92 a 3 3 0 0 0 1 1 a 2.83 2.83 0 0 0 1.46 0.39 Z m -1.46 -1.15 V 90.6 h 1.78 a 1.52 1.52 0 0 1 0.69 0.15 a 1.13 1.13 0 0 1 0.47 0.42 a 1.24 1.24 0 0 1 0.17 0.66 a 1.16 1.16 0 0 1 -0.18 0.66 a 1 1 0 0 1 -0.48 0.41 a 1.56 1.56 0 0 1 -0.7 0.14 h -1.2 v -0.72 h 1 a 0.52 0.52 0 0 0 0.36 -0.12 a 0.5 0.5 0 0 0 0.14 -0.37 a 0.47 0.47 0 0 0 -0.14 -0.37 a 0.52 0.52 0 0 0 -0.36 -0.12 h -0.55 v 2.93 Z m 2.39 -1.68 l 0.82 1.68 h -1.11 l -0.75 -1.68 Z M 282.41 1.03 h 17.05 v 75.44 h -17.05 Z m 98.02 37.72 q 0 12.42 -4.71 21 a 32.67 32.67 0 0 1 -12.79 13.17 a 38.57 38.57 0 0 1 -36.31 0 a 32.75 32.75 0 0 1 -12.79 -13.2 q -4.71 -8.66 -4.71 -21 t 4.71 -21.05 a 32.67 32.67 0 0 1 12.75 -13.14 a 38.65 38.65 0 0 1 36.31 0 a 32.67 32.67 0 0 1 12.79 13.17 q 4.71 8.64 4.71 21.05 m -17.35 0 a 33.35 33.35 0 0 0 -2.23 -13 a 17.47 17.47 0 0 0 -6.33 -8 a 18.57 18.57 0 0 0 -19.45 0 a 17.57 17.57 0 0 0 -6.35 8 a 38.59 38.59 0 0 0 0 26 a 17.49 17.49 0 0 0 6.35 8 a 18.57 18.57 0 0 0 19.45 0 a 17.39 17.39 0 0 0 6.33 -8 a 33.4 33.4 0 0 0 2.23 -13 M 246.58 50.17 l 8.76 26.3 h 18.71 l -9.74 -28.33 h -13.23 l -0.79 -2.44 c 2.52 -0.49 6.83 -1.25 10.65 -3.85 a 20 20 0 0 0 8.75 -16.39 a 24.15 24.15 0 0 0 -3.26 -12.75 a 21.9 21.9 0 0 0 -9.36 -8.64 a 32.56 32.56 0 0 0 -14.64 -3 H 212 v 75.4 h 17.06 v -26.3 Z m -0.32 -15.61 a 19.35 19.35 0 0 1 -7.26 1.18 h -9.94 V 14.88 h 9.91 a 18.68 18.68 0 0 1 7.25 1.24 a 9.12 9.12 0 0 1 4.4 3.7 a 10 10 0 0 1 1.5 5.64 a 9.65 9.65 0 0 1 -1.48 5.55 a 8.86 8.86 0 0 1 -4.38 3.55 M 382.04 1.03 v 14 h 29.3 l 0.8 2.45 c -2.48 0.48 -6.67 1.22 -10.43 3.7 v 55.31 h 16.87 v -61.5 h 19.62 v -14 Z" />
                </svg>
                <IoMdArrowDropdown />
              </button>
              {/* Dropdown */}
              {isOpen && (
                <motion.div className="fixed top-0 left-0 w-full h-[calc(60vh)] bg-white z-50 shadow-lg"
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "tween"
                  }}>
                  <div className="pl-10 pr-10 pt-7 grid grid-flow-col">
                    <div className='justify-items-start'>
                      <button onClick={() => setIsOpen(false)} className='flex logo-hover-dorpdown items-center '>
                        <svg viewBox="0 0 590 140" width="85px" height="27px" xmlns="http://www.w3.org/2000/svg" fill='black'>
                          <path d="M 98.77 0.33 L 0 46.07 l 24.61 93.66 l 18.73 -2.3 l -5.15 -58.89 l 6.15 -2.74 L 54.96 136 l 32.01 -3.93 l -5.69 -65 l 6.09 -2.71 l 11.68 66.23 l 32.38 -3.98 l -6.23 -71.25 l 6.16 -2.74 l 12.77 72.43 l 32.01 -3.93 V 19.71 L 98.77 0.33 Z m 2.32 142.05 l 1.63 9.22 l 73.42 12.24 v -30.68 l -75.01 9.22 h -0.04 Z m 144.49 -19.22 v 12.63 h 15.57 a 14.84 14.84 0 0 1 -1.92 7.31 a 13 13 0 0 1 -5.6 5.11 a 20 20 0 0 1 -8.9 1.8 a 17.53 17.53 0 0 1 -10 -2.8 a 17.87 17.87 0 0 1 -6.44 -8.14 a 33.06 33.06 0 0 1 -2.27 -12.93 a 31.81 31.81 0 0 1 2.32 -12.81 a 18.14 18.14 0 0 1 6.5 -8 a 17.27 17.27 0 0 1 9.82 -2.78 a 19.31 19.31 0 0 1 5.36 0.71 a 14.15 14.15 0 0 1 4.33 2.09 a 12.92 12.92 0 0 1 3.18 3.29 a 15.61 15.61 0 0 1 2 4.44 h 17.27 a 27.22 27.22 0 0 0 -3.46 -10.28 a 28.84 28.84 0 0 0 -7.05 -8.1 a 32.6 32.6 0 0 0 -9.91 -5.29 a 37.91 37.91 0 0 0 -12.06 -1.86 a 37.32 37.32 0 0 0 -14 2.6 a 32.6 32.6 0 0 0 -11.36 7.61 a 35 35 0 0 0 -7.61 12.21 a 46.15 46.15 0 0 0 -2.73 16.44 q 0 11.94 4.54 20.59 a 32.4 32.4 0 0 0 12.69 13.27 a 39.84 39.84 0 0 0 35.84 0.84 a 28.39 28.39 0 0 0 11.67 -11 q 4.25 -7.19 4.24 -17.2 v -9.76 Z m 215.03 40.81 V 88.53 h 51.67 v 13.96 h -34.62 v 16.76 h 27.99 v 13.96 h -27.99 v 16.8 h 34.7 v 13.96 h -51.75 Z m 101.83 -53.3 a 9 9 0 0 0 -3.54 -6.64 c -2.09 -1.59 -5 -2.38 -8.69 -2.38 a 16.63 16.63 0 0 0 -6.26 1 a 8.62 8.62 0 0 0 -3.83 2.78 a 6.74 6.74 0 0 0 -1.33 4 a 6.2 6.2 0 0 0 0.79 3.29 a 7.27 7.27 0 0 0 2.4 2.45 a 16.54 16.54 0 0 0 3.7 1.79 a 40.14 40.14 0 0 0 4.64 1.31 l 6.63 1.54 a 47.19 47.19 0 0 1 9.45 3.08 a 27.46 27.46 0 0 1 7.2 4.68 a 18.84 18.84 0 0 1 4.58 6.39 a 20.37 20.37 0 0 1 1.61 8.29 a 20.65 20.65 0 0 1 -3.54 12.11 a 22.56 22.56 0 0 1 -10.15 7.85 a 41.31 41.31 0 0 1 -15.93 2.76 a 42.69 42.69 0 0 1 -16.17 -2.81 a 23.22 23.22 0 0 1 -10.72 -8.48 q -3.83 -5.66 -4 -14.12 h 16.43 a 10.68 10.68 0 0 0 7.05 9.94 a 19.37 19.37 0 0 0 7.24 1.26 a 18.44 18.44 0 0 0 6.66 -1.09 a 10 10 0 0 0 4.33 -3 a 7.22 7.22 0 0 0 1.57 -4.48 a 6.16 6.16 0 0 0 -1.42 -4 a 10.86 10.86 0 0 0 -4.14 -2.81 a 42.07 42.07 0 0 0 -6.89 -2.14 l -8.07 -1.95 q -9.65 -2.3 -15.23 -7.26 t -5.54 -13.44 a 19.86 19.86 0 0 1 3.72 -12.12 a 24.74 24.74 0 0 1 10.33 -8.11 a 36.74 36.74 0 0 1 15 -2.91 a 35.62 35.62 0 0 1 14.92 2.91 a 23.43 23.43 0 0 1 9.91 8.14 a 21.54 21.54 0 0 1 3.6 12.12 Z m -113.99 53.3 h -16.87 v -57.35 l -1.73 -0.02 l -17.04 57.37 h -16.86 l -16.58 -57.37 l -2.15 0.02 v 57.35 h -16.87 V 88.53 h 28.67 l 14.48 50.56 h 1.75 l 14.48 -50.56 h 28.72 v 75.44 Z m -114.66 0 h 18.27 l -25.33 -75.43 h -23.15 l -25.37 75.43 h 18.3 l 4.93 -16.54 h 27.42 Z m -28.43 -29.7 l 8.22 -27.65 h 3.1 l 8.26 27.65 Z m 278.58 -37.76 a 4 4 0 0 1 -3.67 -2.44 a 4 4 0 0 1 0 -3.1 a 4 4 0 0 1 0.85 -1.27 a 4.25 4.25 0 0 1 1.27 -0.86 a 4.15 4.15 0 0 1 3.1 0 a 4.13 4.13 0 0 1 1.27 0.86 a 4.08 4.08 0 0 1 0.86 1.27 a 4 4 0 0 1 0 3.1 a 4.08 4.08 0 0 1 -0.86 1.27 a 4 4 0 0 1 -1.27 0.86 a 4 4 0 0 1 -1.55 0.31 Z m 0 -1.09 a 2.84 2.84 0 0 0 1.47 -0.39 a 2.94 2.94 0 0 0 1.05 -1 a 2.93 2.93 0 0 0 0 -2.92 a 3 3 0 0 0 -1.06 -1 a 2.93 2.93 0 0 0 -2.92 0 a 3 3 0 0 0 -1 1 a 2.86 2.86 0 0 0 0 2.92 a 3 3 0 0 0 1 1 a 2.83 2.83 0 0 0 1.46 0.39 Z m -1.46 -1.15 V 90.6 h 1.78 a 1.52 1.52 0 0 1 0.69 0.15 a 1.13 1.13 0 0 1 0.47 0.42 a 1.24 1.24 0 0 1 0.17 0.66 a 1.16 1.16 0 0 1 -0.18 0.66 a 1 1 0 0 1 -0.48 0.41 a 1.56 1.56 0 0 1 -0.7 0.14 h -1.2 v -0.72 h 1 a 0.52 0.52 0 0 0 0.36 -0.12 a 0.5 0.5 0 0 0 0.14 -0.37 a 0.47 0.47 0 0 0 -0.14 -0.37 a 0.52 0.52 0 0 0 -0.36 -0.12 h -0.55 v 2.93 Z m 2.39 -1.68 l 0.82 1.68 h -1.11 l -0.75 -1.68 Z M 282.41 1.03 h 17.05 v 75.44 h -17.05 Z m 98.02 37.72 q 0 12.42 -4.71 21 a 32.67 32.67 0 0 1 -12.79 13.17 a 38.57 38.57 0 0 1 -36.31 0 a 32.75 32.75 0 0 1 -12.79 -13.2 q -4.71 -8.66 -4.71 -21 t 4.71 -21.05 a 32.67 32.67 0 0 1 12.75 -13.14 a 38.65 38.65 0 0 1 36.31 0 a 32.67 32.67 0 0 1 12.79 13.17 q 4.71 8.64 4.71 21.05 m -17.35 0 a 33.35 33.35 0 0 0 -2.23 -13 a 17.47 17.47 0 0 0 -6.33 -8 a 18.57 18.57 0 0 0 -19.45 0 a 17.57 17.57 0 0 0 -6.35 8 a 38.59 38.59 0 0 0 0 26 a 17.49 17.49 0 0 0 6.35 8 a 18.57 18.57 0 0 0 19.45 0 a 17.39 17.39 0 0 0 6.33 -8 a 33.4 33.4 0 0 0 2.23 -13 M 246.58 50.17 l 8.76 26.3 h 18.71 l -9.74 -28.33 h -13.23 l -0.79 -2.44 c 2.52 -0.49 6.83 -1.25 10.65 -3.85 a 20 20 0 0 0 8.75 -16.39 a 24.15 24.15 0 0 0 -3.26 -12.75 a 21.9 21.9 0 0 0 -9.36 -8.64 a 32.56 32.56 0 0 0 -14.64 -3 H 212 v 75.4 h 17.06 v -26.3 Z m -0.32 -15.61 a 19.35 19.35 0 0 1 -7.26 1.18 h -9.94 V 14.88 h 9.91 a 18.68 18.68 0 0 1 7.25 1.24 a 9.12 9.12 0 0 1 4.4 3.7 a 10 10 0 0 1 1.5 5.64 a 9.65 9.65 0 0 1 -1.48 5.55 a 8.86 8.86 0 0 1 -4.38 3.55 M 382.04 1.03 v 14 h 29.3 l 0.8 2.45 c -2.48 0.48 -6.67 1.22 -10.43 3.7 v 55.31 h 16.87 v -61.5 h 19.62 v -14 Z" />
                        </svg>
                        <IoMdArrowDropdown />
                      </button>
                    </div>
                    <div className='grid grid-flow-col justify-items-end-safe'>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 px-2 py-2 rounded-full bg-gray-400/40 "
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                  <div className="pl-[45px] pr-[45px] pt-6">
                    <div className="text-black grid grid-cols-[300px_300px_300px_900px] gap-[10px]">
                      {/* JUEGOS */}
                      <div className="flex flex-col">
                        <div className="text-[20px] px-[10px] font-tungsten bg-gray-300/40 rounded-md">
                          JUEGOS
                        </div>
                        <div className="flex flex-col gap-1.5 mt-[15px] font-inter">
                          {renderHoverItem('LEAGUE OF LEGENDS')}
                          {renderHoverItem('VALORANT')}
                          {renderHoverItem('TEAMFIGHT TACTICS')}
                          {renderHoverItem('LEGENDS OF RUNATERRA')}
                          {renderHoverItem('LOL: WILD RIFT')}
                        </div>
                      </div>

                      {/* FORGE y ESPORTS */}
                      <div>
                        <div className="flex flex-col">
                          <div className="text-[20px] px-[10px] font-tungsten bg-gray-300/40 rounded-md">
                            FORGE
                          </div>
                          <div className="flex flex-col gap-1.5 mt-[15px] font-inter">
                            {renderHoverItem('CONV/RGENCE')}
                            {renderHoverItem('HEXTECH MATHEM')}
                            {renderHoverItem('THE MAGESEEKER')}
                            {renderHoverItem('RUINED KING')}
                            {renderHoverItem('SONG OF NUNU')}
                            {renderHoverItem('RIOT FORGE GAMES')}
                          </div>
                        </div>

                        <div className="flex flex-col mt-[20px]">
                          <div className="text-[20px] px-[10px] font-tungsten bg-gray-300/40 rounded-md">
                            ESPORTS
                          </div>
                          <div className="flex flex-col gap-1.5 mt-[15px] font-inter">
                            {renderHoverItem('LOL ESPORTS')}
                            {renderHoverItem('VALORANT ESPORTS')}
                          </div>
                        </div>
                      </div>

                      {/* ENTRETENIMIENTO y NEGOCIOS */}
                      <div>
                        <div className="flex flex-col">
                          <div className="text-[20px] px-[10px] font-tungsten bg-gray-300/40 rounded-md">
                            ENTRETENIMIENTO
                          </div>
                          <div className="flex flex-col gap-1.5 mt-[15px] font-inter">
                            {renderHoverItem('ARCANE')}
                            {renderHoverItem('UNIVERSO')}
                            {renderHoverItem('RIOT GAMES MUSIC')}
                          </div>
                        </div>

                        <div className="flex flex-col mt-[20px]">
                          <div className="text-[20px] px-[10px] font-tungsten bg-gray-300/40 rounded-md">
                            NEGOCIOS
                          </div>
                          <div className="flex flex-col gap-1.5 mt-[15px] font-inter">
                            {renderHoverItem('RIOT GAMES')}
                            {renderHoverItem('RIOT MOBILE')}
                            {renderHoverItem('SOPORTE DE RIOT')}
                          </div>
                        </div>
                      </div>

                      {/* IMAGEN */}
                      <div className="flex items-center justify-center w-full h-[410px]">
                        {hoveredTitle && gameDetails[hoveredTitle] && (
                          <div className="flex items-center justify-center w-full h-[410px] relative">
                            <div className="flex w-[900px] h-full rounded-lg overflow-hidden shadow-lg bg-[#111] text-white relative transition-all duration-500">
                              {/* LADO IZQUIERDO */}
                              <div className="flex-col grid p-3 w-[30%] z-10 transition-all duration-500 ease-in-out">
                                <div className="w-full flex justify-center">
                                  <img
                                    key={hoveredTitle + "-logo"} // Fuerza re-render para animar
                                    src={gameDetails[hoveredTitle]?.svgTitle}
                                    alt={`${hoveredTitle} logo`}
                                    className="w-[200px] mt-5 ml-5 object-contain h-auto opacity-0 animate-fade-in"
                                  />
                                </div>
                                <div className="flex-col mt-4 text-center w-full">
                                  <div
                                    key={hoveredTitle + "-desc"}
                                    className="text-[12px] leading-[15px] font-mark mt-1 opacity-0 animate-fade-in"
                                  >
                                    {gameDetails[hoveredTitle]?.description}
                                  </div>
                                  <div
                                    key={hoveredTitle + "-icon"}
                                    className="mt-2 text-lg opacity-0 animate-fade-in"
                                  >
                                    {gameDetails[hoveredTitle]?.icon}
                                  </div>
                                </div>
                              </div>

                              {/* LADO DERECHO - IMAGEN CON CLIP */}
                              <div className="w-[70%] h-full relative clip-diagonal">
                                <img
                                  key={hoveredTitle + "-image"}
                                  src={gameDetails[hoveredTitle]?.image}
                                  alt={hoveredTitle}
                                  className="w-full h-full object-cover opacity-0 animate-fade-in"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {/*  ------------ */}
              <div className='flex ml-[22px] mx-h-[30px] items-center justify-center'>
                <img className='w-[25px] h-[30px]' src={LogoArcaneMini} />
              </div>
            </div>
            <h1 className='text-xl font-bold hidden'>Mi Encabezado</h1>
            {/* puedes agregar más contenido aquí */}
          </div>
        </div>



        {/* fondo video */}
        <div className='absolute inset-0 z-0 '>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            className='w-full h-full object-cover aspect-video '
          >
            <source src={fondoVideo2} type='video/mp4' />
            Tu navegador no soporta videos HTML5
          </video>
        </div>

        {/* contenido centrado */}
        {/* Aquí puedes agregar contenido centrado en la pantalla si lo necesitas */}
        <div className="relative flex-grow flex items-center justify-center z-10">
          {/* <!-- Span top edge / Span borde superior --> */}
          <div className='absolute top-24 left-0 ml-7 mt-7 text-blue-600'>
            <div className='flex flex-col items-center'>
              <img src={logoArcaneV2} />
              <div className='text-center text-white font-tungsten text-[36px] font-[375] mt-2'>
                <p className='bg-black mx-0.5'>
                  LA SEGUNDA TEMPORADA DE
                </p>
                <p className='bg-black px-1.5'>ARCANE YA ESTA DISPONIBLE</p>
              </div>
            </div>
          </div>
          <div className='absolute right-[50px] bottom-[300px] w-[240px]'>
            <div className='flex flex-col font-inter bg-[#0A0A0A]/72 pt-[24px] pb-[24px] items-center justify-center gap-4 clipped-corner'>
              <p className='text-white font-[400] text-[18px] line-clamp-1 uppercase'>SOLO POR</p>
              <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b2028c866281c87ebfb00ec33efbc9f7c0682bba-239x64.png?auto=format&fit=fill&q=80&h=32" />
            </div>
          </div>
          {/* <!-- Span bottom edge / Borde inferior del vano --> */}
          <div className='absolute inset-x-0 -bottom-2'>
            <ImageSlider>
            </ImageSlider>
          </div>
        </div>
      </section >


      {/* Sección 2 intermedia con fondo de color sólido */}
      <motion.section
        ref={sectionRef}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }
        }
        variants={sectionVariants}
        className="snap-start relative min-h-screen font-tungsten  flex items-center justify-center"
      >
        <div className="relative flex flex-col h-screen justify-end ">
          {/* Fondo de imágenes */}
          <div className="absolute inset-0  flex items-center justify-center sm:gap-x-[0px] md:gap-x-[50px] lg:gap-x-[100px] 2xl:gap-x-[500px] gap-x-[500px] pointer-events-none z-10">
            <img
              src={jinx_Section2}
              className="pointer-events-auto image-left w-[650px]   transform transition-all duration-500 hover:scale-110 cursor-pointer drop-shadow-2xl"
            />
            <img
              src={Vi_Section2}
              className="pointer-events-auto image-right w-[650px]  transform transition-all duration-500 hover:scale-110 cursor-pointer drop-shadow-2xl"
            />
          </div>

          {/* Texto y botones */}
          <div className="relative z-10 flex flex-col pb-14">

            <div className="mt-auto text-center text-4xl text-white font-tungsten  pb-5">
              <div className='flex cursor-pointer w-200 h-85 justify-center items-center'>
                <img className='w-auto h-auto ' src={logoArcaneV2} />
              </div>
              "Se los mostraremos, se los mostraremos a todos"
            </div>
            <div className="flex items-center justify-center gap-20 font-tungsten">
              <a
                href="https://www.youtube.com/watch?v=fXmAurh012s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-[#977142] px-10 py-4 text-[25px] bg-[#1b1610] text-[#a89069]  transition-all duration-300 hover:bg-[#2b261e] hover:border-[#b58b4a] hover:text-[#d1b27a]">
                  Ver Trailer
                </button>
              </a>
              <a
                href="https://www.netflix.com/title/81435684"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-[#977142] px-10 py-4 text-[25px] bg-[#1b1610] text-[#a89069]  transition-all duration-300 hover:bg-[#2b261e] hover:border-[#b58b4a] hover:text-[#d1b27a]">
                  Ver en Netflix
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='absolute inset-0 z-0'>
          <img className='w-full h-full ' src={Fondo_Section_2} />
        </div>
      </motion.section >

      {/* Sección 3 con el slider */}
      < motion.section
        ref={sectionRef}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        className="snap-start relative min-h-screen flex items-center justify-center scrollbar-hide"
      >


        <img className='absolute w-full h-full object-fill  ' src={Fondo_Section_3} alt="" />
        {/* Izquierda: imágenes y selector */}
        <div className="relative flex w-full lg:w-[990px]  items-center justify-center " >
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "tween"
            }}
            className="relative w-full h-screen overflow-hidden "
          >
            {/* Fondo fijo e independiente */}
            <div
              className="absolute top-0 left-0 w-full h-full z-0 "
            >

            </div>

            {/* Imagen centrada y separada */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <motion.img
                src={activeSlide.image}
                alt="Slide"
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{
                  duration: 0.1,
                  delay: 0.0,
                  ease: "easeInOut"
                }}
                className="max-h-[80%] w-auto object-contain cursor-pointer drop-shadow-xl"
              />
            </div>
          </motion.div>
          {/* Selector de miniaturas */}
          <div className="absolute left-2 top-[480px] flex flex-col space-y-2 z-10">
            {slides.map((slide) => (
              <button
                key={slide.id}
                className={`w-[60px] h-16 border-2 rounded-sm ${activeSlide.id === slide.id ? "border-yellow-400" : "border-white"}`}
                onClick={() => setActiveSlide(slide)}
              >
                <img
                  src={slide.thumbnail}
                  alt={`Thumbnail ${slide.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Derecha: información con fondo */}
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            type: "tween"
          }}
          className="w-full lg:w-1/2 relative flex flex-col items-center justify-center px-[10px] overflow-hidden scrollbar-hide"
        >
          {/* Contenido visible sobre el fondo */}
          <div className="flex bg-[#111413] text-white px-6 py-10 lg:py-15 mr-2 flex-col justify-center w-full opacity-[90%] rounded-2xl ">
            <h1 className={`text-5xl font-extrabold font-tungsten ${activeSlide.titleColor}`}>
              {activeSlide.title}
            </h1>
            <h2 className={`text-3xl mt-2 font-tungsten ${activeSlide.subtitleColor}`}>
              {activeSlide.subtitle}
            </h2>
            <p className="mt-6 text-lg text-white">{activeSlide.description}</p>
            <a
              href={activeSlide.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 rounded-md inline-block px-6 py-3 font-semibold transition ${activeSlide.buttonBgColor} ${activeSlide.buttonTextColor} ${activeSlide.buttonHoverBgColor}`}
            >
              Ver más
            </a>
          </div>
        </motion.div>
      </motion.section >


      {/* Sección 4 Musica Spotify recomendacion */}
      < motion.section
        ref={sectionRef}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }
        }
        variants={sectionVariants}
        className="snap-start relative min-h-screen flex items-center justify-center"
      >
        <div className='z-10 '>
          <div className='flex relative gap-[60px]'>
            <div className='pl-[35px]'>
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3KVUsNUmJc2?utm_source=generator"
                width="720px"
                height="418px"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className='flex flex-col text-white w-[720px] h-auto'>
              <p className='font-tungsten font-[600] text-[36px] mb-1'>
                MUSICA DE ARCANE
              </p>
              <p className='font-tungsten font-[600] text-[112px] uppercase mb-[16px] tracking-tight whitespace-nowrap'>
                PLAYLIST OFICIAL DE ARCANE
              </p>
              <p className='text-[20px] font-bold'>
                Todo lo que termina, desencadena un nuevo comienzo. Música de la temporada 2 de Arcane, ya disponible en Netflix.
              </p>
            </div>
          </div>
        </div>

        <div className='absolute inset-0 z-0'>
          <img className='w-full h-full ' src={Fondo_Section_4} />
        </div>

      </motion.section >

      {/* Sección 5 ¿? */}
      < motion.section
        ref={sectionRef}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        className="snap-start relative min-h-[640px] flex items-center justify-center"
      >


        <div className='absolute inset-0 z-0'>
          <img className='w-full h-full ' src={Fondo_Section_5} />
        </div>

      </motion.section >


    </div >

  );
}

export default App;
