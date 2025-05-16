import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect, vi } from 'vitest'
import ImageSlider from '../components/ImageSlider' // Ajusta la ruta si es necesario

describe('ImageSlider', () => {
    test('debería renderizar sin errores', () => {
        render(<ImageSlider />)
        const sliderElement = screen.getByTestId('image-slider')
        expect(sliderElement).toBeInTheDocument()
    })

    beforeEach(() => {
        Object.defineProperty(HTMLElement.prototype, 'scrollBy', {
            configurable: true,
            value: vi.fn(), // usando vi.fn() para espiar si quieres verificar luego
        });

        Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
            configurable: true,
            get: () => 2000,
        });

        Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
            configurable: true,
            get: () => 500,
        });

        Object.defineProperty(HTMLElement.prototype, 'scrollLeft', {
            configurable: true,
            get: () => 100,
        });

        Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
            configurable: true,
            get: () => 150, // tamaño simulado de la imagen
        });
    });

    test('debería permitir desplazarse a la izquierda y a la derecha', () => {
        render(<ImageSlider />);

        const scrollLeftButton = screen.getByLabelText('scroll left');
        const scrollRightButton = screen.getByLabelText('scroll right');

        // Ahora deberían estar habilitados porque hay espacio para scrollear
        expect(scrollLeftButton).not.toBeDisabled();
        expect(scrollRightButton).not.toBeDisabled();

        // Simula clics si quieres:
        fireEvent.click(scrollLeftButton);
        fireEvent.click(scrollRightButton);
    });

    test('debería abrir el video al hacer clic en una imagen', () => {
        render(<ImageSlider />)
        const images = screen.getAllByRole('img')

        // Simula el clic en una de las imágenes
        fireEvent.click(images[1]) // Supongamos que la segunda imagen tiene un link para abrir
        expect(screen.getByTitle('Video')).toBeInTheDocument() // El video debería aparecer
    })

    test('debería cerrar el video al hacer clic en el botón de cerrar', () => {
        render(<ImageSlider />)

        // Abre el video primero
        const images = screen.getAllByRole('img')
        fireEvent.click(images[1])

        // Asegúrate de que el video esté visible
        const closeButton = screen.getByText('✕')
        expect(screen.getByTitle('Video')).toBeInTheDocument()

        // Cierra el video
        fireEvent.click(closeButton)
        expect(screen.queryByTitle('Video')).not.toBeInTheDocument() // El video debería cerrarse
    })
})
