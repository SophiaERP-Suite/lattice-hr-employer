import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EmployerLayout from "../layouts/EmployerLayout";
import JobManagement from "../pages/JobManagement";
import JobDetails from "../pages/JobDetails";
import JobOffers from "../pages/JobOffers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployerLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="job-management" element={<JobManagement />} />
        <Route path="job-details" element={<JobDetails />} />
        <Route path="job-offers" element={<JobOffers />} />

        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
