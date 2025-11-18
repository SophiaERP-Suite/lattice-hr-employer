const InvoiceForm = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Invoice Form</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="">
                        Invoice Form
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

            <div className="row">
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="invoice-wrapper">
                      <h5 className="mb-20">Candidate Details</h5>

                      <div className="row gy-15 justify-content-between">
                        <div className="col-lg-6 mb-15">
                          <label htmlFor="companyName" className="form-label">
                            Candidate Name
                          </label>
                          <input
                            list="candidates"
                            placeholder="Enter candidate name"
                            className="form-control"
                          />
                          <datalist id="candidates">
                            <option value={"Chima Johnson"} />
                          </datalist>
                        </div>

                        <div className="col-lg-6 mb-15">
                          <label htmlFor="companyName" className="form-label">
                            Job Title
                          </label>
                          <select className="form-select">
                            <option value="">All Jobs</option>
                            <option value="software-dev">
                              Software Developer
                            </option>
                            <option value="frontend-dev">
                              Frontend Developer
                            </option>
                            <option value="it-support">
                              IT Support Technician
                            </option>
                          </select>
                        </div>
                      </div>

                      <h5 className="mt-10 mb-20">Invoice Details</h5>

                      <div className="row gy-15 justify-content-between">
                        <div className="col-lg-6 mb-15">
                          <label htmlFor="companyName" className="form-label">
                            Billing Period (Start)
                          </label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-lg-6 mb-15">
                          <label htmlFor="companyName" className="form-label">
                            Billing Period (End)
                          </label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-lg-6 mb-15">
                          <label htmlFor="companyName" className="form-label">
                            Due Date
                          </label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-lg-6 mb-15">
                          <label htmlFor="companyName" className="form-label">
                            Notes
                          </label>
                          <textarea className="form-control"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="sidebar-sticky">
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
                      <label htmlFor="currency-field" className="form-label">
                        Currency
                      </label>
                      <select className="form-select" id="currency-field">
                        <option value="">Select currency</option>
                        <option value="USD">US Dollar (USD)</option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="GBP">British Pound (GBP)</option>
                        <option value="JPY">Japanese Yen (JPY)</option>
                        <option value="AUD">Australian Dollar (AUD)</option>
                        <option value="CAD">Canadian Dollar (CAD)</option>
                        <option value="CNY">Chinese Yuan (CNY)</option>
                        <option value="INR">Indian Rupee (INR)</option>
                        <option value="SGD">Singapore Dollar (SGD)</option>
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
                        placeholder="Amount"
                      />
                    </div>
                  </div>
                  <div className="card">
                    <div className="d-flex-column flex-wrap gap-10">
                      <a href="#" className="btn btn-info w-100">
                        <i className="ri-eye-line"></i> Preview
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

export default InvoiceForm;
