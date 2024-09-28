import { Navigate, Route, Routes } from "react-router-dom";

import { UserPage } from "../pages/UserPage";
import { Users } from "../components/Users"
import { UserLayout } from "../layout/UserLayout"
import { About } from "../components/About";
import { NotFound } from "../components/NotFound";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<UserPage />} />

            <Route path="/users" element={<UserLayout><Users /> </UserLayout>} />
            <Route path="/about" element={<UserLayout><About /></UserLayout>} /> 

            {/* Ruta no encontrada 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}