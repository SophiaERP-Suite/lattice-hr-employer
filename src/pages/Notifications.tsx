import { NavLink } from "react-router-dom";

const Notifications = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Notifications</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item">
                      <NavLink to="/notifications">
                        Notifications
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
                    <div className="avatar avatar-xl bg-warning-transparent text-warning">
                      <i className="ri-notification-line fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Unread Notifications
                      </span>
                      <h2>23</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-success-transparent text-success">
                      <i className="ri-briefcase-line fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">Job Alerts</span>
                      <h2>11</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-primary-transparent text-primary">
                      <i className="ri-time-line fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Attendance Alerts
                      </span>
                      <h2>7</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-info-transparent text-info">
                      <i className="ri-wallet-line fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">Invoice Alerts</span>
                      <h2>12</h2>
                    </div>
                  </div>
                </div>
              </div>
            </>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="d-flex-items gap-10">Notifications</h4>

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
                </div>

                <div className="job-filter-container">
                  <h6>Filter by:</h6>

                  <div>
                    <select className="form-select">
                      <option value="">All Status</option>
                      <option value="read">Read</option>
                      <option value="unread">Unread</option>
                    </select>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card-body">
                    <div className="announcement-list card-scrollbar notifications-list">
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
                              <span className="badge bg-label-info">
                                Safety
                              </span>
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
                            The company travel policy has been updated to
                            include new reimbursement limits and approval
                            procedures for all business trips...
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
                            The annual performance review period starts next
                            week. Managers will schedule one-on-one meetings to
                            discuss goals and feedback...
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

export default Notifications;
