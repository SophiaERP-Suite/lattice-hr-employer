<div
  id="dataTableDefault_wrapper"
  className="dataTables_wrapper dt-bootstrap5 no-footer"
>
  <div className="row">
    <div className="col-sm-12 col-md-6">
      <div className="dataTables_length" id="dataTableDefault_length">
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
    <div className="col-sm-12 col-md-6">
      <div id="dataTableDefault_filter" className="dataTables_filter">
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
  </div>
  <div className="row">
    <div className="col-sm-12">
      <table
        id="dataTableDefault"
        className="table text-nowrap w-100 dataTable no-footer"
        aria-describedby="dataTableDefault_info"
      >
        <thead>
          <tr>
            <th
              scope="col"
              className="sorting_disabled sorting_asc"
              rowspan="1"
              colspan="1"
              aria-label="
                                                        
                                                    "
              style="width: 15.3906px;"
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </th>
            <th
              scope="col"
              className="sorting"
              tabindex="0"
              aria-controls="dataTableDefault"
              rowspan="1"
              colspan="1"
              aria-label="ID: activate to sort column ascending"
              style="width: 38.3438px;"
            >
              ID
            </th>
            <th
              className="sorting"
              tabindex="0"
              aria-controls="dataTableDefault"
              rowspan="1"
              colspan="1"
              aria-label="Employee Name: activate to sort column ascending"
              style="width: 138.859px;"
            >
              Employee Name
            </th>
            <th
              className="sorting"
              tabindex="0"
              aria-controls="dataTableDefault"
              rowspan="1"
              colspan="1"
              aria-label="Email: activate to sort column ascending"
              style="width: 141.297px;"
            >
              Email
            </th>
            <th
              className="sorting"
              tabindex="0"
              aria-controls="dataTableDefault"
              rowspan="1"
              colspan="1"
              aria-label="Phone: activate to sort column ascending"
              style="width: 86.75px;"
            >
              Phone
            </th>
            <th
              className="sorting"
              tabindex="0"
              aria-controls="dataTableDefault"
              rowspan="1"
              colspan="1"
              aria-label="Designation: activate to sort column ascending"
              style="width: 109.969px;"
            >
              Designation
            </th>
            <th
              className="sorting"
              tabindex="0"
              aria-controls="dataTableDefault"
              rowspan="1"
              colspan="1"
              aria-label="Department: activate to sort column ascending"
              style="width: 99.6406px;"
            >
              Department
            </th>
            <th
              className="sorting"
              tabindex="0"
              aria-controls="dataTableDefault"
              rowspan="1"
              colspan="1"
              aria-label="Join Date: activate to sort column ascending"
              style="width: 63.1562px;"
            >
              Join Date
            </th>
            <th
              className="sorting"
              tabindex="0"
              aria-controls="dataTableDefault"
              rowspan="1"
              colspan="1"
              aria-label="Contact: activate to sort column ascending"
              style="width: 66.2656px;"
            >
              Contact
            </th>
            <th
              className="sorting"
              tabindex="0"
              aria-controls="dataTableDefault"
              rowspan="1"
              colspan="1"
              aria-label="Status: activate to sort column ascending"
              style="width: 56.6562px;"
            >
              Status
            </th>
            <th
              className="sorting"
              tabindex="0"
              aria-controls="dataTableDefault"
              rowspan="1"
              colspan="1"
              aria-label="Action: activate to sort column ascending"
              style="width: 78px;"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd">
            <td className="sorting_1">
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
                  src="assets/images/avatar/avatar-thumb-001.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">John Smith</a>
              </h6>
            </td>
            <td>john.doe@example.com</td>
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
              <span className="badge bg-label-success">Active</span>
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
          <tr className="even">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox2"
                value=""
              />
            </td>
            <td>EMP002</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-002.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">Sarah Johnson</a>
              </h6>
            </td>
            <td>sarah.j@example.com</td>
            <td>(234) 567-8901</td>
            <td>Product Manager</td>
            <td>Marketing</td>
            <td>2022-05-10</td>
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
              <span className="badge bg-label-success">Active</span>
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
          <tr className="odd">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox3"
                value=""
              />
            </td>
            <td>EMP003</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-003.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">Michael Brown</a>
              </h6>
            </td>
            <td>michael.b@example.com</td>
            <td>(345) 678-9012</td>
            <td>UX Designer</td>
            <td>Design</td>
            <td>2023-03-22</td>
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
              <span className="badge bg-label-warning">On Leave</span>
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
          <tr className="even">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox4"
                value=""
              />
            </td>
            <td>EMP004</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-004.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">Emily Davis</a>
              </h6>
            </td>
            <td>emily.d@example.com</td>
            <td>(456) 789-0123</td>
            <td>HR Specialist</td>
            <td>Human Resources</td>
            <td>2021-11-05</td>
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
              <span className="badge bg-label-success">Active</span>
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
          <tr className="odd">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox5"
                value=""
              />
            </td>
            <td>EMP005</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-005.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">Robert Wilson</a>
              </h6>
            </td>
            <td>robert.w@example.com</td>
            <td>(567) 890-1234</td>
            <td>Data Analyst</td>
            <td>Analytics</td>
            <td>2022-08-17</td>
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
              <span className="badge bg-label-danger">Inactive</span>
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
          <tr className="even">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox6"
                value=""
              />
            </td>
            <td>EMP006</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-006.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">Jessica Lee</a>
              </h6>
            </td>
            <td>jessica.l@example.com</td>
            <td>(678) 901-2345</td>
            <td>Sales Executive</td>
            <td>Sales</td>
            <td>2023-06-30</td>
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
              <span className="badge bg-label-success">Active</span>
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
          <tr className="odd">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox7"
                value=""
              />
            </td>
            <td>EMP007</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-007.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">David Miller</a>
              </h6>
            </td>
            <td>david.m@example.com</td>
            <td>(789) 012-3456</td>
            <td>DevOps Engineer</td>
            <td>IT</td>
            <td>2022-02-14</td>
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
              <span className="badge bg-label-success">Active</span>
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
          <tr className="even">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox8"
                value=""
              />
            </td>
            <td>EMP008</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-008.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">Lisa Wong</a>
              </h6>
            </td>
            <td>lisa.w@example.com</td>
            <td>(890) 123-4567</td>
            <td>Marketing Director</td>
            <td>Marketing</td>
            <td>2021-09-08</td>
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
              <span className="badge bg-label-success">Active</span>
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
          <tr className="odd">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox9"
                value=""
              />
            </td>
            <td>EMP009</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-009.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">Daniel Kim</a>
              </h6>
            </td>
            <td>daniel.k@example.com</td>
            <td>(901) 234-5678</td>
            <td>Frontend Developer</td>
            <td>Engineering</td>
            <td>2023-04-12</td>
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
                  <i className="ri-slack-line"></i>
                </a>
                <a href="javascript:void(0);">
                  <i className="ri-github-line"></i>
                </a>
              </div>
            </td>
            <td>
              <span className="badge bg-label-warning">Remote</span>
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
          <tr className="even">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox10"
                value=""
              />
            </td>
            <td>EMP010</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-010.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">Olivia Martinez</a>
              </h6>
            </td>
            <td>olivia.m@example.com</td>
            <td>(012) 345-6789</td>
            <td>Finance Manager</td>
            <td>Finance</td>
            <td>2020-12-01</td>
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
                  <i className="ri-linkedin-line"></i>
                </a>
              </div>
            </td>
            <td>
              <span className="badge bg-label-success">Active</span>
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
          <tr className="odd">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox11"
                value=""
              />
            </td>
            <td>EMP011</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-011.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">James Wilson</a>
              </h6>
            </td>
            <td>james.w@example.com</td>
            <td>(123) 987-6543</td>
            <td>QA Engineer</td>
            <td>Quality Assurance</td>
            <td>2022-07-19</td>
            <td>
              <div className="d-flex-items gap-5 fs-16">
                <a href="javascript:void(0);">
                  <i className="ri-phone-line"></i>
                </a>
                <a href="javascript:void(0);">
                  <i className="ri-mail-line"></i>
                </a>
                <a href="javascript:void(0);">
                  <i className="ri-bug-line"></i>
                </a>
                <a href="javascript:void(0);">
                  <i className="ri-discord-line"></i>
                </a>
              </div>
            </td>
            <td>
              <span className="badge bg-label-purple">Part-time</span>
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
          <tr className="even">
            <td className="sorting_1">
              <input
                className="form-check-input"
                type="checkbox"
                id="rowCheckbox12"
                value=""
              />
            </td>
            <td>EMP012</td>
            <td className="d-flex-items gap-10">
              <div className="avatar radius-100">
                <img
                  className="radius-100"
                  src="assets/images/avatar/avatar-thumb-012.webp"
                  alt="image not found"
                />
              </div>
              <h6>
                <a href="hrm-employee-details.html">Sophia Chen</a>
              </h6>
            </td>
            <td>sophia.c@example.com</td>
            <td>(234) 876-5432</td>
            <td>UX Researcher</td>
            <td>Design</td>
            <td>2023-02-28</td>
            <td>
              <div className="d-flex-items gap-5 fs-16">
                <a href="javascript:void(0);">
                  <i className="ri-phone-line"></i>
                </a>
                <a href="javascript:void(0);">
                  <i className="ri-mail-line"></i>
                </a>
                <a href="javascript:void(0);">
                  <i className="ri-figma-line"></i>
                </a>
                <a href="javascript:void(0);">
                  <i className="ri-behance-line"></i>
                </a>
              </div>
            </td>
            <td>
              <span className="badge bg-label-success">Active</span>
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
  <div className="row">
    <div className="col-sm-12 col-md-5">
      <div
        className="dataTables_info"
        id="dataTableDefault_info"
        role="status"
        aria-live="polite"
      >
        Showing 1 to 12 of 12 entries
      </div>
    </div>
    <div className="col-sm-12 col-md-7">
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
              tabindex="0"
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
              tabindex="0"
              className="page-link"
            >
              1
            </a>
          </li>
          <li
            className="paginate_button page-item next disabled"
            id="dataTableDefault_next"
          >
            <a
              href="#"
              aria-controls="dataTableDefault"
              data-dt-idx="2"
              tabindex="0"
              className="page-link"
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>;
