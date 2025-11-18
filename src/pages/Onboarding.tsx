const Onboarding = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Onboarding</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/onboarding">
                        Onboarding
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
                      </a>
                    </li>

                    <li className="breadcrumb-item">
                      <a href="/dashboard">Home</a>
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
                        Total Onboarded
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
                        Candidates In Progress
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
                        Pending Induction
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
                        Attendance Ready
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
                  <h4 className="d-flex-items gap-10">
                    Candidate Onboarding Status
                  </h4>

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
                    {/* Filter by Job Title */}
                    <select
                      className="form-select"
                      aria-label="Filter by Job Title"
                    >
                      <option value="">All Job Titles</option>
                      <option value="software-developer">
                        Software Developer
                      </option>
                      <option value="frontend-developer">
                        Frontend Developer
                      </option>
                      <option value="backend-developer">
                        Backend Developer
                      </option>
                      <option value="ui-ux-designer">UI/UX Designer</option>
                      <option value="qa-engineer">QA Engineer</option>
                    </select>

                    {/* Filter by Onboarding Status */}
                    <select
                      className="form-select"
                      aria-label="Filter by Onboarding Status"
                    >
                      <option value="">All Status</option>
                      <option value="not-started">Not Started</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
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
                          <th>Induction Process</th>
                          <th>Job Title</th>
                          <th> Status</th>
                          <th>Progress</th>
                          <th>Last Activity</th>
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
                          <td>Frontend Basics</td>
                          <td>Frontend Developer</td>
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
                          <td>Nov 5, 2025 09:00 AM</td>
                          <td className="recent-job-action">
                            <div className="d-flex-items gap-10 align-items-end">
                              <a
                                className="btn-icon btn-success-light"
                                href="javascript:void(0);"
                                data-bs-placement="top"
                                data-bs-title="View"
                                data-bs-toggle="modal"
                                data-bs-target="#addNewEmployee"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-primary-light"
                                href="#"
                              >
                                <i className="ri-send-plane-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/Employer/assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="#">Sarah Johnson</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Frontend Onboarding</td>

                          <td>Software Developer</td>
                          <td>
                            <span className="badge bg-label-primary">
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
                                  className="progress-bar bg-info"
                                  style={{ width: "65%" }}
                                ></div>
                              </div>
                              <small>65%</small>
                            </div>
                          </td>
                          <td>Nov 10, 2025 11:00 AM</td>
                          <td className="recent-job-action">
                            <div className="d-flex-items gap-10 align-items-end">
                              <a
                                className="btn-icon btn-success-light"
                                href="javascript:void(0);"
                                data-bs-placement="top"
                                data-bs-title="View"
                                data-bs-toggle="modal"
                                data-bs-target="#addNewEmployee"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-primary-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Track Response"
                              >
                                <i className="ri-send-plane-line"></i>
                              </a>
                            </div>
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
                                  <a href="#">Amina Yusuf</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>React Advanced</td>
                          <td>Frontend Developer</td>
                          <td>
                            <span className="badge bg-label-primary">
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
                                  className="progress-bar bg-info"
                                  style={{ width: "55%" }}
                                ></div>
                              </div>
                              <small>55%</small>
                            </div>
                          </td>
                          <td>Nov 8, 2025 02:30 PM</td>
                          <td className="recent-job-action">
                            <div className="d-flex-items gap-10 align-items-end">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-primary-light"
                                href="#"
                              >
                                <i className="ri-send-plane-line"></i>
                              </a>
                            </div>
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
                                  <a href="#">Kwame Mensah</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Node.js Backend</td>
                          <td>Backend Developer</td>
                          <td>
                            <span className="badge bg-label-warning">
                              <i className="ri-alert-line"></i> Pending
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
                                  style={{ width: "20%" }}
                                ></div>
                              </div>
                              <small>20%</small>
                            </div>
                          </td>
                          <td>Nov 9, 2025 10:15 AM</td>
                          <td className="recent-job-action">
                            <div className="d-flex-items gap-10 align-items-end">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-primary-light"
                                href="#"
                              >
                                <i className="ri-send-plane-line"></i>
                              </a>
                            </div>
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
                                  <a href="#">Thandiwe Ndlovu</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Fullstack Integration</td>
                          <td>Fullstack Developer</td>
                          <td>
                            <span className="badge bg-label-primary">
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
                                  className="progress-bar bg-info"
                                  style={{ width: "65%" }}
                                ></div>
                              </div>
                              <small>65%</small>
                            </div>
                          </td>
                          <td>Nov 10, 2025 03:45 PM</td>
                          <td className="recent-job-action">
                            <div className="d-flex-items gap-10 align-items-end">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-primary-light"
                                href="#"
                              >
                                <i className="ri-send-plane-line"></i>
                              </a>
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

          {/* start Onboarding details modal */}
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
                    Onboarding Details
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
                          <h6>Last Activity:</h6>
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
                      <label htmlFor="grade" className="form-label">
                        Job Type
                      </label>
                      <input
                        type="text"
                        className="form-control fw-semibold"
                        id="role"
                        value={"Fulltime"}
                        disabled
                      />
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="role" className="form-label">
                        Induction Title
                      </label>
                      <input
                        type="text"
                        className="form-control fw-semibold"
                        id="role"
                        value={"Frontend Onboarding"}
                        disabled
                      />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="grade" className="form-label">
                        Date Assigned
                      </label>
                      <input
                        type="text"
                        className="form-control fw-semibold"
                        id="role"
                        value={"10/11/2025"}
                        disabled
                      />
                    </div>

                    <div className="col-12 mt-10">
                      <label htmlFor="grade" className="form-label fw-semibold">
                        Onboarding Progress
                      </label>

                      <div className="d-flex align-items-center">
                        <div
                          className="progress flex-grow-1 mr-10"
                          style={{ height: "10px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                        <small>60%</small>
                      </div>
                    </div>

                    <div className="col-12 mt-10">
                      <label htmlFor="grade" className="form-label fw-semibold">
                        Onboarding Tasks
                      </label>

                      <div>
                        <ul className="onboarding-tasks-list">
                          <li>
                            <i className="ri-checkbox-circle-fill"></i>Complete
                            Personal Information
                          </li>
                          <li>
                            <i className="ri-checkbox-circle-fill"></i>Read
                            Company Policies
                          </li>
                          <li>
                            <i className="ri-checkbox-circle-fill"></i>Setup
                            Work Tools & Accounts
                          </li>
                          <li className="in-progress">
                            <i className="ri-indeterminate-circle-fill"></i>
                            Attend Safety Training
                          </li>
                          <li className="in-progress">
                            <i className="ri-indeterminate-circle-fill"></i>
                            Introduction to Team & Project
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <a href="/view-induction" className="btn btn-danger">
                    View Induction Steps
                  </a>
                  <button type="button" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end  Onboarding details modal */}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
