import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EmployerLayout from "../layouts/EmployerLayout";
import JobManagement from "../pages/JobManagement";
import JobDetails from "../pages/JobDetails";
import JobOffers from "../pages/JobOffers";
import Onboarding from "../pages/Onboarding";
import Compliance from "../pages/Compliance";
import ContractManagement from "../pages/ContractManagement";
import WorkAttendance from "../pages/WorkAttendance";
import InvoiceManagement from "../pages/InvoiceManagement";
import InvoiceForm from "../pages/InvoiceForm";
import Payment from "../pages/Payment";
import Receipt from "../pages/Receipt";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Messages from "../pages/Messages";
import JobForm from "../pages/JobForm";
import AuthBridge from "../utils/Auth/AuthBridge";
import InterviewQuestionsPageLocal from "../pages/InterviewQuestionsForm";
import JobApplication from "../pages/JobApplications";
import JobApplicationDetails from "../pages/JobApplicationDetails";
import JobOfferDetails from "../pages/JobOfferDetails";
import AllApplications from "../pages/AllJobApplication";
import JobOfferFormNew from "../pages/JobOfferFormNew";
import CreateInductionSections from "../pages/CreateInductionSection";
import CreateInductionItems from "../pages/CreateInductionItem";
import CreateInductionLevel from "../pages/CreateInductionLevel";
import InductionDashboard from "../pages/Induction";
import CategoryLevels from "../pages/CreateInductionLevel";
import LevelSections from "../pages/CreateInductionSection";
import SectionItems from "../pages/CreateInductionItem";
import SectionPreview from "../pages/InductionSectionPreview";
import EmployerLeaveRequests from "../pages/LeaveRequest";
import TimeOffRequests from "../pages/TimeOffRequests";
import EmployerTimesheets from "../pages/GeneralTimeSheet";
import EmployeeTimesheets from "../pages/TimeSheet";
import WorkerDetails from "../pages/EmployersDetails";
import EmployerRequestDetails from "../pages/ContractRequestsDetails";
import ContractDetails from "../pages/ContractDetails";
import PaymentConfirmation from "../pages/ContractConfirmation";
import AllInvoices from "../pages/Invoice";
import InvoiceDetail from "../pages/InvoiceDetails";
import InvoiceDetails from "../pages/InvoiceDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployerLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jobManagement" element={<JobManagement />} />
        <Route path="allApplications" element={<AllApplications />} />
        <Route path="auth-bridge" element={<AuthBridge />} />
        <Route path="jobDetails/:id" element={<JobDetails />} />
        <Route path="jobApplications/:id" element={<JobApplication />} />
        <Route path="jobApplicationDetails/:id" element={<JobApplicationDetails />} />
        <Route path="contractPaymentConfirmation/:TxRef" element={<PaymentConfirmation />} />
        <Route path="jobForm" element={<JobForm />} />
        <Route
          path="interview/:jobInterviewId/:jobId"
          element={<InterviewQuestionsPageLocal />}
        />
        <Route path="jobEdit/:id" element={<JobForm />} />
        <Route path="jobOffers" element={<JobOffers />} />
        <Route path="jobOfferForm/:id" element={<JobOfferFormNew />} />
        <Route path="jobOfferDetails/:id" element={<JobOfferDetails />} />
        <Route path="induction" element={<InductionDashboard />} />
        <Route
          path="/induction/programmes/:categoryId/stages/:levelId/modules/:sectionId/items-preview"
          element={<SectionPreview />}
        />
        <Route path="/induction/programmes/:categoryId" element={<CategoryLevels />} />
        <Route path="/induction/programmes/:categoryId/stages/:levelId" element={<LevelSections />} />
        <Route path="/induction/programmes/:categoryId/stages/:levelId/modules/:sectionId/items" element={<SectionItems />} />
        <Route path="/induction/level/create" element={<CreateInductionLevel />} />
        <Route path="/induction/sections/create" element={<CreateInductionSections />} />
        <Route path="/induction/items/create" element={<CreateInductionItems />} />
        {/* <Route path="view-induction" element={<ViewInductionProcess />} />{" "} */}
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="contractManagement" element={<ContractManagement />} />
        <Route path="contractDetails/:id" element={<ContractDetails />} />
        <Route path="workAndAttendance" element={<WorkAttendance />} />
        <Route path="workAndAttendance/Timesheet/:employeeId/:employeeName" element={<EmployeeTimesheets />} />
        <Route path="workAndAttendance/EmployeeDetails/:employeeId" element={<WorkerDetails />} />
        <Route path="workAndAttendance/Timesheet" element={<EmployerTimesheets />} />
        <Route path="workAndAttendance/LeaveRequests/:employeeId/:employeeName" element={<EmployerLeaveRequests />} />
        <Route path="workAndAttendance/TimeOffRequests" element={<TimeOffRequests />} />
        <Route path="invoice-management" element={<InvoiceManagement />} />
        <Route path="invoice-form" element={<InvoiceForm />} />
        <Route path="invoice-details" element={<InvoiceDetails />} />
        <Route path="payment" element={<Payment />} />
        <Route path="receipt" element={<Receipt />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="messages" element={<Messages />} />
        <Route path="contracts/Requests/:requestId" element={<EmployerRequestDetails />} />
        <Route path="invoices" element={<AllInvoices />} />
        <Route path="invoiceDetails/:id" element={<InvoiceDetail />} />
        {/* <Route path="*" element={<Navigate to={"/"} replace />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
