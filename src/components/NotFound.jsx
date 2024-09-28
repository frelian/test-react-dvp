import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Ruta no encontrada
            </Typography>
            <Typography variant="body1" gutterBottom>
                Lo sentimos, la página que estás buscando no existe.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/users"
                sx={{ mt: 2 }}
            >
                Volver a Usuarios
            </Button>
        </Box>
    );
};