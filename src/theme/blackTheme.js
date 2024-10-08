import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const blackTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#232323',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#121212',
            paper: '#232323',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3',
        },
    },
});