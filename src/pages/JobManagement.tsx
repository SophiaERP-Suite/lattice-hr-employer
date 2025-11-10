const JobManagement = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Job Management</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      Job Management
                    </li>

                    <li className="breadcrumb-item">
                      <a href="/dashboard">Home</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="d-flex-items gap-10">
                    Jobs<span className="badge bg-label-primary">250</span>
                  </h4>
                  <div className="d-flex flex-wrap gap-15">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#addNewEmployee"
                    >
                      Create Job
                    </button>

                    <div className="dataTables-sorting-control ">
                      <select className="form-select sorting-dropdown">
                        <option value="">Sort By:</option>
                        <option value="date_newest">Date: Newest First</option>
                        <option value="date_oldest">Date: Oldest First</option>
                        <option value="applicants">Number of Applicants</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="job-filter-container">
                  <h6>Filter by:</h6>

                  <div>
                    <select className="form-select">
                      <option value="">All Status</option>
                      <option value="open">Open</option>
                      <option value="closed">Closed</option>
                      <option value="expired">Expired</option>
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
                          <th scope="col">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel"
                              value=""
                              aria-label="..."
                            />
                          </th>
                          <th scope="col">ID</th>
                          <th>Employee Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Designation</th>
                          <th>Department</th>
                          <th>Join Date</th>
                          <th>Contact</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rowCheckbox1"
                              value=""
                            />
                          </td>
                          <td>EMP001</td>
                          <td className="d-flex-items gap-10">
                            <div className="avatar radius-100">
                              <img
                                className="radius-100"
                                src="/assets/images/avatar/avatar-thumb-001.webp"
                                alt="image not found"
                              />
                            </div>
                            <h6>
                              <a href="hrm-employee-details.html">John Smith</a>
                            </h6>
                          </td>
                          <td>
                            <a
                              href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="6f05000701410b000a2f0a170e021f030a410c0002"
                            >
                              [email&#160;protected]
                            </a>
                          </td>
                          <td>(123) 456-7890</td>
                          <td>Software Engineer</td>
                          <td>IT</td>
                          <td>2023-01-15</td>
                          <td>
                            <div className="d-flex-items gap-5 fs-16">
                              <a href="javascript:void(0);">
                                <i className="ri-phone-line"></i>
                              </a>
                              <a href="javascript:void(0);">
                                <i className="ri-mail-line"></i>
                              </a>
                              <a href="javascript:void(0);">
                                <i className="ri-mail-open-line"></i>
                              </a>
                              <a href="javascript:void(0);">
                                <i className="ri-whatsapp-line"></i>
                              </a>
                              <a href="javascript:void(0);">
                                <i className="ri-twitter-x-line"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-label-success">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="hrm-employee-details.html"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobManagement;
