const InvoiceManagement = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Invoice Management</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/invoice-management">
                        Invoice Management
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
                      <i className="ri-file-text-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">Total Invoices</span>
                      <h2 className="mb-5">127</h2>
                      <span className="text-success">
                        +8%
                        <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                      </span>
                      <span className="fs-12 text-muted ml-5">
                        this quarter
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-success-transparent text-success">
                      <i className="ri-money-dollar-circle-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">Paid Invoices</span>
                      <h2 className="mb-5">&#8358;3,548,750</h2>
                      <span className="text-success">
                        +15%
                        <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                      </span>
                      <span className="fs-12 text-muted ml-5">this month</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-warning-transparent text-warning">
                      <i className="ri-alarm-warning-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Overdue Invoices
                      </span>
                      <h2 className="mb-5">9</h2>
                      <span className="text-danger">
                        +2
                        <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                      </span>
                      <span className="fs-12 text-muted ml-5">past due</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-info-transparent text-info">
                      <i className="ri-hourglass-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">
                        Pending Approval
                      </span>
                      <h2 className="mb-5">5</h2>
                      <span className="fs-12 text-muted">awaiting payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="d-flex-items gap-10">Invoice List</h4>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "2rem",
                    }}
                  >
                    <a
                      className="btn btn-primary text-white"
                      href="/invoice-form"
                    >
                      Add Invoice
                    </a>
                    <div className="dataTables-sorting-control ">
                      <select className="form-select sorting-dropdown">
                        <option value="">Sort By:</option>
                        <option value="date_newest">
                          Issued Date: Newest First
                        </option>
                        <option value="date_oldest">
                          Issued Date: Oldest First
                        </option>
                        <option value="date_newest">
                          Amount: Highest First
                        </option>
                        <option value="date_oldest">
                          Amount: Lowest First
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="job-filter-container">
                  <h6>Filter by:</h6>

                  <div>
                    <select className="form-select">
                      <option value="">All Jobs</option>
                      <option value="software-dev">Software Developer</option>
                      <option value="frontend-dev">Frontend Developer</option>
                      <option value="it-support">IT Support Technician</option>
                    </select>

                    <select className="form-select">
                      <option value="">All Status</option>

                      <option value="paid">Paid</option>
                      <option value="pending">Pending</option>
                      <option value="overdue">Overdue</option>
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
                      className="table text-nowrap w-100 dataTable no-footer"
                      id="commonTable"
                      aria-describedby="commonTable_info"
                    >
                      <thead>
                        <tr>
                          <th>Invoice ID</th>
                          <th>Candidate</th>
                          <th>Job Title</th>
                          <th>Billing Period</th>
                          <th>Issued Date</th>
                          <th>Due Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th className="recent-job-action">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="javascript:void(0);"
                              className="text-primary fw-6"
                            >
                              INV-12345
                            </a>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-001.webp"
                                  alt="#"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="javascript:void(0);"> Felix Okoh</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Frontend Dveloper</td>
                          <td>Nov 1, 2025 - Nov 31, 2025</td>
                          <td>25 Oct, 2025</td>
                          <td>02 Nov, 2025</td>
                          <td>
                            <span className="fw-7">&#8358;255,450.00</span>
                          </td>
                          <td>
                            <span className="badge bg-label-success">Paid</span>
                          </td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="invoice-details"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Track Response"
                              >
                                <i className="ri-send-plane-line"></i>
                              </a>

                              <a
                                className="btn-icon btn-primary-light"
                                href="javascript:void(0);"
                              >
                                <i className="ri-download-2-line"></i>
                              </a>
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
                          <td>
                            <a
                              href="javascript:void(0);"
                              className="text-primary fw-6"
                            >
                              INV-12346
                            </a>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-002.webp"
                                  alt="#"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="javascript:void(0);">Amina Bello</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Backend Developer</td>
                          <td>Nov 1, 2025 - Nov 30, 2025</td>
                          <td>25 Oct, 2025</td>
                          <td>02 Nov, 2025</td>
                          <td>
                            <span className="fw-7">&#8358;320,000.00</span>
                          </td>
                          <td>
                            <span className="badge bg-label-warning">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a className="btn-icon btn-info-light" href="#">
                                <i className="ri-send-plane-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-primary-light"
                                href="#"
                              >
                                <i className="ri-download-2-line"></i>
                              </a>
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
                          <td>
                            <a
                              href="javascript:void(0);"
                              className="text-primary fw-6"
                            >
                              INV-12347
                            </a>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-003.webp"
                                  alt="#"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="javascript:void(0);">Kwame Mensah</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>UI/UX Designer</td>
                          <td>Nov 1, 2025 - Nov 30, 2025</td>
                          <td>25 Oct, 2025</td>
                          <td>02 Nov, 2025</td>
                          <td>
                            <span className="fw-7">&#8358;280,750.00</span>
                          </td>
                          <td>
                            <span className="badge bg-label-success">Paid</span>
                          </td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a className="btn-icon btn-info-light" href="#">
                                <i className="ri-send-plane-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-primary-light"
                                href="#"
                              >
                                <i className="ri-download-2-line"></i>
                              </a>
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
                          <td>
                            <a
                              href="javascript:void(0);"
                              className="text-primary fw-6"
                            >
                              INV-12348
                            </a>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-004.webp"
                                  alt="#"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="javascript:void(0);">Nneka Eze</a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Project Manager</td>
                          <td>Nov 1, 2025 - Nov 30, 2025</td>
                          <td>25 Oct, 2025</td>
                          <td>02 Nov, 2025</td>
                          <td>
                            <span className="fw-7">&#8358;450,500.00</span>
                          </td>
                          <td>
                            <span className="badge bg-label-warning">
                              Pending
                            </span>
                          </td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a className="btn-icon btn-info-light" href="#">
                                <i className="ri-send-plane-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-primary-light"
                                href="#"
                              >
                                <i className="ri-download-2-line"></i>
                              </a>
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
                          <td>
                            <a
                              href="javascript:void(0);"
                              className="text-primary fw-6"
                            >
                              INV-12349
                            </a>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar radius-100">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-005.webp"
                                  alt="#"
                                  className="radius-100"
                                />
                              </div>
                              <div>
                                <h6>
                                  <a href="javascript:void(0);">
                                    Tendai Chikwe
                                  </a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>QA Engineer</td>
                          <td>Nov 1, 2025 - Nov 30, 2025</td>
                          <td>25 Oct, 2025</td>
                          <td>02 Nov, 2025</td>
                          <td>
                            <span className="fw-7">&#8358;190,300.00</span>
                          </td>
                          <td>
                            <span className="badge bg-label-danger">
                              Overdue
                            </span>
                          </td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="#"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a className="btn-icon btn-info-light" href="#">
                                <i className="ri-send-plane-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-primary-light"
                                href="#"
                              >
                                <i className="ri-download-2-line"></i>
                              </a>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceManagement;
