import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  CalendarCheck,
  CalendarClock,
  Filter,
  ChevronDown,
  Eye,
  Settings
} from "lucide-react";
import { getOrganizationEmployees } from "../api/EmployerApi";
import Hashids from "hashids";

interface Employee {
  jobSeekerId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  profilePhoto: string;
  address: string;
}

interface PagedResult {
  items: Employee[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

const WorkAttendance = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [pagedResult, setPagedResult] = useState<PagedResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [filters, setFilters] = useState({
    page: 1,
    pageSize: 8,
    search: "",
    jobSectorId: undefined as number | undefined,
  });

  const hashIds = new Hashids("LatticeHrEncode", 10);

  useEffect(() => {
    const delay = setTimeout(() => {
      setFilters((prev) => ({ ...prev, search: searchInput, page: 1 }));
    }, 500);
    return () => clearTimeout(delay);
  }, [searchInput]);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await getOrganizationEmployees(filters);
      const result: PagedResult = response.data;
      setPagedResult(result);
      setEmployees(result.items);
    } catch (err) {
      console.error("Failed to load employees", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [filters]);

  const totalPages = pagedResult?.totalPages ?? 1;
  const totalCount = pagedResult?.totalCount ?? 0;
  const currentPage = filters.page;

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setFilters((prev) => ({ ...prev, page }));
  };

  // Build page number array with ellipsis
  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const showingFrom = totalCount === 0 ? 0 : (currentPage - 1) * filters.pageSize + 1;
  const showingTo = Math.min(currentPage * filters.pageSize, totalCount);

  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Worker & Attendance</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      Worker & Attendance
                    </li>
                    <li className="breadcrumb-item">
                      <NavLink to="/dashboard">Home</NavLink>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            {/* Summary Cards */}
            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className="avatar avatar-xl bg-primary-transparent text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">Total Employees</span>
                    <h2 className="mb-5">{totalCount}</h2>
                    <span className="text-success">
                      +2
                      <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                    </span>
                    <span className="fs-12 text-muted ml-5">this month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className="avatar avatar-xl bg-success-transparent text-success">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">Present Today</span>
                    <h2 className="mb-5">—</h2>
                    <span className="fs-12 text-muted ml-5">attendance rate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className="avatar avatar-xl bg-warning-transparent text-warning">
                    <Clock3 className="w-6 h-6" />
                  </div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">Late Today</span>
                    <h2 className="mb-5">—</h2>
                    <span className="fs-12 text-muted ml-5">vs yesterday</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className="avatar avatar-xl bg-info-transparent text-info">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">Avg. Hours</span>
                    <h2 className="mb-5">7.8</h2>
                    <span className="text-success">
                      +0.3
                      <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                    </span>
                    <span className="fs-12 text-muted ml-5">per day</span>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Search & Filter Bar */}
            <div className="col-xl-12 mb-2">
              <div className="card">
                <div className="card-body">
                  <div className="row g-3 align-items-center">
                    <div className="col-md-4">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search employees..."
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* <div className="col-md-3">
                      <select
                        className="form-select"
                        value={filters.jobSectorId ?? ""}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            jobSectorId: e.target.value ? Number(e.target.value) : undefined,
                            page: 1,
                          }))
                        }
                      >
                        <option value="">All Departments</option>
                        <option value="1">Engineering</option>
                        <option value="2">Design</option>
                        <option value="3">Management</option>
                        <option value="4">Data</option>
                      </select>
                    </div> */}
                    <div className="col-md-2">
                      <button
                        className="btn btn-info w-100"
                        onClick={() => {
                          setSearchInput("");
                          setFilters({
                            page: 1,
                            pageSize: 10,
                            search: "",
                            jobSectorId: undefined,
                          });
                        }}
                      >
                        <Filter size={16} className="me-1" /> Clear Filters
                      </button>
                    </div>
                    <div className="col-md-2 ">
                      <NavLink className="btn btn-success w-100" to={"/workAndAttendance/TimeOffRequests"}>
                        <CalendarCheck size={16} /> Time-Offs
                      </NavLink>
                    </div>
                    <div className="col-md-2">
                      <NavLink className="btn btn-warning w-100" to={"/workAndAttendance/Timesheet"}>
                        <CalendarClock size={16} /> TimeSheet
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12 mb-2">
              <div className="card">
                <div className="card-body">
                  <h5>All Employees</h5></div></div></div>

            {/* Employee Cards Grid */}
            <div className="col-xl-12">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" />
                </div>
              ) : employees.length === 0 ? (
                <div className="text-center py-5 text-muted">No employees found.</div>
              ) : (
                <div className="row g-4">
                  {employees.map((employee) => (
                    <div key={employee.jobSeekerId} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-6">
                      <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                        <div className="card-body">
                          <div className="text-center mb-3">
                            <div className="avatar avatar-xxl mx-auto mb-3">
                              <img
                                src={`${import.meta.env.VITE_API_URL}${employee.profilePhoto}` || "https://img.icons8.com/color/48/gender-neutral-user.png"}
                                alt={`${employee.firstName} ${employee.lastName}`}
                                className="rounded-circle border border-3 border-white shadow-sm"
                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = `https://ui-avatars.com/api/?background=4f46e5&color=fff&bold=true&name=${employee.firstName}+${employee.lastName}`;
                                }}
                              />
                            </div>
                            <h5 className="mb-1 fw-semibold">
                              {employee.firstName} {employee.lastName}
                            </h5>
                            {/* <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-pill">
                              {employee.jobSector || "Employee"}
                            </span> */}
                          </div>

                          {/* Contact Info */}
                          <div className="mb-4">
                            <div className="d-flex align-items-center gap-2 mb-2 small text-muted">
                              <Mail size={14} className="flex-shrink-0" />
                              <span className="text-truncate">{employee.email}</span>
                            </div>
                            <div className="d-flex align-items-center gap-2 mb-2 small text-muted">
                              <Phone size={14} className="flex-shrink-0" />
                              <span>{employee.phone}</span>
                            </div>
                            <div className="d-flex align-items-center gap-2 small text-muted">
                              <MapPin size={14} className="flex-shrink-0" />
                              <span className="text-truncate">{employee.address}</span>
                            </div>
                          </div>

                          {/* Dropdown Action Button */}
                          <div className="dropdown">
                            <button
                              className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <Settings size={16} />
                              Actions
                              <ChevronDown size={14} />
                            </button>
                            <ul className="dropdown-menu w-100">
                              <li>
                                <NavLink
                                  to={`/workAndAttendance/EmployeeDetails/${hashIds.encode(employee.jobSeekerId.toString())}`}
                                  className="dropdown-item d-flex align-items-center gap-2"
                                >
                                  <Eye size={16} className="text-primary" />
                                  View Profile
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to={`/workAndAttendance/Timesheet/${hashIds.encode(employee.jobSeekerId.toString())}/${encodeURIComponent(employee.firstName + " " + employee.lastName)}`}
                                  className="dropdown-item d-flex align-items-center gap-2"
                                >
                                  <Clock size={16} className="text-info" />
                                  View Timesheet
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to={`/workAndAttendance/LeaveRequests/${hashIds.encode(employee.jobSeekerId)}/${encodeURIComponent(employee.firstName + " " + employee.lastName)}`}
                                  className="dropdown-item d-flex align-items-center gap-2"
                                >
                                  <Calendar size={16} className="text-success" />
                                  Leave Requests
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pagination */}
            {!loading && totalCount > 0 && (
              <div className="col-xl-12 mt-4">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <div className="text-muted small">
                    Showing {showingFrom}–{showingTo} of {totalCount} employees
                  </div>
                  <nav>
                    <ul className="pagination mb-0">
                      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => goToPage(currentPage - 1)}>
                          Previous
                        </button>
                      </li>

                      {getPageNumbers().map((p, i) =>
                        p === "..." ? (
                          <li key={`ellipsis-${i}`} className="page-item disabled">
                            <span className="page-link">…</span>
                          </li>
                        ) : (
                          <li key={p} className={`page-item ${p === currentPage ? "active" : ""}`}>
                            <button className="page-link" onClick={() => goToPage(p as number)}>
                              {p}
                            </button>
                          </li>
                        )
                      )}

                      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => goToPage(currentPage + 1)}>
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </div >
  );
};

export default WorkAttendance;