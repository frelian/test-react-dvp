import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Users } from '../../src/components/Users';

// Mock de axios
jest.mock('axios');

describe('Users component', () => {
  test('renders user data correctly', async () => {

    const mockData = {
      data: {
        items: [
          {
            id: 1,
            login: 'frelian',
            avatar_url: 'https://example.com/avatar1.jpg',
            html_url: 'https://github.com/frelian',
            repos_url: 'https://github.com/frelian/repos',
          },
        ],
        total_count: 1,
      },
    };

    // Simular la respuesta de axios
    axios.get.mockResolvedValueOnce(mockData);

    // Render con un theme simulado, light
    const theme = createTheme({
      palette: {
        mode: 'light',
      },
    });

    render(
      <ThemeProvider theme={theme}>
        <Users />
      </ThemeProvider>
    );

    await waitFor(() => expect(screen.getByText('Perfiles de Usuarios de GitHub')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('frelian')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('https://github.com/frelian')).toBeInTheDocument());
  });
});