import ContractForm from "../components/ContractForm";

const ContractDetails = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Contract Details</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/contract-details">
                        Contract Details{" "}
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
                      <a href="/contract-management">
                        Contract Management{" "}
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

            <div className="col-lg-8">
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
                          <div className="mt-10">
                            <h6>
                              Contract ID: <span>CI1011</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body pt-15">
                  <div className="d-flex flex-wrap justify-content-between gap-10 mb-4">
                    <div></div>
                    <div className="d-flex align-items-center gap-10">
                      <a
                        href="/job-details"
                        className="btn btn-outline-primary btn-md"
                      >
                        <i className="ri-eye-fill"></i> View Job
                      </a>

                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#addNewEmployee"
                        className="btn btn-outline-primary btn-md"
                      >
                        <i className="ri-edit-2-line"></i> Edit Contract
                      </button>
                    </div>
                  </div>

                  <div className="mb-20">
                    <h4 className="mb-20">Contract Details</h4>
                    <div className="row" style={{ fontSize: "16px" }}>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Rate Offered:</strong> &#8358;130,000 per
                          month
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Last Updated:</strong> Nov 11, 2025 05:00 PM
                        </p>
                      </div>

                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Start Date:</strong> Nov 6, 2025
                        </p>
                      </div>

                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>End Date:</strong> Dec 31, 2026
                        </p>
                      </div>

                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Shift Start Time:</strong> 09:00 AM
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Shift End Time:</strong> 05:00 PM
                        </p>
                      </div>

                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Duration:</strong> 8 hours
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-0">
                          <strong>Shift Type:</strong> Day
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold fs-16 mb-10">
                      Attached Files
                    </label>

                    <input
                      className="form-control flatpickr-input"
                      type="text"
                      value={"Contract-details.pdf"}
                      disabled
                    />
                  </div>

                  <div className="mb-15 mt-30">
                    <h4 className="mb-15"> Description</h4>
                    <p>
                      This contract covers the employment of Chinonso Okafor as
                      a Frontend Developer responsible for building and
                      maintaining the client’s internal dashboard and
                      user-facing applications.
                    </p>
                  </div>

                  <div className="mb-15 mt-20">
                    <h5 className="mb-1">Key Terms:</h5>
                    <ul className="list-bullet">
                      <ul className="list-unstyled mb-0">
                        <li> Overtime pay available for weekend shifts</li>
                        <li> Leave days: 15 per year</li>
                        <li> Early termination requires 2 weeks’ notice</li>
                      </ul>
                    </ul>
                  </div>

                  <div className="mb-15">
                    <h4 className="mb-15">Health & Safety</h4>
                    <p>
                      Candidate is expected to comply with all site and digital
                      safety protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="mb-20">Candidate Details</h2>
                  <div className="text-center">
                    <div className="avatar avatar-xxl radius-100">
                      <img
                        src="/assets/images/avatar/avatar-thumb-001.webp"
                        alt="image not found"
                        id="profileImage"
                        className="radius-100"
                      />
                    </div>
                    <span className="d-block fw-semibold fs-16 text-muted">
                      Chinonso Okafor
                    </span>

                    <p className="mb-10 mt-20">
                      <strong>Email:</strong> nonsookafor99@gmail.com
                    </p>
                    <p className="mb-10">
                      <strong>Compliance Status:</strong>{" "}
                      <span className="badge bg-label-info">
                        <i className="ri-time-line"></i>Pending
                      </span>
                    </p>
                    <p className="mb-15">
                      <strong>Induction Status:</strong>{" "}
                      <span className="badge bg-label-success">
                        <i className="ri-check-line"></i> Completed
                      </span>
                    </p>

                    <p className="mb-5">
                      <strong>Date Accepted:</strong> Nov 12, 2025
                    </p>
                  </div>

                  <button className="btn btn-outline-primary w-100 mb-10 mt-30">
                    <i className="ri-send-plane-fill"></i>Send Message
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <button className="btn btn-outline-danger w-100 mb-10">
                    <i className="ri-delete-bin-5-line"></i> Terminate Contract
                  </button>
                  <button className="btn btn-outline-info w-100 mb-10">
                    <i className="ri-send-plane-fill"></i> Send Contract
                  </button>
                  <button className="btn btn-outline-warning w-100">
                    <i className="ri-download-2-line"></i>Download Contract
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* start edit contract modal */}
          <ContractForm type="edit" />
          {/* end edit contract model */}
        </div>
      </div>
    </div>
  );
};

export default ContractDetails;
