import React from 'react';

import { render, screen, fireEvent, act } from '@testing-library/react';
import { Button } from '@mui/material';
import '@testing-library/jest-dom';

import { ThemeContext, AppTheme } from '../../src/theme/AppTheme';

describe('AppTheme Component', () => {
    test('Render del AppTheme con modo oscuro por defecto', () => {
        render(
            <AppTheme>
                <Button>Test Button</Button>
            </AppTheme>
        );

        // Check que el btn de prueba exista
        const testButton = screen.getByText('Test Button');
        expect(testButton).toBeInTheDocument();
    });

    test('Toggle del tema entre claro y oscuro', () => {
        render(
            <AppTheme>
                <ThemeContext.Consumer>
                    {({ isDarkMode, toggleTheme }) => (
                        <>
                            <div>Current Theme: {isDarkMode ? 'Dark' : 'Light'}</div>
                            <button onClick={toggleTheme}>Toggle Theme</button>
                        </>
                    )}
                </ThemeContext.Consumer>
            </AppTheme>
        );

        // Check 1 que el theme por inicial sea oscuro
        expect(screen.getByText(/Current Theme: Dark/i)).toBeInTheDocument();

        // Simular clic en el botón de toggle theme
        act(() => {
            fireEvent.click(screen.getByText('Toggle Theme'));
        });

        // Check 2 tema ha cambiado a claro
        expect(screen.getByText(/Current Theme: Light/i)).toBeInTheDocument();
    });
});