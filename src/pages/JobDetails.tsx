import { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { GetJob, JobApplications, PublishJob } from "../api/JobApi";
import Hashids from "hashids";
import { JobApplicationDto, JobDto, ShiftData } from "../types/Job";
import { toast, ToastContainer } from "react-toastify";
import { AlertCircle, CheckCheck, Eye, FolderOpen } from "lucide-react";
import { getJobShifts } from "../api/ShiftsApi";
import ShiftList from "../components/ShiftList";


const JobDetails = () => {
  const params = useParams();
  const [job, setJob] = useState<JobDto>();
  const [jobShift, setJobShift] = useState<ShiftData[] | null>(null);
  const [jobApplications, setJobApplications] = useState<JobApplicationDto[]>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const hashIds = new Hashids("LatticeHrEncode", 10);

  const hashId = useMemo(() => {
    return hashIds.decode(String(params.id))[0];
  }, [params.id]);

  useEffect(() => {
    fetchMyJobs();
    fetchApplications()
    fetchMyJobShifts()
  }, []);

  const fetchMyJobShifts = async () => {
    try {
      setLoading(true);
      const response = await getJobShifts(Number(hashId));
      console.log("res", response);
      if (response.statusCode !== 200) {
        return;
      } else {
        setJobShift(response.data);
      }
    } catch {
      setError("Could not get fetch details");
    } finally {
      setLoading(false);
    }
  };

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

  const fetchApplications = async () => {
    try {

      const response = await JobApplications(Number(hashId));
      if (response.length > 0) {
        console.log("nsdicdcb", response)
        setJobApplications(response)
      }

    } catch (error) {
      console.error("Publishing error:", error);
      toast.error("Job Publishing Failed");
    } finally {
      setIsButtonLoading(false);
    }
  };

  const pubJob = async () => {
    try {
      setIsButtonLoading(true);
      const response = await PublishJob(Number(hashId));
      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        toast.success(data.message || "Action Successful");
        await fetchMyJobs();

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
                        </NavLink>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        <NavLink to="/jobManagement">
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

              <div className="col-lg-12">
                {/* Job Header Skeleton */}
                <div className="card">
                  <div className="card-header">
                    <div className="">
                      <div className="placeholder-wave mb-15">
                        <span className="placeholder col-6 bg-secondary" style={{ height: '32px' }}></span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-big">
                          <div className="placeholder-wave">
                            <span className="placeholder col-12 bg-secondary" style={{ height: '60px', width: '60px', borderRadius: '50%', display: 'block' }}></span>
                          </div>
                        </div>
                        <div className="ms-3">
                          <div className="placeholder-wave mb-2">
                            <span className="placeholder col-4 bg-secondary" style={{ height: '24px' }}></span>
                          </div>
                          <div className="placeholder-wave">
                            <span className="placeholder col-6 bg-secondary" style={{ height: '20px' }}></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body pt-15">
                    {/* Action Buttons Skeleton */}
                    <div className="d-flex flex-wrap justify-content-between gap-10 mb-4">
                      <div></div>
                      <div className="d-flex align-items-center gap-10">
                        <div className="placeholder-wave">
                          <span className="placeholder col-12 bg-secondary" style={{ height: '38px', width: '120px' }}></span>
                        </div>
                        <div className="placeholder-wave">
                          <span className="placeholder col-12 bg-secondary" style={{ height: '38px', width: '100px' }}></span>
                        </div>
                        <div className="placeholder-wave">
                          <span className="placeholder col-12 bg-secondary" style={{ height: '38px', width: '120px' }}></span>
                        </div>
                      </div>
                    </div>

                    {/* Job Details Section Skeleton */}
                    <div className="mb-20">
                      <h4 className="mb-20">Job Details</h4>
                      <hr />
                      <div className="row mt-15">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                          <div key={item} className="col-md-6 mb-3">
                            <div className="placeholder-wave">
                              <span className="placeholder col-8 bg-secondary" style={{ height: '20px' }}></span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Job Description Skeleton */}
                    <div className="mb-15">
                      <h4 className="mb-15">Job Description</h4>
                      <hr />
                      <div className="placeholder-wave mt-15">
                        <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '20px' }}></span>
                        <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '20px' }}></span>
                        <span className="placeholder col-8 bg-secondary" style={{ height: '20px' }}></span>
                      </div>
                    </div>

                    {/* Job Requirements Skeleton */}
                    <div className="mb-15">
                      <h4 className="mb-15">Job Requirements</h4>
                      <hr />
                      <div className="placeholder-wave mt-15">
                        <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '20px' }}></span>
                        <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '20px' }}></span>
                        <span className="placeholder col-9 bg-secondary" style={{ height: '20px' }}></span>
                      </div>
                    </div>

                    {/* Job Responsibility Skeleton */}
                    <div className="mb-15">
                      <h4 className="mb-15">Job Responsibility</h4>
                      <hr />
                      <div className="placeholder-wave mt-15">
                        <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '20px' }}></span>
                        <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '20px' }}></span>
                        <span className="placeholder col-10 bg-secondary" style={{ height: '20px' }}></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Applied Candidates Section Skeleton */}
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header justify-between">
                      <div className="placeholder-wave">
                        <span className="placeholder col-6 bg-secondary" style={{ height: '28px' }}></span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", columnGap: "2rem" }}>
                        <div className="placeholder-wave">
                          <span className="placeholder col-12 bg-secondary" style={{ height: '38px', width: '150px' }}></span>
                        </div>
                        <div className="placeholder-wave">
                          <span className="placeholder col-12 bg-secondary" style={{ height: '38px', width: '150px' }}></span>
                        </div>
                      </div>
                    </div>

                    <div className="card-body pt-15">
                      <div className="table-responsive">
                        <table className="table text-nowrap w-100">
                          <thead>
                            <tr>
                              <th>Candidate</th>
                              <th>Location</th>
                              <th>Compliance Status</th>
                              <th>Date Applied</th>
                              <th>Grade</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[1, 2, 3].map((item) => (
                              <tr key={item}>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar radius-100">
                                      <div className="placeholder-wave">
                                        <span className="placeholder col-12 bg-secondary" style={{ height: '40px', width: '40px', borderRadius: '50%', display: 'block' }}></span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="placeholder-wave">
                                        <span className="placeholder col-8 bg-secondary" style={{ height: '20px' }}></span>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="placeholder-wave">
                                    <span className="placeholder col-10 bg-secondary" style={{ height: '20px' }}></span>
                                  </div>
                                </td>
                                <td>
                                  <div className="placeholder-wave">
                                    <span className="placeholder col-8 bg-secondary" style={{ height: '24px' }}></span>
                                  </div>
                                </td>
                                <td>
                                  <div className="placeholder-wave">
                                    <span className="placeholder col-8 bg-secondary" style={{ height: '20px' }}></span>
                                  </div>
                                </td>
                                <td>
                                  <div className="placeholder-wave">
                                    <span className="placeholder col-8 bg-secondary" style={{ height: '20px' }}></span>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="placeholder-wave">
                                      <span className="placeholder col-12 bg-secondary" style={{ height: '32px', width: '32px', borderRadius: '4px' }}></span>
                                    </div>
                                    <div className="placeholder-wave">
                                      <span className="placeholder col-12 bg-secondary" style={{ height: '32px', width: '32px', borderRadius: '4px' }}></span>
                                    </div>
                                    <div className="placeholder-wave">
                                      <span className="placeholder col-12 bg-secondary" style={{ height: '32px', width: '32px', borderRadius: '4px' }}></span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
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
      </div>
    );
  }

  // Error State
  if (!isLoading && error) {
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

                        </NavLink>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        <NavLink to="/jobManagement">
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
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body pt-15">
                    <div className="text-center py-5">
                      <div className="mb-3">
                        <AlertCircle size={48} className="text-danger" />
                      </div>
                      <h5 className="text-dark mb-2">Error Loading Job Details</h5>
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
          </div>
        </div>
      </div>
    );
  }

  // Main Content
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

                      </NavLink>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <NavLink to="/jobManagement">
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

            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="">
                    <h2 className="mb-15">{job?.jobTitle}</h2>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-big">
                        <img
                          src={`${import.meta.env.VITE_API_URL}${job?.jobPhoto}`}
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
                      {
                        job?.hasInterview === true && (
                          <NavLink to={`/interview/${hashIds.encode(Number(job?.jobInterviewId))}/${hashIds.encode(Number(job?.jobId))}`}
                            className="btn btn-success btn-md"
                          >
                            <i className="ri-edit-2-line"></i> Edit Interview
                          </NavLink>
                        )
                      }

                      <button
                        onClick={editJob}
                        className="btn btn-warning btn-md"
                      >
                        <i className="ri-edit-2-line"></i> Edit Job
                      </button>
                      <button
                        onClick={() => pubJob()}
                        className={`btn btn-md ${job?.published === true ? "btn-danger" : "btn-info"}`}
                        disabled={isButtonLoading}
                      >
                        {isButtonLoading ? (
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        ) : job?.published === true ? (
                          <i className="ri-close-fill"></i>
                        ) : (
                          <CheckCheck />
                        )}
                        {isButtonLoading ? "Processing..." : (job?.published === true ? "UnPublish Job" : "Publish Job")}
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
                          {job?.currency}{job?.jobAmount}
                        </p>
                        <p className="mb-5">
                          <strong>Job Type:</strong> {job?.jobType}
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

                      {job?.jobType === "Shift" && jobShift != null && (
                        <>
                          <ShiftList shifts={jobShift} />
                        </>
                      )}
                    </div>
                  </div>

                  <div className="mb-15">
                    <h4 className="mb-15">Job Description</h4>
                    <hr />
                    <p className="mt-15">{job?.jobDescription}</p>
                  </div>

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
                    <h4 className="d-flex-items gap-10">Job Applications</h4>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: "2rem",
                      }}
                    >
                      <div className="dataTables-sorting-control ">
                        <NavLink className="btn btn-info" to={`/jobApplications/${hashIds.encode(String(job?.jobId))}`}><FolderOpen size={16} />All Applications</NavLink>
                      </div>

                      <div className="d-none dataTables-sorting-control ">
                        <select className="form-select sorting-dropdown">
                          <option value="">All Locations</option>
                          <option value="lagos">Lagos</option>
                          <option value="abuja">Abuja</option>
                          <option value="port-harcourt">Port Harcourt</option>
                        </select>
                      </div>

                      <div className="d-none dataTables-sorting-control ">
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
                            {/* <th>Compliance Status</th> */}
                            <th>Date Applied</th>
                            {/* <th>Grade</th> */}
                            <th className="recent-job-action text-end">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            jobApplications && jobApplications.length > 0 ? (
                              jobApplications.map((item, index) => (
                                <tr key={index}>
                                  <td>
                                    <div className="d-flex-items gap-10">
                                      <div className="avatar radius-100">
                                        <img
                                          src={item.jobSeeker?.profilePhoto
                                            ? `${import.meta.env.VITE_API_URL}${item.jobSeeker.profilePhoto}`
                                            : "https://img.icons8.com/color/48/gender-neutral-user.png"}
                                          alt={item.applicantName}
                                          className="radius-100"
                                          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                        />
                                      </div>
                                      <div>
                                        <h6>
                                          <NavLink to={`/jobApplications/${hashIds.encode(String(item.jobId))}`}>{item.applicantName}</NavLink>
                                        </h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    {item.jobSeeker.city}{", "}
                                    {item.jobSeeker.state}{", "}
                                    {item.jobSeeker.country}
                                  </td>
                                  {/* <td>
              <span className="badge bg-label-primary">
                <i className="ri-time-line"></i> Pending
              </span>
            </td> */}
                                  <td>
                                    {item.applDate &&
                                      new Date(item.applDate).toLocaleDateString(
                                        "en-GB",
                                        {
                                          day: "2-digit",
                                          month: "short",
                                          year: "numeric",
                                        },
                                      )}
                                  </td>
                                  {/* <td>Senior level</td> */}

                                  <td className="recent-job-action text-end">
                                    <NavLink className="btn btn-success" to={`/jobApplicationDetails/${hashIds.encode(String(item.jobApplicationId))}`}><Eye size={16} />See Details</NavLink>
                                    <div className="d-none d-flex-items gap-10 align-items-end">
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
                              ))
                            ) : (
                              <tr>
                                <td col-span="4">
                                  <div className="text-center">
                                    <p>There are no applications</p>
                                  </div>
                                </td>
                              </tr>
                            )
                          }
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
    </div>
  );
};

export default JobDetails;