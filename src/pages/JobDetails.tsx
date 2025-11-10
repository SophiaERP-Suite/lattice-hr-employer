const JobDetails = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Job Details</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/job-details">
                        Job Details{" "}
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
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/job-management">
                        Job Management{" "}
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

            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="">
                    <h2 className="mb-15">Senior Frontend Developer (React)</h2>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-big">
                        <img
                          src="/assets/images/company/company-thumb-001.png"
                          alt="Company Logo"
                          className="radius-50"
                        />
                      </div>
                      <div>
                        <h4 className="mb-5">
                          <span className="badge bg-success me-2">Active</span>
                        </h4>
                        <div className="text-muted">
                          <span className="me-3">
                            <i className="ri-map-pin-line"></i> Lagos, Nigeria
                          </span>
                          <span>
                            <i className="ri-briefcase-4-line"></i> Full-time
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body pt-15">
                  <div className="d-flex flex-wrap justify-content-between gap-10 mb-4">
                    <div></div>
                    <div className="d-flex align-items-center gap-10">
                      <button className="btn btn-outline-primary btn-md">
                        <i className="ri-edit-2-line"></i> Edit Job
                      </button>
                      <button className="btn btn-outline-primary btn-md">
                        <i className="ri-close-fill"></i> Close Job
                      </button>
                    </div>
                  </div>

                  <div className="mb-20">
                    <h4 className="mb-20">Job Details</h4>
                    <div className="row" style={{ fontSize: "16px" }}>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Salary:</strong> &#8358;120,000 -
                          &#8358;150,000 per month
                        </p>
                        <p className="mb-5">
                          <strong>Job Type:</strong> Full-time
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Expiry Date:</strong> Nov 20, 2025
                        </p>
                        <p className="mb-0">
                          <strong>Job Status:</strong> Active
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Grade Required:</strong> Mid-level
                        </p>
                        <p className="mb-5">
                          <strong>Location:</strong> Lagos, Nigeria
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Start Date:</strong> Nov 15, 2025
                        </p>
                        <p className="mb-0">
                          <strong>End Date:</strong> Jan 31, 2026
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Shift Start Time:</strong> 09:00 AM
                        </p>
                        <p className="mb-5">
                          <strong>Shift End Time:</strong> 05:00 PM
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Duration:</strong> 8 hours
                        </p>
                        <p className="mb-0">
                          <strong>Shift Type:</strong> Day
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-15">
                    <h4 className="mb-15">Job Description</h4>
                    <p>
                      We are looking for a talented Frontend Developer to join
                      our team. You will be responsible for implementing visual
                      elements that users see and interact with in our web
                      applications.
                    </p>
                  </div>

                  <div className="mb-15">
                    <h5 className="mb-1">Required Skills:</h5>
                    <ul className="list-bullet">
                      <li>HTML5 & CSS3</li>
                      <li>JavaScript (ES6+)</li>
                      <li>React.js or Vue.js</li>
                      <li>Responsive Web Design</li>
                      <li>Version Control with Git</li>
                      <li>Basic UX/UI principles</li>
                    </ul>
                  </div>
                  <div className="mb-15">
                    <h5 className="mb-10">Additional Skills:</h5>
                    <ul className="list-bullet">
                      <li>TypeScript</li>
                      <li>RESTful APIs integration</li>
                      <li>Performance optimization</li>
                    </ul>
                  </div>

                  <div className="mb-15">
                    <h4 className="mb-15">Specific Requirements</h4>
                    <p>
                      The ideal candidate has a strong eye for design, excellent
                      JavaScript skills, and experience with modern frontend
                      frameworks like React, Vue, or Angular.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header justify-between">
                    <h4 className="d-flex-items gap-10">
                      Qualified Candidates
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
                          <option value="">All Locations</option>
                          <option value="lagos">Lagos</option>
                          <option value="abuja">Abuja</option>
                          <option value="port-harcourt">Port Harcourt</option>
                        </select>
                      </div>

                      <div className="dataTables-sorting-control ">
                        <select className="form-select sorting-dropdown">
                          <option value="">Sort By:</option>
                          <option value="date_newest">
                            Date: Newest First
                          </option>
                          <option value="date_oldest">
                            Date: Oldest First
                          </option>
                        </select>
                      </div>
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
                            <th>Location</th>
                            <th>Compliance Status</th>
                            <th>Skills</th>
                            <th>Grade</th>
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
                            <td>Lagos, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>HTML 5, CSS, Javascript</td>
                            <td>Senior level</td>

                            <td className="recent-job-action">
                              <div className="d-flex-items gap-10 align-items-end">
                                <a
                                  className="btn-icon btn-success-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="View"
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
                                <a
                                  className="btn-icon btn-info-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Schedule Interview"
                                >
                                  <i className="ri-checkbox-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
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
                                    <a href="#">James Smith</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Abuja, Nigeria</td>
                            <td>
                              <span className="badge bg-label-success">
                                <i className="ri-check-line"></i> Verified
                              </span>
                            </td>
                            <td>React, Node.js, MongoDB</td>
                            <td>Mid-level</td>
                            <td className="recent-job-action">
                              <div className="d-flex-items gap-10 align-items-end">
                                <a
                                  className="btn-icon btn-success-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="View"
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
                                <a
                                  className="btn-icon btn-info-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Schedule Interview"
                                >
                                  <i className="ri-checkbox-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>

                          <tr>
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
                                    <a href="#">Amaka Okafor</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Port Harcourt, Nigeria</td>
                            <td>
                              <span className="badge bg-label-warning">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Vue.js, HTML5, CSS3</td>
                            <td>Junior</td>
                            <td className="recent-job-action">
                              <div className="d-flex-items gap-10 align-items-end">
                                <a
                                  className="btn-icon btn-success-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="View"
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
                                <a
                                  className="btn-icon btn-info-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Schedule Interview"
                                >
                                  <i className="ri-checkbox-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>

                          <tr>
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
                                    <a href="#">Chinedu Eze</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Kano, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Angular, TypeScript, Sass</td>
                            <td>Mid-level</td>
                            <td className="recent-job-action">
                              <div className="d-flex-items gap-10 align-items-end">
                                <a
                                  className="btn-icon btn-success-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="View"
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
                                <a
                                  className="btn-icon btn-info-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Schedule Interview"
                                >
                                  <i className="ri-checkbox-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>

                          <tr>
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
                                    <a href="#">Fatima Musa</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Ibadan, Nigeria</td>
                            <td>
                              <span className="badge bg-label-success">
                                <i className="ri-check-line"></i> Verified
                              </span>
                            </td>
                            <td>React, Next.js, CSS</td>
                            <td>Senior</td>
                            <td className="recent-job-action">
                              <div className="d-flex-items gap-10 align-items-end">
                                <a
                                  className="btn-icon btn-success-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="View"
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
                                <a
                                  className="btn-icon btn-info-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Schedule Interview"
                                >
                                  <i className="ri-checkbox-line"></i>
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

              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header justify-between">
                    <h4 className="d-flex-items gap-10">Applied Candidates</h4>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: "2rem",
                      }}
                    >
                      <div className="dataTables-sorting-control ">
                        <select className="form-select sorting-dropdown">
                          <option value="">All Locations</option>
                          <option value="lagos">Lagos</option>
                          <option value="abuja">Abuja</option>
                          <option value="port-harcourt">Port Harcourt</option>
                        </select>
                      </div>

                      <div className="dataTables-sorting-control ">
                        <select className="form-select sorting-dropdown">
                          <option value="">Sort By:</option>
                          <option value="date_newest">
                            Date: Newest First
                          </option>
                          <option value="date_oldest">
                            Date: Oldest First
                          </option>
                        </select>
                      </div>
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
                            <th>Location</th>
                            <th>Compliance Status</th>
                            <th>Date Applied</th>
                            <th>Skills</th>
                            <th>Grade</th>
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
                            <td>Lagos, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Nov 9, 2025</td>
                            <td>HTML 5, CSS, Javascript</td>
                            <td>Senior level</td>

                            <td className="recent-job-action">
                              <div className="d-flex-items gap-10 align-items-end">
                                <a
                                  className="btn-icon btn-success-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="View"
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
                                <a
                                  className="btn-icon btn-info-light"
                                  href="javascript:void(0);"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Schedule Interview"
                                >
                                  <i className="ri-checkbox-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-danger-light"
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  data-bs-title="Delete"
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
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
                                    <a href="#">James Smith</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Abuja, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Nov 8, 2025</td>
                            <td>React, Node.js, MongoDB</td>
                            <td>Mid-level</td>
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
                                <a className="btn-icon btn-info-light" href="#">
                                  <i className="ri-checkbox-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-danger-light"
                                  href="#"
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>

                          <tr>
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
                                    <a href="#">Mary Williams</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Kano, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Nov 7, 2025</td>
                            <td>Vue.js, JavaScript, CSS</td>
                            <td>Junior level</td>
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
                                <a className="btn-icon btn-info-light" href="#">
                                  <i className="ri-checkbox-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-danger-light"
                                  href="#"
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>

                          <tr>
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
                                    <a href="#">Michael Brown</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Port Harcourt, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Nov 6, 2025</td>
                            <td>Angular, TypeScript, SCSS</td>
                            <td>Mid-level</td>
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
                                <a className="btn-icon btn-info-light" href="#">
                                  <i className="ri-checkbox-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-danger-light"
                                  href="#"
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>

                          <tr>
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
                                    <a href="#">Linda Davis</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Ibadan, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Nov 5, 2025</td>
                            <td>HTML, CSS, React</td>
                            <td>Senior level</td>
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
                                <a className="btn-icon btn-info-light" href="#">
                                  <i className="ri-checkbox-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-danger-light"
                                  href="#"
                                >
                                  <i className="ri-delete-bin-line"></i>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
