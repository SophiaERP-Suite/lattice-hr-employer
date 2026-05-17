import { NavLink } from "react-router-dom";
import latty from "../assets/images/logo/lattice-logo.png";
import { Bell, BookOpen, BriefcaseBusiness, Calendar1, Coins, File, FileEdit, LayoutDashboard, Settings, Shield, User } from "lucide-react";

interface Props {
  employerInfo: any;
}

const SideBar = ({ employerInfo }: Props) => {
  return (
    <>
      <aside className="app-sidebar sticky" id="sidebar">
        {/* start app-sidebar-header */}
        <div className="app-sidebar-header">
          <NavLink to="/dashboard" className="desktop-logo">
            <img src={latty} className="app-logo" alt="image" />
          </NavLink>
          <NavLink to="/dashboard" className="desktop-dark">
            <img src={latty} className="app-logo" alt="image" />
          </NavLink>
        </div>
        {/* end app-sidebar-header */}

        {/* start app-sidebar-wrapper */}
        <div className="app-sidebar-wrapper" id="sidebar-scroll">
          <nav className="app-sidebar-menu-wrapper nav flex-column sub-open">
            <div className="sidebar-left" id="sidebar-left"></div>

            <h6 style={{ textAlign: "center", margin: "3rem 0 0" }}>
              EMPLOYER PORTAL
            </h6>

            <ul className="app-sidebar-main-menu">
              <li className="employer-profile-box">
                {employerInfo != null && employerInfo.employerLogo != "" ?
                  <img src={employerInfo != null ? employerInfo.employerLogo : ""} /> : <img src="https://placehold.co/200x60" alt="Logo" />
                }
                <h6 style={{ textAlign: "center", margin: ".3rem 0 2rem" }}>{employerInfo != null ? employerInfo.businessName : ""}</h6>
              </li>

              <li className="mb-2"
                style={{
                  margin: "0px",
                }}>
                <NavLink to="/dashboard" className="sidebar-menu-item d-flex align-items-center text-decoration-none text-dark rounded">

                  <div className="" style={{ paddingRight: "10px" }}>
                    <LayoutDashboard size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">Dashboard</span>
                </NavLink>
              </li>
              {/* has-sub */}
              <li className="slide ">
                <NavLink to="jobManagement" className="sidebar-menu-item">
                  <div className="" style={{ paddingRight: "10px" }}>
                    <BriefcaseBusiness size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">Job Management </span>
                  {/* <i
                    className="ri-arrow-down-s-fill side-menu-angle"
                    onClick={(e) => e.preventDefault()}
                  ></i> */}
                </NavLink>
                {/* <ul className="sidebar-menu child1">
                  <li className="slide">
                    <NavLink to="jobManagement" className="sidebar-menu-item">
                      My Jobs
                    </NavLink>
                  </li>
                </ul> */}
              </li>

              <li className="slide">
                <NavLink to="/induction" className="sidebar-menu-item">
                  <div className="" style={{ paddingRight: "10px" }}>
                    <BookOpen size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">Induction</span>
                </NavLink>
              </li>

              {/* <li className="slide">
                <NavLink to="/onboarding" className="sidebar-menu-item">
                  <div className="" style={{ paddingRight: "10px" }}>
                    <User size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">Onboarding</span>
                </NavLink>
              </li> */}

              <li className="slide">
                <NavLink to="/compliance" className="sidebar-menu-item">
                  <div className="" style={{ paddingRight: "10px" }}>
                    <Shield size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">Compliance</span>
                </NavLink>
              </li>
              <li className="slide">
                <NavLink
                  to="/contractManagement"
                  className="sidebar-menu-item"
                >
                  <div className="" style={{ paddingRight: "10px" }}>
                    <File size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">
                    Service Management
                  </span>
                </NavLink>
              </li>
              <li className="slide">
                <NavLink
                  to="/workAndAttendance"
                  className="sidebar-menu-item"
                >
                  <div className="" style={{ paddingRight: "10px" }}>
                    <Calendar1 size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">Work & Attendance</span>
                </NavLink>
              </li>

              <li className="slide">
                <NavLink to="/invoices" className="sidebar-menu-item">
                  <div className="" style={{ paddingRight: "10px" }}>
                    <FileEdit size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">Invoice</span>
                </NavLink>
              </li>
              <li className="slide">
                <NavLink to="/payment" className="sidebar-menu-item">
                  <div className="" style={{ paddingRight: "10px" }}>
                    <Coins size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">Payment</span>
                </NavLink>
              </li>
              <li className="slide">
                <NavLink to="/notifications" className="sidebar-menu-item">
                  <div className="" style={{ paddingRight: "10px" }}>
                    <Bell size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">Notifications</span>
                </NavLink>
              </li>
              <li className="slide">
                <NavLink to="/settings" className="sidebar-menu-item">
                  <div className="" style={{ paddingRight: "10px" }}>
                    <Settings size={20} style={{ scale: "1.3" }} />
                  </div>
                  <span className="sidebar-menu-label">Settings</span>
                </NavLink>
              </li>
            </ul>
            <div className="sidebar-right" id="sidebar-right"></div>
          </nav>
        </div>
        {/* end app-sidebar-wrapper */}
      </aside>
      <div className="app-offcanvas-overlay"></div>
    </>
  );
};

export default SideBar;
