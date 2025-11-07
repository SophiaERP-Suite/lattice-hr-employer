import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const EmployerLayout = () => {
  return (
    <div className="page">
      {/* SideBar */}
      <SideBar />

      {/* Header */}
      <Header />

      {/* Outlet */}

      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EmployerLayout;
