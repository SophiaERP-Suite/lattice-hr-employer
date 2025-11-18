import BuildProcess from "../components/BuildProcess";

const ViewInductionProcess = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Induction Details</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/view-induction">
                        Induction Details
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
                      <a href="/induction">Induction</a>
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
                    <h2 className="mb-15">Frontend Developer Induction</h2>
                    <div className="d-flex align-items-center">
                      <div>
                        <h4 className="mb-5">
                          <span className="badge bg-success me-2">
                            Published
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body pt-15">
                  <div className="d-flex flex-wrap justify-content-between gap-10 mb-4">
                    <div></div>
                    <div className="d-flex align-items-center gap-10">
                      <a
                        href="/create-induction"
                        className="btn btn-outline-primary btn-md"
                      >
                        <i className="ri-edit-2-line"></i> Edit
                      </a>
                      <button className="btn btn-outline-primary btn-md">
                        <i className="ri-close-fill"></i> Unpublish
                      </button>
                    </div>
                  </div>

                  <div className="mb-20">
                    <h4 className="mb-20">Details</h4>
                    <div className="row" style={{ fontSize: "16px" }}>
                      <div className="col-md-6">
                        <p className="mb-0">
                          <strong>Type:</strong> Custom Process
                        </p>
                      </div>

                      <div className="col-md-6">
                        <p className="mb-0">
                          <strong>Last Updated:</strong> Nov 20, 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-15">
                    <h4 className="mb-15"> Description</h4>
                    <p>
                      This induction process ensures the developer understands
                      our UI standards, workflow, and code practices before
                      joining active projects. The candidate will be introduced
                      to our design system, component structure, Git branching
                      rules, and quality expectations.
                    </p>
                  </div>

                  <div className="mb-15 mt-30">
                    <h4 className="mb-15">Uploaded Document:</h4>
                    <p>
                      <a
                        href="#"
                        style={{ fontWeight: "bold", fontSize: "16px" }}
                      >
                        Induction procedure.pdf
                      </a>
                    </p>
                  </div>

                  <div className="mb-15 mt-30">
                    <h4 className="mb-15">Custom Processes:</h4>

                    <p>
                      <BuildProcess view={true} length={3} />
                    </p>
                  </div>

                  <div className="col-12 mt-20">
                    <div className="card height-equal">
                      <div className="card-header justify-between">
                        <h4 className="">Associated Jobs</h4>
                      </div>
                      <div className="card-body pt-15">
                        <ul>
                          <li className="d-flex-between mb-15">
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-100">
                                <img
                                  className="radius-100"
                                  src="/Employer/assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0">Software Developer</h6>
                                <span className="text-muted">
                                  {" "}
                                  <i className="ri-briefcase-4-line"></i> Full
                                  time
                                </span>
                              </div>
                            </div>
                            <div className="text-end">
                              <a
                                href="/job-details"
                                className="btn btn-outline-primary btn-md"
                              >
                                View Job
                              </a>
                            </div>
                          </li>
                          <li className="d-flex-between mb-15">
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-100">
                                <img
                                  className="radius-100"
                                  src="/Employer/assets/images/avatar/avatar-thumb-003.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0">UI/UX Designer</h6>
                                <span className="text-muted">
                                  <i className="ri-briefcase-4-line"></i>{" "}
                                  Contract
                                </span>
                              </div>
                            </div>
                            <div className="text-end">
                              <a
                                href="/job-details"
                                className="btn btn-outline-primary btn-md"
                              >
                                View Job
                              </a>
                            </div>
                          </li>

                          <li className="d-flex-between mb-15">
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-100">
                                <img
                                  className="radius-100"
                                  src="/Employer/assets/images/avatar/avatar-thumb-004.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0">Frontend Engineer</h6>
                                <span className="text-muted">
                                  <i className="ri-briefcase-4-line"></i>{" "}
                                  Temporary
                                </span>
                              </div>
                            </div>
                            <div className="text-end">
                              <a
                                href="/job-details"
                                className="btn btn-outline-primary btn-md"
                              >
                                View Job
                              </a>
                            </div>
                          </li>

                          <li className="d-flex-between mb-15">
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-100">
                                <img
                                  className="radius-100"
                                  src="/Employer/assets/images/avatar/avatar-thumb-005.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0">QA/Test Engineer</h6>
                                <span className="text-muted">
                                  <i className="ri-briefcase-4-line"></i>{" "}
                                  One-off Shift
                                </span>
                              </div>
                            </div>
                            <div className="text-end">
                              <a
                                href="/job-details"
                                className="btn btn-outline-primary btn-md"
                              >
                                View Job
                              </a>
                            </div>
                          </li>

                          <li className="d-flex-between mb-15">
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-100">
                                <img
                                  className="radius-100"
                                  src="/Employer/assets/images/avatar/avatar-thumb-006.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0">Product Designer</h6>
                                <span className="text-muted">
                                  <i className="ri-briefcase-4-line"></i> Part
                                  Time
                                </span>
                              </div>
                            </div>
                            <div className="text-end">
                              <a
                                href="/job-details"
                                className="btn btn-outline-primary btn-md"
                              >
                                View Job
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="text-end" style={{ marginTop: "40px" }}>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Delete Process
                    </button>
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
                          placeholder="Search for candidates"
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
                                    <a href="#">Amina Yusuf</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>UI/UX Designer</td>
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
                            <td>Nov 9, 2025 3:30 PM</td>
                            <td className="recent-job-action">
                              <a href="#" className="btn btn-primary">
                                Send Message
                              </a>
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
                                    <a href="#">Kwame Mensah</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Project Manager</td>
                            <td>
                              <span className="badge bg-label-warning">
                                <i className="ri-time-line"></i> Not started
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
                                    style={{ width: "45%" }}
                                  ></div>
                                </div>
                                <small>45%</small>
                              </div>
                            </td>
                            <td>Nov 11, 2025 9:00 AM</td>
                            <td className="recent-job-action">
                              <a href="#" className="btn btn-primary">
                                Send Message
                              </a>
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
                                    <a href="#">Nia Okafor</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Data Analyst</td>
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
                                    className="progress-bar bg-danger"
                                    style={{ width: "20%" }}
                                  ></div>
                                </div>
                                <small>20%</small>
                              </div>
                            </td>
                            <td>Nov 8, 2025 2:15 PM</td>
                            <td className="recent-job-action">
                              <a href="#" className="btn btn-primary">
                                Send Message
                              </a>
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
                                    <a href="#">Thabo Nkosi</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Marketing Specialist</td>
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
                            <td>Nov 10, 2025 5:00 PM</td>
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
    </div>
  );
};

export default ViewInductionProcess;
