import { Box, Typography } from '@mui/material';


export const About = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h5" component="h3" gutterBottom>
                Acerca de...
            </Typography>
            <Typography variant="body1" gutterBottom>
                Hecho por: <strong>Julian Niño</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
                Librería Front: <strong>React</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
                Framework: <strong>Material UI</strong>
            </Typography>
            <Typography variant="body1">
                Fecha: <strong>28 Septiembre 2024</strong>
            </Typography>
        </Box>
    );
};