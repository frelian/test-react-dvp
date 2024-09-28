import { useState } from 'react';

import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, PeopleOutline, InfoOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/system';
import { Link } from 'react-router-dom';

export const SideBar = ({ drawerWidth = 240 }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuItemClick = () => {
        if (isMobile) {
            setMobileOpen(false);
        }
    };

    const drawerContent = (
        <Box>
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Julian's App
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {/* Primer ítem de menú: Usuarios */}
                <ListItem disablePadding>
                    <ListItemButton 
                        component={Link}
                        to="/users"
                        onClick={handleMenuItemClick}
                    >
                        <ListItemIcon>
                            <PeopleOutline />
                        </ListItemIcon>
                        <ListItemText primary='Usuarios' />
                    </ListItemButton>
                </ListItem>

                {/* Segundo ítem de menú: Acerca de */}
                <ListItem disablePadding>
                    <ListItemButton 
                        component={Link}
                        to="/about"
                        onClick={handleMenuItemClick}
                    >
                        <ListItemIcon>
                            <InfoOutlined />
                        </ListItemIcon>
                        <ListItemText primary='Acerca de...' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            {isMobile && (
                <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Julian Niño
                        </Typography>
                    </Toolbar>
                </AppBar>
            )}

            <Box
                component='nav'
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant={isMobile ? 'temporary' : 'permanent'}
                    open={isMobile ? mobileOpen : true}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawerContent}
                </Drawer>

                {!isMobile && (
                    <Drawer
                        variant="permanent"
                        open
                        sx={{
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                        }}
                    >
                        {drawerContent}
                    </Drawer>
                )}
            </Box>
        </Box>
    );
};