import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { JobOfferListItem, JobOfferStatusEnum } from "../types/Job";
import { GetAllEmployerOffers, GetEmployerOffers } from "../api/JobApi";
import dayjs from "dayjs";
import Hashids from "hashids";

const JobOffers = () => {
  const [offers, setOffers] = useState<JobOfferListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [statsLoading, setStatsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [totalOffers, setTotalOffers] = useState(0);
  const [SentOffers, setSentOffers] = useState(0);
  const [acceptanceRate, setAcceptanceRate] = useState(0);

  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 10,
    totalCount: 0,
    totalPages: 0
  });

  const hashIds = new Hashids("LatticeHrEncode", 10);

  const loadOffers = async () => {
    setLoading(true);
    setError(null);

    try {
      let statusString: string | undefined = undefined;
      if (statusFilter) {
        statusString = statusFilter;
      }

      const response = await GetEmployerOffers(
        search || "",
        statusString,
        pagination.pageNumber,
        pagination.pageSize
      );

      console.log('GetEmployerOffers API response:', response);

      if (response.statusCode === 200) {
        const data = response.data;
        setOffers(data);
        setPagination({
          pageNumber: data.pageNumber,
          pageSize: data.pageSize,
          totalCount: data.totalCount,
          totalPages: data.totalPages
        });


      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Failed to load offers');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadAllOffers = async () => {
    setStatsLoading(true);
    try {
      const response = await GetAllEmployerOffers();
      if (response.statusCode === 200) {
        const data = response;
        calculateStats(data?.data || [], data?.data.length || 0);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Failed to load all offers');
      console.error(err);
    } finally {
      setStatsLoading(false);
    }
  };

  const calculateStats = (items: JobOfferListItem[], total: number) => {
    setTotalOffers(total);

    // Add safety check for items array
    const Sent = (items || []).filter(o => o.offerStatus === "Sent").length;
    const accepted = (items || []).filter(o => o.offerStatus === "Accepted").length;

    setSentOffers(Sent);
    // setAcceptedOffers(accepted);

    const decidedOffers = (items || []).filter(o =>
      o.offerStatus === "Accepted" ||
      o.offerStatus === "Declined"
    ).length;

    if (decidedOffers > 0) {
      setAcceptanceRate(Math.round((accepted / decidedOffers) * 100));
    } else {
      setAcceptanceRate(0);
    }
  };

  useEffect(() => {
    loadOffers();
    loadAllOffers();
  }, [pagination.pageNumber, pagination.pageSize, search, statusFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPagination(prev => ({ ...prev, pageNumber: 1 }));
  };

  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
    setPagination(prev => ({ ...prev, pageNumber: 1 }));
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPagination(prev => ({
      ...prev,
      pageSize: parseInt(e.target.value),
      pageNumber: 1
    }));
  };

  const handlePageChange = (page: number) => {
    setPagination(prev => ({ ...prev, pageNumber: page }));
  };

  const getStatusBadge = (status: JobOfferStatusEnum) => {
    switch (status) {
      case JobOfferStatusEnum.Sent:
        return <span className="badge bg-label-primary"><i className="ri-time-line"></i> Sent</span>;
      case JobOfferStatusEnum.Accepted:
        return <span className="badge bg-label-success"><i className="ri-check-line"></i> Accepted</span>;
      case JobOfferStatusEnum.Declined:
        return <span className="badge bg-label-danger"><i className="ri-close-line"></i> Declined</span>;
      case JobOfferStatusEnum.Expired:
        return <span className="badge bg-label-secondary"><i className="ri-timer-line"></i> Expired</span>;
      case JobOfferStatusEnum.Draft:
        return <span className="badge bg-label-dark"><i className="ri-arrow-go-back-line"></i> Draft</span>;
      default:
        return <span className="badge bg-label-light">Unknown</span>;
    }
  };

  // const formatSalary = (salary: number) => {
  //   return new Intl.NumberFormat('en-NG', {
  //     style: 'currency',
  //     currency: 'NGN',
  //     minimumFractionDigits: 0,
  //     maximumFractionDigits: 0
  //   }).format(salary);
  // };

  // Loading skeleton for stats cards
  const StatsSkeleton = () => (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body mini-card-body d-flex align-center gap-16">
            <div className="avatar avatar-xl bg-light">
              <div className="placeholder-wave">
                <span className="placeholder col-12 bg-secondary" style={{ height: '42px', width: '42px', borderRadius: '50%', display: 'block' }}></span>
              </div>
            </div>
            <div className="card-content" style={{ width: '100%' }}>
              <div className="placeholder-wave">
                <span className="placeholder col-6 bg-secondary" style={{ height: '16px', marginBottom: '8px', display: 'block' }}></span>
                <span className="placeholder col-4 bg-secondary" style={{ height: '28px', display: 'block' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body mini-card-body d-flex align-center gap-16">
            <div className="avatar avatar-xl bg-light">
              <div className="placeholder-wave">
                <span className="placeholder col-12 bg-secondary" style={{ height: '42px', width: '42px', borderRadius: '50%', display: 'block' }}></span>
              </div>
            </div>
            <div className="card-content" style={{ width: '100%' }}>
              <div className="placeholder-wave">
                <span className="placeholder col-7 bg-secondary" style={{ height: '16px', marginBottom: '8px', display: 'block' }}></span>
                <span className="placeholder col-3 bg-secondary" style={{ height: '28px', display: 'block' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body mini-card-body d-flex align-center gap-16">
            <div className="avatar avatar-xl bg-light">
              <div className="placeholder-wave">
                <span className="placeholder col-12 bg-secondary" style={{ height: '42px', width: '42px', borderRadius: '50%', display: 'block' }}></span>
              </div>
            </div>
            <div className="card-content" style={{ width: '100%' }}>
              <div className="placeholder-wave">
                <span className="placeholder col-6 bg-secondary" style={{ height: '16px', marginBottom: '8px', display: 'block' }}></span>
                <span className="placeholder col-4 bg-secondary" style={{ height: '28px', display: 'block' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Job Offers</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <NavLink to="/job-offers">
                        Job Offers{" "}
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

            {/* Stats Cards with Loading State */}
            {statsLoading ? (
              <StatsSkeleton />
            ) : (
              <>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body mini-card-body d-flex align-center gap-16">
                      <div className="avatar avatar-xl bg-warning-transparent text-warning">
                        <i className="ri-briefcase-4-fill fs-42"></i>
                      </div>
                      <div className="card-content">
                        <span className="d-block fs-16 mb-5">Total Offers</span>
                        <h2 className="mb-5">{totalOffers}</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body mini-card-body d-flex align-center gap-16">
                      <div className="avatar avatar-xl bg-slateblue-transparent text-slateblue">
                        <i className="ri-hand-coin-fill fs-42"></i>
                      </div>
                      <div className="card-content">
                        <span className="d-block fs-16 mb-5">Offer Acceptance</span>
                        <h2 className="mb-5">{acceptanceRate}%</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body mini-card-body d-flex align-center gap-16">
                      <div className="avatar avatar-xl bg-teal-transparent text-teal">
                        <i className="ri-timer-fill fs-42"></i>
                      </div>
                      <div className="card-content">
                        <span className="d-block fs-16 mb-5">Sent Offers</span>
                        <h2 className="mb-5">{SentOffers}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="d-flex-items gap-10">Job Offers</h4>
                  <div className="d-flex flex-wrap gap-15">
                    <div className="d-none dataTables-sorting-control ">
                      <select className="form-select sorting-dropdown">
                        <option value="">Sort By:</option>
                        <option value="date_newest">Date: Newest First</option>
                        <option value="date_oldest">Date: Oldest First</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="job-filter-container mt-15">
                  <h6>Filter by:</h6>

                  <div className="row mt-10">
                    <div className="col-md-6">
                      <form onSubmit={handleSearch} className="d-flex gap-2">
                        <input
                          type="text"
                          id="offerFilter"
                          className="form-control"
                          placeholder="Search by candidate or job title"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button type="submit" className="btn btn-info">Search</button>
                      </form>
                    </div>

                    {/* Offer Status Filter */}
                    <div className="col-md-6 mt-sm-10 mt-md-0">
                      <select
                        id="offerStatusFilter"
                        className="form-select"
                        value={statusFilter}
                        onChange={handleStatusFilter}
                      >
                        <option value="">All Status</option>
                        <option value="Sent">Sent</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Declined">Declined</option>
                        <option value="Expired">Expired</option>
                        <option value="Draft">Draft</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Negotiation">Negotiation</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="job-search-heading">
                  <div className="d-none job-result-size">
                    <label>
                      Show{" "}
                      <select
                        name="dataTableDefault_length"
                        aria-controls="dataTableDefault"
                        className="form-select form-select-sm"
                        value={pagination.pageSize}
                        onChange={handlePageSizeChange}
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

                <div className="card-body pt-15">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  {loading ? (
                    <div className="text-center py-5">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table
                        id="dataTableDefault"
                        className="table text-nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Candidate</th>
                            <th>Job Title</th>
                            <th>Offer Date</th>
                            <th>Status</th>
                            <th>Rates offered</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {offers.length === 0 ? (
                            <tr>
                              <td colSpan={6} className="text-center py-4">
                                No job offers found
                              </td>
                            </tr>
                          ) : (
                            offers.map((offer) => (
                              <tr key={offer.jobOfferId}>
                                <td>
                                  <div className="d-flex-items gap-10">
                                    <div className="avatar radius-100">
                                      <img
                                        src={`${import.meta.env.VITE_API_URL}${offer.jobSeeker.profilePhoto}` || "https://img.icons8.com/color/48/gender-neutral-user.png/Employer/assets/images/avatar/avatar-thumb-dummy.png"}
                                        alt={offer.jobSeeker.firstName}
                                        className="radius-100"
                                      />
                                    </div>
                                    <div>
                                      <h6>
                                        <a href="#">{offer.jobSeeker.firstName} {offer.jobSeeker.lastName}</a>
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td><NavLink to={`/job-offer/${offer.jobOfferId}`}>{offer.job.jobTitle}</NavLink></td>
                                <td>{dayjs(offer.offerDate).format('MMM D, YYYY')}</td>
                                <td>
                                  {offer.offerStatus}
                                </td>
                                <td>{offer.job.currency}{offer.grossAnnualSalary}</td>
                                <td className="offer-actions">
                                  <div className="d-flex-items gap-10 align-items-end">
                                    <NavLink
                                      className="btn-icon btn-info-light"
                                      to={`/jobOfferDetails/${hashIds.encode(String(offer.jobApplicationId))}`}
                                      data-bs-placement="top"
                                      data-bs-title="View Offer"
                                    >
                                      <i className="ri-eye-line"></i>
                                    </NavLink>

                                    {offer.offerStatus === "Accepted" && (
                                      <a
                                        className="btn-icon btn-success-light"
                                        href="javascript:void(0);"
                                        data-bs-placement="top"
                                        data-bs-toggle="modal"
                                        data-bs-title="Send Contract"
                                        data-bs-target="#addNewEmployee"
                                      >
                                        <i className="ri-file-text-line"></i>
                                      </a>
                                    )}

                                    <a
                                      className="d-none btn-icon btn-danger-light"
                                      href="javascript:void(0);"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      data-bs-title="Delete Offer"
                                    >
                                      <i className="ri-delete-bin-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {!loading && offers.length > 0 && (
                    <div className="table-footer mt-15 d-flex-between flex-wrap gap-10">
                      <div
                        className="d-none dataTables_info"
                        id="dataTableDefault_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing {((pagination.pageNumber - 1) * pagination.pageSize) + 1} to {Math.min(pagination.pageNumber * pagination.pageSize, pagination.totalCount)} of {pagination.totalCount} entries
                      </div>
                      <div></div>
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="dataTableDefault_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className={`paginate_button page-item previous ${pagination.pageNumber === 1 ? 'disabled' : ''}`}
                            id="dataTableDefault_previous"
                          >
                            <a
                              href="#"
                              aria-controls="dataTableDefault"
                              data-dt-idx="0"
                              tabIndex={0}
                              className="page-link"
                              onClick={(e) => {
                                e.preventDefault();
                                if (pagination.pageNumber > 1) {
                                  handlePageChange(pagination.pageNumber - 1);
                                }
                              }}
                            >
                              Previous
                            </a>
                          </li>

                          {[...Array(pagination.totalPages)].map((_, i) => (
                            <li
                              key={i + 1}
                              className={`paginate_button page-item ${pagination.pageNumber === i + 1 ? 'active' : ''}`}
                            >
                              <a
                                href="#"
                                aria-controls="dataTableDefault"
                                data-dt-idx={i + 1}
                                tabIndex={0}
                                className="page-link"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handlePageChange(i + 1);
                                }}
                              >
                                {i + 1}
                              </a>
                            </li>
                          ))}

                          <li
                            className={`paginate_button page-item next ${pagination.pageNumber === pagination.totalPages ? 'disabled' : ''}`}
                            id="dataTableDefault_next"
                          >
                            <a
                              href="#"
                              aria-controls="dataTableDefault"
                              data-dt-idx={pagination.totalPages + 1}
                              tabIndex={0}
                              className="page-link"
                              onClick={(e) => {
                                e.preventDefault();
                                if (pagination.pageNumber < pagination.totalPages) {
                                  handlePageChange(pagination.pageNumber + 1);
                                }
                              }}
                            >
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
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

export default JobOffers;