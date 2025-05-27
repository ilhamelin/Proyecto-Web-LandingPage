import React, { useState, useEffect, useRef } from 'react';
// import { ReactLenis, useLenis } from 'lenis/react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css';
import './function/gsap.js'
import ImageSlider from './components/ImageSlider.jsx';
import ThumbnailSelector from './components/ThumbnailSelector.jsx';
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

// Posiblemente las ocupe:
// https://lenis.darkroom.engineering/
// https://gsap.com/


// Seccion 1
import logoArcane from './assets/Arcane-Logo-1.png';
import fondoVideo from './assets/Fondo-Video-Audio-Arcane.mp4';
import fondoVideo2 from './assets/ArcaneWeb_Fondo.mp4';
import LogoArcaneMini from './assets/Logo_Arcane_Basico.png'

// Sección 2

import jinx_Section2 from './assets/Jinx/Icons_Jinx_SinFondo.png';
import Vi_Section2 from './assets/Vi/Vi_Perfil_Icons-SinFondo.png';
import logoArcaneV2 from './assets/Logo_Arcane_League_Of_Legends.png';


// Videos sección 3
import video1 from './assets/Jinx/Video_Fondo/Arcane_Final_Jinx.mp4';
import video2 from './assets/Vi/Video_Fondo/vi arcane.mp4';
import video3 from './assets/Ekko/Video_Fondo/Arcane.mp4';
import video4 from './assets/Viktor/Video_Fondo/Viktor Pose edit Arcane y Daddy Yankee.mp4';

import img1_Right from './assets/Jinx/Jinx_Perfil_Icons.png';

import img1 from './assets/Vi/Vi_Perfil_Icons.png';
import img2 from './assets/Jinx/Jinx_Perfil_Icons.png';
import img3 from './assets/Viktor/Victor_Perfil_Icons.png';
import img4 from './assets/Caitlyn Kiramman/Caitlyn_Perfil_Icons.png';
import img5 from './assets/Ekko/Ekko_Perfil_Icons.png';
import img6 from './assets/Jayce Talis/Jayce_Perfil_Icons.png';
import img7 from './assets/Heimerdinger/Heimer_Perfil_Icons.avif';
import img8 from './assets/Ambessa/Ambesa_Perfil_Icons.avif'
import img9 from './assets/Mel/Mel_Perfil_Icons.png'

// Seccion 4

// Seccion 5
import decorationImge1 from './assets/image/Arcane_Fondo_Decoracion/a49e54e0d094f4ab1f92707b537d1debf84c6e90-1920x818.avif'

// Seccion 6
import IconSpotify from './components/IconSpotify.jsx';
import IconApple from './components/IconApple.jsx';
import IconDeezer from './components/IconDeezer.jsx';
import IconsAmazonMusic from './components/IconsAmazonMusic.jsx';
import IconYoutube from './components/IconYoutube.jsx';

// Fondos para section
import Fondo_Section_1 from './assets/Images Fondos Section/a896937c9837514617dbe97f9a1ac0baad9b1df5-2000x762.avif';
import Fondo_Section_2 from './assets/Images Fondos Section/FondoMini_Azul_Gradiante_image_2.png';
import Fondo_Section_3 from './assets/Images Fondos Section/Piltover_Puente_Image_1.png';
import Fondo_Section_4 from './assets/Images Fondos Section/Fondo_Azul_Gradiante_image_2.png';
import Fondo_Section_5 from './assets/Images Fondos Section/Guarida_Jinx_Imagen_3.png';



