import { AlertCircle, CircleCheck, FolderArchive, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { JobDto } from "../types/Job";
import { GetAllEmployerApplications, GetMyJobs } from "../api/JobApi";
import Hashids from "hashids";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import JobCard from "../components/JobCard";

dayjs.extend(relativeTime);

const JobManagement = () => {
  const [jobs, setJobs] = useState<JobDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [totalJobs, setTotalJobs] = useState<number>(0);
  const [totalJobsApps, setTotalJobsApps] = useState<number>(0);
  const [expiredCount, setExpiredCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchMyJobs();
    loadApplications();
  }, [currentPage]);

  const loadApplications = async () => {
    try {
      const response = await GetAllEmployerApplications(1, 1, "", "");

      if (response.statusCode === 200) {
        const data = response.data;
        setTotalJobsApps(data.totalCount);

      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Failed to load applications');
    }
  };

  const hashIds = new Hashids("LatticeHrEncode", 10);
  const pageSize = 12;

  const fetchMyJobs = async () => {
    try {
      setIsLoading(true);
      const response = await GetMyJobs(currentPage, pageSize);

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
        console.log("jobs", response)
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

  const isExpiringSoon = (expiration: string) => {
    const expiryDate = new Date(expiration);
    const today = new Date();
    const daysLeft = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysLeft <= 7 && daysLeft > 0;
  };

  const getStatusBadge = (published: boolean, expiration: string) => {
    const isExpired = new Date(expiration) < new Date();

    if (isExpired) return "bg-danger";
    if (!published) return "bg-secondary";
    if (isExpiringSoon(expiration)) return "bg-warning";
    return "bg-success";
  };

  const getStatusText = (published: boolean, expiration: string) => {
    const isExpired = new Date(expiration) < new Date();

    if (isExpired) return "Expired";
    if (!published) return "Not Published";
    if (isExpiringSoon(expiration)) return "Expiring Soon";
    return "Active";
  };

  const totalPages = Math.ceil(totalJobs / pageSize);

  if (isLoading) {
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
                        <NavLink to="/jobManagement">
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

              {/* Stats Cards Skeleton */}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-light">
                      <div className="placeholder-wave">
                        <span className="placeholder col-12 bg-secondary" style={{ height: '42px', width: '42px', borderRadius: '50%' }}></span>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="placeholder-wave">
                        <span className="placeholder col-8 bg-secondary mb-2" style={{ height: '20px' }}></span>
                        <span className="placeholder col-4 bg-secondary" style={{ height: '30px', display: 'block' }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-light">
                      <div className="placeholder-wave">
                        <span className="placeholder col-12 bg-secondary" style={{ height: '42px', width: '42px', borderRadius: '50%' }}></span>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="placeholder-wave">
                        <span className="placeholder col-8 bg-secondary mb-2" style={{ height: '20px' }}></span>
                        <span className="placeholder col-4 bg-secondary" style={{ height: '30px', display: 'block' }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-light">
                      <div className="placeholder-wave">
                        <span className="placeholder col-12 bg-secondary" style={{ height: '42px', width: '42px', borderRadius: '50%' }}></span>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="placeholder-wave">
                        <span className="placeholder col-8 bg-secondary mb-2" style={{ height: '20px' }}></span>
                        <span className="placeholder col-4 bg-secondary" style={{ height: '30px', display: 'block' }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className="avatar avatar-xl bg-light">
                      <div className="placeholder-wave">
                        <span className="placeholder col-12 bg-secondary" style={{ height: '42px', width: '42px', borderRadius: '50%' }}></span>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="placeholder-wave">
                        <span className="placeholder col-8 bg-secondary mb-2" style={{ height: '20px' }}></span>
                        <span className="placeholder col-4 bg-secondary" style={{ height: '30px', display: 'block' }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Cards Skeleton */}
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header justify-between">
                    <div className="placeholder-wave">
                      <span className="placeholder col-4 bg-secondary" style={{ height: '30px' }}></span>
                    </div>
                    <div className="d-flex flex-wrap gap-15">
                      <div className="placeholder-wave">
                        <span className="placeholder col-12 bg-secondary" style={{ height: '38px', width: '120px' }}></span>
                      </div>
                      <div className="placeholder-wave">
                        <span className="placeholder col-12 bg-secondary" style={{ height: '38px', width: '200px' }}></span>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-15">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-20">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} className="col-lg-4 col-md-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="placeholder-wave">
                                <span className="placeholder col-12 bg-secondary mb-3" style={{ height: '200px' }}></span>
                                <span className="placeholder col-8 bg-secondary mb-2"></span>
                                <span className="placeholder col-6 bg-secondary mb-2"></span>
                                <span className="placeholder col-4 bg-secondary"></span>
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
  }

  // Error State
  if (error != "") {
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
                        <NavLink to="/jobManagement">
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
              <div className="col-12 text-center py-5">
                <div className="mb-3">
                  <AlertCircle size={48} className="text-danger" />
                </div>
                <h5 className="text-dark mb-2">Error Loading Jobs</h5>
                <p className="text-muted mb-3">{error}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => fetchMyJobs()}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Content
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
                      <NavLink to="">
                        Job Management{" "}

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
                      Total Applicants
                    </span>
                    <h2 className="mb-5">{totalJobsApps || "_"}</h2>
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

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="d-flex-items gap-10">
                    My Jobs
                  </h4>
                  <div className="d-flex flex-wrap gap-15">
                    <NavLink to={"/jobForm"} className="btn btn-success">
                      <Plus size={16} /> Create Job
                    </NavLink>
                    <NavLink to={"/jobOffers"} className="btn btn-info">
                      <CircleCheck size={16} /> Job Offers
                    </NavLink>
                    <NavLink to={"/allApplications"} className="btn btn-secondary">
                      <FolderArchive size={16} /> All Applications
                    </NavLink>

                    <div className="d-none dataTables-sorting-control">
                      <select className="form-select sorting-dropdown">
                        <option value="">Sort By:</option>
                        <option value="date_newest">Date: Newest First</option>
                        <option value="date_oldest">Date: Oldest First</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Job Cards */}
                <div className="card-body pt-15">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-20">
                    {jobs.length > 0 ? (
                      <>
                        {jobs.map((job) => (
                          <div key={job.jobId} className="col-lg-4 col-md-6 mb-4">
                            <JobCard job={job} onJobUpdated={fetchMyJobs} />
                          </div>
                        ))}

                        {totalPages > 1 && (
                          <div className="d-flex justify-content-center mt-4 w-100">
                            <nav>
                              <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                  <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                  >
                                    Previous
                                  </button>
                                </li>

                                {[...Array(totalPages)].map((_, index) => (
                                  <li
                                    key={index}
                                    className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() => setCurrentPage(index + 1)}
                                    >
                                      {index + 1}
                                    </button>
                                  </li>
                                ))}

                                <li
                                  className={`page-item ${currentPage === totalPages ? "disabled" : ""
                                    }`}
                                >
                                  <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                  >
                                    Next
                                  </button>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-5 w-100">
                        <div className="mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="currentColor"
                            className="bi bi-briefcase text-muted"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 9.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                          </svg>
                        </div>
                        <h5 className="text-dark mb-2">No jobs found</h5>
                        <p className="text-muted mb-3">
                          Create a new job to find your next professional.
                        </p>
                        <NavLink to={"/jobForm"} className="btn btn-success">
                          <Plus size={16} />  Create New Job
                        </NavLink>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default JobManagement;