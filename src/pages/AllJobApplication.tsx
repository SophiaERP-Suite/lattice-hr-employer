
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetAllEmployerApplications } from "../api/JobApi";
import dayjs from "dayjs";
import Hashids from "hashids";
import { Star } from "lucide-react";

const AllApplications = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [pagination, setPagination] = useState({
    pageNumber: 1, pageSize: 10, totalCount: 0, totalPages: 0
  });

  const hashIds = new Hashids("LatticeHrEncode", 10);

  const loadApplications = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await GetAllEmployerApplications(
        pagination.pageNumber,
        pagination.pageSize,
        search,
        statusFilter
      );

      console.log("applications", response);

      if (response.statusCode === 200) {
        const data = response.data;
        setApplications(data.data);
        setPagination(prev => ({
          ...prev,
          totalCount: data.totalCount,
          totalPages: data.totalPages
        }));
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Failed to load applications');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplications();
  }, [pagination.pageNumber, pagination.pageSize, search, statusFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPagination(prev => ({ ...prev, pageNumber: 1 }));
  };

  const handlePageChange = (page: number) => {
    setPagination(prev => ({ ...prev, pageNumber: page }));
  };

  const getStatusBadge = (status: string) => {
    const map: Record<string, string> = {
      ending: "bg-label-primary",
      Shortlisted: "bg-label-info",
      Interview: "bg-label-warning",
      Offered: "bg-label-success",
      Rejected: "bg-label-danger",
      Hired: "bg-label-secondary",
      Reviewed: "bg-label-primary",
    };


    return (
      <span className={`badge ${map[status] || "bg-label-light"}`}>{status}</span>
    );
  };

  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">All Applications</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">

                    <li className="breadcrumb-item active">All Applications</li>
                    <li className="breadcrumb-item"><NavLink to="/jobManagement">Job Management</NavLink></li>
                    <li className="breadcrumb-item"><NavLink to="/dashboard">Home</NavLink></li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4>All Job Applications</h4>
                </div>

                <div className="job-filter-container mt-15">
                  <h6>Filter by:</h6>
                  <div className="row mt-10">
                    <div className="col-md-6">
                      <form onSubmit={handleSearch} className="d-flex gap-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by name, email or job title"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button type="submit" className="btn btn-info">Search</button>
                      </form>
                    </div>
                    <div className="col-md-6 mt-sm-10 mt-md-0">
                      <select
                        className="form-select"
                        value={statusFilter}
                        onChange={(e) => {
                          setStatusFilter(e.target.value);
                          setPagination(prev => ({ ...prev, pageNumber: 1 }));
                        }}
                      >
                        <option value="">All Status</option>
                        <option value="Pending">Pending</option><option value="Reviewed">Reviewed</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Interview">Interview</option>
                        <option value="Offered">Offered</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Hired">Hired</option>

                      </select>
                    </div>
                  </div>
                </div>

                <div className="card-body pt-15">
                  {error && <div className="alert alert-danger">{error}</div>}

                  {loading ? (
                    <div className="text-center py-5">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table text-nowrap w-100">
                        <thead>
                          <tr>
                            <th>Applicant</th>
                            <th>Job Title</th>
                            <th>Department</th>
                            <th>Location</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                            <th>Rating</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {applications.length === 0 ? (
                            <tr>
                              <td colSpan={8} className="text-center py-4">
                                No applications found
                              </td>
                            </tr>
                          ) : (
                            applications.map((app) => (
                              <tr key={app.jobApplicationId}>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar radius-100">
                                      <img
                                        src={app.jobSeeker.profilePhoto ? `${import.meta.env.VITE_API_URL}${app.jobSeeker.profilePhoto}` : "https://img.icons8.com/color/48/gender-neutral-user.png"}
                                        alt={app.applicantName}
                                        className="radius-100"
                                      />
                                    </div>
                                    <div>
                                      <h6><a href="#">{app.applicantName}</a></h6>
                                      <small className="text-muted">{app.jobSeeker.country}</small>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <NavLink to={`/job/${app.jobId}`}>{app.jobTitle}</NavLink>
                                </td>
                                <td>{app.job.department || "-"}</td>
                                <td>{app.jobSeeker.state}, {app.jobSeeker.city}</td>
                                <td>{dayjs(app.applDate).format('MMM D, YYYY')}</td>
                                <td>{getStatusBadge(app.status)}</td>
                                <td>
                                  {app.rating > 0 ? (
                                    <span className="badge bg-label-warning">
                                      <Star size={14} className="me-1 text-warning" /> {app.rating}
                                    </span>
                                  ) : "-"}
                                </td>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <NavLink
                                      className="btn-icon btn-info-light"
                                      to={`/jobApplicationDetails/${hashIds.encode(String(app.jobApplicationId))}`}
                                    >
                                      <i className="ri-eye-line"></i>
                                    </NavLink>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {!loading && applications.length > 0 && (
                    <div className="table-footer mt-15 d-flex-between flex-wrap gap-10">
                      <div>
                        Showing {((pagination.pageNumber - 1) * pagination.pageSize) + 1} to {Math.min(pagination.pageNumber * pagination.pageSize, pagination.totalCount)} of {pagination.totalCount} entries
                      </div>
                      <ul className="pagination">
                        <li className={`paginate_button page-item previous ${pagination.pageNumber === 1 ? 'disabled' : ''}`}>
                          <a href="#" className="page-link"
                            onClick={(e) => { e.preventDefault(); if (pagination.pageNumber > 1) handlePageChange(pagination.pageNumber - 1); }}>
                            Previous
                          </a>
                        </li>
                        {[...Array(pagination.totalPages)].map((_, i) => (
                          <li key={i + 1} className={`paginate_button page-item ${pagination.pageNumber === i + 1 ? 'active' : ''}`}>
                            <a href="#" className="page-link"
                              onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}>
                              {i + 1}
                            </a>
                          </li>
                        ))}
                        <li className={`paginate_button page-item next ${pagination.pageNumber === pagination.totalPages ? 'disabled' : ''}`}>
                          <a href="#" className="page-link"
                            onClick={(e) => { e.preventDefault(); if (pagination.pageNumber < pagination.totalPages) handlePageChange(pagination.pageNumber + 1); }}>
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApplications;