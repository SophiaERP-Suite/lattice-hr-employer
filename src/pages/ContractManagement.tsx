import { NavLink } from "react-router-dom";
import ContractForm from "../components/ContractForm";

const ContractManagement = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Contract Management</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <NavLink to="/contract-management">
                        Contract Management
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-right"
                          aria-hidden="true"
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </NavLink>
                    </li>

                    <li className="breadcrumb-item">
                      <NavLink to="/dashboard">Home</NavLink>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-primary-transparent text-primary">
                      <i className="ri-user-3-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Total Contracts
                      </span>
                      <h2 className="mb-5">13</h2>
                      <span className="text-success">
                        +3%
                        <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                      </span>
                      <span className="fs-12 text-muted ml-5">
                        vs. last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-warning-transparent text-warning">
                      <i className="ri-calendar-event-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Pending Contracts
                      </span>
                      <h2 className="mb-5">8</h2>
                      <span className="text-success">
                        +3%
                        <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                      </span>
                      <span className="fs-12 text-muted ml-5">
                        vs. last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-info-transparent text-info">
                      <i className="ri-folder-open-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Active Contracts
                      </span>
                      <h2 className="mb-5">5</h2>
                      <span className="text-success">
                        +3
                        <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                      </span>
                      <span className="fs-12 text-muted ml-5">this week</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-purple-transparent text-purple">
                      <i className="ri-file-list-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Completed Contracts
                      </span>
                      <h2 className="mb-5">26</h2>
                      <span className="text-success">
                        +3%
                        <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                      </span>
                      <span className="fs-12 text-muted ml-5">
                        vs. last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="d-flex-items gap-10">Contract List</h4>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "2rem",
                    }}
                  >
                    <div className="dataTables-sorting-control ">
                      <select className="form-select sorting-dropdown">
                        <option value="">Sort By:</option>
                        <option value="date_newest">Date: Newest First</option>
                        <option value="date_oldest">Date: Oldest First</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="job-filter-container">
                  <h6>Filter by:</h6>

                  <div>
                    <select className="form-select">
                      <option value="">All Jobs</option>
                      <option value="software-dev">Software Developer</option>
                      <option value="frontend-dev">Frontend Developer</option>
                      <option value="it-support">IT Support Technician</option>
                    </select>

                    <select className="form-select">
                      <option value="">All Status</option>

                      <option value="draft">Draft</option>
                      <option value="pending-signature">Pending</option>
                      <option value="active">Active</option>
                      <option value="completed">Completed</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                </div>

                <div
                  className="job-search-heading"
                  style={{ marginTop: "2rem" }}
                >
                  <div className="job-result-size">
                    <label>
                      Show{" "}
                      <select
                        name="dataTableDefault_length"
                        aria-controls="dataTableDefault"
                        className="form-select form-select-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>

                  <div className="job-search-box">
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="dataTableDefault"
                      />
                    </label>
                  </div>
                </div>

                <div className="card-body pt-15">
                  <div className="table-responsive">
                    <table
                      id="dataTableDefault"
                      className="table text-nowrap w-100"
                    >
                      <thead>
                        <tr>
                          <th>Contract ID</th>
                          <th>Candidate</th>
                          <th>Job Title</th>
                          <th>Status</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Last Updated</th>
                          <th className="recent-job-action">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>CI1011</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/Employer/assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="#">Chinonso Okafor</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Frontend Developer</td>
                          <td>
                            <span className="badge bg-label-success">
                              <i className="ri-check-line"></i>Active
                            </span>
                          </td>

                          <td>Nov 6, 2025</td>
                          <td>Dec 31, 2026</td>

                          <td>Nov 11, 2025 09:00 AM</td>

                          <td className="recent-job-action">
                            <div className="card-dropdown">
                              <div className="dropdown">
                                <a
                                  className="card-dropdown-icon"
                                  href="javascript:void(0);"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-2-fill"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a
                                    className="dropdown-item"
                                    href="/contract-details"
                                  >
                                    <i className="ri-eye-line mr-10"></i>
                                    View
                                  </a>
                                  <button
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addNewEmployee"
                                  >
                                    <i className="ri-edit-2-line mr-10"></i>Edit
                                  </button>
                                  <a
                                    className="dropdown-item"
                                    href="crm-deals-details.html"
                                  >
                                    <i className="ri-send-plane-line mr-10"></i>
                                    Send
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="javascript:void(0);"
                                  >
                                    <i className="ri-download-line mr-10"></i>
                                    Download
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>CI1012</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/Employer/assets/images/avatar/avatar-thumb-003.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="#">Amina Bello</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>UI/UX Designer</td>
                          <td>
                            <span className="badge bg-label-warning">
                              <i className="ri-time-line"></i>Pending
                            </span>
                          </td>
                          <td>Nov 9, 2025</td>
                          <td>Feb 20, 2026</td>
                          <td>Nov 12, 2025 11:00 AM</td>
                          <td className="recent-job-action">
                            <div className="card-dropdown">
                              <div className="dropdown">
                                <a
                                  className="card-dropdown-icon"
                                  href="javascript:void(0);"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-2-fill"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-eye-line mr-10"></i>View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editDeals"
                                  >
                                    <i className="ri-edit-2-line mr-10"></i>Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-send-plane-line mr-10"></i>
                                    Send
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="ri-download-line mr-10"></i>
                                    Download
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>CI1013</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/Employer/assets/images/avatar/avatar-thumb-004.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="#">Kwame Mensah</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Project Manager</td>
                          <td>
                            <span className="badge bg-label-success">
                              <i className="ri-check-line"></i>Active
                            </span>
                          </td>
                          <td>Oct 20, 2025</td>
                          <td>Oct 20, 2026</td>
                          <td>Nov 10, 2025 03:00 PM</td>
                          <td className="recent-job-action">
                            <div className="card-dropdown">
                              <div className="dropdown">
                                <a
                                  className="card-dropdown-icon"
                                  href="javascript:void(0);"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-2-fill"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-eye-line mr-10"></i>View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editDeals"
                                  >
                                    <i className="ri-edit-2-line mr-10"></i>Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-send-plane-line mr-10"></i>
                                    Send
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="ri-download-line mr-10"></i>
                                    Download
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>CI1014</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/Employer/assets/images/avatar/avatar-thumb-005.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="#">Zanele Dlamini</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>HR Officer</td>
                          <td>
                            <span className="badge bg-label-danger">
                              <i className="ri-close-line"></i>Rejected
                            </span>
                          </td>
                          <td>Nov 1, 2025</td>
                          <td>Nov 30, 2025</td>
                          <td>Nov 11, 2025 08:30 AM</td>
                          <td className="recent-job-action">
                            <div className="card-dropdown">
                              <div className="dropdown">
                                <a
                                  className="card-dropdown-icon"
                                  href="javascript:void(0);"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-2-fill"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-eye-line mr-10"></i>View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editDeals"
                                  >
                                    <i className="ri-edit-2-line mr-10"></i>Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-send-plane-line mr-10"></i>
                                    Send
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="ri-download-line mr-10"></i>
                                    Download
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>CI1015</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/Employer/assets/images/avatar/avatar-thumb-006.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="#">Tunde Adeyemi</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Electrical Engineer</td>
                          <td>
                            <span className="badge bg-label-info">
                              <i className="ri-draft-line"></i>Draft
                            </span>
                          </td>
                          <td>Nov 5, 2025</td>
                          <td>Mar 5, 2026</td>
                          <td>Nov 12, 2025 02:00 PM</td>
                          <td className="recent-job-action">
                            <div className="card-dropdown">
                              <div className="dropdown">
                                <a
                                  className="card-dropdown-icon"
                                  href="javascript:void(0);"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-2-fill"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-eye-line mr-10"></i>View
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editDeals"
                                  >
                                    <i className="ri-edit-2-line mr-10"></i>Edit
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-send-plane-line mr-10"></i>
                                    Send
                                  </a>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <i className="ri-download-line mr-10"></i>
                                    Download
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="table-footer">
                    <div
                      className="dataTables_info"
                      id="dataTableDefault_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 10 of 12 entries
                    </div>

                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="dataTableDefault_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="dataTableDefault_previous"
                        >
                          <a
                            href="#"
                            aria-controls="dataTableDefault"
                            data-dt-idx="0"
                            tabIndex={0}
                            className="page-link"
                          >
                            Previous
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="dataTableDefault"
                            data-dt-idx="1"
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="dataTableDefault"
                            data-dt-idx="2"
                            tabIndex={0}
                            className="page-link"
                          >
                            2
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="dataTableDefault_next"
                        >
                          <a
                            href="#"
                            aria-controls="dataTableDefault"
                            data-dt-idx="3"
                            tabIndex={0}
                            className="page-link"
                          >
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* start edit contract modal */}
          <ContractForm type="edit" />
          {/* end edit contract model */}
        </div>
      </div>
    </div>
  );
};

export default ContractManagement;
