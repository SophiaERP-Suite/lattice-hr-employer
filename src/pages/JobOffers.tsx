const JobOffers = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Job Offers</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/job-offers">
                        Job Offers{" "}
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

            <>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-warning-transparent text-warning">
                      <i className="ri-briefcase-4-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">Total Offers</span>
                      <h2 className="mb-5">45</h2>
                      <span className="text-success">
                        +2%
                        <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                      </span>
                      <span className="fs-12 text-muted ml-5">
                        vs. last week
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-slateblue-transparent text-slateblue">
                      <i className="ri-hand-coin-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Offer Acceptance
                      </span>
                      <h2 className="mb-5">65%</h2>
                      <span className="text-success">
                        +5%
                        <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                      </span>
                      <span className="fs-12 text-muted ml-5">
                        vs. last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-teal-transparent text-teal">
                      <i className="ri-timer-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">Pending Offers</span>
                      <h2 className="mb-5">13</h2>
                      <span className="text-success">
                        -10%
                        <i className="ri-arrow-down-line ml-5 d-inline-block"></i>
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
                  <h4 className="d-flex-items gap-10">Job Offers</h4>
                  <div className="d-flex flex-wrap gap-15">
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
                    {/* Job Title Filter */}
                    <div>
                      <select id="jobTitleFilter" className="form-select">
                        <option value="">Select Job Title</option>
                        <option value="frontend-dev">Frontend Developer</option>
                        <option value="backend-dev">Backend Developer</option>
                        <option value="fullstack-dev">
                          Fullstack Developer
                        </option>
                        <option value="designer">UI/UX Designer</option>
                        <option value="qa-engineer">QA Engineer</option>
                      </select>
                    </div>

                    {/* Candidate Name Filter */}
                    <div>
                      <input
                        type="text"
                        id="candidateNameFilter"
                        className="form-control"
                        placeholder="Search Candidate"
                        list="candidateNames"
                      />
                      <datalist id="candidateNames">
                        <option value="Sarah Johnson" />
                        <option value="John Doe" />
                        <option value="Alice Smith" />
                        <option value="Michael Brown" />
                        <option value="Chinedu Okafor" />
                      </datalist>
                    </div>

                    {/* Offer Status Filter */}
                    <div>
                      <select id="offerStatusFilter" className="form-select">
                        <option value="">Select Status</option>
                        <option value="pending">Pending</option>
                        <option value="accepted">Accepted</option>
                        <option value="declined">Declined</option>
                        <option value="countered">Countered</option>
                      </select>
                    </div>
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
                          <th>Type</th>
                          <th>Location</th>
                          <th>Offer Date</th>
                          <th>Status</th>
                          <th>Rates offered</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
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
                          <td>IT Support Technician</td>
                          <td>Temporary</td>
                          <td>Lagos, Nigeria</td>
                          <td>Nov 10, 2025</td>
                          <td>
                            <span className="badge bg-label-primary">
                              <i className="ri-time-line"></i> Pending
                            </span>
                          </td>
                          <td>&#8358;50,000 - &#8358;70,000</td>

                          <td className="offer-actions">
                            <div className="d-flex-items gap-10 align-items-end">
                              {/* Edit Offer */}
                              <a
                                className="btn-icon btn-warning-light"
                                href="javascript:void(0);"
                                data-bs-placement="top"
                                data-bs-title="Edit Offer"
                                data-bs-toggle="modal"
                                data-bs-target="#addNewEmployee"
                              >
                                <i className="ri-eye-line"></i>
                              </a>

                              {/* Send Contract */}
                              <a
                                className="btn-icon btn-success-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Send Contract"
                              >
                                <i className="ri-file-text-line"></i>
                              </a>

                              {/* Delete Offer */}
                              <a
                                className="btn-icon btn-danger-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete Offer"
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
                                  <a href="#">Chinwe Okafor</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Frontend Developer</td>
                          <td>Permanent</td>
                          <td>Abuja, Nigeria</td>
                          <td>Nov 11, 2025</td>
                          <td>
                            <span className="badge bg-label-success">
                              <i className="ri-checkbox-line"></i> Accepted
                            </span>
                          </td>
                          <td>&#8358;120,000 - &#8358;150,000</td>

                          <td className="offer-actions">
                            <div className="d-flex-items gap-10 align-items-end">
                              <a
                                className="btn-icon btn-warning-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit Offer"
                              >
                                <i className="ri-eye-line"></i>
                              </a>{" "}
                              <a
                                className="btn-icon btn-success-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Send Contract"
                              >
                                <i className="ri-file-text-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-danger-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete Offer"
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
                                  <a href="#">Emeka Obi</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Backend Developer</td>
                          <td>Contract</td>
                          <td>Lagos, Nigeria</td>
                          <td>Nov 12, 2025</td>
                          <td>
                            <span className="badge bg-label-danger">
                              <i className="ri-close-line"></i> Declined
                            </span>
                          </td>
                          <td>&#8358;100,000 - &#8358;130,000</td>

                          <td className="offer-actions">
                            <div className="d-flex-items gap-10 align-items-end">
                              <a
                                className="btn-icon btn-warning-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit Offer"
                              >
                                <i className="ri-eye-line"></i>
                              </a>{" "}
                              <a
                                className="btn-icon btn-success-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Send Contract"
                              >
                                <i className="ri-file-text-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-danger-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete Offer"
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
                                  <a href="#">Aisha Sule</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>UI/UX Designer</td>
                          <td>One-off shift</td>
                          <td>Port Harcourt, Nigeria</td>
                          <td>Nov 13, 2025</td>
                          <td>
                            <span className="badge bg-label-primary">
                              <i className="ri-time-line"></i> Pending
                            </span>
                          </td>
                          <td>&#8358;80,000 - &#8358;100,000</td>

                          <td className="offer-actions">
                            <div className="d-flex-items gap-10 align-items-end">
                              <a
                                className="btn-icon btn-warning-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit Offer"
                              >
                                <i className="ri-eye-line"></i>
                              </a>{" "}
                              <a
                                className="btn-icon btn-success-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Send Contract"
                              >
                                <i className="ri-file-text-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-danger-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete Offer"
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
                                  src="/assets/images/avatar/avatar-thumb-006.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="#">Tunde Balogun</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Data Analyst</td>
                          <td>Permanent</td>
                          <td>Kano, Nigeria</td>
                          <td>Nov 14, 2025</td>
                          <td>
                            <span className="badge bg-label-warning">
                              <i className="ri-refresh-line"></i> Countered
                            </span>
                          </td>
                          <td>&#8358;90,000 - &#8358;110,000</td>

                          <td className="offer-actions">
                            <div className="d-flex-items gap-10 align-items-end">
                              <a
                                className="btn-icon btn-warning-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit Offer"
                              >
                                <i className="ri-eye-line"></i>
                              </a>{" "}
                              <a
                                className="btn-icon btn-success-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Send Contract"
                              >
                                <i className="ri-file-text-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-danger-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete Offer"
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

        {/* start create job modal */}
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
                  Review Offer
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
                          src="/assets/images/avatar/avatar-thumb-dummy.png"
                          alt="image not found"
                          id="profileImage"
                          className="radius-100"
                        />
                      </div>
                      <span className="d-block fw-5 text-muted">
                        James Smith
                      </span>
                    </div>
                  </div>

                  <div
                    className="col-xl-12"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      rowGap: "1rem",
                    }}
                  >
                    <h4 className="mb-5">
                      <span className="badge bg-success me-2">Pending</span>
                    </h4>
                    <div className="text-muted">
                      <span className="me-3">
                        <i className="ri-map-pin-line"></i> Lagos, Nigeria
                      </span>
                      <span>
                        <i className="ri-briefcase-4-line"></i> Full-time
                      </span>
                    </div>
                    <b
                      style={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: "0.5rem",
                      }}
                    >
                      <i className="ri-time-line"></i>Nov 9, 2025
                    </b>
                  </div>

                  <div className="col-xl-6">
                    <label htmlFor="role" className="form-label">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="role"
                      placeholder="IT Support Technician"
                      readOnly
                    />
                  </div>

                  <div className="col-xl-6">
                    <label htmlFor="jobType" className="form-label">
                      Job Type
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="jobType"
                      placeholder="Permanent"
                      readOnly
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="startDate" className="form-label">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="startDate"
                      placeholder="Select Start Date"
                      readOnly
                    />
                  </div>

                  <div className="col-xl-6">
                    <label htmlFor="endDate" className="form-label">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="endDate"
                      placeholder="Select End Date"
                      readOnly
                    />
                  </div>

                  <div className="col-xl-6">
                    <label htmlFor="shiftStartTime" className="form-label">
                      Shift Start Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="shiftStartTime"
                      placeholder="Select Shift Start Time"
                      readOnly
                    />
                  </div>

                  <div className="col-xl-6">
                    <label htmlFor="shiftEndTime" className="form-label">
                      Shift End Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="shiftEndTime"
                      placeholder="Select Shift End Time"
                      readOnly
                    />
                  </div>

                  <div className="col-xl-6">
                    <label htmlFor="duration" className="form-label">
                      Duration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="duration"
                      placeholder="Enter Duration"
                      readOnly
                    />
                  </div>

                  <div className="col-xl-6">
                    <label htmlFor="shiftType" className="form-label">
                      Shift Type
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="shiftType"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <h6>Rate Offered</h6>
                  <div className="col-xl-4">
                    <label htmlFor="rateMin" className="form-label">
                      (Min)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="rateMin"
                      placeholder="Minimum Rate"
                    />
                  </div>

                  <div className="col-xl-4">
                    <label htmlFor="rateMax" className="form-label">
                      (Max)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="rateMax"
                      placeholder="Maximum Rate"
                    />
                  </div>
                  <div className="col-xl-4">
                    <label htmlFor="currency" className="form-label">
                      Currency
                    </label>
                    <select className="form-control" id="currency">
                      <option value="ngn">₦ NGN</option>
                      <option value="usd">$ USD</option>
                      <option value="eur">€ EUR</option>
                      <option value="gbp">£ GBP</option>
                    </select>
                    <div className="row"></div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Delete Offer
                </button>
                <button type="button" className="btn btn-primary">
                  Send Contract
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end create Employee model */}
      </div>
    </div>
  );
};

export default JobOffers;
