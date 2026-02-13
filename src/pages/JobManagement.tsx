import { AlertCircle, CheckCheck, Eye, Pen, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { JobDto } from "../types/Job";
import { GetMyJobs } from "../api/JobApi";
import Hashids from "hashids";
import { formatDate, getTimeAgo } from "../utils/helpers/formatting";

const JobManagement = () => {
  const [jobs, setJobs] = useState<JobDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [totalJobs, setTotalJobs] = useState<number>(0);
  const [expiredCount, setExpiredCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    fetchMyJobs();
  }, []);

  const hashIds = new Hashids("LatticeHrEncode", 10);

  const fetchMyJobs = async () => {
    try {
      setIsLoading(true);
      const response = await GetMyJobs();

      if (response.length > 0) {
        const now = new Date();

        const expiredJobs = response.filter(
          (job: any) => job.jobExpiration && new Date(job.jobExpiration) < now,
        );

        const activeJobs = response.filter(
          (job: any) =>
            !job.jobExpiration || new Date(job.jobExpiration) >= now,
        );

        setJobs(response);
        setTotalJobs(response.length);
        setExpiredCount(expiredJobs.length);
        setActiveCount(activeJobs.length);
      }
    } catch {
      setTotalJobs(0);
      setError("Could not fetch any data");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error != "") {
    return (
      <div className="app-content-area">
        <div className="app-content-wrap">
          <div className="container-fluid">
            <div className="col-12 text-center h-100 w-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">
                  <AlertCircle />
                </span>
              </div>
              <p className="mt-2">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                      <NavLink to="/job-management">
                        Job Management{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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

            {/* Stats Cards */}
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className="avatar avatar-xl bg-primary-transparent text-primary">
                    <i className="ri-user-3-fill fs-42"></i>
                  </div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">Total Jobs</span>
                    <h2 className="mb-5">{totalJobs}</h2>
                    {/* <span className="text-success">
                      +3%
                      <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                    </span>
                    <span className="fs-12 text-black ml-5">
                      vs. last month
                    </span> */}
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
                    <h2 className="mb-5">{activeCount}</h2>
                    {/* <span className="text-success">
                      +3%
                      <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                    </span>
                    <span className="fs-12 text-black ml-5">
                      vs. last month
                    </span> */}
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
                    <h2 className="mb-5">{expiredCount}</h2>
                    {/* <span className="text-success">
                      +3
                      <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                    </span>
                    <span className="fs-12 text-black ml-5">this week</span> */}
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
                    <span className="fs-12 text-black ml-5">
                      vs. last month
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="d-flex-items gap-10">
                    My Jobs
                    {/* <span className="badge bg-label-primary">250</span> */}
                  </h4>
                  <div className="d-flex flex-wrap gap-15">
                    <NavLink to={"/jobForm"} className="btn btn-success">
                      <Plus /> Create Job
                    </NavLink>

                    <div className="dataTables-sorting-control">
                      <select className="form-select sorting-dropdown">
                        <option value="">Sort By:</option>
                        <option value="date_newest">Date: Newest First</option>
                        <option value="date_oldest">Date: Oldest First</option>
                        <option value="applicants">Number of Applicants</option>
                        <option value="rates">Rates offered</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Job Cards - Updated to use openEditModal */}
                <div className="card-body pt-15">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-20">
                    {jobs.map((job) => (
                      <div className="col-md-4 mb-4" key={job.jobId}>
                        <div
                          className="h-100 shadow-sm hover-shadow border transition-all"
                          style={{ borderRadius: "6px" }}
                        >
                          <div
                            className="card-img-top position-relative"
                            style={{ height: "120px" }}
                          >
                            {job.jobPhoto || job.jobPhoto ? (
                              <img
                                src={`http://localhost:5127/${job.jobPhoto}`}
                                alt={job.jobTitle}
                                className="w-100 h-100 object-fit-cover"
                              />
                            ) : (
                              <div className="w-100 h-100 bg-gradient-primary d-flex align-items-center justify-content-center">
                                <i className="ri-briefcase-line text-white fs-1"></i>
                              </div>
                            )}

                            {/* <span
                              className={`badge position-absolute top-10 end-10 ${getStatusBadgeClass(job.jobStatus)}`}
                            >
                              {job.jobStatus?.charAt(0).toUpperCase() +
                                job.jobStatus?.slice(1)}
                            </span> */}
                          </div>

                          <div className="card-body p-4">
                            <h5
                              className="card-title mb-2 text-truncate"
                              title={job.jobTitle}
                            >
                              {job.jobTitle}
                            </h5>
                            {/* <p className="text-black mb-3">
                              <i className="ri-building-line me-2"></i>
                              {job.companyName || "Not specified"}
                            </p> */}

                            <div className="row g-2 mb-3">
                              <div className="col-12">
                                <div className="d-flex align-items-center text-black">
                                  <i className="ri-map-pin-line me-2"></i>
                                  <small
                                    className="text-truncate"
                                    // title={job.location}
                                  >
                                    {job.state || "_"} {", "} {job.country}
                                  </small>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="d-flex align-items-center text-black">
                                  <i className="ri-money-dollar-circle-line me-2"></i>
                                  <small>
                                    {job.currency}{" "}
                                    {job.jobAmount
                                      ? `${job.jobAmount}`
                                      : "Not specified"}
                                  </small>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="d-flex align-items-center text-black">
                                  <i className="ri-time-line me-2"></i>
                                  <small>{job.jobType || "Full-time"}</small>
                                </div>
                              </div>
                              {/* <div className="col-12">
                                <div className="d-flex align-items-center text-black">
                                  <i className="ri-calendar-line me-2"></i>
                                  <small>
                                    {job.dateCreated &&
                                      new Date(
                                        job.dateCreated,
                                      ).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                      })}
                                  </small>
                                </div>
                              </div> */}
                            </div>
                          </div>

                          <div className="card-footer bg-transparent border-top-0 p-4">
                            <div className="d-flex flex-column ">
                              <div
                                className="text-black"
                                style={{ paddingLeft: "15px" }}
                              >
                                <i className="ri-calendar-2-line me-1"></i>
                                Posted{" "}
                                          {job.dateCreated &&
                                  new Date(job.dateCreated).toLocaleDateString(
                                    "en-GB",
                                    {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                    },
                                  )}
                                {/* {getTimeAgo(job.dateCreated)} */}
                              </div>
                              <div className="d-flex p-4 justify-content-between align-items-center">
                                <NavLink
                                  to={`/jobDetails/${hashIds.encode(String(job.jobId))}`}
                                  className="btn btn-info d-flex align-items-center"
                                >
                                  <Eye size={14} className="me-1" />
                                </NavLink>
                                <NavLink
                                  to={`/jobEdit/${hashIds.encode(String(job.jobId))}`}
                                  className="btn btn-warning d-flex align-items-center"
                                >
                                  <Pen size={14} className="me-1" />
                                </NavLink>
                                <button className="btn btn-sm btn-success d-flex align-items-center">
                                  <CheckCheck size={14} className="me-1" />{" "}
                                  Publish
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
