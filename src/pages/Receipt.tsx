const Receipt = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Receipt</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="/receipt">
                        Receipt
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
                      <a href="/payment">
                        Payment
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

            <div className="row justify-center">
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="invoice-wrapper">
                      <div className="invoice-header">
                        <h1 className="fs-32 text-center mb-15">Receipt</h1>

                        <div className="row gy-15">
                          <div className="col-sm-6 col-12">
                            <div className="company-info">
                              <div className="invoice-logo mb-15">
                                <img
                                  className="light-logo"
                                  src="/Employer/assets/images/logo/company-logo.png"
                                  alt="Company Logo"
                                  style={{
                                    borderRadius: "8px",
                                    height: "150px",
                                    width: "150px",
                                  }}
                                />
                                <img
                                  className="dark-logo"
                                  src="/Employer/assets/images/logo/company-logo.png"
                                  alt="Company Logo"
                                  style={{
                                    borderRadius: "8px",
                                    height: "150px",
                                    width: "150px",
                                  }}
                                />
                              </div>
                              <h5 className="mb-5">Oxford Technologies</h5>
                              <p className="mb-5">
                                42 Admiralty Way, Lekki Phase 1, <br /> Lagos,
                                Nigeria
                              </p>
                              <p className="mb-5">info@oxford.com</p>
                              <p>+234 813 456 7890</p>
                            </div>
                          </div>
                          <div className="col-sm-6 col-12">
                            <div className="employee-info text-end text-xs-start">
                              <h2 className="text-heading mb-10">
                                Trxn ID: #12345
                              </h2>

                              <p className="mb-5">
                                <strong>Payment Date:</strong>November 11, 2025
                              </p>
                              <p>
                                <strong>Billing Period:</strong> Nov 1, 2025 -
                                Nov 31, 2025
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-bill-info mb-25">
                        <div className="row gy-15 justify-between">
                          <div className="col-12">
                            <div className="text-center">
                              <h4 className="text-primary mb-10">Bill to :</h4>
                              <h5 className="mb-5">Chinonso Okafor</h5>
                              <h6 className="mb-5"> Frontend Developer</h6>
                              <p className="mb-5">
                                15 Herbert Macaulay Road, Yaba,
                                <br /> Lagos, Nigeria
                              </p>
                              <a
                                className="mb-5 d-block"
                                href="javascript:void(0);"
                              >
                                chinonsookafor99@gmail.com
                              </a>
                              <a className="" href="javascript:void(0);">
                                +234 806 234 9876
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-description">
                        <div className="card">
                          <div className="mb-15">
                            <label htmlFor="tax" className="form-label">
                              Total Hours Worked
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="tax"
                              value="200"
                              disabled
                            />
                          </div>
                          <div className="mb-15">
                            <label
                              htmlFor="currency-field"
                              className="form-label"
                            >
                              Currency
                            </label>
                            <select
                              className="form-select"
                              id="currency-field"
                              disabled
                            >
                              <option value="NGN" selected>
                                Nigerian Naira (NGN)
                              </option>
                              <option value="EUR">Euro (EUR)</option>
                              <option value="GBP">British Pound (GBP)</option>
                              <option value="JPY">Japanese Yen (JPY)</option>
                              <option value="AUD">
                                Australian Dollar (AUD)
                              </option>
                              <option value="CAD">Canadian Dollar (CAD)</option>
                              <option value="CNY">Chinese Yuan (CNY)</option>
                              <option value="INR">Indian Rupee (INR)</option>
                              <option value="SGD">
                                Singapore Dollar (SGD)
                              </option>
                              <option value="CHF">Swiss Franc (CHF)</option>
                            </select>
                          </div>

                          <div className="mb-15">
                            <label htmlFor="discount" className="form-label">
                              Total Amount
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="discount"
                              value={"255,450.00"}
                            />
                          </div>
                        </div>

                        <p className="pt-10">
                          <span className="text-black fw-7">Notes:&nbsp;</span>{" "}
                          It has been a pleasure collaborating with you and your
                          team. We hope you consider us for any future freelance
                          opportunities. Thank you!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="sidebar-sticky">
                  <div className="card">
                    <div className="d-flex-column flex-wrap gap-10">
                      <a href="#" className="btn btn-info w-100">
                        <i className="ri-printer-line"></i> Print
                      </a>

                      <a href="#" className="btn btn-warning w-100">
                        <i className="ri-download-2-line"></i> Download
                      </a>
                      <button type="button" className="btn btn-primary w-100">
                        <i className="ri-send-plane-line"></i> Send
                      </button>
                      <a href="#" className="btn btn-danger w-100">
                        <i className="ri-delete-bin-line"></i> Delete
                      </a>
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

export default Receipt;
