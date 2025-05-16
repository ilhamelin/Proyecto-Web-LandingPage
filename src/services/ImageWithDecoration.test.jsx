import { render } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import ImageWithDecoration from '../components/ImageWithDecoration.jsx' // Ajusta la ruta si es necesario

describe('ImageWithDecoration', () => {
    test('debería renderizar sin errores', () => {
        render(<ImageWithDecoration />)
    })
})