// Iconos
import iconsJinx from './assets/Jinx/Icons_Jinx.png';
import iconsVi from './assets/Vi/Icons_Vi.png';
import IconsEkko from './assets/Ekko/Icons_Ekko.png';
import IconsViktor from './assets/Viktor/Icons_Viktor.png';
import IconsCaitlyn from './assets/Caitlyn Kiramman/Icons_Caitlyn.png';
import IconsJayce from './assets/Jayce Talis/Icons_Jayce.png';
import IconsHeimer from './assets/Heimerdinger/Icons_Heimer.png';

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
    thumbnail: img2,
    title: "JINX",
    subtitle: "Cuyo verdadero nombre es Powder",
    description: "A su vez, Vi se ha dado cuenta de que la pequeña Powder ya no existe. Ahora tiene una responsabilidad: detener a Jinx, el monstruo que ella misma creó. Ahora que sabe lo peligrosa que es su hermana, Vi ha unido fuerzas con Caitlyn. Incluso ha comenzado a usar la insignia de los Vigilantes.",
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
    thumbnail: img1,
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
    thumbnail: img5,
    title: "Ekko",
    subtitle: "Es un personaje importante de Arcane",
    description: "Ekko es el líder de los Firelights, un grupo de zaunitas que construyeron un nuevo hogar que no dudarán en proteger. Tras entablar una amistad peculiar con Heimerdinger, ambos trabajan ahora para hacer de Zaun un lugar mejor.",
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
    thumbnail: img3,
    title: "Viktor",
    subtitle: "También conocido como el Heraldo...",
    description: "Viktor desafía los límites de la tecnología Hextech a pesar de las advertencias sobre los riesgos que conlleva. Motivado por la culpa, se dispone a cumplir su sueño de hacer llegar este invento al pueblo.",
    bgColor: "#CC7E0F",
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
    thumbnail: img4,
    title: "Caitlyn Kiramman",
    subtitle: "Es una de las protagonistas de Arcane",
    description: "Caitlyn es una Vigilante de Piltóver. Aunque alguna vez utilizó sus habilidades de investigadora para exponer la fuente de la corrupción en Zaun y Piltóver, tras el ataque de Jinx al Consejo, Caitlyn sabe que la paz ya no es una opción.",
    bgColor: "#191E46",
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
    thumbnail: img6,
    title: "Jayce Talis",
    subtitle: "Fue un personaje principal de Arcane",
    description: "Tras una serie de acontecimientos, Jayce se cuestiona su perspectiva sobre aprovechar la Hextech para mejorar la vida de los piltovianos. Mientras tanto, en compañía de Heimerdinger y Ekko, descubre que el uso de esta tecnología ha estado envenenando al Distrito Suburbano. Y, durante su investigación, se encuentran con algo más.",
    bgColor: "#CC9D32",
    link: "https://arcane.fandom.com/wiki/Jayce_Talis",
    titleColor: "text-[#c4a463]",
    subtitleColor: "text-[#c4a463]",
    buttonBgColor: "bg-[#c4a463]",
    buttonTextColor: "text-black",
    buttonHoverBgColor: "hover:bg-[#c4a463]/60",
  },
  {
    id: 7,
    image: img7,
    thumbnail: img7,
    title: "Heimerdinger",
    subtitle: "Cecil B. Heimerdinger (comúnmente conocido como Heimerdinger) es una figura secundaria en Arcane .",
    description: "Heimerdinger le advirtió al Consejo de Piltóver acerca de los peligros de usar la magia sin mesura. Después de aprender de sus errores con Jayce, Heimerdinger ahora busca dejar de ser solo una voz de consejo y convertirse en una que inspire a Ekko a seguir buscando soluciones, a trabajar juntos para resolver los problemas.",
    bgColor: "#7BB6D6",
    link: "https://arcane.fandom.com/wiki/Cecil_B._Heimerdinger",
    titleColor: "text-[#547F97]",
    subtitleColor: "text-[#547F97]",
    buttonBgColor: "bg-[#547F97]",
    buttonTextColor: "text-black",
    buttonHoverBgColor: "hover:bg-[#547F97]/60",
  },
  {
    id: 8,
    image: img8,
    thumbnail: img8,
    title: "Ambessa",
    subtitle: "Ambessa Medarda fue un personaje secundario en Arcane . Era una caudillo de guerra manipuladora, calculadora, despiadada y poderosa de Noxus.",
    description: "Ambessa, guerrera noxiana y madre de Mel, ha jurado proteger el nombre de su familia... incluso si eso la pone en contra de los deseos de su propia hija.",
    bgColor: "#8C7470",
    link: "https://arcane.fandom.com/wiki/Ambessa_Medarda",
    titleColor: "text-[#906B5A]",
    subtitleColor: "text-[#906B5A]",
    buttonBgColor: "bg-[#906B5A]",
    buttonTextColor: "text-black",
    buttonHoverBgColor: "hover:bg-[#906B5A]/60",
  },
  {
    id: 9,
    image: img9,
    thumbnail: img9,
    title: "Mel",
    subtitle: "Mel Medarda es un personaje principal de Arcane . Una inteligente, poderosa y ambiciosa heredera de la Casa Medarda.",
    description: "La prudente inversión de Mel en la tecnología Hextech ha transformado a Piltóver en uno de los mayores centros comerciales de Runaterra y a ella en una de las personas más influyentes de la ciudad. Tras el ataque de Jinx, Mel se opone a su madre y al concejal Salo para proteger el sueño de Jayce.",
    bgColor: "#74774C",
    link: "https://arcane.fandom.com/wiki/Mel_Medarda",
    titleColor: "text-[#6F7352]",
    subtitleColor: "text-[#6F7352]",
    buttonBgColor: "bg-[#6F7352]",
    buttonTextColor: "text-black",
    buttonHoverBgColor: "hover:bg-[#6F7352]/60",
  },
];


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const videoRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(slides[0]); // Slider Section 3
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Verifica si estás en la ruta raíz (inicio)
  const isHome = location.pathname === '/';

  return (
    <div className="snap-y snap-mandatory h-screen overflow-auto antialiased font-stretch-expanded">
      {/* header */}
      <header className='sticky top-0 left-0 w-full z-10 bg-[#161616] text-white px-9 shadow-md'>
        <div className='flex-row items-center py-1.5 grid grid-flow-col'>
          <div className='flex gap-8 justify-items-start'>
            <div className='flex'>
              <button onClick={toggleDropdown} className='flex logo-hover items-center'>
                <svg viewBox="0 0 590 140" width="85px" height="27px" xmlns="http://www.w3.org/2000/svg" fill='white'>
                  <path
                    d="M 98.77 0.33 L 0 46.07 l 24.61 93.66 l 18.73 -2.3 l -5.15 -58.89 l 6.15 -2.74 L 54.96 136 l 32.01 -3.93 l -5.69 -65 l 6.09 -2.71 l 11.68 66.23 l 32.38 -3.98 l -6.23 -71.25 l 6.16 -2.74 l 12.77 72.43 l 32.01 -3.93 V 19.71 L 98.77 0.33 Z m 2.32 142.05 l 1.63 9.22 l 73.42 12.24 v -30.68 l -75.01 9.22 h -0.04 Z m 144.49 -19.22 v 12.63 h 15.57 a 14.84 14.84 0 0 1 -1.92 7.31 a 13 13 0 0 1 -5.6 5.11 a 20 20 0 0 1 -8.9 1.8 a 17.53 17.53 0 0 1 -10 -2.8 a 17.87 17.87 0 0 1 -6.44 -8.14 a 33.06 33.06 0 0 1 -2.27 -12.93 a 31.81 31.81 0 0 1 2.32 -12.81 a 18.14 18.14 0 0 1 6.5 -8 a 17.27 17.27 0 0 1 9.82 -2.78 a 19.31 19.31 0 0 1 5.36 0.71 a 14.15 14.15 0 0 1 4.33 2.09 a 12.92 12.92 0 0 1 3.18 3.29 a 15.61 15.61 0 0 1 2 4.44 h 17.27 a 27.22 27.22 0 0 0 -3.46 -10.28 a 28.84 28.84 0 0 0 -7.05 -8.1 a 32.6 32.6 0 0 0 -9.91 -5.29 a 37.91 37.91 0 0 0 -12.06 -1.86 a 37.32 37.32 0 0 0 -14 2.6 a 32.6 32.6 0 0 0 -11.36 7.61 a 35 35 0 0 0 -7.61 12.21 a 46.15 46.15 0 0 0 -2.73 16.44 q 0 11.94 4.54 20.59 a 32.4 32.4 0 0 0 12.69 13.27 a 39.84 39.84 0 0 0 35.84 0.84 a 28.39 28.39 0 0 0 11.67 -11 q 4.25 -7.19 4.24 -17.2 v -9.76 Z m 215.03 40.81 V 88.53 h 51.67 v 13.96 h -34.62 v 16.76 h 27.99 v 13.96 h -27.99 v 16.8 h 34.7 v 13.96 h -51.75 Z m 101.83 -53.3 a 9 9 0 0 0 -3.54 -6.64 c -2.09 -1.59 -5 -2.38 -8.69 -2.38 a 16.63 16.63 0 0 0 -6.26 1 a 8.62 8.62 0 0 0 -3.83 2.78 a 6.74 6.74 0 0 0 -1.33 4 a 6.2 6.2 0 0 0 0.79 3.29 a 7.27 7.27 0 0 0 2.4 2.45 a 16.54 16.54 0 0 0 3.7 1.79 a 40.14 40.14 0 0 0 4.64 1.31 l 6.63 1.54 a 47.19 47.19 0 0 1 9.45 3.08 a 27.46 27.46 0 0 1 7.2 4.68 a 18.84 18.84 0 0 1 4.58 6.39 a 20.37 20.37 0 0 1 1.61 8.29 a 20.65 20.65 0 0 1 -3.54 12.11 a 22.56 22.56 0 0 1 -10.15 7.85 a 41.31 41.31 0 0 1 -15.93 2.76 a 42.69 42.69 0 0 1 -16.17 -2.81 a 23.22 23.22 0 0 1 -10.72 -8.48 q -3.83 -5.66 -4 -14.12 h 16.43 a 10.68 10.68 0 0 0 7.05 9.94 a 19.37 19.37 0 0 0 7.24 1.26 a 18.44 18.44 0 0 0 6.66 -1.09 a 10 10 0 0 0 4.33 -3 a 7.22 7.22 0 0 0 1.57 -4.48 a 6.16 6.16 0 0 0 -1.42 -4 a 10.86 10.86 0 0 0 -4.14 -2.81 a 42.07 42.07 0 0 0 -6.89 -2.14 l -8.07 -1.95 q -9.65 -2.3 -15.23 -7.26 t -5.54 -13.44 a 19.86 19.86 0 0 1 3.72 -12.12 a 24.74 24.74 0 0 1 10.33 -8.11 a 36.74 36.74 0 0 1 15 -2.91 a 35.62 35.62 0 0 1 14.92 2.91 a 23.43 23.43 0 0 1 9.91 8.14 a 21.54 21.54 0 0 1 3.6 12.12 Z m -113.99 53.3 h -16.87 v -57.35 l -1.73 -0.02 l -17.04 57.37 h -16.86 l -16.58 -57.37 l -2.15 0.02 v 57.35 h -16.87 V 88.53 h 28.67 l 14.48 50.56 h 1.75 l 14.48 -50.56 h 28.72 v 75.44 Z m -114.66 0 h 18.27 l -25.33 -75.43 h -23.15 l -25.37 75.43 h 18.3 l 4.93 -16.54 h 27.42 Z m -28.43 -29.7 l 8.22 -27.65 h 3.1 l 8.26 27.65 Z m 278.58 -37.76 a 4 4 0 0 1 -3.67 -2.44 a 4 4 0 0 1 0 -3.1 a 4 4 0 0 1 0.85 -1.27 a 4.25 4.25 0 0 1 1.27 -0.86 a 4.15 4.15 0 0 1 3.1 0 a 4.13 4.13 0 0 1 1.27 0.86 a 4.08 4.08 0 0 1 0.86 1.27 a 4 4 0 0 1 0 3.1 a 4.08 4.08 0 0 1 -0.86 1.27 a 4 4 0 0 1 -1.27 0.86 a 4 4 0 0 1 -1.55 0.31 Z m 0 -1.09 a 2.84 2.84 0 0 0 1.47 -0.39 a 2.94 2.94 0 0 0 1.05 -1 a 2.93 2.93 0 0 0 0 -2.92 a 3 3 0 0 0 -1.06 -1 a 2.93 2.93 0 0 0 -2.92 0 a 3 3 0 0 0 -1 1 a 2.86 2.86 0 0 0 0 2.92 a 3 3 0 0 0 1 1 a 2.83 2.83 0 0 0 1.46 0.39 Z m -1.46 -1.15 V 90.6 h 1.78 a 1.52 1.52 0 0 1 0.69 0.15 a 1.13 1.13 0 0 1 0.47 0.42 a 1.24 1.24 0 0 1 0.17 0.66 a 1.16 1.16 0 0 1 -0.18 0.66 a 1 1 0 0 1 -0.48 0.41 a 1.56 1.56 0 0 1 -0.7 0.14 h -1.2 v -0.72 h 1 a 0.52 0.52 0 0 0 0.36 -0.12 a 0.5 0.5 0 0 0 0.14 -0.37 a 0.47 0.47 0 0 0 -0.14 -0.37 a 0.52 0.52 0 0 0 -0.36 -0.12 h -0.55 v 2.93 Z m 2.39 -1.68 l 0.82 1.68 h -1.11 l -0.75 -1.68 Z M 282.41 1.03 h 17.05 v 75.44 h -17.05 Z m 98.02 37.72 q 0 12.42 -4.71 21 a 32.67 32.67 0 0 1 -12.79 13.17 a 38.57 38.57 0 0 1 -36.31 0 a 32.75 32.75 0 0 1 -12.79 -13.2 q -4.71 -8.66 -4.71 -21 t 4.71 -21.05 a 32.67 32.67 0 0 1 12.75 -13.14 a 38.65 38.65 0 0 1 36.31 0 a 32.67 32.67 0 0 1 12.79 13.17 q 4.71 8.64 4.71 21.05 m -17.35 0 a 33.35 33.35 0 0 0 -2.23 -13 a 17.47 17.47 0 0 0 -6.33 -8 a 18.57 18.57 0 0 0 -19.45 0 a 17.57 17.57 0 0 0 -6.35 8 a 38.59 38.59 0 0 0 0 26 a 17.49 17.49 0 0 0 6.35 8 a 18.57 18.57 0 0 0 19.45 0 a 17.39 17.39 0 0 0 6.33 -8 a 33.4 33.4 0 0 0 2.23 -13 M 246.58 50.17 l 8.76 26.3 h 18.71 l -9.74 -28.33 h -13.23 l -0.79 -2.44 c 2.52 -0.49 6.83 -1.25 10.65 -3.85 a 20 20 0 0 0 8.75 -16.39 a 24.15 24.15 0 0 0 -3.26 -12.75 a 21.9 21.9 0 0 0 -9.36 -8.64 a 32.56 32.56 0 0 0 -14.64 -3 H 212 v 75.4 h 17.06 v -26.3 Z m -0.32 -15.61 a 19.35 19.35 0 0 1 -7.26 1.18 h -9.94 V 14.88 h 9.91 a 18.68 18.68 0 0 1 7.25 1.24 a 9.12 9.12 0 0 1 4.4 3.7 a 10 10 0 0 1 1.5 5.64 a 9.65 9.65 0 0 1 -1.48 5.55 a 8.86 8.86 0 0 1 -4.38 3.55 M 382.04 1.03 v 14 h 29.3 l 0.8 2.45 c -2.48 0.48 -6.67 1.22 -10.43 3.7 v 55.31 h 16.87 v -61.5 h 19.62 v -14 Z"
                  />
                </svg>
                <IoMdArrowDropdown />
              </button>
              {/* Dropdown */}
              {isOpen && (
                <motion.div className="fixed top-0 left-0 w-full h-[calc(60vh)] bg-white z-30 shadow-lg"
                  ref={dropdownRef}
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
                    <div className='grid justify-items-end-safe'>
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
                                <div className="flex mt-[80px] ml-5 w-full items-center justify-center">
                                  <img
                                    key={hoveredTitle + "-logo"} // Fuerza re-render para animar
                                    src={gameDetails[hoveredTitle]?.svgTitle}
                                    alt={`${hoveredTitle} logo`}
                                    className="w-[210px] object-contain h-auto animate-fade-in"
                                  />
                                </div>
                                <div className="flex flex-col mb-4 ml-5  text-center items-end justify-end w-full">
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
                <a href="/">
                  <img className='w-[25px] h-[30px]' src={LogoArcaneMini} />
                </a>
              </div>
            </div>
            <div className='flex gap-[2px] items-center'>
              <div
                onClick={() => navigate('/noticias')}
                className=' border-b-4 rounded-b-[1.5px]  pb-3 mt-5 border-transparent hover:border-white transition-colors'>
                <p className='font-mark font-[500] text-[14px] hover:bg-gray-400/20 hover:rounded-lg py-2 px-4.5'>
                  NOTICIAS
                </p>
              </div>

              <div className='border-b-4 rounded-b-[1.5px]  pb-3 mt-5 border-transparent hover:border-white transition-colors'>
                <p className='font-mark font-[500] text-[14px] hover:bg-gray-400/20 hover:rounded-lg py-2 px-4.5'>
                  CREADOR DE PERSONAJES
                </p>
              </div>
            </div>
          </div>
          <div className='grid justify-items-end-safe'>
            <div className='flex items-center gap-2'>
              <div className='hover:bg-gray-400/20 hover:rounded-lg py-2 px-2'>
                <svg width="14" height="14" viewBox="0 0 16 16">
                  <title>globeIcon</title>
                  <path
                    d="M7.992 0C3.576 0 0 3.584 0 8s3.576 8 7.992 8C12.416 16 16 12.416 16 8s-3.584-8-8.008-8Zm5.544 4.8h-2.36c-.256-1-.624-1.96-1.104-2.848A6.424 6.424 0 0 1 13.536 4.8ZM8 1.632A11.27 11.27 0 0 1 9.528 4.8H6.472A11.27 11.27 0 0 1 8 1.632ZM1.808 9.6A6.594 6.594 0 0 1 1.6 8c0-.552.08-1.088.208-1.6h2.704A13.212 13.212 0 0 0 4.4 8c0 .544.048 1.072.112 1.6H1.808Zm.656 1.6h2.36c.256 1 .624 1.96 1.104 2.848A6.39 6.39 0 0 1 2.464 11.2Zm2.36-6.4h-2.36a6.39 6.39 0 0 1 3.464-2.848A12.52 12.52 0 0 0 4.824 4.8ZM8 14.368A11.27 11.27 0 0 1 6.472 11.2h3.056A11.27 11.27 0 0 1 8 14.368ZM9.872 9.6H6.128A11.77 11.77 0 0 1 6 8c0-.544.056-1.08.128-1.6h3.744C9.944 6.92 10 7.456 10 8s-.056 1.072-.128 1.6Zm.2 4.448a12.52 12.52 0 0 0 1.104-2.848h2.36a6.424 6.424 0 0 1-3.464 2.848ZM11.488 9.6c.064-.528.112-1.056.112-1.6s-.048-1.072-.112-1.6h2.704c.128.512.208 1.048.208 1.6s-.08 1.088-.208 1.6h-2.704Z"
                    fill="#E8E8E8"
                  >
                  </path>
                </svg>
              </div>
              <div className='font-mark font-[500] text-[14px] bg-gray-400/20 rounded-lg px-3.5 pt-1 pb-1.5'>
                <button>
                  INICIAR SESION
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isHome && (
        <>
          {/* Sección 1 con el video de fondo */}
          <section className="relative min-h-[52rem]  bg-[#B0DFE5] flex flex-col  ">
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
            <div className="relative flex-grow flex items-center justify-center ">
              {/* <!-- Span top edge / Span borde superior --> */}
              <div className='absolute z-0 top-24 left-0 ml-7 mt-7  text-blue-600'>
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
              <div className='absolute z-0 right-[50px] bottom-[300px] w-[240px] '>
                <div className='flex flex-col font-inter bg-[#0A0A0A]/72 pt-[24px] pb-[24px] items-center justify-center gap-4 clipped-corner'>
                  <p className='text-white font-[400] text-[18px] line-clamp-1 uppercase'>SOLO POR</p>
                  <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b2028c866281c87ebfb00ec33efbc9f7c0682bba-239x64.png?auto=format&fit=fill&q=80&h=32" />
                </div>
              </div>
              {/* <!-- Span bottom edge / Borde inferior del vano --> */}
              <div className='absolute inset-x-0 -bottom-2 '>
                <ImageSlider>
                </ImageSlider>
              </div>
            </div>
          </section >
          {/* Sección 2 */}
          <section className="relative min-h-[45rem] z-0 flex items-center justify-center"
          >
            <div className="relative flex flex-col justify-end bg-gradient-to-t from-black/90">
              {/* Texto y botones */}
              <div className="relative z-10 flex flex-col gap-3 pb-14">
                <div className='flex cursor-pointer w-auto h-auto justify-center items-center'>
                  <img className='w-auto h-auto ' src={logoArcaneV2} />
                </div>
                <div className="mt-auto text-center text-4xl text-white font-tungsten pb-5">
                  "Se los mostraremos, se los mostraremos a todos"
                </div>
                <div className="flex items-center justify-center gap-20 font-tungsten">
                  <a
                    href="https://www.youtube.com/watch?v=fXmAurh012s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-6 py-3 text-[25px] border-2 border-[#3d528f] bg-gradient-to-b from-[#2D3C67] text-white transform transition-all ease-in-out duration-[310ms] hover:scale-115">
                      Ver Trailer
                    </button>
                  </a>
                  <a
                    href="https://www.netflix.com/title/81435684"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-6 py-3 text-[25px] border-2 border-[#3d528f] bg-gradient-to-b from-[#2D3C67] text-white transform transition-all ease-in-out duration-[310ms] hover:scale-115">
                      Ver en Netflix
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className='absolute inset-0 z-0 '>
              <img className='w-full h-full ' src={Fondo_Section_1} />
            </div>
          </section >
          {/* Sección 3 con el slider */}
          <section className="relative min-h-screen z-0 flex items-center justify-center scrollbar-hide-both"
          >
            <img className='absolute w-full h-full object-fill  ' src={Fondo_Section_2} alt="" />
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
              <ThumbnailSelector
                slides={slides} // asegúrate que 'slides' está definido
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
              />
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
          </section >
          {/* Sección 4 Musica Spotify recomendacion */}
          <section className=" relative min-h-[640px] z-0 flex items-center justify-center"
          >

            <div className='z-10 '>
              <div className='flex relative '>
                <div className='flex gap-[60px] pl-[35px]'>
                  <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3KVUsNUmJc2?utm_source=generator"
                    width="720px"
                    height="418px"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                  <div className='flex flex-col text-white w-[700px] h-auto '>
                    <p className='font-tungsten font-[600] text-[36px] mb-1'>
                      MUSICA DE ARCANE
                    </p>
                    <p className='flex flex-col font-tungsten font-[600] text-[112px] uppercase wrap-break-word leading-[112px]'>
                      PLAYLIST OFICIAL
                      <p>DE ARCANE</p>
                    </p>
                    <p className='text-[19px] font-[400] font-sans'>
                      Todo lo que termina, desencadena un nuevo comienzo. Música de la temporada 2 de Arcane, ya disponible en Netflix.
                    </p>
                    <div className='flex items-center gap-5 mt-10 '>
                      <p className='text-[20px] font-semibold'>ESCUCHALA EN</p>


                      <button >
                        <IconSpotify color={'#A7B6E3'} />
                      </button>

                      <IconApple />
                      <IconDeezer />
                      <IconsAmazonMusic />
                      <IconYoutube />

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='absolute inset-0 z-0'>
              <img className='w-full h-full ' src={Fondo_Section_5} />
            </div>

          </section >
          {/* Sección 5 ¿? */}
          <section className="relative min-h-[640px] z-0 flex items-center justify-center"
          >
            <div className='flex relative z-10'>
              <div className='flex items-center justify-center gap-[5rem] '>
                <div className='flex flex-col max-w-[45rem]'>
                  <div className='flex flex-col text-white mb-5 ]'>
                    <p className='font-tungsten font-[600] text-[35px]'>MIRA, JUEGA, VIVE LA EXPERIENCIA </p>
                    <p className='flex flex-col font-tungsten font-[600] text-[115px] uppercase wrap-break-word leading-[112px]'>
                      ARCANE POR
                      <p>EL MUNDO</p>
                    </p>
                    <p className='font-sans italic text-[20px]'>¡Nos complace anunciar los primeros eventos de Arcane para celebrar la segunda temporada!
                    </p>
                  </div>
                  <div className='flex text-center pt-5 '>
                    <button className='text-white font-tungsten text-[30px] p-5 border-2 border-[#3d528f] bg-gradient-to-b from-[#2c3a62] to-[#3a4e88] '>
                      MAS INFORMACION
                    </button>
                  </div>
                </div>

                <div>
                  <img className='w-[800px] h-[400px]' src={decorationImge1} />
                </div>
              </div>
            </div>

            <div className='absolute inset-0 z-0'>
              <img className='w-full h-full ' src={Fondo_Section_2} />
            </div>

          </section >
        </>
      )}
      {/* Aquí se mostrará el contenido dinámico según la ruta */}
      <main className="">
        <Outlet />
      </main>

      {/* Footer : info y datos de riot ¿? */}
      <footer className="relative min-h-[330px] z-0"
      >
        <div className='relative min-h-[330px] bg-[#111111] border-t-2  border-[#343434]'>
          <div className='flex flex-col min-h-[330px] pb-10'>
            <div className='p-[18px]'>
              <ul className='flex justify-center '>
                <li className='flex w-[32px] h-[32px] m-[6px] bg-[#272727] rounded-lg items-center justify-center'>
                  <a href="https://www.tiktok.com/@leagueoflegends">
                    <svg viewBox="0 0 24 24" className='w-[16px] h-[16px]'>
                      <title>Tiktok</title>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm5.653-13.318c.115 0 .23-.007.345-.018H18v-2.33A3.738 3.738 0 0 1 14.552 5h-2.009l-.02 9.774c0 1.2-1.061 2.144-2.262 2.144s-2.175-.972-2.175-2.17c0-1.2.974-2.172 2.175-2.172.067 0 .131.009.196.018l.067.009v-2.096l-.061-.005c-.067-.004-.134-.009-.202-.009A4.257 4.257 0 0 0 6 14.747 4.257 4.257 0 0 0 10.26 19a4.257 4.257 0 0 0 4.261-4.254V8.992a3.745 3.745 0 0 0 3.132 1.69Z" fill="#fff"></path>
                    </svg>
                  </a>
                </li>
                <li className='flex w-[32px] h-[32px] m-[6px] bg-[#272727] rounded-lg items-center justify-center'>
                  <a href="https://x.com/arcaneshow">
                    <svg viewBox="0 0 1200 1227" className='w-[16px] h-[16px]'>
                      <title>Twitter</title>
                      <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" fill="#fff"></path>
                    </svg>
                  </a>
                </li>
                <li className='flex w-[32px] h-[32px] m-[6px] bg-[#272727] rounded-lg items-center justify-center'>
                  <a href="">
                    <svg viewBox="0 0 13.26 13.3" className='w-[16px] h-[16px]'>
                      <title>Instagram</title>
                      <path d="M6.67 3.24a3.43 3.43 0 1 0 3.42 3.44 3.43 3.43 0 0 0-3.42-3.44Zm0 5.65a2.22 2.22 0 1 1 2.22-2.22 2.21 2.21 0 0 1-2.22 2.22Z" transform="translate(-.04 .05)" style={{ fill: '#fdfefe', fillRule: 'evenodd' }}></path>
                      <path d="M11 3.08a.8.8 0 1 1-.8-.8.8.8 0 0 1 .8.8Z" transform="translate(-.04 .05)" style={{ fill: '#fdfefe' }}></path>
                      <path d="M6.67 0H3.92A5 5 0 0 0 2.3.31a3.31 3.31 0 0 0-1.18.77 3.31 3.31 0 0 0-.77 1.18A5.29 5.29 0 0 0 0 3.88v5.5A5.22 5.22 0 0 0 .35 11a3.35 3.35 0 0 0 .77 1.19 3.42 3.42 0 0 0 1.18.76 4.75 4.75 0 0 0 1.62.31h5.5a4.75 4.75 0 0 0 1.58-.32 3.15 3.15 0 0 0 1.18-.76A3.35 3.35 0 0 0 13 11a5 5 0 0 0 .31-1.61V3.88A5 5 0 0 0 13 2.26a3.46 3.46 0 0 0-2-2A5 5 0 0 0 9.37 0a26.88 26.88 0 0 1-2.7 0Zm0 1.2h2.69a3.78 3.78 0 0 1 1.24.23 2.21 2.21 0 0 1 1.27 1.27 3.67 3.67 0 0 1 .23 1.23v5.39a3.78 3.78 0 0 1-.23 1.24 2.21 2.21 0 0 1-1.27 1.27 3.77 3.77 0 0 1-1.24.22H4a3.77 3.77 0 0 1-1.24-.22 2.21 2.21 0 0 1-1.27-1.27 3.78 3.78 0 0 1-.23-1.24V3.93a3.67 3.67 0 0 1 .21-1.23 2.21 2.21 0 0 1 1.27-1.27A3.78 3.78 0 0 1 4 1.2c.68.01.89 0 2.67 0Z" transform="translate(-.04 .05)" style={{ fill: '#fdfefe', fillRule: 'evenodd' }} ></path>
                    </svg>
                  </a>
                </li>
                <li className='flex w-[32px] h-[32px] m-[6px] bg-[#272727] rounded-lg items-center justify-center'>
                  <a href="https://www.facebook.com/arcaneshow">
                    <svg viewBox="0 0 15 15" className='w-[16px] h-[16px]'>
                      <title>Facebook</title>
                      <path d="M15 7.54A7.5 7.5 0 1 0 6.33 15V9.73h-1.9V7.54h1.9V5.91a2.65 2.65 0 0 1 2.83-3 12.09 12.09 0 0 1 1.68.14v1.86H9.9a1.09 1.09 0 0 0-1.23 1.18V7.5h2.08l-.33 2.19H8.67v5.27A7.54 7.54 0 0 0 15 7.54Z" fill="#fff"></path>
                    </svg>
                  </a>
                </li>
                <li className='flex w-[32px] h-[32px] m-[6px] bg-[#272727] rounded-lg items-center justify-center'>
                  <a href="https://www.youtube.com/playlist?list=PLbAFXJC0J5GYRhFnNllP8ss1moTRwMRBg">
                    <svg viewBox="0 0 16.67 11.67" className='w-[16px] h-[16px]'>
                      <title>youtube</title>
                      <path d="M14.85.36a2.08 2.08 0 0 1 1.47 1.47 20.5 20.5 0 0 1 .34 4 22.19 22.19 0 0 1-.34 4 2.1 2.1 0 0 1-1.47 1.47 51.13 51.13 0 0 1-6.52.34 48.46 48.46 0 0 1-6.52-.36A2.07 2.07 0 0 1 .34 9.82a23.82 23.82 0 0 1 0-8A2.11 2.11 0 0 1 1.81.34a49.68 49.68 0 0 1 6.52-.35 48.31 48.31 0 0 1 6.52.37Zm-3.84 5.48-4.34 2.5v-5Z" style={{ fill: '#fdfefe', fillRule: 'evenodd' }}></path>
                    </svg>
                  </a>
                </li>
                <li className='flex w-[32px] h-[32px] m-[6px] bg-[#272727] rounded-lg items-center justify-center'>
                  <a href="https://lnk.to/ArcaneLeagueofLegends">
                    <svg viewBox="0 0 24 24" className='w-[16px] h-[16px]'>
                      <title>Spotify</title>
                      <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm4.7 18c-.2 0-.3-.1-.5-.2a11.25 11.25 0 0 0-5.9-1.5 20.88 20.88 0 0 0-3.6.4c-.2 0-.4.1-.6.1a.79.79 0 0 1-.8-.8c0-.5.2-.8.7-.8a21.18 21.18 0 0 1 4.4-.5 14.06 14.06 0 0 1 6.8 1.8.89.89 0 0 1 .4.8.93.93 0 0 1-.9.7Zm1.2-3.1a2.54 2.54 0 0 1-.7-.2 14 14 0 0 0-7.4-1.9 18.16 18.16 0 0 0-3.7.4 1.08 1.08 0 0 1-.6.1.84.84 0 0 1-.9-.9c0-.6.2-.8.8-1a17.72 17.72 0 0 1 4.5-.7 17 17 0 0 1 8.4 2.2 1.05 1.05 0 0 1 .5.9c0 .7-.3 1.1-.9 1.1Zm1.5-3.5a4.08 4.08 0 0 1-.7-.2 18.7 18.7 0 0 0-8.5-2 17.59 17.59 0 0 0-4.6.6 5.64 5.64 0 0 1-.7.1c-.7.1-1.1-.4-1.1-1.1s.3-1 .8-1.1a25.24 25.24 0 0 1 5.6-.7 22.28 22.28 0 0 1 9.7 2.2 1.44 1.44 0 0 1 .7 1.1 1.19 1.19 0 0 1-1.2 1.09Z" style={{ fill: '#fdfefe', fillRule: 'evenodd' }}></path>
                    </svg>
                  </a>
                </li>
                <li className='flex w-[32px] h-[32px] m-[6px] bg-[#272727] rounded-lg items-center justify-center'>
                  <a href="https://lnk.to/ArcaneLeagueofLegends">
                    <svg viewBox="0 0 122.9 122.9" className='w-[16px] h-[16px]'>
                      <title>apple-music</title>
                      <path d="M104.5 0h-86C8.2 0 0 8.2 0 18.4v86c0 10.2 8.2 18.4 18.4 18.4h86c10.2 0 18.4-8.2 18.4-18.4v-86C122.9 8.2 114.6 0 104.5 0zM91 77.3c0 7-1.2 13.9-8.4 16.6-18.7 6.2-20.9-16.8-7.2-19 7.2-.8 10.8-2.4 10.8-4.8V40.8c-.2-1.9-1.1-2.7-2.9-2.4l-33.1 6.7c-1.6.3-2.4 1.2-2.4 2.6v38.4c0 7-1.2 13.9-8.4 16.6-18.7 6.2-20.9-16.8-7.2-19C39.4 83 43 81.4 43 79V30.2c0-3.8 3.1-4.3 3.1-4.3l40.8-8.4c4.1-1.2 4.1 3.6 4.1 3.6v56.2z" style={{ fill: '#fdfefe', fillRule: 'evenodd' }}></path>
                    </svg>
                  </a>
                </li>
                <li className='flex w-[32px] h-[32px] m-[6px] bg-[#272727] rounded-lg items-center justify-center'>
                  <a href="https://lnk.to/ArcaneLeagueofLegends">
                    <svg viewBox="0 0 116 76" className='w-[16px] h-[16px]'>
                      <title>deezer</title>
                      <path d="M115.3 20.7H90.5v14.5h24.8V20.7zm0-20.2H90.5V15h24.8V.5zm0 40.4H90.5v14.5h24.8V40.9zM25.3 61H.5v14.5h24.8V61zm30 0H30.5v14.5h24.8V61zm30 0H60.5v14.5h24.8V61zm30 0H90.5v14.5h24.8V61zm-30-20.1H60.5v14.5h24.8V40.9zm-30 0H30.5v14.5h24.8V40.9zm0-20.2H30.5v14.5h24.8V20.7z" style={{ fill: '#fdfefe', fillRule: 'evenodd' }}></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className='flex items-center justify-center p-[18px]'>
              <div>
                <a href="">
                  <svg width="99" height="32" viewBox="0 0 587.93 165">
                    <title> Riot Games </title>
                    <title>riotLogo-mobile21</title>
                    <path d="M98.77.33 0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05 1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 0 1-1.92 7.31 13 13 0 0 1-5.6 5.11 20 20 0 0 1-8.9 1.8 17.53 17.53 0 0 1-10-2.8 17.87 17.87 0 0 1-6.44-8.14 33.06 33.06 0 0 1-2.27-12.93 31.81 31.81 0 0 1 2.32-12.81 18.14 18.14 0 0 1 6.5-8 17.27 17.27 0 0 1 9.82-2.78 19.31 19.31 0 0 1 5.36.71 14.15 14.15 0 0 1 4.33 2.09 12.92 12.92 0 0 1 3.18 3.29 15.61 15.61 0 0 1 2 4.44h17.27a27.22 27.22 0 0 0-3.46-10.28 28.84 28.84 0 0 0-7.05-8.1 32.6 32.6 0 0 0-9.91-5.29 37.91 37.91 0 0 0-12.06-1.86 37.32 37.32 0 0 0-14 2.6 32.6 32.6 0 0 0-11.36 7.61 35 35 0 0 0-7.61 12.21 46.15 46.15 0 0 0-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0 0 12.69 13.27 39.84 39.84 0 0 0 35.84.84 28.39 28.39 0 0 0 11.67-11q4.25-7.19 4.24-17.2v-9.76Zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 0 0-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 0 0-6.26 1 8.62 8.62 0 0 0-3.83 2.78 6.74 6.74 0 0 0-1.33 4 6.2 6.2 0 0 0 .79 3.29 7.27 7.27 0 0 0 2.4 2.45 16.54 16.54 0 0 0 3.7 1.79 40.14 40.14 0 0 0 4.64 1.31l6.63 1.54a47.19 47.19 0 0 1 9.45 3.08 27.46 27.46 0 0 1 7.2 4.68 18.84 18.84 0 0 1 4.58 6.39 20.37 20.37 0 0 1 1.61 8.29 20.65 20.65 0 0 1-3.54 12.11 22.56 22.56 0 0 1-10.15 7.85 41.31 41.31 0 0 1-15.93 2.76 42.69 42.69 0 0 1-16.17-2.81 23.22 23.22 0 0 1-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 0 0 7.05 9.94 19.37 19.37 0 0 0 7.24 1.26 18.44 18.44 0 0 0 6.66-1.09 10 10 0 0 0 4.33-3 7.22 7.22 0 0 0 1.57-4.48 6.16 6.16 0 0 0-1.42-4 10.86 10.86 0 0 0-4.14-2.81 42.07 42.07 0 0 0-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 0 1 3.72-12.12 24.74 24.74 0 0 1 10.33-8.11 36.74 36.74 0 0 1 15-2.91 35.62 35.62 0 0 1 14.92 2.91 23.43 23.43 0 0 1 9.91 8.14 21.54 21.54 0 0 1 3.6 12.12Zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42Zm-28.43-29.7 8.22-27.65h3.1l8.26 27.65Zm278.58-37.76a4 4 0 0 1-3.67-2.44 4 4 0 0 1 0-3.1 4 4 0 0 1 .85-1.27 4.25 4.25 0 0 1 1.27-.86 4.15 4.15 0 0 1 3.1 0 4.13 4.13 0 0 1 1.27.86 4.08 4.08 0 0 1 .86 1.27 4 4 0 0 1 0 3.1 4.08 4.08 0 0 1-.86 1.27 4 4 0 0 1-1.27.86 4 4 0 0 1-1.55.31Zm0-1.09a2.84 2.84 0 0 0 1.47-.39 2.94 2.94 0 0 0 1.05-1 2.93 2.93 0 0 0 0-2.92 3 3 0 0 0-1.06-1 2.93 2.93 0 0 0-2.92 0 3 3 0 0 0-1 1 2.86 2.86 0 0 0 0 2.92 3 3 0 0 0 1 1 2.83 2.83 0 0 0 1.46.39Zm-1.46-1.15V90.6h1.78a1.52 1.52 0 0 1 .69.15 1.13 1.13 0 0 1 .47.42 1.24 1.24 0 0 1 .17.66 1.16 1.16 0 0 1-.18.66 1 1 0 0 1-.48.41 1.56 1.56 0 0 1-.7.14h-1.2v-.72h1a.52.52 0 0 0 .36-.12.5.5 0 0 0 .14-.37.47.47 0 0 0-.14-.37.52.52 0 0 0-.36-.12h-.55v2.93Zm2.39-1.68.82 1.68h-1.11l-.75-1.68ZM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 0 1-12.79 13.17 38.57 38.57 0 0 1-36.31 0 32.75 32.75 0 0 1-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0 1 12.75-13.14 38.65 38.65 0 0 1 36.31 0 32.67 32.67 0 0 1 12.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 0 0-2.23-13 17.47 17.47 0 0 0-6.33-8 18.57 18.57 0 0 0-19.45 0 17.57 17.57 0 0 0-6.35 8 38.59 38.59 0 0 0 0 26 17.49 17.49 0 0 0 6.35 8 18.57 18.57 0 0 0 19.45 0 17.39 17.39 0 0 0 6.33-8 33.4 33.4 0 0 0 2.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 0 0 8.75-16.39 24.15 24.15 0 0 0-3.26-12.75 21.9 21.9 0 0 0-9.36-8.64 32.56 32.56 0 0 0-14.64-3H212v75.4h17.06v-26.3Zm-.32-15.61a19.35 19.35 0 0 1-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 0 1 7.25 1.24 9.12 9.12 0 0 1 4.4 3.7 10 10 0 0 1 1.5 5.64 9.65 9.65 0 0 1-1.48 5.55 8.86 8.86 0 0 1-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14Z" fill='#737373'></path></svg>
                </a>
              </div>
            </div>
            <div className='flex items-center justify-center max-w-[640px] mx-auto'>
              <p className='text-[13px] text-center text-[#7e7e7e] font-markW05'>
                © 2021-2024 Riot Games, Inc. Arcane League of Legends y cualquier logotipo asociado son marcas registradas, marcas de servicio o marcas comerciales de Riot Games, Inc.
              </p>
            </div>
            <div className='p-[18px]'>
              <ul className='flex items-center justify-center gap-5 text-[14px] font-bold text-white font-markW05'>
                <li className='hover:bg-gray-500/35 hover:transition hover:duration-300 hover:rounded-md p-2 hover:text-blue-600/50'>
                  <a href="https://www.riotgames.com/es-419/privacy-notice-LATAM">AVISO DE PRIVACIODAD</a>
                </li>
                <li className='hover:bg-gray-500/35 hover:transition hover:duration-300 hover:rounded-md p-2 hover:text-blue-600/50'>
                  <a href="https://www.riotgames.com/es-419/terms-of-service-LATAM">TERMINOS DE SERVICIO</a>
                </li>
                <li className='hover:bg-gray-500/35 hover:transition hover:duration-300 hover:rounded-md p-2 hover:text-blue-600/50'>
                  <a href="">PREFERENCIAS DE COOKIES</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </footer>


    </div >

  );
}

export default App;
