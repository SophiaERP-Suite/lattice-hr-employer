import { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  Eye, Edit2, Trash2, Plus, RefreshCw, CheckCircle, XCircle,
  FileText, AlertCircle, MoreVertical, Clock,
  CalendarDays
} from "lucide-react";
import {
  getAllContractRequests,
  deleteContractRequest,
  createContractRequest,
  updateContractRequest
} from "../api/ContractApi";
import Modal from "../components/modal";
import "react-toastify/dist/ReactToastify.css";
import { ContractRequest } from "../types/contractRequest";
import Hashids from "hashids";

type ModalType = "delete" | "update" | "create" | "view" | null;

const ContractRequestManagement = () => {
  const hashIds = new Hashids("LatticeHrEncode", 10);
  const [requests, setRequests] = useState<ContractRequest[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    unSignedCount: 0,
    signedCount: 0,
  });
  const [loading, setLoading] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<ContractRequest | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [processingId, setProcessingId] = useState<number | null>(null);

  useEffect(() => {
    fetchRequests();
  }, [currentPage, pageSize]);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const response = await getAllContractRequests({
        page: currentPage,
        pageSize,
      });

      setStats({
        total: response.data.totalCount,
        unSignedCount: response.data.unsignedRequestsCount,
        signedCount: response.data.signedRequestsCount,
      });

      console.log("API Response req:", response, "count", response.data.totalCount, "signed", response.data.signedCount, "unsigned", response.data.unSignedCount);
      if (response.data) {
        setRequests(response.data.requests);
      }
    } catch {
      toast.error("Failed to fetch contract requests");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRequest = async (requestId: number) => {
    setModalLoading(true);
    setProcessingId(requestId);
    try {
      await deleteContractRequest(requestId);
      toast.success("Contract request deleted successfully");
      fetchRequests();
      setModalType(null);
      setSelectedRequest(null);
    } catch {
      toast.error("Failed to delete contract request");
    } finally {
      setModalLoading(false);
      setProcessingId(null);
    }
  };

  const handleCreateRequest = async (data: { inputValue5?: string }) => {
    const { inputValue5 } = data;
    if (!inputValue5) return;

    setModalLoading(true);
    try {
      await createContractRequest({ description: inputValue5 },);
      toast.success("Request submitted for review successfully!");
      fetchRequests();
      setModalType(null);
    } catch {
      toast.error("Failed to submit for review");
    } finally {
      setModalLoading(false);
      setProcessingId(null);
    }
  };

  const handleUpdateRequest = async (data: { inputValue5?: string }) => {
    const { inputValue5 } = data;
    if (!inputValue5) return;

    setModalLoading(true);
    try {
      await updateContractRequest(Number(selectedRequest?.requestId), { description: inputValue5 });
      toast.success("Request updated successfully!");
      fetchRequests();
      setModalType(null);
    } catch {
      toast.error("Failed to update contract request");
    } finally {
      setModalLoading(false);
      setProcessingId(null);
    }
  };

  const filteredRequests = useMemo(() => {
    return requests
      .filter((request) => {
        const matchesSearch =
          searchTerm === "" ||
          request.requestId.toString().includes(searchTerm) ||
          request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          request.employer?.companyName?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
      })

  }, [requests, searchTerm]);

  const paginatedRequests = filteredRequests.slice(0, currentPage * pageSize);
  const hasMore = paginatedRequests.length < filteredRequests.length;

  const LoadingSkeleton = () => (
    <div className="row g-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
          <div className="card h-100 placeholder-glow">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="placeholder col-6"></div>
                <div className="placeholder rounded-circle" style={{ width: 32, height: 32 }}></div>
              </div>
              <div className="placeholder col-12 mb-3" style={{ height: 60 }}></div>
              <div className="placeholder col-8 mb-2"></div>
              <div className="placeholder col-6 mb-3"></div>

              <div className="d-flex gap-2">
                <div className="placeholder col-4"></div>
                <div className="placeholder col-4"></div>
                <div className="placeholder col-4"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <ToastContainer position="top-right" autoClose={5000} />

          {/* Create Modal */}
          <Modal
            isOpen={modalType === "create"}
            title="New Contract Request"
            message="Create a new contract request in the box below"
            confirmText="Submit"
            cancelText="Cancel"
            confirmColor="success"
            buttonIcon={<CheckCircle size={16} />}
            headerIcon={<Plus size={20} />}
            inputLabel5="Your contract request"
            inputPlaceholder5="Input your contract request"
            loading={modalLoading}
            onConfirm={handleCreateRequest}
            onCancel={() => setModalType(null)}
          />

          {/* Update Modal */}
          <Modal
            isOpen={modalType === "update"}
            title="Update Contract Request"
            message="Update your contract request in the box below"
            confirmText="Update"
            cancelText="Cancel"
            confirmColor="success"
            buttonIcon={<CheckCircle size={16} />}
            headerIcon={<Plus size={20} />}
            inputLabel5="Your contract request"
            inputPlaceholder5="Input your contract request"
            defaultInputValue5={selectedRequest?.description}
            loading={modalLoading}
            onConfirm={handleUpdateRequest}
            onCancel={() => setModalType(null)}
          />

          {/* Delete Modal */}
          <Modal
            isOpen={modalType === "delete"}
            title="Delete Contract Request"
            message="Are you sure you want to delete this contract request? This action cannot be undone."
            confirmText="Delete"
            cancelText="Cancel"
            confirmColor="danger"
            buttonIcon={<Trash2 size={16} />}
            headerIcon={<AlertCircle size={20} />}
            loading={modalLoading}
            onConfirm={() => {
              if (selectedRequest) handleDeleteRequest(selectedRequest.requestId);
            }}
            onCancel={() => { setModalType(null); setSelectedRequest(null); }}
          />

          {/* Header */}
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <div>
                  <h1 className="page-title fs-18 lh-1">
                    My Service Requests
                  </h1>
                  <p className=" mt-2 mb-0">
                    Create and track your service requests for admin approval
                  </p>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      Service Requests
                    </li>
                    <li className="breadcrumb-item">
                      <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row mb-4">
            {[
              { label: "Total Requests", value: stats.total, icon: <FileText size={28} />, color: "primary" },
              { label: "UnSigned Requests", value: stats.unSignedCount, icon: <Clock size={28} />, color: "warning" },
              { label: "Signed Requests", value: stats.signedCount, icon: <Eye size={28} />, color: "info" },
            ].map(({ label, value, icon, color }) => (
              <div key={label} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="card hover-shadow transition">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className={`avatar avatar-xl bg-${color}-transparent text-${color}`}>
                      {icon}
                    </div>
                    <div className="card-content">
                      <span className="d-block fs-16 mb-5">{label}</span>
                      <h2 className="mb-5">{value}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="row mb-4">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="row g-3 align-items-center">

                    <div className="col-md-4">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search by ID, description, or company..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="col-md-2">
                      <button
                        className="btn btn-success w-100"
                        onClick={() => setModalType("create")}
                      >
                        <Plus size={16} className="me-1" /> New Request
                      </button>
                    </div>
                    <div className="col-md-2">
                      <button
                        className="btn btn-warning w-100"
                        onClick={fetchRequests}
                      >
                        <RefreshCw size={16} className="me-1" /> Refresh
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    My Contract Requests
                  </h5>
                  <small className="">
                    Showing {paginatedRequests.length} of {filteredRequests.length} record
                    {filteredRequests.length !== 1 ? "s" : ""}
                  </small>
                </div>
                <div className="card-body mt-15">
                  {loading ? (
                    <LoadingSkeleton />
                  ) : paginatedRequests.length === 0 ? (
                    <div className="text-center py-5">
                      <div className="">
                        <FileText size={48} className="mb-3 mx-auto" />
                        <h6>No contract requests found</h6>
                        <p className="small">Try adjusting your filters or create a new request</p>
                        <button
                          className="btn btn-success mt-3"
                          onClick={() => setModalType("create")}
                        >
                          <Plus size={16} className="me-1" />
                          Create your first request
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="row g-4">
                        {paginatedRequests.map((request) => (
                          <div key={request.requestId} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                            <div className="card h-100 hover-shadow transition border-0 shadow-sm">
                              <div className="card-body">
                                {/* Header */}
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                  <span className="">
                                    {request.contractSigned ? (
                                      <span className="badge bg-success px-3 py-2 d-inline-flex align-items-center gap-1">
                                        <CheckCircle size={14} /> Signed
                                      </span>
                                    ) : (
                                      <span className="badge bg-warning px-3 py-2 d-inline-flex align-items-center gap-1">
                                        <XCircle size={14} /> Not Signed
                                      </span>
                                    )}
                                  </span>
                                  <div className="dropdown">
                                    <button
                                      className="btn btn-sm btn-outline-warning"
                                      type="button"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                      disabled={processingId === request.requestId}
                                    >
                                      {processingId === request.requestId ? (
                                        <span className="spinner-border spinner-border-sm" />
                                      ) : (
                                        <MoreVertical size={16} />
                                      )}
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <NavLink to={`/Contracts/Requests/${hashIds.encode(request.requestId.toString())}`} state={{ request }}
                                          className="dropdown-item d-flex align-items-center gap-2"
                                        >
                                          <Eye size={15} className="text-info" /> View Details
                                        </NavLink>
                                      </li>
                                      <>
                                        <li>
                                          <button
                                            className="dropdown-item d-flex align-items-center gap-2"
                                            onClick={() => { setSelectedRequest(request); setModalType("update"); }}
                                          >
                                            <Edit2 size={15} className="text-warning" /> Edit
                                          </button>
                                        </li>

                                      </>
                                      <li><hr className="dropdown-divider" /></li>
                                      <li>
                                        <button
                                          className="dropdown-item d-flex align-items-center gap-2 text-danger"
                                          onClick={() => { setSelectedRequest(request); setModalType("delete"); }}
                                        >
                                          <Trash2 size={15} /> Delete
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                {/* Description */}
                                <div className="mb-3">
                                  <p className=" small mb-1">Description</p>
                                  <p
                                    className="mb-0"
                                    style={{ maxWidth: "100%" }}
                                    title={request.description}
                                  >
                                    {request.description.length > 100
                                      ? `${request.description.substring(0, 100)}...`
                                      : request.description}
                                  </p>
                                </div>

                                {/* Date */}
                                <div className="d-flex align-items-center gap-2 small">
                                  <CalendarDays size={12} />
                                  <span>
                                    {new Date(request.dateCreated).toLocaleDateString([], {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Page size + load more */}
                      <div className="d-flex justify-content-between align-items-center mt-4 pt-3">
                        <div className="d-flex align-items-center gap-2">
                          <small className="">Show</small>
                          <select
                            className="form-select form-select-sm"
                            value={pageSize}
                            onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
                            style={{ width: "auto" }}
                          >
                            <option value={12}>12</option>
                            <option value={24}>24</option>
                            <option value={36}>36</option>
                            <option value={48}>48</option>
                          </select>
                          <small className="">per page</small>
                        </div>
                        {hasMore && (
                          <button
                            className="btn btn-outline-warning btn-sm"
                            onClick={() => setCurrentPage((p) => p + 1)}
                          >
                            Show more
                          </button>
                        )}
                        <small className="">
                          {paginatedRequests.length} of {filteredRequests.length} shown
                        </small>
                      </div>
                    </>
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

export default ContractRequestManagement;