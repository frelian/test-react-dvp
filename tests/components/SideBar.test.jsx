import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { SideBar } from '../../src/components/SideBar';

describe('SideBar Component', () => {

    test('Render del componente con links de "Usuarios" y "Acerca de..."', () => {

        // render del SideBar dentro de BrowserRouter
        render(
            <BrowserRouter>
                <SideBar />
            </BrowserRouter>
        );

        // getAllByText para manejar múltiples instancias del mismo texto
        // Check 1 que el enlace "Usuarios" exista
        const usersLinks = screen.getAllByText('Usuarios');
        expect(usersLinks[0]).toBeInTheDocument();
        expect(usersLinks[0].closest('a')).toHaveAttribute('href', '/users');

        // Check 2 que el enlace "Acerca de..." exista
        const aboutLinks = screen.getAllByText('Acerca de...');
        expect(aboutLinks[0]).toBeInTheDocument();
        expect(aboutLinks[0].closest('a')).toHaveAttribute('href', '/about');
    });
});