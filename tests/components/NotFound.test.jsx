import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { NotFound } from '../../src/components/NotFound';

describe('NotFound Component', () => {
    test('Render del componente con textos y el link de volver', () => {

        // Render dentro de BrowserRouter para que funcione el Link
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );

        // Check
        expect(screen.getByText('Ruta no encontrada')).toBeInTheDocument();

        // Check
        expect(screen.getByText('Lo sentimos, la página que estás buscando no existe.')).toBeInTheDocument();

        // Check del botón para volver a Usuarios exista y tenga el enlace correcto
        const backButton = screen.getByRole('link', { name: /Volver a Usuarios/i });
        expect(backButton).toBeInTheDocument();
        expect(backButton.closest('a')).toHaveAttribute('href', '/users');
    });
});