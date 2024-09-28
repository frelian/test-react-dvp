import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { NavBar, SideBar } from '../components';

const drawerWidth = 280;

export const UserLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', bgcolor: 'background.default', color: 'text.primary' }}>

            {/* Barra superior */}
            <NavBar drawerWidth={drawerWidth} />

            {/* Menu lateral principal */}
            <SideBar drawerWidth={drawerWidth} />

            {/* Contenido */}
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3, bgcolor: 'background.default', color: 'text.primary' }}
            >
                <Toolbar />

                {children}
            </Box>
        </Box>
    );
}