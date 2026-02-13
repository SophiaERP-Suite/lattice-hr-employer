import { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { GetJob, PublishJob } from "../api/JobApi";
import Hashids from "hashids";
import { JobDto } from "../types/Job";
import { toast, ToastContainer } from "react-toastify";
import { CheckCheck } from "lucide-react";

const JobDetails = () => {
  const params = useParams();
  const [job, setJob] = useState<JobDto>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const hashIds = new Hashids("LatticeHrEncode", 10);

  const hashId = useMemo(() => {
    return hashIds.decode(String(params.id))[0];
  }, [params.id]);

  useEffect(() => {
    fetchMyJobs();
  }, []);

  const fetchMyJobs = async () => {
    try {
      setLoading(true);
      const response = await GetJob(Number(hashId));
      console.log("res", response);
      if (!response) {
        return;
      } else {
        setJob(response.data);
      }
    } catch {
      setError("Could not get fetch details");
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  const editJob = () => {
    navigate(`../jobEdit/${hashIds.encode(String(hashId))}`);
  };

  const pubJob = async () => {
    try {
      setIsButtonLoading(true);
      const response = await PublishJob(Number(hashId));
      console.log("pub", response);
      if (response.status === 200 || response.status === 201) {
        const data = await response.json();

        if (data.success || data.status === 200) {
          toast.success("Job published successfully!");

          await fetchMyJobs();
        } else {
          toast.error(data.message || "Action Unsuccessful");
          await fetchMyJobs();
        }
      } else {
        toast.error("Action Unsuccessful");
      }
    } catch (error) {
      console.error("Publishing error:", error);
      toast.error("Job Publishing Failed");
    } finally {
      setIsButtonLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="app-content-area">
        <div className="app-content-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div
                  className="spinner-border text-primary mt20 d-flex justify-content-center align-items-center"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoading && error) {
    return (
      <div className="app-content-area">
        <div className="app-content-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body pt-15">
                    <div className="d-flex flex-wrap justify-content-between gap-10 mb-4">
                      <div>{error}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-content-area">
      <ToastContainer />
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Job Details</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <NavLink to="/job-details">
                        Job Details{" "}
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
                    <li className="breadcrumb-item active" aria-current="page">
                      <NavLink to="/job-management">
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
                      </NavLink>
                    </li>

                    <li className="breadcrumb-item">
                      <NavLink to="/dashboard">Home</NavLink>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="">
                    <h2 className="mb-15">{job?.jobTitle}</h2>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-big">
                        <img
                          src={`http://localhost:5127/${job?.jobPhoto}`}
                          alt="Company Logo"
                          className="radius-50"
                        />
                      </div>
                      <div>
                        <h4 className="mb-5">
                          <span
                            className={`badge me-2
                          ${job?.published === true ? "bg-success" : "bg-warning"}
                          `}
                          >
                            {" "}
                            {job?.published === true
                              ? "Published"
                              : "UnPublished"}
                          </span>
                        </h4>
                        <div className="text-muted">
                          <span className="me-3">
                            <i className="ri-map-pin-line"></i> {job?.city},{" "}
                            {job?.state}, {job?.country}
                          </span>
                          <span>
                            <i className="ri-briefcase-4-line"></i>{" "}
                            {job?.jobType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body pt-15">
                  <div className="d-flex flex-wrap justify-content-between gap-10 mb-4">
                    <div></div>
                    <div className="d-flex align-items-center gap-10">
                      <NavLink to={`/interview/${hashIds.encode(Number(job?.jobInterviewId))}`}
                        className="btn btn-success btn-md"
                      >
                        <i className="ri-edit-2-line"></i> Edit Interview
                      </NavLink>
                      <button
                        onClick={editJob}
                        className="btn btn-warning btn-md"
                      >
                        <i className="ri-edit-2-line"></i> Edit Job
                      </button>
                      <button
                        onClick={() => pubJob()}
                        className="btn btn-info btn-md"
                      >
                        {job?.published === true ? (
                          <i className="ri-close-fill"></i>
                        ) : (
                          <CheckCheck />
                        )}
                        {job?.published === true
                          ? "UnPublish Job"
                          : "Publish Job"}
                      </button>
                    </div>
                  </div>

                  <div className="mb-20">
                    <h4 className="mb-20">Job Details</h4>
                    <hr />
                    <div className="row mt-15" style={{ fontSize: "16px" }}>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Salary:</strong>{" "}
                          {job?.jobAmount?.toLocaleString("en-NG", {
                            style: "currency",
                            currency: job?.currency || "NGN",
                          })}
                        </p>
                        <p className="mb-5">
                          <strong>Job Type:</strong> Full-time
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Date Created:</strong>{" "}
                          {job?.dateCreated &&
                            new Date(job.dateCreated).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              },
                            )}
                        </p>
                        <p className="mb-5">
                          <strong>Expiry Date:</strong>{" "}
                          {job?.jobExpiration &&
                            new Date(job.jobExpiration).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              },
                            )}
                        </p>
                        {/* <p className="mb-0">
                          <strong>Job Status:</strong>{" "}
                          {job?.publishStatus === false
                            ? "Published"
                            : "UnPublished"}
                        </p> */}
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Grade Required:</strong> {job?.grade}
                        </p>
                        <p className="mb-5">
                          <strong>Location:</strong> {job?.city}, {job?.state},{" "}
                          {job?.country}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Job Sector:</strong> {job?.jobSector}
                        </p>
                        <p className="mb-5">
                          <strong>Job Category:</strong> {job?.jobCategory}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Work Mode:</strong> {job?.workMode}
                        </p>
                        <p className="mb-5">
                          <strong>View Scope:</strong> {job?.jobViewScope}
                        </p>
                      </div>

                      {/* <div className="col-md-6">
                        <p className="mb-5">
                          <strong>Start Date:</strong> Nov 15, 2025
                        </p>
                        <p className="mb-0">
                          <strong>End Date:</strong> Jan 31, 2026
                        </p>
                      </div> */}
                      {job?.jobType === "Shift" && (
                        <>
                          <div className="col-md-6">
                            <p className="mb-5">
                              <strong>Shift Start Time:</strong>{" "}
                              {job?.shiftStartTime}
                            </p>
                            <p className="mb-5">
                              <strong>Shift End Time:</strong>{" "}
                              {job?.shiftEndTime}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p className="mb-5">
                              <strong>Duration:</strong> 8 hours
                            </p>
                            <p className="mb-0">
                              <strong>Shift Type:</strong> Day
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="mb-15">
                    <h4 className="mb-15">Job Description</h4>
                    <hr />
                    <p className="mt-15">{job?.jobDescription}</p>
                  </div>

                  {/* <div className="mb-15">
                    <h5 className="mb-1">Required Skills:</h5>
                    <ul className="list-bullet">
                      <li>HTML5 & CSS3</li>
                      <li>JavaScript (ES6+)</li>
                      <li>React.js or Vue.js</li>
                      <li>Responsive Web Design</li>
                      <li>Version Control with Git</li>
                      <li>Basic UX/UI principles</li>
                    </ul>
                  </div>
                  <div className="mb-15">
                    <h5 className="mb-10">Additional Skills:</h5>
                    <ul className="list-bullet">
                      <li>TypeScript</li>
                      <li>RESTful APIs integration</li>
                      <li>Performance optimization</li>
                    </ul>
                  </div> */}

                  <div className="mb-15">
                    <h4 className="mb-15">Job Requirements</h4>
                    <hr />
                    <p className="mt-15">{job?.jobRequirement}</p>
                  </div>

                  <div className="mb-15">
                    <h4 className="mb-15">Job Responsibility</h4>
                    <hr />
                    <p className="mt-15">{job?.jobResponsibility}</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header justify-between">
                    <h4 className="d-flex-items gap-10">
                      Qualified Candidates
                    </h4>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: "2rem",
                      }}
                    >
                      <div className="dataTables-sorting-control ">
                        <select className="form-select sorting-dropdown">
                          <option value="">All Locations</option>
                          <option value="lagos">Lagos</option>
                          <option value="abuja">Abuja</option>
                          <option value="port-harcourt">Port Harcourt</option>
                        </select>
                      </div>

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
                        id="dataTableDefault"
                        className="table text-nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Candidate</th>
                            <th>Location</th>
                            <th>Compliance Status</th>
                            <th>Skills</th>
                            <th>Grade</th>
                            <th className="recent-job-action">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex-items gap-10">
                                <div className="avatar radius-100">
                                  <img
                                    src="/Employer/assets/images/avatar/avatar-thumb-001.webp"
                                    alt="image not found"
                                    className="radius-100"
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#">Sarah Johnson</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Lagos, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>HTML 5, CSS, Javascript</td>
                            <td>Senior level</td>

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
                                <div className="avatar radius-100">
                                  <img
                                    src="/Employer/assets/images/avatar/avatar-thumb-002.webp"
                                    alt="image not found"
                                    className="radius-100"
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#">James Smith</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Abuja, Nigeria</td>
                            <td>
                              <span className="badge bg-label-success">
                                <i className="ri-check-line"></i> Verified
                              </span>
                            </td>
                            <td>React, Node.js, MongoDB</td>
                            <td>Mid-level</td>
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
                                <div className="avatar radius-100">
                                  <img
                                    src="/Employer/assets/images/avatar/avatar-thumb-003.webp"
                                    alt="image not found"
                                    className="radius-100"
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#">Amaka Okafor</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Port Harcourt, Nigeria</td>
                            <td>
                              <span className="badge bg-label-warning">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Vue.js, HTML5, CSS3</td>
                            <td>Junior</td>
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
                                <div className="avatar radius-100">
                                  <img
                                    src="/Employer/assets/images/avatar/avatar-thumb-004.webp"
                                    alt="image not found"
                                    className="radius-100"
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#">Chinedu Eze</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Kano, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Angular, TypeScript, Sass</td>
                            <td>Mid-level</td>
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
                                <div className="avatar radius-100">
                                  <img
                                    src="/Employer/assets/images/avatar/avatar-thumb-005.webp"
                                    alt="image not found"
                                    className="radius-100"
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#">Fatima Musa</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Ibadan, Nigeria</td>
                            <td>
                              <span className="badge bg-label-success">
                                <i className="ri-check-line"></i> Verified
                              </span>
                            </td>
                            <td>React, Next.js, CSS</td>
                            <td>Senior</td>
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

              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header justify-between">
                    <h4 className="d-flex-items gap-10">Applied Candidates</h4>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: "2rem",
                      }}
                    >
                      <div className="dataTables-sorting-control ">
                        <select className="form-select sorting-dropdown">
                          <option value="">All Locations</option>
                          <option value="lagos">Lagos</option>
                          <option value="abuja">Abuja</option>
                          <option value="port-harcourt">Port Harcourt</option>
                        </select>
                      </div>

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

                  <div className="card-body pt-15">
                    <div className="table-responsive">
                      <table
                        id="dataTableDefault"
                        className="table text-nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Candidate</th>
                            <th>Location</th>
                            <th>Compliance Status</th>
                            <th>Date Applied</th>
                            <th>Skills</th>
                            <th>Grade</th>
                            <th className="recent-job-action">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex-items gap-10">
                                <div className="avatar radius-100">
                                  <img
                                    src="/Employer/assets/images/avatar/avatar-thumb-001.webp"
                                    alt="image not found"
                                    className="radius-100"
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#">Sarah Johnson</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Lagos, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Nov 9, 2025</td>
                            <td>HTML 5, CSS, Javascript</td>
                            <td>Senior level</td>

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
                              <div className="d-flex-items gap-10">
                                <div className="avatar radius-100">
                                  <img
                                    src="/Employer/assets/images/avatar/avatar-thumb-002.webp"
                                    alt="image not found"
                                    className="radius-100"
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#">James Smith</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Abuja, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Nov 8, 2025</td>
                            <td>React, Node.js, MongoDB</td>
                            <td>Mid-level</td>
                            <td className="recent-job-action">
                              <div className="d-flex-items gap-10 align-items-end">
                                <a
                                  className="btn-icon btn-success-light"
                                  href="#"
                                >
                                  <i className="ri-eye-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-primary-light"
                                  href="#"
                                >
                                  <i className="ri-send-plane-line"></i>
                                </a>
                                <a className="btn-icon btn-info-light" href="#">
                                  <i className="ri-checkbox-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-danger-light"
                                  href="#"
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex-items gap-10">
                                <div className="avatar radius-100">
                                  <img
                                    src="/Employer/assets/images/avatar/avatar-thumb-003.webp"
                                    alt="image not found"
                                    className="radius-100"
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#">Mary Williams</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Kano, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Nov 7, 2025</td>
                            <td>Vue.js, JavaScript, CSS</td>
                            <td>Junior level</td>
                            <td className="recent-job-action">
                              <div className="d-flex-items gap-10 align-items-end">
                                <a
                                  className="btn-icon btn-success-light"
                                  href="#"
                                >
                                  <i className="ri-eye-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-primary-light"
                                  href="#"
                                >
                                  <i className="ri-send-plane-line"></i>
                                </a>
                                <a className="btn-icon btn-info-light" href="#">
                                  <i className="ri-checkbox-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-danger-light"
                                  href="#"
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex-items gap-10">
                                <div className="avatar radius-100">
                                  <img
                                    src="/Employer/assets/images/avatar/avatar-thumb-004.webp"
                                    alt="image not found"
                                    className="radius-100"
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#">Michael Brown</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Port Harcourt, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Nov 6, 2025</td>
                            <td>Angular, TypeScript, SCSS</td>
                            <td>Mid-level</td>
                            <td className="recent-job-action">
                              <div className="d-flex-items gap-10 align-items-end">
                                <a
                                  className="btn-icon btn-success-light"
                                  href="#"
                                >
                                  <i className="ri-eye-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-primary-light"
                                  href="#"
                                >
                                  <i className="ri-send-plane-line"></i>
                                </a>
                                <a className="btn-icon btn-info-light" href="#">
                                  <i className="ri-checkbox-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-danger-light"
                                  href="#"
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </a>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex-items gap-10">
                                <div className="avatar radius-100">
                                  <img
                                    src="/Employer/assets/images/avatar/avatar-thumb-005.webp"
                                    alt="image not found"
                                    className="radius-100"
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#">Linda Davis</a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>Ibadan, Nigeria</td>
                            <td>
                              <span className="badge bg-label-primary">
                                <i className="ri-time-line"></i> Pending
                              </span>
                            </td>
                            <td>Nov 5, 2025</td>
                            <td>HTML, CSS, React</td>
                            <td>Senior level</td>
                            <td className="recent-job-action">
                              <div className="d-flex-items gap-10 align-items-end">
                                <a
                                  className="btn-icon btn-success-light"
                                  href="#"
                                >
                                  <i className="ri-eye-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-primary-light"
                                  href="#"
                                >
                                  <i className="ri-send-plane-line"></i>
                                </a>
                                <a className="btn-icon btn-info-light" href="#">
                                  <i className="ri-checkbox-line"></i>
                                </a>
                                <a
                                  className="btn-icon btn-danger-light"
                                  href="#"
                                >
                                  <i className="ri-delete-bin-line"></i>
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
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
