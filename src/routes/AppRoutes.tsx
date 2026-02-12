import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import {
    EmployeeListPage,
    EmployeeCreatePage,
    EmployeeDetailsPage,
    EmployeeEditPage
} from "../pages/employees";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/employees" element={<EmployeeListPage />} />
            <Route path="/employees/add" element={<EmployeeCreatePage />} />
            <Route path="/employees/:id" element={<EmployeeDetailsPage />} />
            <Route path="/employees/:id/edit" element={<EmployeeEditPage />} />
        </Routes>
    );
};

export default AppRoutes;
