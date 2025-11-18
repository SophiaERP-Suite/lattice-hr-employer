import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EmployerLayout from "../layouts/EmployerLayout";
import JobManagement from "../pages/JobManagement";
import JobDetails from "../pages/JobDetails";
import JobOffers from "../pages/JobOffers";
import Induction from "../pages/Induction";
import CreateInductionProcess from "../pages/CreateInductionProcess";
import ViewInductionProcess from "../pages/ViewInductionProcess";
import Onboarding from "../pages/Onboarding";
import Compliance from "../pages/Compliance";
import ContractManagement from "../pages/ContractManagement";
import ContractDetails from "../pages/ContractDetails";
import WorkAttendance from "../pages/WorkAttendance";
import InvoiceManagement from "../pages/InvoiceManagement";
import InvoiceForm from "../pages/InvoiceForm";
import InvoiceDetails from "../pages/InvoiceDetails";
import Payment from "../pages/Payment";
import Receipt from "../pages/Receipt";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Messages from "../pages/Messages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployerLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="job-management" element={<JobManagement />} />
        <Route path="job-details" element={<JobDetails />} />
        <Route path="job-offers" element={<JobOffers />} />
        <Route path="induction" element={<Induction />} />{" "}
        <Route path="create-induction" element={<CreateInductionProcess />} />
        <Route path="view-induction" element={<ViewInductionProcess />} />{" "}
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="contract-management" element={<ContractManagement />} />
        <Route path="contract-details" element={<ContractDetails />} />
        <Route path="work-and-attendance" element={<WorkAttendance />} />
        <Route path="invoice-management" element={<InvoiceManagement />} />
        <Route path="invoice-form" element={<InvoiceForm />} />
        <Route path="invoice-details" element={<InvoiceDetails />} />
        <Route path="payment" element={<Payment />} />
        <Route path="receipt" element={<Receipt />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="messages" element={<Messages />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
