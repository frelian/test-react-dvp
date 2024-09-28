import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, CircularProgress, Pagination } from '@mui/material';
import axios from 'axios';

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    /**
     * Número de perfiles por página segun
     * https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28
     */
    const usersPerPage = 3;

    useEffect(() => {
        const fetchGitHubUsers = async () => {
            try {
                const response = await axios.get(`https://api.github.com/search/users?q=frelian&page=${page}&per_page=${usersPerPage}`);
                setUsers(response.data.items);
                setLoading(false);
                setTotalPages(Math.ceil(response.data.total_count / usersPerPage));
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchGitHubUsers();
    }, [page]);

    // Maneja el cambio de página
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                Ups por favor intente en unos segundos...&nbsp;(<Typography color="error">{error}</Typography>)
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%', overflowX: 'auto', padding: 2 }}>
            <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                Perfiles de Usuarios de GitHub
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="tabla de usuarios de GitHub">
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell>Nombre de Usuario</TableCell>
                            <TableCell>Perfil de GitHub</TableCell>
                            <TableCell>Repositorios</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <img src={user.avatar_url} alt={user.login} style={{ width: '50px', borderRadius: '50%' }} />
                                </TableCell>
                                <TableCell>{user.login}</TableCell>
                                <TableCell>
                                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                        {user.html_url}
                                    </a>
                                </TableCell>
                                <TableCell>
                                    <a href={user.repos_url} target="_blank" rel="noopener noreferrer">
                                        {user.repos_url}
                                    </a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Paginador */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Box>
        </Box>
    );
};