import { createContext, useState } from 'react';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { lightTheme, blackTheme } from './';

export const ThemeContext = createContext();

export const AppTheme = ({ children }) => {

    // Modo oscuro por defecto
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Alterner de modo oscuro o claro
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <ThemeProvider theme={isDarkMode ? blackTheme : lightTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};