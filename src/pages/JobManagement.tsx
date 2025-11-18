import { useState } from "react";
import { WithContext as ReactTags, Tag } from "react-tag-input";

const suggestions = [
  { id: "React.js", text: "React.js", className: "" },
  { id: "Node.js", text: "Node.js", className: "" },
  { id: "JavaScript (ES6+)", text: "JavaScript (ES6+)", className: "" },
  { id: "HTML5", text: "HTML5", className: "" },
  { id: "CSS3", text: "CSS3", className: "" },
  { id: "MongoDB", text: "MongoDB", className: "" },
  { id: "Express.js", text: "Express.js", className: "" },
  { id: "TypeScript", text: "TypeScript", className: "" },
  { id: "REST API Development", text: "REST API Development", className: "" },
  { id: "Git & Version Control", text: "Git & Version Control", className: "" },
];

const JobManagement = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  const handleDelete = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const onTagUpdate = (index: number, newTag: Tag) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1, newTag);
    setTags(updatedTags);
  };

  const handleAddition = (tag: Tag) => {
    setTags((prevTags) => {
      return [...prevTags, tag];
    });
  };

  const handleDrag = (tag: Tag, currPos: number, newPos: number) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const onClearAll = () => {
    setTags([]);
  };

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
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-primary-transparent text-primary">
                      <i className="ri-user-3-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">Total Jobs</span>
                      <h2 className="mb-5">53</h2>
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
                      <span className="d-block fs-16 mb-5">Active Jobs</span>
                      <h2 className="mb-5">30</h2>
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
                    <div className="avatar avatar-xl bg-info-transparent text-info">
                      <i className="ri-folder-open-fill fs-42"></i>
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">Expired Jobs</span>
                      <h2 className="mb-5">12</h2>
                      <span className="text-success">
                        +3
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
                      <span className="d-block fs-16 mb-5">
                        Candidates per Job
                      </span>
                      <h2 className="mb-5">26</h2>
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
            </>

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
                        <option value={"rates"}>Rates offered</option>
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
                          <th>Job ID</th>
                          <th>Title</th>
                          <th>Type</th>
                          <th>Location</th>
                          <th>Date Created</th>
                          <th>Expiry Date</th>
                          <th>Number of Applicants</th>
                          <th>Rates offered</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#J1023</td>
                          <td>IT Support Technician</td>
                          <td>Temporary</td>
                          <td>Lagos</td>
                          <td>Nov 10, 2025</td>
                          <td>Nov 20, 2025</td>
                          <td>12</td>
                          <td>&#8358;50,000 - &#8358;70,000</td>
                          <td>
                            <span className="badge bg-label-success">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex-items gap-5">
                              <a
                                className="btn-icon btn-success-light"
                                href="/job-details"
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

                        <tr>
                          <td>#J1024</td>
                          <td>Front-End Developer</td>
                          <td>Permanent</td>
                          <td>Abuja</td>
                          <td>Nov 8, 2025</td>
                          <td>Dec 8, 2025</td>
                          <td>8</td>
                          <td>&#8358;120,000 - &#8358;150,000</td>
                          <td>
                            <span className="badge bg-label-primary">
                              Expired
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

                        <tr>
                          <td>#J1025</td>
                          <td>Project Manager</td>
                          <td>Contract</td>
                          <td>Port Harcourt</td>
                          <td>Nov 5, 2025</td>
                          <td>Nov 30, 2025</td>
                          <td>5</td>
                          <td>&#8358;200,000 - &#8358;250,000</td>
                          <td>
                            <span className="badge bg-label-danger">
                              Closed
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

                        <tr>
                          <td>#J1026</td>
                          <td>HR Specialist</td>
                          <td>Permanent</td>
                          <td>Lagos</td>
                          <td>Nov 12, 2025</td>
                          <td>Dec 12, 2025</td>
                          <td>10</td>
                          <td>&#8358;90,000 - &#8358;110,000</td>
                          <td>
                            <span className="badge bg-label-success">
                              Active
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

                        <tr>
                          <td>#J1027</td>
                          <td>Graphic Designer</td>
                          <td>One-off shift</td>
                          <td>Ibadan</td>
                          <td>Nov 7, 2025</td>
                          <td>Nov 7, 2025</td>
                          <td>3</td>
                          <td>&#8358;25,000 - &#8358;35,000</td>
                          <td>
                            <span className="badge bg-label-danger">
                              Closed
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

                        <tr>
                          <td>#J1028</td>
                          <td>Data Analyst</td>
                          <td>Contract</td>
                          <td>Kano</td>
                          <td>Nov 2, 2025</td>
                          <td>Nov 22, 2025</td>
                          <td>6</td>
                          <td>&#8358;80,000 - &#8358;100,000</td>
                          <td>
                            <span className="badge bg-label-success">
                              Active
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

                        <tr>
                          <td>#J1029</td>
                          <td>Marketing Executive</td>
                          <td>Permanent</td>
                          <td>Lagos</td>
                          <td>Nov 9, 2025</td>
                          <td>Dec 9, 2025</td>
                          <td>9</td>
                          <td>&#8358;70,000 - &#8358;90,000</td>
                          <td>
                            <span className="badge bg-label-primary">
                              Expired
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

                        <tr>
                          <td>#J1030</td>
                          <td>Network Engineer</td>
                          <td>Temporary</td>
                          <td>Port Harcourt</td>
                          <td>Nov 11, 2025</td>
                          <td>Nov 25, 2025</td>
                          <td>7</td>
                          <td>&#8358;100,000 - &#8358;130,000</td>
                          <td>
                            <span className="badge bg-label-danger">
                              Closed
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

                        <tr>
                          <td>#J1031</td>
                          <td>Business Analyst</td>
                          <td>Contract</td>
                          <td>Abuja</td>
                          <td>Nov 6, 2025</td>
                          <td>Nov 26, 2025</td>
                          <td>4</td>
                          <td>&#8358;110,000 - &#8358;140,000</td>
                          <td>
                            <span className="badge bg-label-success">
                              Active
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

                        <tr>
                          <td>#J1032</td>
                          <td>Content Writer</td>
                          <td>One-off shift</td>
                          <td>Ibadan</td>
                          <td>Nov 3, 2025</td>
                          <td>Nov 3, 2025</td>
                          <td>2</td>
                          <td>&#8358;20,000 - &#8358;30,000</td>
                          <td>
                            <span className="badge bg-label-danger">
                              Closed
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

                        <tr>
                          <td>#J1030</td>
                          <td>Network Engineer</td>
                          <td>Temporary</td>
                          <td>Port Harcourt</td>
                          <td>Nov 11, 2025</td>
                          <td>Nov 25, 2025</td>
                          <td>7</td>
                          <td>&#8358;100,000 - &#8358;130,000</td>
                          <td>
                            <span className="badge bg-label-danger">
                              Closed
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

                        <tr>
                          <td>#J1031</td>
                          <td>Business Analyst</td>
                          <td>Contract</td>
                          <td>Abuja</td>
                          <td>Nov 6, 2025</td>
                          <td>Nov 26, 2025</td>
                          <td>4</td>
                          <td>&#8358;110,000 - &#8358;140,000</td>
                          <td>
                            <span className="badge bg-label-success">
                              Active
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

                        <tr>
                          <td>#J1032</td>
                          <td>Content Writer</td>
                          <td>One-off shift</td>
                          <td>Ibadan</td>
                          <td>Nov 3, 2025</td>
                          <td>Nov 3, 2025</td>
                          <td>2</td>
                          <td>&#8358;20,000 - &#8358;30,000</td>
                          <td>
                            <span className="badge bg-label-danger">
                              Closed
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
                    Add New Job
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
                          <span className="badge rounded-pill bg-primary avatar-badge">
                            <input
                              type="file"
                              name="photo"
                              className="p-absolute w-100 h-100 op-0 pl-0 pr-0"
                              id="profileImageChange"
                            />
                            <i className="ri-camera-line"></i>
                          </span>
                        </div>
                        <span className="d-block fw-5 text-muted">
                          Job Image
                        </span>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="role" className="form-label">
                        Role
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="role"
                        placeholder="Role"
                      />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="grade" className="form-label">
                        Grade Required
                      </label>
                      <select id="grade" name="grade" className="form-control">
                        <option value="">Select Grade</option>
                        <option value="junior">Junior</option>
                        <option value="mid">Mid-level</option>
                        <option value="senior">Senior</option>
                        <option value="lead">Lead</option>
                        <option value="manager">Manager</option>
                      </select>
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="skills" className="form-label">
                        Essential Skills
                      </label>
                      <ReactTags
                        tags={tags}
                        inputFieldPosition="top"
                        suggestions={suggestions}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        onTagUpdate={onTagUpdate}
                        editable
                        clearAll
                        onClearAll={onClearAll}
                        maxTags={15}
                        allowAdditionFromPaste
                        placeholder="Press enter to add new skill"
                        classNames={{
                          tagInput: "tag-container",
                          tagInputField: "tag-input form-control",
                          tag: "btn btn-primary selected-tag",
                          remove: "remove-tag",
                          clearAll: "clear-all-tags",
                          selected: "selected-tag-container",
                          editTagInputField: "form-control",
                          suggestions: "tag-suggestions",
                        }}
                      />
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="skills2" className="form-label">
                        Additional Skills
                      </label>
                      <ReactTags
                        tags={tags}
                        inputFieldPosition="top"
                        suggestions={suggestions}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        onTagUpdate={onTagUpdate}
                        editable
                        clearAll
                        onClearAll={onClearAll}
                        maxTags={15}
                        allowAdditionFromPaste
                        placeholder="Press enter to add new skill"
                        classNames={{
                          tagInput: "tag-container",
                          tagInputField: "tag-input form-control",
                          tag: "btn btn-primary selected-tag",
                          remove: "remove-tag",
                          clearAll: "clear-all-tags",
                          selected: "selected-tag-container",
                          editTagInputField: "form-control",
                          suggestions: "tag-suggestions",
                        }}
                      />
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>

                      <select id="country" className="form-control">
                        <option value="">Select Country</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="kenya">Kenya</option>
                        <option value="ghana">Ghana</option>
                        <option value="south-africa">South Africa</option>
                        <option value="egypt">Egypt</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="state" className="form-label">
                        State / County
                      </label>
                      <select id="state" className="form-control">
                        <option value="">Select State</option>
                        <option value="lagos">Lagos</option>
                        <option value="abuja-fct">Abuja (FCT)</option>
                        <option value="rivers">Rivers</option>
                        <option value="oyo">Oyo</option>
                        <option value="enugu">Enugu</option>
                      </select>
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
                      />
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="shiftType" className="form-label">
                        Shift Type
                      </label>
                      <select className="form-control" id="shiftType">
                        <option value="">Select Shift Type</option>
                        <option value="day">Day</option>
                        <option value="night">Night</option>
                      </select>
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="address" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows={3}
                        placeholder="Description"
                        spellCheck="false"
                      ></textarea>
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="address" className="form-label">
                        Specific Requirements
                      </label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows={3}
                        placeholder="Specific Requirements"
                        spellCheck="false"
                      ></textarea>
                    </div>

                    <div className="col-xl-12">
                      <label htmlFor="address" className="form-label">
                        Health & Safety Issues
                      </label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows={3}
                        placeholder="Health & Safety Issues"
                        spellCheck="false"
                      ></textarea>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="rateMin" className="form-label">
                        Rate Offered (Min)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="rateMin"
                        placeholder="Minimum Rate"
                      />
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="rateMax" className="form-label">
                        Rate Offered (Max)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="rateMax"
                        placeholder="Maximum Rate"
                      />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="currency" className="form-label">
                        Currency
                      </label>
                      <select className="form-control" id="currency">
                        <option value="ngn">₦ NGN</option>
                        <option value="usd">$ USD</option>
                        <option value="eur">€ EUR</option>
                        <option value="gbp">£ GBP</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="expiryDate" className="form-label">
                        Job Expiry Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="expiryDate"
                        placeholder="Expiry Date"
                      />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="salaryFrequency" className="form-label">
                        Salary Frequency
                      </label>
                      <select className="form-control" id="salaryFrequency">
                        <option value="">Select Frequency</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="jobType" className="form-label">
                        Job Type
                      </label>
                      <select className="form-control" id="jobType">
                        <option value="permanent">Permanent</option>
                        <option value="temporary">Temporary</option>
                        <option value="contract">Contract</option>
                        <option value="one-off-shift">One-off Shift</option>
                        <option value="internship">Internship</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end create job model */}

          {/* start edit job model */}
          <div
            className="modal fade"
            id="employeeEdit"
            tabIndex={-1}
            aria-labelledby="employeeEditLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-16" id="addNewEmployeeLabel">
                    Edit Job
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
                          <span className="badge rounded-pill bg-primary avatar-badge">
                            <input
                              type="file"
                              name="photo"
                              className="p-absolute w-100 h-100 op-0 pl-0 pr-0"
                              id="profileImageChange"
                            />
                            <i className="ri-camera-line"></i>
                          </span>
                        </div>
                        <span className="d-block fw-5 text-muted">
                          Job Image
                        </span>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="role" className="form-label">
                        Role
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="role"
                        placeholder="Role"
                      />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="grade" className="form-label">
                        Grade Required
                      </label>
                      <select id="grade" name="grade" className="form-control">
                        <option value="">Select Grade</option>
                        <option value="junior">Junior</option>
                        <option value="mid">Mid-level</option>
                        <option value="senior">Senior</option>
                        <option value="lead">Lead</option>
                        <option value="manager">Manager</option>
                      </select>
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="skills" className="form-label">
                        Essential Skills
                      </label>
                      <ReactTags
                        tags={tags}
                        inputFieldPosition="top"
                        suggestions={suggestions}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        onTagUpdate={onTagUpdate}
                        editable
                        clearAll
                        onClearAll={onClearAll}
                        maxTags={15}
                        allowAdditionFromPaste
                        placeholder="Press enter to add new skill"
                        classNames={{
                          tagInput: "tag-container",
                          tagInputField: "tag-input form-control",
                          tag: "btn btn-primary selected-tag",
                          remove: "remove-tag",
                          clearAll: "clear-all-tags",
                          selected: "selected-tag-container",
                          editTagInputField: "form-control",
                          suggestions: "tag-suggestions",
                        }}
                      />
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="skills2" className="form-label">
                        Additional Skills
                      </label>
                      <ReactTags
                        tags={tags}
                        inputFieldPosition="top"
                        suggestions={suggestions}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        onTagUpdate={onTagUpdate}
                        editable
                        clearAll
                        onClearAll={onClearAll}
                        maxTags={15}
                        allowAdditionFromPaste
                        placeholder="Press enter to add new skill"
                        classNames={{
                          tagInput: "tag-container",
                          tagInputField: "tag-input form-control",
                          tag: "btn btn-primary selected-tag",
                          remove: "remove-tag",
                          clearAll: "clear-all-tags",
                          selected: "selected-tag-container",
                          editTagInputField: "form-control",
                          suggestions: "tag-suggestions",
                        }}
                      />
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>

                      <select id="country" className="form-control">
                        <option value="">Select Country</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="kenya">Kenya</option>
                        <option value="ghana">Ghana</option>
                        <option value="south-africa">South Africa</option>
                        <option value="egypt">Egypt</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="state" className="form-label">
                        State / County
                      </label>
                      <select id="state" className="form-control">
                        <option value="">Select State</option>
                        <option value="lagos">Lagos</option>
                        <option value="abuja-fct">Abuja (FCT)</option>
                        <option value="rivers">Rivers</option>
                        <option value="oyo">Oyo</option>
                        <option value="enugu">Enugu</option>
                      </select>
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
                      />
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="shiftType" className="form-label">
                        Shift Type
                      </label>
                      <select className="form-control" id="shiftType">
                        <option value="">Select Shift Type</option>
                        <option value="day">Day</option>
                        <option value="night">Night</option>
                      </select>
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="address" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows={3}
                        placeholder="Description"
                        spellCheck="false"
                      ></textarea>
                    </div>
                    <div className="col-xl-12">
                      <label htmlFor="address" className="form-label">
                        Specific Requirements
                      </label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows={3}
                        placeholder="Specific Requirements"
                        spellCheck="false"
                      ></textarea>
                    </div>

                    <div className="col-xl-12">
                      <label htmlFor="address" className="form-label">
                        Health & Safety Issues
                      </label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows={3}
                        placeholder="Health & Safety Issues"
                        spellCheck="false"
                      ></textarea>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="rateMin" className="form-label">
                        Rate Offered (Min)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="rateMin"
                        placeholder="Minimum Rate"
                      />
                    </div>

                    <div className="col-xl-6">
                      <label htmlFor="rateMax" className="form-label">
                        Rate Offered (Max)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="rateMax"
                        placeholder="Maximum Rate"
                      />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="currency" className="form-label">
                        Currency
                      </label>
                      <select className="form-control" id="currency">
                        <option value="ngn">₦ NGN</option>
                        <option value="usd">$ USD</option>
                        <option value="eur">€ EUR</option>
                        <option value="gbp">£ GBP</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="expiryDate" className="form-label">
                        Job Expiry Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="expiryDate"
                        placeholder="Expiry Date"
                      />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="salaryFrequency" className="form-label">
                        Salary Frequency
                      </label>
                      <select className="form-control" id="salaryFrequency">
                        <option value="">Select Frequency</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="jobType" className="form-label">
                        Job Type
                      </label>
                      <select className="form-control" id="jobType">
                        <option value="permanent">Permanent</option>
                        <option value="temporary">Temporary</option>
                        <option value="contract">Contract</option>
                        <option value="one-off-shift">One-off Shift</option>
                        <option value="internship">Internship</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end edit job model */}
        </div>
      </div>
    </div>
  );
};

export default JobManagement;
