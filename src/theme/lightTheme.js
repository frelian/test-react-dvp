import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#B8C9F4FF',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#333333',
        },
    },
});