import ReactApexChart from "react-apexcharts";

const Dashboard = () => {
  const series = [40, 30, 15, 15];
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "pie",
      height: 357,
    },
    labels: ["Draft", "Published", "Pending Completion", "Completed"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      fontFamily: '"Nunito Sans", sans-serif',

      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
    },
    stroke: {
      width: 2,
    },
    colors: [
      "rgb(79, 70, 229)",
      "rgb(20, 147, 255)",
      "rgb(255, 131, 15)",
      "rgb(40, 167, 69)",
    ], // primary, info, warning, success
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return val + "%";
      },
      style: {
        fontSize: "11px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "400",
      },
    },
  };

  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row overflow-hidden">
            <>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-primary-transparent text-primary">
                      <i className="ri-user-3-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">Active Jobs</span>
                      <h2 className="mb-5">24</h2>
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
                        Pending Applications
                      </span>
                      <h2 className="mb-5">156</h2>
                      <span className="fs-12 text-muted">30-day pipeline</span>
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
                        Ongoing Contracts
                      </span>
                      <h2 className="mb-5">12</h2>
                      <span className="text-success">
                        +3 New
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
                      <span className="d-block fs-16 mb-5">Job Applicants</span>
                      <h2 className="mb-5">26</h2>
                      <span className="fs-12 text-muted">30-day pipeline</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-success-transparent text-success">
                      <i className="ri-user-add-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Clock-ins Today
                      </span>
                      <h2 className="mb-5">42</h2>
                      <span className="text-success">
                        +10%
                        <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                      </span>
                      <span className="fs-12 text-muted ml-5">
                        Real-time attendance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-slateblue-transparent text-slateblue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width={30}
                        hanging={30}
                      >
                        <path d="M9 4L6 2L3 4V16V19C3 20.6569 4.34315 22 6 22H20C21.6569 22 23 20.6569 23 19V17H7V19C7 19.5523 6.55228 20 6 20C5.44772 20 5 19.5523 5 19V15H21V4L18 2L15 4L12 2L9 4Z"></path>
                      </svg>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Pending Invoices
                      </span>
                      <h2 className="mb-5">8</h2>
                      <span className="fs-12 text-muted">
                        Awaiting client processing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-teal-transparent text-teal">
                      <i className="ri-graduation-cap-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Completed Inductions
                      </span>{" "}
                      <h2 className="mb-5">15</h2>
                      <span className="text-success">
                        +25%
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
                      <span className="fs-12 text-muted ml-5">this week</span>
                    </div>
                  </div>
                </div>
              </div>
            </>

            <>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header justify-between">
                    <h4 className="">Induction Overview</h4>
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
                            href="javascript:void(0);"
                          >
                            Today
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            This Week
                          </a>
                          <a
                            className="dropdown-item active"
                            href="javascript:void(0);"
                          >
                            This Month
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            This Year
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-15">
                    <div id="contacts-source">
                      {" "}
                      <ReactApexChart
                        options={options}
                        series={series}
                        type="pie"
                        height={357}
                      />
                    </div>
                    <div className="pipeline-stats mt-20">
                      <div className="d-flex justify-between align-center mb-8">
                        <div className="d-flex align-center gap-10">
                          <span className="bullet bg-primary"></span>
                          <span className="fs-14">Draft</span>
                        </div>
                        <span className="fw-500">80</span>
                      </div>
                      <div className="d-flex justify-between align-center mb-8">
                        <div className="d-flex align-center gap-10">
                          <span className="bullet bg-info"></span>
                          <span className="fs-14">Published</span>
                        </div>
                        <span className="fw-500">60</span>
                      </div>
                      <div className="d-flex justify-between align-center mb-8">
                        <div className="d-flex align-center gap-10">
                          <span className="bullet bg-warning"></span>
                          <span className="fs-14">Pending Completion</span>
                        </div>
                        <span className="fw-500">30</span>
                      </div>
                      <div className="d-flex justify-between align-center">
                        <div className="d-flex align-center gap-10">
                          <span className="bullet bg-success"></span>
                          <span className="fs-14">Completed</span>
                        </div>
                        <span className="fw-500">30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header justify-between">
                    <h4 className="">Pending Induction</h4>
                    <a
                      className="btn btn-primary btn-sm"
                      href="javascript:void(0);"
                    >
                      View All
                    </a>
                  </div>
                  <div className="card-body pt-15">
                    <ul className="activity-list">
                      <li className="d-flex align-start gap-15 mb-15">
                        <div className="avatar avatar-xs radius-100">
                          <img
                            className="radius-100"
                            src="/assets/images/avatar/avatar-thumb-001.webp"
                            alt="image not found"
                          />
                        </div>
                        <div>
                          <h6 className="mb-5">John Mikel</h6>
                          <p className="text-muted fs-14 mb-5 fw-semibold">
                            Web Designer
                          </p>
                          <span className="fs-11 text-muted">2 hours ago</span>
                        </div>
                      </li>

                      <li className="d-flex align-start gap-15 mb-15">
                        <div className="avatar avatar-xs radius-100">
                          <img
                            className="radius-100"
                            src="/assets/images/avatar/avatar-thumb-002.webp"
                            alt="image not found"
                          />
                        </div>
                        <div>
                          <h6 className="mb-5">Chinwe Eze</h6>
                          <p className="text-muted fs-14 mb-5 fw-semibold">
                            IT Support Technician
                          </p>
                          <span className="fs-11 text-muted">3 hours ago</span>
                        </div>
                      </li>

                      <li className="d-flex align-start gap-15 mb-15">
                        <div className="avatar avatar-xs radius-100">
                          <img
                            className="radius-100"
                            src="/assets/images/avatar/avatar-thumb-003.webp"
                            alt="image not found"
                          />
                        </div>
                        <div>
                          <h6 className="mb-5">Tunde Balogun</h6>
                          <p className="text-muted fs-14 mb-5 fw-semibold">
                            Frontend Developer
                          </p>
                          <span className="fs-11 text-muted">5 hours ago</span>
                        </div>
                      </li>

                      <li className="d-flex align-start gap-15 mb-15">
                        <div className="avatar avatar-xs radius-100">
                          <img
                            className="radius-100"
                            src="/assets/images/avatar/avatar-thumb-004.webp"
                            alt="image not found"
                          />
                        </div>
                        <div>
                          <h6 className="mb-5">Amaka Obi</h6>
                          <p className="text-muted fs-14 mb-5 fw-semibold">
                            HR Coordinator
                          </p>
                          <span className="fs-11 text-muted">6 hours ago</span>
                        </div>
                      </li>

                      <li className="d-flex align-start gap-15 mb-15">
                        <div className="avatar avatar-xs radius-100">
                          <img
                            className="radius-100"
                            src="/assets/images/avatar/avatar-thumb-005.webp"
                            alt="image not found"
                          />
                        </div>
                        <div>
                          <h6 className="mb-5">Emeka Nwosu</h6>
                          <p className="text-muted fs-14 mb-5 fw-semibold">
                            Backend Developer
                          </p>
                          <span className="fs-11 text-muted">8 hours ago</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="">Recent Job Activity</h4>
                </div>
                <div className="card-body pt-15">
                  <div className="table-responsive">
                    <table className="table text-nowrap w-100 recent-job-table">
                      <thead className="table-light">
                        <tr>
                          <th>Job Title</th>
                          <th>Job Type</th>
                          <th>Expiry Date</th>
                          <th className="recent-job-action">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6>Frontend Developer</h6>
                          </td>
                          <td>
                            <h6>Contract</h6>
                          </td>
                          <td>Nov 6, 2025</td>
                          <td className="recent-job-action">
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-success-light"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Pause"
                                href="#"
                              >
                                <i className="ri-pause-large-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-edit-line"></i>
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
                            <h6>IT Support Technician</h6>
                          </td>
                          <td>
                            <h6>Temporary</h6>
                          </td>
                          <td>Nov 5, 2025</td>
                          <td className="recent-job-action">
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-success-light"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Pause"
                                href="#"
                              >
                                <i className="ri-pause-large-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-edit-line"></i>
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
                            <h6>Warehouse Forklift Operator</h6>
                          </td>
                          <td>
                            <h6>Temporary</h6>
                          </td>
                          <td>Nov 4, 2025</td>
                          <td className="recent-job-action">
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-success-light"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Pause"
                                href="#"
                              >
                                <i className="ri-pause-large-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-edit-line"></i>
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
                            <h6>Network Engineer</h6>
                          </td>
                          <td>
                            <h6>Permanent</h6>
                          </td>
                          <td>Nov 3, 2025</td>
                          <td className="recent-job-action">
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-success-light"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Pause"
                                href="#"
                              >
                                <i className="ri-pause-large-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-edit-line"></i>
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
                            <h6>Event Setup Crew</h6>
                          </td>
                          <td>
                            <h6>One-off</h6>
                          </td>
                          <td>Nov 2, 2025</td>
                          <td className="recent-job-action">
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-success-light"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Pause"
                                href="#"
                              >
                                <i className="ri-pause-large-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-edit-line"></i>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="">Latest Job Applications</h4>
                </div>
                <div className="card-body pt-15">
                  <div className="table-responsive">
                    <table className="table tbody-b-none text-nowrap">
                      <thead>
                        <tr>
                          <th>Applicant</th>
                          <th>Job</th>
                          <th>Compliance Status</th>
                          <th>Date Applied</th>
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
                                  src="/assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                />
                              </div>
                              <h6>Joseph Adewale</h6>
                            </div>
                          </td>
                          <td>Senior UX Designer</td>
                          <td>
                            <span className="badge bg-label-primary">
                              In Review
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
                              <div className="avatar avatar-xs radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </div>
                              <h6>Amaka Obi</h6>
                            </div>
                          </td>
                          <td>Frontend Developer</td>
                          <td>
                            <span className="badge bg-label-success">
                              Verified
                            </span>
                          </td>
                          <td>Nov 04, 2025</td>
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
                              <div className="avatar avatar-xs radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-003.webp"
                                  alt="image not found"
                                />
                              </div>
                              <h6>Tunde Akin</h6>
                            </div>
                          </td>
                          <td>IT Support Technician</td>
                          <td>
                            <span className="badge bg-label-warning">
                              Pending
                            </span>
                          </td>
                          <td>Nov 05, 2025</td>
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
                              <div className="avatar avatar-xs radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-004.webp"
                                  alt="image not found"
                                />
                              </div>
                              <h6>Chinwe Eze</h6>
                            </div>
                          </td>
                          <td>Network Engineer</td>
                          <td>
                            <span className="badge bg-label-primary">
                              In Review
                            </span>
                          </td>
                          <td>Nov 05, 2025</td>
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
                              <div className="avatar avatar-xs radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-005.webp"
                                  alt="image not found"
                                />
                              </div>
                              <h6>Bolaji Adeyemi</h6>
                            </div>
                          </td>
                          <td>Warehouse Forklift Operator</td>
                          <td>
                            <span className="badge bg-label-warning">
                              Pending
                            </span>
                          </td>
                          <td>Nov 06, 2025</td>
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
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="">Recent Attendance Logs</h4>
                </div>
                <div className="card-body pt-15">
                  <div className="table-responsive">
                    <table className="table text-nowrap w-100 recent-job-table">
                      <thead className="table-light">
                        <tr>
                          <th>Candidate Name</th>
                          <th>Job Title</th>
                          <th>Event</th>
                          <th>Time</th>
                          <th className="recent-job-action">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6>Chinwe Eze</h6>
                          </td>
                          <td>
                            <h6>IT Support Technician</h6>
                          </td>
                          <td>Clock-in</td>
                          <td>08:05 AM</td>
                          <td className="recent-job-action">
                            <a className="btn btn-primary">View Timesheet</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6>Samuel Johnson</h6>
                          </td>
                          <td>
                            <h6>Warehouse Assistant</h6>
                          </td>
                          <td>Clock-out</td>
                          <td>05:32 PM</td>
                          <td className="recent-job-action">
                            <a className="btn btn-primary">View Timesheet</a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6>Grace Umeh</h6>
                          </td>
                          <td>
                            <h6>Customer Service Rep</h6>
                          </td>
                          <td>Clock-in</td>
                          <td>09:01 AM</td>
                          <td className="recent-job-action">
                            <a className="btn btn-primary">View Timesheet</a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6>Tunde Balogun</h6>
                          </td>
                          <td>
                            <h6>Delivery Driver</h6>
                          </td>
                          <td>Clock-out</td>
                          <td>07:48 PM</td>
                          <td className="recent-job-action">
                            <a className="btn btn-primary">View Timesheet</a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6>Amaka Okoro</h6>
                          </td>
                          <td>
                            <h6>Sales Executive</h6>
                          </td>
                          <td>Clock-in</td>
                          <td>08:27 AM</td>
                          <td className="recent-job-action">
                            <a className="btn btn-primary">View Timesheet</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="">Recent Invoices</h4>
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
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Month
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-15">
                  <div className="table-responsive table--card">
                    <table className="table table-bordered text-nowrap">
                      <thead>
                        <tr>
                          <th>Invoice ID</th>
                          <th>Candidate</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#1001</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-xs radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                />
                              </div>
                              <h6>Sarah Johnson</h6>
                            </div>
                          </td>
                          <td>&#8358;125,000</td>

                          <td>
                            <span className="badge bg-label-success">Paid</span>
                          </td>
                          <td>Nov 8, 2025 11:00 AM</td>

                          <td>
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="company-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#1002</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-xs radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </div>
                              <h6>Michael Brown</h6>
                            </div>
                          </td>
                          <td>&#8358;75,000</td>
                          <td>
                            <span className="badge bg-label-warning">
                              Pending
                            </span>
                          </td>
                          <td>Nov 7, 2025 10:30 AM</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="company-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>#1003</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-xs radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-003.webp"
                                  alt="image not found"
                                />
                              </div>
                              <h6>Linda Okoro</h6>
                            </div>
                          </td>
                          <td>&#8358;200,000</td>
                          <td>
                            <span className="badge bg-label-success">Paid</span>
                          </td>
                          <td>Nov 6, 2025 02:15 PM</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="company-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>#1004</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-xs radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-004.webp"
                                  alt="image not found"
                                />
                              </div>
                              <h6>David Chukwu</h6>
                            </div>
                          </td>
                          <td>&#8358;50,000</td>
                          <td>
                            <span className="badge bg-label-danger">
                              Overdue
                            </span>
                          </td>
                          <td>Nov 5, 2025 09:45 AM</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="company-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>#1005</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-xs radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-005.webp"
                                  alt="image not found"
                                />
                              </div>
                              <h6>Emeka Nnaji</h6>
                            </div>
                          </td>
                          <td>&#8358;150,000</td>
                          <td>
                            <span className="badge bg-label-warning">
                              Pending
                            </span>
                          </td>
                          <td>Nov 4, 2025 01:20 PM</td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="company-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="">Notifications</h4>
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
                        <a className="dropdown-item" href="javascript:void(0);">
                          Today
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a
                          className="dropdown-item active"
                          href="javascript:void(0);"
                        >
                          This Month
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Year
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-15">
                  <div className="announcement-list card-scrollbar">
                    <div className="announcement-item">
                      <div className="bullet bg-primary mt-5"></div>
                      <div className="announcement-content">
                        <div className="announcement-header d-flex-between mb-10">
                          <h5>Office Fire Drill Schedule</h5>
                          <span className="fs-12 text-muted">2h ago</span>
                        </div>
                        <p className="mb-15">
                          A fire drill is scheduled for the 3rd floor tomorrow
                          at 11:00 AM. All employees must follow evacuation
                          procedures...
                        </p>
                        <div className="announcement-footer d-flex-between">
                          <span className="fs-12 text-body-secondary">
                            By Safety Team
                          </span>
                          <div className="announcement-tags d-flex gap-10">
                            <span className="badge bg-label-danger">
                              Important
                            </span>
                            <span className="badge bg-label-info">Safety</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="announcement-item">
                      <div className="bullet bg-success mt-5"></div>
                      <div className="announcement-content">
                        <div className="announcement-header d-flex-between mb-10">
                          <h5>Updated Travel Policy</h5>
                          <span className="fs-12 text-muted">1d ago</span>
                        </div>
                        <p className="mb-15">
                          The company travel policy has been updated to include
                          new reimbursement limits and approval procedures for
                          all business trips...
                        </p>
                        <div className="announcement-footer d-flex-between">
                          <span className="fs-12 text-body-secondary">
                            By Admin Team
                          </span>
                          <div className="announcement-tags d-flex gap-10">
                            <span className="badge bg-label-warning">
                              Policy
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="announcement-item">
                      <div className="bullet bg-warning mt-5"></div>
                      <div className="announcement-content">
                        <div className="announcement-header d-flex-between mb-10">
                          <h5>Annual Performance Review</h5>
                          <span className="fs-12 text-muted">3d ago</span>
                        </div>
                        <p className="mb-15">
                          The annual performance review period starts next week.
                          Managers will schedule one-on-one meetings to discuss
                          goals and feedback...
                        </p>
                        <div className="announcement-footer d-flex-between">
                          <span className="fs-12 text-body-secondary">
                            By HR Team
                          </span>
                          <div className="announcement-tags d-flex gap-10">
                            <span className="badge bg-label-warning">
                              Event
                            </span>
                            <span className="badge bg-label-slateblue">
                              Mandatory
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="announcement-item">
                      <div className="bullet bg-danger mt-5"></div>
                      <div className="announcement-content">
                        <div className="announcement-header d-flex-between mb-10">
                          <h5>Server Upgrade Tonight</h5>
                          <span className="fs-12 text-muted">5h ago</span>
                        </div>
                        <p className="mb-15">
                          IT will perform a scheduled server upgrade tonight
                          from 11PM to 3AM. Services may be intermittently
                          unavailable during this window...
                        </p>
                        <div className="announcement-footer d-flex-between">
                          <span className="fs-12 text-body-secondary">
                            By IT Department
                          </span>
                          <div className="announcement-tags d-flex gap-10">
                            <span className="badge bg-label-danger">
                              Urgent
                            </span>
                            <span className="badge bg-label-primary">
                              Technology
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="announcement-item unread">
                      <div className="bullet bg-success mt-5"></div>
                      <div className="announcement-content">
                        <div className="announcement-header d-flex-between mb-10">
                          <h5>Employee Wellness Challenge</h5>
                          <span className="fs-12 text-muted">1h ago</span>
                        </div>
                        <p className="mb-15">
                          Join our new wellness challenge next month!
                          Participate in weekly fitness activities, meditation
                          sessions, and nutrition workshops...
                        </p>
                        <div className="announcement-footer d-flex-between">
                          <span className="fs-12 text-body-secondary">
                            By HR Wellness Team
                          </span>
                          <div className="announcement-tags d-flex gap-10">
                            <span className="badge bg-label-success">
                              Wellness
                            </span>
                            <span className="badge bg-label-purple">New</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="announcement-view-btn">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-primary w-100"
                    >
                      View All Notifications
                    </a>
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

export default Dashboard;
