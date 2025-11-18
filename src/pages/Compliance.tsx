import { NavLink } from "react-router-dom";

const Compliance = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Compliance</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <NavLink to="/compliance">
                        Compliance
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
                        Total Candidates
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
                      <span className="d-block fs-16 mb-5">Compliant</span>
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
                        Pending Compliance
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
                      <span className="d-block fs-16 mb-5">Non-Compliant</span>
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
                  <h4 className="d-flex-items gap-10">Compliance Status</h4>

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
                      <option value="">Filter by Job Title</option>
                      <option value="software-dev">Software Developer</option>
                      <option value="frontend-dev">Frontend Developer</option>
                      <option value="it-support">IT Support Technician</option>
                    </select>

                    <select className="form-select">
                      <option value="">Filter by Compliance Status</option>
                      <option value="compliant">Compliant</option>
                      <option value="pending">Pending</option>
                      <option value="non-compliant">Non-Compliant</option>
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
                          <th>Location</th>
                          <th>Compliance Status</th>
                          <th>Progress</th>
                          <th>Last Updated</th>
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
                          <td>Lagos, Nigeria</td>
                          <td>
                            <span className="badge bg-label-success">
                              <i className="ri-check-line"></i> Completed
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div
                                className="progress flex-grow-1 mr-10"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                              <small>100%</small>
                            </div>
                          </td>
                          <td>Nov 11, 2025 09:00 AM</td>

                          <td className="recent-job-action">
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              data-bs-toggle="modal"
                              data-bs-target="#addNewEmployee"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-eye me-1"
                                aria-hidden="true"
                              >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              View
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <svg
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
                              </svg>
                              Download
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
                                  <a href="#">Adebayo Oluwaseun</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Backend Developer</td>
                          <td>Abuja, Nigeria</td>
                          <td>
                            <span className="badge bg-label-warning">
                              <i className="ri-time-line"></i> In Progress
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div
                                className="progress flex-grow-1 mr-10"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "70%" }}
                                ></div>
                              </div>
                              <small>70%</small>
                            </div>
                          </td>
                          <td>Nov 12, 2025 10:30 AM</td>
                          <td className="recent-job-action">
                            <button className="btn btn-sm btn-outline-primary me-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-eye me-1"
                                aria-hidden="true"
                              >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              View
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <svg
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
                              </svg>
                              Download
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
                                  <a href="#">Nneka Chukwuma</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>UI/UX Designer</td>
                          <td>Port Harcourt, Nigeria</td>
                          <td>
                            <span className="badge bg-label-primary">
                              <i className="ri-time-line"></i> Pending
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div
                                className="progress flex-grow-1 mr-10"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "20%" }}
                                ></div>
                              </div>
                              <small>20%</small>
                            </div>
                          </td>
                          <td>Nov 13, 2025 09:15 AM</td>
                          <td className="recent-job-action">
                            <button className="btn btn-sm btn-outline-primary me-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-eye me-1"
                                aria-hidden="true"
                              >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              View
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <svg
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
                              </svg>
                              Download
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
                          <td>DevOps Engineer</td>
                          <td>Accra, Ghana</td>
                          <td>
                            <span className="badge bg-label-success">
                              <i className="ri-check-line"></i> Completed
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div
                                className="progress flex-grow-1 mr-10"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                              <small>100%</small>
                            </div>
                          </td>
                          <td>Nov 10, 2025 03:45 PM</td>
                          <td className="recent-job-action">
                            <button className="btn btn-sm btn-outline-primary me-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-eye me-1"
                                aria-hidden="true"
                              >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              View
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <svg
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
                              </svg>
                              Download
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
                                  <a href="#">Fatou Diop</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>QA Engineer</td>
                          <td>Dakar, Senegal</td>
                          <td>
                            <span className="badge bg-label-warning">
                              <i className="ri-time-line"></i> In Progress
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div
                                className="progress flex-grow-1 mr-10"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "50%" }}
                                ></div>
                              </div>
                              <small>50%</small>
                            </div>
                          </td>
                          <td>Nov 14, 2025 12:00 PM</td>
                          <td className="recent-job-action">
                            <button className="btn btn-sm btn-outline-primary me-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-eye me-1"
                                aria-hidden="true"
                              >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              View
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <svg
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
                              </svg>
                              Download
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

          {/* start compliance details modal */}
          <div
            className="modal fade"
            id="addNewEmployee"
            tabIndex={-1}
            aria-labelledby="addNewEmployeeLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-16" id="addNewEmployeeLabel">
                    Compliance Details
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
                          <h6>Last Updated:</h6>
                          <span>Nov 11, 2025 11:00 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="role" className="form-label">
                        Job Title
                      </label>
                      <input
                        type="text"
                        className="form-control fw-semibold"
                        id="role"
                        value={"Frontend Developer"}
                        disabled
                      />
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="role" className="form-label">
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-control fw-semibold"
                        id="role"
                        value={"Lagos, Nigeria"}
                        disabled
                      />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="grade" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control fw-semibold"
                        id="role"
                        value={"nonsookafor5@gmail.com"}
                        disabled
                      />
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="grade" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control fw-semibold"
                        id="role"
                        value={"+234 567 890 9990"}
                        disabled
                      />
                    </div>

                    <div className="col-12 mt-10">
                      <label htmlFor="grade" className="form-label fw-semibold">
                        Compliance Progress -{" "}
                        <span className="badge bg-label-success">
                          <i className="ri-check-line"></i> Completed
                        </span>
                      </label>

                      <div className="d-flex align-items-center">
                        <div
                          className="progress flex-grow-1 mr-10"
                          style={{ height: "10px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                        <small>100%</small>
                      </div>
                    </div>

                    <div className="col-12 mt-10">
                      <label htmlFor="grade" className="form-label fw-semibold">
                        Compliance Requirements
                      </label>

                      <div>
                        <ul className="onboarding-tasks-list">
                          <li>
                            <i className="ri-checkbox-circle-fill"></i>ID
                            verification
                          </li>
                          <li>
                            <i className="ri-checkbox-circle-fill"></i>
                            Certificates uploaded/verified
                          </li>
                          <li>
                            <i className="ri-checkbox-circle-fill"></i>
                            Background check status
                          </li>
                          <li>
                            <i className="ri-checkbox-circle-fill"></i>
                            Any mandatory documents or tasks
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-danger">Flag</button>
                  <button type="button" className="btn btn-primary">
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end  compliance details modal */}
        </div>
      </div>
    </div>
  );
};

export default Compliance;
