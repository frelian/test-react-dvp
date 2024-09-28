import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeContext } from '../../src/theme';

import { NavBar } from '../../src/components/NavBar';

describe('components/NavBar component', () => {
    test('Render con icono de darkMode y cambiar de theme', () => {

        // Mock de toggleTheme
        const toggleThemeMock = jest.fn();

        // Render de contexto simulado
        render(
            <ThemeContext.Provider value={{ isDarkMode: true, toggleTheme: toggleThemeMock }}>
                <NavBar />
            </ThemeContext.Provider>
        );

        // Verificar que se muestra el icono de "LightModeOutlined" cuando isDarkMode es true
        expect(screen.getByTestId('LightModeOutlinedIcon')).toBeInTheDocument();

        // Simular clic en el botón de cambio de tema
        fireEvent.click(screen.getByRole('button'));

        // Verificar que toggleTheme fue llamada
        expect(toggleThemeMock).toHaveBeenCalled();
    });

    test('Render con icono de lightMode', () => {

        // Render de NavBar con isDarkMode en false
        render(
            <ThemeContext.Provider value={{ isDarkMode: false, toggleTheme: jest.fn() }}>
                <NavBar />
            </ThemeContext.Provider>
        );

        // Verificar que se muestra el icono de "DarkModeOutlined" cuando isDarkMode es false
        expect(screen.getByTestId('DarkModeOutlinedIcon')).toBeInTheDocument();
    });
});