import { NavLink } from "react-router-dom";

const WorkAttendance = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Work and Attendance</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <NavLink to="/work-and-attendance">
                        Work and Attendance
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
                        Active Candidates
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
                        Pending Verification
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
                        Total Hours Logged
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
                        Flagged Records
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
                  <h4 className="d-flex-items gap-10">Timesheets</h4>

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
                          <th>Candidate</th>
                          <th>Job Title</th>
                          <th>Date</th>
                          <th>Clock-In</th>
                          <th>Clock-Out</th>
                          <th>Status</th>
                          <th>Method</th>
                          <th className="recent-job-action">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
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
                          <td>Nov 12, 2025</td>

                          <td>08:00 AM</td>
                          <td>05:30 PM</td>

                          <td>
                            <span className="badge bg-label-success">
                              <i className="ri-check-line"></i>Verified
                            </span>
                          </td>

                          <td>QR Code</td>

                          <td className="recent-job-action">
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#addNewEmployee"
                            >
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path>
                              </svg>
                              Edit
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M17 2C17.5523 2 18 2.44772 18 3V7H21C21.5523 7 22 7.44772 22 8V18C22 18.5523 21.5523 19 21 19H18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V19H3C2.44772 19 2 18.5523 2 18V8C2 7.44772 2.44772 7 3 7H6V3C6 2.44772 6.44772 2 7 2H17ZM16 17H8V20H16V17ZM20 9H4V17H6V16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16V17H20V9ZM8 10V12H5V10H8ZM16 4H8V7H16V4Z"></path>
                              </svg>
                              Print
                            </button>
                          </td>
                        </tr>

                        <tr>
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
                          <td>Backend Developer</td>
                          <td>Nov 12, 2025</td>
                          <td>09:00 AM</td>
                          <td>06:00 PM</td>
                          <td>
                            <span className="badge bg-label-warning">
                              <i className="ri-time-line"></i> Pending
                            </span>
                          </td>
                          <td>Geo-fencing</td>
                          <td className="recent-job-action">
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#addNewEmployee"
                            >
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path>
                              </svg>
                              Edit
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M17 2C17.5523 2 18 2.44772 18 3V7H21C21.5523 7 22 7.44772 22 8V18C22 18.5523 21.5523 19 21 19H18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V19H3C2.44772 19 2 18.5523 2 18V8C2 7.44772 2.44772 7 3 7H6V3C6 2.44772 6.44772 2 7 2H17ZM16 17H8V20H16V17ZM20 9H4V17H6V16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16V17H20V9ZM8 10V12H5V10H8ZM16 4H8V7H16V4Z"></path>
                              </svg>
                              Print
                            </button>
                          </td>
                        </tr>

                        <tr>
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
                                  <a href="#">Tunde Adewale</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>UI/UX Designer</td>
                          <td>Nov 12, 2025</td>
                          <td>07:30 AM</td>
                          <td>04:00 PM</td>
                          <td>
                            <span className="badge bg-label-success">
                              <i className="ri-check-line"></i> Verified
                            </span>
                          </td>
                          <td>QR Code</td>
                          <td className="recent-job-action">
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#addNewEmployee"
                            >
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path>
                              </svg>
                              Edit
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M17 2C17.5523 2 18 2.44772 18 3V7H21C21.5523 7 22 7.44772 22 8V18C22 18.5523 21.5523 19 21 19H18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V19H3C2.44772 19 2 18.5523 2 18V8C2 7.44772 2.44772 7 3 7H6V3C6 2.44772 6.44772 2 7 2H17ZM16 17H8V20H16V17ZM20 9H4V17H6V16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16V17H20V9ZM8 10V12H5V10H8ZM16 4H8V7H16V4Z"></path>
                              </svg>
                              Print
                            </button>
                          </td>
                        </tr>

                        <tr>
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
                                  <a href="#">Kwame Mensah</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Project Manager</td>
                          <td>Nov 12, 2025</td>
                          <td>08:30 AM</td>
                          <td>05:00 PM</td>
                          <td>
                            <span className="badge bg-label-danger">
                              <i className="ri-close-line"></i> Flagged
                            </span>
                          </td>
                          <td>OTP PIN</td>
                          <td className="recent-job-action">
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#addNewEmployee"
                            >
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path>
                              </svg>
                              Edit
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M17 2C17.5523 2 18 2.44772 18 3V7H21C21.5523 7 22 7.44772 22 8V18C22 18.5523 21.5523 19 21 19H18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V19H3C2.44772 19 2 18.5523 2 18V8C2 7.44772 2.44772 7 3 7H6V3C6 2.44772 6.44772 2 7 2H17ZM16 17H8V20H16V17ZM20 9H4V17H6V16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16V17H20V9ZM8 10V12H5V10H8ZM16 4H8V7H16V4Z"></path>
                              </svg>
                              Print
                            </button>
                          </td>
                        </tr>

                        <tr>
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
                                  <a href="#">Zanele Khumalo</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Data Analyst</td>
                          <td>Nov 12, 2025</td>
                          <td>09:15 AM</td>
                          <td>05:15 PM</td>
                          <td>
                            <span className="badge bg-label-success">
                              <i className="ri-check-line"></i> Verified
                            </span>
                          </td>
                          <td>QR Code</td>
                          <td className="recent-job-action">
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#addNewEmployee"
                            >
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path>
                              </svg>
                              Edit
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M17 2C17.5523 2 18 2.44772 18 3V7H21C21.5523 7 22 7.44772 22 8V18C22 18.5523 21.5523 19 21 19H18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V19H3C2.44772 19 2 18.5523 2 18V8C2 7.44772 2.44772 7 3 7H6V3C6 2.44772 6.44772 2 7 2H17ZM16 17H8V20H16V17ZM20 9H4V17H6V16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16V17H20V9ZM8 10V12H5V10H8ZM16 4H8V7H16V4Z"></path>
                              </svg>
                              Print
                            </button>
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

          {/* start timesheet details modal */}
          <div
            className="modal fade"
            id="addNewEmployee"
            tabIndex={-1}
            aria-labelledby="addNewEmployeeLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-16" id="addNewEmployeeLabel">
                    Edit Timesheet
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row" style={{ rowGap: "20px" }}>
                    <div className="col-xl-12">
                      <div className="text-center">
                        <div className="avatar avatar-xxl radius-100">
                          <img
                            src="/Employer/assets/images/avatar/avatar-thumb-001.webp"
                            alt="image not found"
                            id="profileImage"
                            className="radius-100"
                          />
                        </div>
                        <span className="d-block fw-5 text-muted">
                          Chinonso Okafor
                        </span>

                        <div className="mt-10 mb-5">
                          <h6>Date Created:</h6>
                          <span>Nov 11, 2025 11:00 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <label htmlFor="role" className="form-label">
                        Job Title
                      </label>
                      <input
                        type="text"
                        className="form-control fw-semibold flatpickr-input"
                        id="role"
                        value={"Frontend Developer"}
                        disabled
                      />
                    </div>

                    <div className="col-xl-12">
                      <label htmlFor="role" className="form-label">
                        Clock-in Time
                      </label>
                      <input
                        type="time"
                        className="form-control fw-semibold flatpickr-input"
                        id="role"
                        value={"08:00"}
                        disabled
                      />
                    </div>

                    <div className="col-xl-12">
                      <label htmlFor="role" className="form-label">
                        Clock-out Time
                      </label>
                      <input
                        type="time"
                        className="form-control fw-semibold flatpickr-input"
                        id="role"
                        value={"17:00"}
                        disabled
                      />
                    </div>

                    <div className="col-xl-12">
                      <label htmlFor="role" className="form-label">
                        Attendance Method
                      </label>
                      <input
                        type="text"
                        className="form-control fw-semibold flatpickr-input"
                        id="role"
                        value={"QR Code"}
                        disabled
                      />
                    </div>

                    <div className="col-xl-12">
                      <label htmlFor="role" className="form-label">
                        Candidate's Comment
                      </label>
                      <textarea
                        className="form-control fw-semibold flatpickr-input"
                        disabled
                        rows={2}
                      ></textarea>
                    </div>

                    <div className="col-xl-12 mt-10">
                      <h5 className="mb-20">Rate Candidate</h5>

                      <div className="row g-0">
                        <div className="col-5">
                          <input
                            type="number"
                            className="form-control fw-semibold flatpickr-input"
                            id="rating"
                            max={5}
                            min={1}
                          />
                        </div>
                        <div className="col-2">
                          <b className="fs-20">&nbsp; / &nbsp;</b>
                        </div>
                        <div className="col-5">
                          <input
                            type="number"
                            className="form-control fw-semibold flatpickr-input"
                            value={5}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-30 mb-10">
                      <button type="button" className="btn btn-primary w-100">
                        Print Timesheet
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-danger">Flag</button>
                  <button type="button" className="btn btn-primary">
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end timesheet details modal */}
        </div>
      </div>
    </div>
  );
};

export default WorkAttendance;
