const Induction = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Induction</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/induction">
                        Induction{" "}
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
                        Total Induction Processes
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
                        Published Inductions
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
                        Draft Inductions
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
                        Assigned Inductions
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
                  <h4 className="d-flex-items gap-10">Induction Processes</h4>
                  <div className="d-flex flex-wrap gap-15">
                    <a href="/create-induction" className="btn btn-primary">
                      Create New Process
                    </a>

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
                      <option value="">All Types</option>
                      <option value="custom">Custom Process</option>
                      <option value="documents">Uploaded Document</option>
                    </select>

                    <select className="form-select">
                      <option value="">All Status</option>
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>

                <div className="job-search-heading">
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
                          <th>Title</th>
                          <th>Type</th>
                          <th>Assigned To</th>
                          <th>Status</th>
                          <th>Last Updated</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Factory Safety Induction</td>
                          <td>Custom Process</td>
                          <td>Machine Operator</td>
                          <td>
                            <span className="badge bg-label-success">
                              Published
                            </span>
                          </td>
                          <td>Oct 21, 2025</td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="/view-induction"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <button
                                className="btn-icon btn-info-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeEdit"
                              >
                                <i className="ri-edit-line"></i>
                              </button>
                              <button
                                className="btn-icon btn-warning-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeEdit"
                              >
                                <i className="ri-article-line"></i>
                              </button>
                              <button
                                className="btn-icon btn-danger-light removeRow"
                                type="button"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Healthcare Compliance Onboarding</td>
                          <td>Standard Template</td>
                          <td>Registered Nurse</td>
                          <td>
                            <span className="badge bg-label-warning">
                              Draft
                            </span>
                          </td>
                          <td>Sep 05, 2025</td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <button
                                className="btn-icon btn-info-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeEdit"
                              >
                                <i className="ri-edit-line"></i>
                              </button>
                              <button
                                className="btn-icon btn-warning-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeEdit"
                              >
                                <i className="ri-article-line"></i>
                              </button>
                              <button
                                className="btn-icon btn-danger-light removeRow"
                                type="button"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Construction Site Briefing</td>
                          <td>Custom Process</td>
                          <td>Site Engineer</td>
                          <td>
                            <span className="badge bg-label-warning">
                              Draft
                            </span>
                          </td>
                          <td>Nov 12, 2025</td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <button
                                className="btn-icon btn-info-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeEdit"
                              >
                                <i className="ri-edit-line"></i>
                              </button>
                              <button
                                className="btn-icon btn-warning-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeEdit"
                              >
                                <i className="ri-article-line"></i>
                              </button>
                              <button
                                className="btn-icon btn-danger-light removeRow"
                                type="button"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Retail Store Orientation</td>
                          <td>Standard Template</td>
                          <td>Sales Representative</td>
                          <td>
                            <span className="badge bg-label-success">
                              Published
                            </span>
                          </td>
                          <td>Aug 29, 2025</td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <button
                                className="btn-icon btn-info-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeEdit"
                              >
                                <i className="ri-edit-line"></i>
                              </button>
                              <button
                                className="btn-icon btn-warning-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeEdit"
                              >
                                <i className="ri-article-line"></i>
                              </button>
                              <button
                                className="btn-icon btn-danger-light removeRow"
                                type="button"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </button>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Logistics Driver Safety Training</td>
                          <td>Custom Process</td>
                          <td>Delivery Driver</td>
                          <td>
                            <span className="badge bg-label-warning">
                              Draft
                            </span>
                          </td>
                          <td>Jul 14, 2025</td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <button
                                className="btn-icon btn-info-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeEdit"
                              >
                                <i className="ri-edit-line"></i>
                              </button>
                              <button
                                className="btn-icon btn-warning-light"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#employeeEdit"
                              >
                                <i className="ri-article-line"></i>
                              </button>
                              <button
                                className="btn-icon btn-danger-light removeRow"
                                type="button"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </button>
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

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="d-flex-items gap-10">Candidates Status</h4>

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
                    {/* Filter by Candidate Name */}

                    <select id="filterJob" className="form-select">
                      <option value="">All Jobs</option>
                      <option value="softwareDeveloper">
                        Software Developer
                      </option>
                      <option value="frontendDeveloper">
                        Frontend Developer
                      </option>
                      <option value="backendDeveloper">
                        Backend Developer
                      </option>
                      <option value="itSupport">IT Support Technician</option>
                    </select>

                    <select id="filterInduction" className="form-select">
                      <option value="">All Inductions</option>
                      <option value="companyPolicies">Company Policies</option>
                      <option value="safetyTraining">Safety Training</option>
                      <option value="codeOfConduct">Code of Conduct</option>
                    </select>

                    <select id="filterStatus" className="form-select">
                      <option value="">All Statuses</option>
                      <option value="notStarted">Not Started</option>
                      <option value="inProgress">In Progress</option>
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
                          <th>Percentage Completed</th>
                          <th>Last Modified</th>
                          <th className="recent-job-action">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-001.webp"
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
                            <a href="#" className="btn btn-primary">
                              Send Message
                            </a>
                          </td>
                        </tr>

                        <tr>
                          {" "}
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="#">Chinonso Okeke</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Frontend Onboarding</td>
                          <td>Software Developer</td>
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
                          <td>Nov 8, 2025 03:00 PM</td>
                          <td className="recent-job-action">
                            <a href="#" className="btn btn-primary">
                              Send Message
                            </a>
                          </td>
                        </tr>

                        <tr>
                          {" "}
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-003.webp"
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
                                  style={{ width: "45%" }}
                                ></div>
                              </div>
                              <small>45%</small>
                            </div>
                          </td>
                          <td>Nov 9, 2025 09:30 AM</td>
                          <td className="recent-job-action">
                            <a href="#" className="btn btn-primary">
                              Send Message
                            </a>
                          </td>
                        </tr>

                        <tr>
                          {" "}
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-004.webp"
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
                          <td>Frontend Onboarding</td>
                          <td>Software Developer</td>
                          <td>
                            <span className="badge bg-label-warning">
                              <i className="ri-alert-line"></i> Not Started
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
                                  style={{ width: "0%" }}
                                ></div>
                              </div>
                              <small>0%</small>
                            </div>
                          </td>
                          <td>Nov 11, 2025 10:00 AM</td>
                          <td className="recent-job-action">
                            <a href="#" className="btn btn-primary">
                              Send Message
                            </a>
                          </td>
                        </tr>

                        <tr>
                          {" "}
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-005.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="#">Fatou Ndiaye</a>
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
                                  style={{ width: "75%" }}
                                ></div>
                              </div>
                              <small>75%</small>
                            </div>
                          </td>
                          <td>Nov 10, 2025 01:15 PM</td>
                          <td className="recent-job-action">
                            <a href="#" className="btn btn-primary">
                              Send Message
                            </a>
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
        </div>
      </div>
    </div>
  );
};

export default Induction;
