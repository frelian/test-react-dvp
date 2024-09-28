import { useContext } from 'react';

import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material';
import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material';
import { ThemeContext } from '../theme';

export const NavBar = ({ drawerWidth = 240 }) => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <AppBar 
            position='fixed'
            sx={{ 
                width: { sm: `calc(100% - ${ drawerWidth }px)` },
                ml: { sm: `${ drawerWidth }px` },
                bgcolor: '#232323'
            }}
        >
            <Toolbar>
                {/* Uso flex para distribuir el contenido */}
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant='h6' noWrap component='div'>
                        DVP
                    </Typography>
                </Box>

                {/* Icono de cambio de tema */}
                <IconButton color='inherit' onClick={toggleTheme}>
                    {isDarkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}