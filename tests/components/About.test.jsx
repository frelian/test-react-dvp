import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { About } from '../../src/components/About';

describe('components/About Component', () => {
    
    test('Renderiza información', () => {

        render(<About />);

        expect(screen.getByText(/Hecho por:/i)).toBeInTheDocument();
        expect(screen.getByText(/Librería Front:/i)).toBeInTheDocument();
        expect(screen.getByText(/Framework:/i)).toBeInTheDocument();
        expect(screen.getByText(/Fecha:/i)).toBeInTheDocument();
    });
});