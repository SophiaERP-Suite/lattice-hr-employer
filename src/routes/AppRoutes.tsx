import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EmployerLayout from "../layouts/EmployerLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployerLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
