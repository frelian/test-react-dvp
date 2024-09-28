import React from 'react';
import { MemoryRouter } from 'react-router-dom';  // Para simular las rutas
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserApp from '../src/UserApp';

describe('UserApp component', () => {
    test('Renderizado de componente', () => {

      const { container } = render(
        <MemoryRouter>
          <UserApp />
        </MemoryRouter>
      );
      
      expect(container).toBeInTheDocument();
    });
  });