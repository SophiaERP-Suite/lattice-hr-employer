const Profile = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Profile</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item">
                      <a href="/profile">
                        Profile
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
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-header justify-between">
                    <h4 className="">Employer Information</h4>
                    <div className="card-dropdown">
                      <div className="dropdown">
                        <a className="card-dropdown-icon" href="/settings">
                          <i className="ri-edit-2-fill"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-15">
                    <div className="text-center mb-10">
                      <div className="avatar avatar-big radius-100">
                        <img
                          className="radius-100"
                          src="/Employer/assets/images/logo/company-logo.png"
                          alt="image not found"
                        />
                      </div>
                    </div>
                    <div className="profile-info text-center mb-15">
                      <h3 className="mb-10">Oxford Technologies</h3>
                      <h6 className="text-body mb-10">Employer ID: EMP-1001</h6>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Officer Name</td>
                            <td>
                              <div className="text-heading">Okoye David</div>
                            </td>
                          </tr>
                          <tr>
                            <td>Date Joined</td>
                            <td>
                              <div className="text-heading">2025-10-28</div>
                            </td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>
                              <div className="text-heading">
                                davidokoye@gmail.com
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Phone</td>
                            <td>
                              <div className="text-heading">
                                +(234) 123 456 7890
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>
                              <div className="text-heading">Male</div>
                            </td>
                          </tr>

                          <tr>
                            <td>Address:</td>
                            <td>
                              18 Isaac John St, Ikeja GRA, Ikeja, Lagos, Nigeria
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="card d-flex-center gradient-color gap-16">
                  <div className="card-body text-white text-center">
                    <span className="d-block fs-16 mb-5">Unlock Premium</span>
                    <h2 className="mb-5 text-white">Upgrade to PRO</h2>
                    <span className="text-white fs-14">
                      Get access to all features
                    </span>
                    <div className="mt-10">
                      <button className="btn btn-light text-primary fw-600">
                        Upgrade Now <i className="ri-arrow-right-line ml-5"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="card">
                      <div className="card-body mini-card-body d-flex align-center gap-16">
                        <div className="avatar avatar-xl bg-primary-transparent text-primary">
                          <i className="ri-user-3-fill fs-42"></i>
                        </div>
                        <div className="card-content">
                          <span className="d-block fs-16 mb-5">
                            Total Candidates
                          </span>
                          <h2 className="mb-5">424</h2>
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
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="card">
                      <div className="card-body mini-card-body d-flex align-center gap-16">
                        <div className="avatar avatar-xl bg-pink-transparent text-pink">
                          <i className="ri-star-fill fs-42"></i>
                        </div>
                        <div className="card-content">
                          <span className="d-block fs-16 mb-5">
                            Verified Candidates
                          </span>
                          <h2 className="mb-5">320</h2>
                          <span className="text-success">
                            +10
                            <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                          </span>
                          <span className="fs-12 text-muted ml-5">
                            this week
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header justify-between">
                        <h4 className="d-flex-items gap-10">Candidates List</h4>
                        <div className="d-flex flex-wrap gap-15">
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

                      <div className="job-filter-container">
                        <h6>Filter by:</h6>

                        <div>
                          <select className="form-select">
                            <option value="">All Compliance Status</option>
                            <option value="open">Verified</option>
                            <option value="closed">Pending</option>
                          </select>

                          <select className="form-select">
                            <option value="">All Job Types</option>
                            <option value="permanent">Permanent</option>
                            <option value="temporary">Temporary</option>
                            <option value="contract">Contract</option>
                            <option value="one-off">One-off Shift</option>
                          </select>

                          <select className="form-select">
                            <option value="">All Locations</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                            <option value="port-harcourt">Port Harcourt</option>
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
                                <th>Applicant</th>
                                <th>Job</th>
                                <th>Compliance Status</th>
                                <th>Date Joined</th>
                                <th className="recent-job-action">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar avatar-xs radius-100">
                                      <img
                                        className="radius-100"
                                        src="/Employer/assets/images/avatar/avatar-thumb-001.webp"
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>Joseph Adewale</h6>
                                  </div>
                                </td>
                                <td>Senior UX Designer</td>
                                <td>
                                  <span className="badge bg-label-primary">
                                    Pending
                                  </span>
                                </td>
                                <td>Nov 03, 2025</td>
                                <td className="recent-job-action">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <a
                                      className="btn-icon btn-success-light"
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      data-bs-title="View Profile"
                                    >
                                      <i className="ri-eye-line"></i>
                                    </a>
                                    <a
                                      className="btn-icon btn-info-light"
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      data-bs-title="View Timesheet"
                                    >
                                      <i className="ri-time-line"></i>
                                    </a>
                                    <a
                                      className="btn-icon btn-primary-light"
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      data-bs-title="Send Message"
                                    >
                                      <i className="ri-send-plane-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar avatar-xs radius-100">
                                      <img
                                        className="radius-100"
                                        src="/Employer/assets/images/avatar/avatar-thumb-002.webp"
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>Chinedu Mbah</h6>
                                  </div>
                                </td>
                                <td>Backend Developer</td>
                                <td>
                                  <span className="badge bg-label-success">
                                    Active
                                  </span>
                                </td>
                                <td>Nov 05, 2025</td>
                                <td className="recent-job-action">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <a
                                      className="btn-icon btn-success-light"
                                      data-bs-title="View Profile"
                                    >
                                      <i className="ri-eye-line"></i>
                                    </a>
                                    <a
                                      className="btn-icon btn-info-light"
                                      data-bs-title="View Timesheet"
                                    >
                                      <i className="ri-time-line"></i>
                                    </a>
                                    <a
                                      className="btn-icon btn-primary-light"
                                      data-bs-title="Send Message"
                                    >
                                      <i className="ri-send-plane-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar avatar-xs radius-100">
                                      <img
                                        className="radius-100"
                                        src="/Employer/assets/images/avatar/avatar-thumb-003.webp"
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>Aisha Bello</h6>
                                  </div>
                                </td>
                                <td>Registered Nurse</td>
                                <td>
                                  <span className="badge bg-label-primary">
                                    Pending
                                  </span>
                                </td>
                                <td>Nov 02, 2025</td>
                                <td className="recent-job-action">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <a className="btn-icon btn-success-light">
                                      <i className="ri-eye-line"></i>
                                    </a>
                                    <a className="btn-icon btn-info-light">
                                      <i className="ri-time-line"></i>
                                    </a>
                                    <a className="btn-icon btn-primary-light">
                                      <i className="ri-send-plane-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar avatar-xs radius-100">
                                      <img
                                        className="radius-100"
                                        src="/Employer/assets/images/avatar/avatar-thumb-004.webp"
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>Kwesi Darko</h6>
                                  </div>
                                </td>
                                <td>IT Support Engineer</td>
                                <td>
                                  <span className="badge bg-label-danger">
                                    Suspended
                                  </span>
                                </td>
                                <td>Oct 28, 2025</td>
                                <td className="recent-job-action">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <a className="btn-icon btn-success-light">
                                      <i className="ri-eye-line"></i>
                                    </a>
                                    <a className="btn-icon btn-info-light">
                                      <i className="ri-time-line"></i>
                                    </a>
                                    <a className="btn-icon btn-primary-light">
                                      <i className="ri-send-plane-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar avatar-xs radius-100">
                                      <img
                                        className="radius-100"
                                        src="/Employer/assets/images/avatar/avatar-thumb-005.webp"
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>Thandiwe Khumalo</h6>
                                  </div>
                                </td>
                                <td>Care Assistant</td>
                                <td>
                                  <span className="badge bg-label-success">
                                    Active
                                  </span>
                                </td>
                                <td>Nov 06, 2025</td>
                                <td className="recent-job-action">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <a className="btn-icon btn-success-light">
                                      <i className="ri-eye-line"></i>
                                    </a>
                                    <a className="btn-icon btn-info-light">
                                      <i className="ri-time-line"></i>
                                    </a>
                                    <a className="btn-icon btn-primary-light">
                                      <i className="ri-send-plane-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar avatar-xs radius-100">
                                      <img
                                        className="radius-100"
                                        src="/Employer/assets/images/avatar/avatar-thumb-006.webp"
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>Omar Saidu</h6>
                                  </div>
                                </td>
                                <td>Security Officer</td>
                                <td>
                                  <span className="badge bg-label-warning">
                                    On Hold
                                  </span>
                                </td>
                                <td>Oct 31, 2025</td>
                                <td className="recent-job-action">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <a className="btn-icon btn-success-light">
                                      <i className="ri-eye-line"></i>
                                    </a>
                                    <a className="btn-icon btn-info-light">
                                      <i className="ri-time-line"></i>
                                    </a>
                                    <a className="btn-icon btn-primary-light">
                                      <i className="ri-send-plane-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar avatar-xs radius-100">
                                      <img
                                        className="radius-100"
                                        src="/Employer/assets/images/avatar/avatar-thumb-007.webp"
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>Nkechi Nwosu</h6>
                                  </div>
                                </td>
                                <td>Project Coordinator</td>
                                <td>
                                  <span className="badge bg-label-primary">
                                    Pending
                                  </span>
                                </td>
                                <td>Oct 27, 2025</td>
                                <td className="recent-job-action">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <a className="btn-icon btn-success-light">
                                      <i className="ri-eye-line"></i>
                                    </a>
                                    <a className="btn-icon btn-info-light">
                                      <i className="ri-time-line"></i>
                                    </a>
                                    <a className="btn-icon btn-primary-light">
                                      <i className="ri-send-plane-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar avatar-xs radius-100">
                                      <img
                                        className="radius-100"
                                        src="/Employer/assets/images/avatar/avatar-thumb-008.webp"
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>Luyolo Maseko</h6>
                                  </div>
                                </td>
                                <td>Shift Supervisor</td>
                                <td>
                                  <span className="badge bg-label-danger">
                                    Terminated
                                  </span>
                                </td>
                                <td>Oct 22, 2025</td>
                                <td className="recent-job-action">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <a className="btn-icon btn-success-light">
                                      <i className="ri-eye-line"></i>
                                    </a>
                                    <a className="btn-icon btn-info-light">
                                      <i className="ri-time-line"></i>
                                    </a>
                                    <a className="btn-icon btn-primary-light">
                                      <i className="ri-send-plane-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar avatar-xs radius-100">
                                      <img
                                        className="radius-100"
                                        src="/Employer/assets/images/avatar/avatar-thumb-009.webp"
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>Fatoumata Diop</h6>
                                  </div>
                                </td>
                                <td>Healthcare Assistant</td>
                                <td>
                                  <span className="badge bg-label-success">
                                    Active
                                  </span>
                                </td>
                                <td>Nov 04, 2025</td>
                                <td className="recent-job-action">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <a className="btn-icon btn-success-light">
                                      <i className="ri-eye-line"></i>
                                    </a>
                                    <a className="btn-icon btn-info-light">
                                      <i className="ri-time-line"></i>
                                    </a>
                                    <a className="btn-icon btn-primary-light">
                                      <i className="ri-send-plane-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar avatar-xs radius-100">
                                      <img
                                        className="radius-100"
                                        src="/Employer/assets/images/avatar/avatar-thumb-010.webp"
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>Kelechi Ezenwa</h6>
                                  </div>
                                </td>
                                <td>Data Entry Officer</td>
                                <td>
                                  <span className="badge bg-label-warning">
                                    On Hold
                                  </span>
                                </td>
                                <td>Nov 01, 2025</td>
                                <td className="recent-job-action">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <a className="btn-icon btn-success-light">
                                      <i className="ri-eye-line"></i>
                                    </a>
                                    <a className="btn-icon btn-info-light">
                                      <i className="ri-time-line"></i>
                                    </a>
                                    <a className="btn-icon btn-primary-light">
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
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
