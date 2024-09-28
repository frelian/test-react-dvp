
import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const blackTheme = createTheme({
    palette: {
        primary: {
            main: '#232323'
        },
        secondary: {
            main: '#232323FF'
        },
        error: {
            main: red.A400
        }
    }
})
