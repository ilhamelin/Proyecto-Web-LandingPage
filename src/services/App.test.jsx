import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect, vi } from 'vitest';
import App from '../App';

const setActiveSlideMock = vi.fn();
const slides = [
    { id: 1, image: 'image1.png', thumbnail: 'thumb1.png', title: 'Jinx', subtitle: 'Arcane', description: 'Descripción 1', link: '#', titleColor: 'text-red-500', subtitleColor: 'text-yellow-500', buttonBgColor: 'bg-blue-500', buttonTextColor: 'text-white', buttonHoverBgColor: 'hover:bg-blue-700' },
    { id: 2, image: 'image2.png', thumbnail: 'thumb2.png', title: 'Vi', subtitle: 'Arcane', description: 'Descripción 2', link: '#', titleColor: 'text-green-500', subtitleColor: 'text-purple-500', buttonBgColor: 'bg-purple-500', buttonTextColor: 'text-white', buttonHoverBgColor: 'hover:bg-purple-700' }
];

describe('<App />', () => {
    beforeEach(() => {
        render(<App />);
    });

    test('renderiza la imagen de fondo de la sección 3', () => {
        const backgroundImage = screen.getByAltText(/fondo sección 3/i);
        expect(backgroundImage).toHaveAttribute('src', expect.stringContaining('Piltover_Puente_Image_1.png'));
    });

    test('muestra las miniaturas del slider', () => {
        const thumbnails = screen.getAllByRole('button');
        expect(thumbnails).toHaveLength(slides.length);

        slides.forEach((slide, index) => {
            expect(thumbnails[index]).toHaveAttribute('aria-label', `Thumbnail ${slide.id}`);
        });
    });

    test('cambia el slide activo al hacer clic en una miniatura', () => {
        const thumbnail = screen.getAllByRole('button')[0];
        fireEvent.click(thumbnail);

        expect(setActiveSlideMock).toHaveBeenCalledWith(slides[0]);
    });

    test('muestra el título del slide activo', () => {
        const title = screen.getByText(slides[0].title);
        expect(title).toBeInTheDocument();
    });

    test('muestra el contenido de la sección derecha con el fondo adecuado', () => {
        const contentBackground = screen.getByText(slides[0].description);
        expect(contentBackground).toBeInTheDocument();
    });

    test('el botón de "Ver más" tiene el enlace correcto', () => {
        const linkButton = screen.getByText(/ver más/i);
        expect(linkButton).toHaveAttribute('href', slides[0].link);
    });

    test('muestra el video correspondiente al slide activo', () => {
        const video = screen.getByAltText(/video arcane/i);
        expect(video).toBeInTheDocument();
    });
});
