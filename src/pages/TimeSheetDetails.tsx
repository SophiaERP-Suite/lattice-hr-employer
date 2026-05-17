import { useState, useEffect, useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  Clock, CheckCircle, XCircle, Filter, AlertCircle,
  MoreVertical, CheckCheck, X, CalendarDays, Timer
} from "lucide-react";
import Hashids from "hashids";
import { getAllTimesheets, reviewTimesheet } from "../api/TimesheetApi";
import Modal from "../components/modal";
import { toast, ToastContainer } from "react-toastify";
import { Timesheet, TimesheetPagedDto } from "../types/timesheet";

type ModalType = "approve" | "reject" | null;

const STATUS_OPTIONS = ["", "Draft", "Submitted", "Approved", "Rejected"] as const;
type StatusFilter = typeof STATUS_OPTIONS[number];

// --- Helpers ---

const fmt = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });

const fmtTime = (date: string | null) =>
  date
    ? new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "—";

// --- Skeleton ---

const TimesheetSkeleton = () => (
  <div className="card">
    <div className="card-body">
      <div className="placeholder-glow">
        <div className="row g-4 mb-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="d-flex align-center gap-16">
                <div className="avatar avatar-xl placeholder rounded-circle" />
                <div className="flex-grow-1">
                  <span className="placeholder col-8 mb-2" />
                  <h2 className="placeholder col-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <table className="table">
          <tbody>
            {[1, 2, 3, 4, 5].map((row) => (
              <tr key={row}>
                {[1, 2, 3, 4, 5, 6, 7].map((col) => (
                  <td key={col}><span className="placeholder col-12" /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// --- Status Badge ---

const StatusBadge = ({ status }: { status: Timesheet["status"] }) => {
  const config = {
    Draft: { cls: "bg-label-secondary", Icon: Timer, text: "Draft" },
    Submitted: { cls: "bg-label-warning", Icon: Clock, text: "Submitted" },
    Approved: { cls: "bg-label-success", Icon: CheckCircle, text: "Approved" },
    Rejected: { cls: "bg-label-danger", Icon: XCircle, text: "Rejected" },
  };
  const { cls, Icon, text } = config[status] ?? config.Draft;
  return (
    <span className={`badge ${cls}`}>
      <Icon size={12} className="me-1" />{text}
    </span>
  );
};

// --- Main ---

function EmployerTimesheets() {
  const hashIds = new Hashids("LatticeHrEncode", 10);
  const { employeeId, employeeName } = useParams();

  // If opened from an employee profile, filter by that employee
  const decodedEmployeeId = useMemo(() => {
    if (!employeeId) return null;
    const decoded = hashIds.decode(String(employeeId));
    return decoded.length > 0 ? Number(decoded[0]) : null;
  }, [employeeId]);

  const decodedEmployeeName = decodeURIComponent(employeeName ?? "");

  const [timesheets, setTimesheets] = useState<Timesheet[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<number | null>(null);
  const [selectedTimesheet, setSelectedTimesheet] = useState<Timesheet | null>(null);
  const [selectedTimesheetId, setSelectedTimesheetId] = useState<number>();
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [reviewNotes, setReviewNotes] = useState("");

  const [statusFilter, setStatusFilter] = useState<StatusFilter>("");
  const [search, setSearch] = useState("");

  const [pagination, setPagination] = useState({
    page: 1, pageSize: 10, totalCount: 0, totalPages: 1,
  });

  const handleStatusFilterChange = (val: StatusFilter) => {
    setStatusFilter(val);
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const openApproveModal = () => {
    setModalType("approve");
    setSelectedTimesheetId(selectedTimesheet?.timesheetId)
  };
  const openRejectModal = () => {
    setModalType("approve");
    setSelectedTimesheetId(selectedTimesheet?.timesheetId)
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedTimesheet(null);
  };

  useEffect(() => {
    fetchTimesheets(pagination.page);
  }, [statusFilter, pagination.page, decodedEmployeeId]);

  const fetchTimesheets = async (page: number) => {
    setLoading(true);
    try {
      // const response: TimesheetPagedDto = decodedEmployeeId
      //   ? await getEmployeeTimesheets(
      //     decodedEmployeeId, page, pagination.pageSize, statusFilter || undefined)
      //   : await getAllTimesheets(
      //     page, pagination.pageSize, statusFilter || undefined);
      const response: TimesheetPagedDto = await getAllTimesheets(
        page, pagination.pageSize, statusFilter || undefined);

      console.log("res tiime", response)

      if (response?.items) {
        setTimesheets(response.items);
        setPagination(prev => ({
          ...prev,
          page: response.page,
          totalCount: response.totalCount,
          totalPages: response.totalPages,
        }));
      }
    } catch (error) {
      console.error("Failed to fetch timesheets:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReview = async (
    timesheetId: number,
    action: "approved" | "rejected"
  ) => {
    setModalLoading(true);
    setProcessingId(timesheetId);
    try {
      const res = await reviewTimesheet(
        timesheetId,
        action === "approved" ? "Approved" : "Rejected",
        reviewNotes || undefined
      );
      if (res.ok) {
        toast.success(`Timesheet ${action} successfully`);
        await fetchTimesheets(pagination.page);
        setShowDetailModal(false);
        setSelectedTimesheet(null);
        setReviewNotes("");
      }
    } catch (error) {
      console.error("Failed to review timesheet:", error);
      toast.error("Failed to update timesheet");
    } finally {
      setProcessingId(null);
      setModalLoading(false);
      setModalType(null);
    }
  };

  const filteredTimesheets = useMemo(() =>
    timesheets.filter((t) => {
      if (!search) return true;
      return t.employeeName.toLowerCase().includes(search.toLowerCase());
    }),
    [timesheets, search]
  );

  const stats = useMemo(() => ({
    total: pagination.totalCount,
    submitted: timesheets.filter(t => t.status === "Submitted").length,
    approved: timesheets.filter(t => t.status === "Approved").length,
    rejected: timesheets.filter(t => t.status === "Rejected").length,
  }), [timesheets, pagination.totalCount]);

  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <ToastContainer />

          {/* Approve Modal */}
          <Modal
            isOpen={modalType === "approve"}
            title="Approve Timesheet"
            message="Are you sure you want to approve this timesheet? This action cannot be undone."
            confirmText="Approve"
            cancelText="Cancel"
            confirmColor="success"
            buttonIcon={<CheckCheck size={16} />}
            headerIcon={<AlertCircle size={20} />}
            loading={modalLoading}
            onConfirm={() => {
              if (selectedTimesheet)
                handleReview(selectedTimesheet.timesheetId, "approved");
            }}
            onCancel={() => { setModalType(null); setSelectedTimesheet(null); }}
          />

          {/* Reject Modal */}
          <Modal
            isOpen={modalType === "reject"}
            title="Reject Timesheet"
            message="Are you sure you want to reject this timesheet? This action cannot be undone."
            confirmText="Reject"
            cancelText="Cancel"
            confirmColor="danger"
            buttonIcon={<XCircle size={16} />}
            headerIcon={<AlertCircle size={20} />}
            loading={modalLoading}
            onConfirm={() => {
              if (selectedTimesheet)
                handleReview(selectedTimesheet.timesheetId, "rejected");
            }}
            onCancel={() => { setModalType(null); setSelectedTimesheet(null); }}
          />

          {/* Header */}
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">
                  Timesheets {decodedEmployeeName && `— ${decodedEmployeeName}`}
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">Timesheets</li>
                    <li className="breadcrumb-item">
                      <NavLink to="/workAndAttendance">Work & Attendance</NavLink>
                    </li>
                    <li className="breadcrumb-item">
                      <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="row mb-4">
            {[
              { label: "Total", value: stats.total, color: "primary", Icon: CalendarDays },
              { label: "Submitted", value: stats.submitted, color: "warning", Icon: Clock },
              { label: "Approved", value: stats.approved, color: "success", Icon: CheckCircle },
              { label: "Rejected", value: stats.rejected, color: "danger", Icon: XCircle },
            ].map(({ label, value, color, Icon }) => (
              <div key={label} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body mini-card-body d-flex align-center gap-16">
                    <div className={`avatar avatar-xl bg-${color}-transparent text-${color}`}>
                      <Icon className="w-6 h-6" />
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
                        type="text"
                        className="form-control"
                        placeholder="Search employee..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <div className="col-md-2">
                      <select
                        className="form-select"
                        value={statusFilter}
                        onChange={(e) => handleStatusFilterChange(e.target.value as StatusFilter)}
                      >
                        <option value="">All Statuses</option>
                        <option value="Draft">Draft</option>
                        <option value="Submitted">Submitted</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <button
                        className="btn btn-info w-100"
                        onClick={() => {
                          setSearch("");
                          handleStatusFilterChange("");
                        }}
                      >
                        <Filter size={16} className="me-1" /> Clear Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Timesheets</h5>
                  <small className="text-muted">
                    Showing {filteredTimesheets.length} of {pagination.totalCount} record{pagination.totalCount !== 1 ? "s" : ""}
                  </small>
                </div>
                <div className="card-body mt-15">
                  {loading ? <TimesheetSkeleton /> : (
                    <>
                      <div className="table-responsive">
                        <table className="table table-hover align-middle">
                          <thead>
                            <tr>
                              <th>Employee</th>
                              <th>Period</th>
                              <th>Regular Hrs</th>
                              <th>Overtime Hrs</th>
                              <th>Total Hrs</th>
                              <th>Status</th>
                              <th>Submitted</th>
                              <th className="text-end">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredTimesheets.length === 0 ? (
                              <tr>
                                <td colSpan={8} className="text-center py-5 text-muted">
                                  <AlertCircle size={40} className="mb-3 d-block mx-auto" />
                                  <h6>No timesheets found</h6>
                                  <p className="small mb-0">Try adjusting your filters</p>
                                </td>
                              </tr>
                            ) : (
                              filteredTimesheets.map((ts) => (
                                <tr key={ts.timesheetId}>
                                  <td>
                                    <span className="fw-medium">{ts.employeeName}</span>
                                  </td>
                                  <td>
                                    <div>{fmt(ts.periodStartDate)}</div>
                                    <small className="text-muted">to {fmt(ts.periodEndDate)}</small>
                                  </td>
                                  <td>
                                    <span className="badge bg-label-primary">
                                      {ts.totalRegularHrs.toFixed(1)}h
                                    </span>
                                  </td>
                                  <td>
                                    {ts.totalOvertimeHrs > 0 ? (
                                      <span className="badge bg-label-warning">
                                        {ts.totalOvertimeHrs.toFixed(1)}h
                                      </span>
                                    ) : (
                                      <span className="text-muted">—</span>
                                    )}
                                  </td>
                                  <td>
                                    <span className="fw-medium">
                                      {ts.totalHours.toFixed(1)}h
                                    </span>
                                  </td>
                                  <td><StatusBadge status={ts.status} /></td>
                                  <td>
                                    <div>{fmt(ts.dateCreated)}</div>
                                  </td>
                                  <td className="text-end">
                                    <div className="dropdown">
                                      <button
                                        className="btn btn-sm btn-outline-info"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        disabled={processingId === ts.timesheetId}
                                      >
                                        {processingId === ts.timesheetId
                                          ? <span className="spinner-border spinner-border-sm" />
                                          : <MoreVertical size={16} />}
                                      </button>
                                      <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                          <button
                                            className="dropdown-item d-flex align-items-center gap-2"
                                            onClick={() => {
                                              setSelectedTimesheet(ts);
                                              setShowDetailModal(true);
                                            }}
                                          >
                                            <CalendarDays size={15} className="text-info" /> View Lines
                                          </button>
                                        </li>
                                        {ts.status === "Submitted" && (
                                          <>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                              <button
                                                className="dropdown-item d-flex align-items-center gap-2"
                                                onClick={() => {
                                                  setSelectedTimesheet(ts);
                                                  setModalType("approve");
                                                }}
                                              >
                                                <CheckCheck size={15} className="text-success" /> Approve
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                className="dropdown-item d-flex align-items-center gap-2"
                                                onClick={() => {
                                                  setSelectedTimesheet(ts);
                                                  setModalType("reject");
                                                }}
                                              >
                                                <XCircle size={15} className="text-danger" /> Reject
                                              </button>
                                            </li>
                                          </>
                                        )}
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination */}
                      {pagination.totalPages > 1 && (
                        <div className="d-flex justify-content-between align-items-center mt-4">
                          <small className="text-muted">
                            Showing {((pagination.page - 1) * pagination.pageSize) + 1}–
                            {Math.min(pagination.page * pagination.pageSize, pagination.totalCount)} of{" "}
                            {pagination.totalCount} entries
                          </small>
                          <nav>
                            <ul className="pagination mb-0">
                              <li className={`page-item ${pagination.page === 1 ? "disabled" : ""}`}>
                                <button
                                  className="page-link"
                                  onClick={() => setPagination(p => ({ ...p, page: p.page - 1 }))}
                                >Previous</button>
                              </li>
                              {[...Array(pagination.totalPages)].map((_, i) => (
                                <li key={i + 1} className={`page-item ${pagination.page === i + 1 ? "active" : ""}`}>
                                  <button
                                    className="page-link"
                                    onClick={() => setPagination(p => ({ ...p, page: i + 1 }))}
                                  >{i + 1}</button>
                                </li>
                              ))}
                              <li className={`page-item ${pagination.page === pagination.totalPages ? "disabled" : ""}`}>
                                <button
                                  className="page-link"
                                  onClick={() => setPagination(p => ({ ...p, page: p.page + 1 }))}
                                >Next</button>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Modal — timesheet lines */}
        {showDetailModal && selectedTimesheet && (
          <div
            className="modal show fade"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1050 }}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <div>
                    <h5 className="modal-title mb-0">{selectedTimesheet.employeeName}</h5>
                    <small className="text-muted">
                      {fmt(selectedTimesheet.periodStartDate)} — {fmt(selectedTimesheet.periodEndDate)}
                    </small>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => { setShowDetailModal(false); setSelectedTimesheet(null); setReviewNotes(""); }}
                  />
                </div>
                <div className="modal-body">

                  {/* Period totals */}
                  <div className="row g-3 mb-4">
                    {[
                      { label: "Regular", value: `${selectedTimesheet.totalRegularHrs.toFixed(1)}h`, color: "primary" },
                      { label: "Overtime", value: `${selectedTimesheet.totalOvertimeHrs.toFixed(1)}h`, color: "warning" },
                      { label: "Total", value: `${selectedTimesheet.totalHours.toFixed(1)}h`, color: "info" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="col-4">
                        <div className={`border border-${color} rounded p-3 text-center`}>
                          <small className="text-muted d-block">{label} Hours</small>
                          <h5 className={`mb-0 text-${color}`}>{value}</h5>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lines table */}
                  <div className="table-responsive">
                    <table className="table table-sm align-middle">
                      <thead className="bg-light">
                        <tr>
                          <th>Day</th>
                          <th>Date</th>
                          <th>Clock In</th>
                          <th>Clock Out</th>
                          <th>Regular</th>
                          <th>Overtime</th>
                          <th>Total</th>
                          <th>Note</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedTimesheet.lines.length === 0 ? (
                          <tr>
                            <td colSpan={8} className="text-center text-muted py-3">
                              No daily records yet
                            </td>
                          </tr>
                        ) : (
                          selectedTimesheet.lines.map((line) => (
                            <tr key={line.lineId} className={line.isLeaveDay ? "table-warning" : ""}>
                              <td><small className="text-muted">{line.dayName}</small></td>
                              <td>{fmt(line.workDate)}</td>
                              <td>{fmtTime(line.clockIn)}</td>
                              <td>{fmtTime(line.clockOut)}</td>
                              <td>{line.regularHrs.toFixed(1)}h</td>
                              <td>
                                {line.overtimeHrs > 0
                                  ? <span className="badge bg-label-warning">{line.overtimeHrs.toFixed(1)}h</span>
                                  : <span className="text-muted">—</span>}
                              </td>
                              <td><span className="fw-medium">{line.totalHrs.toFixed(1)}h</span></td>
                              <td>
                                {line.isLeaveDay
                                  ? <span className="badge bg-label-info">{line.leaveType}</span>
                                  : <small className="text-muted">{line.notes ?? "—"}</small>}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Review notes — only for submitted */}
                  {selectedTimesheet.status === "Submitted" && (
                    <div className="mt-3">
                      <label className="form-label">Review Notes (optional)</label>
                      <textarea
                        className="form-control"
                        rows={2}
                        placeholder="Add notes before approving or rejecting..."
                        value={reviewNotes}
                        onChange={(e) => setReviewNotes(e.target.value)}
                      />
                    </div>
                  )}

                  {/* Approved info */}
                  {selectedTimesheet.status === "Approved" && selectedTimesheet.approverName && (
                    <div className="alert alert-success mt-3 mb-0 py-2">
                      <small>
                        Approved by <strong>{selectedTimesheet.approverName}</strong>
                        {selectedTimesheet.dateApproved && ` on ${fmt(selectedTimesheet.dateApproved)}`}
                      </small>
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => { setShowDetailModal(false); setSelectedTimesheet(null); setReviewNotes(""); }}
                  >
                    <X size={16} className="me-1" />
                    {selectedTimesheet.status === "Submitted" ? "Cancel" : "Close"}
                  </button>
                  {selectedTimesheet.status === "Submitted" && (
                    <>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleReview(selectedTimesheet.timesheetId, "rejected")}
                        disabled={processingId === selectedTimesheet.timesheetId}
                      >
                        {processingId === selectedTimesheet.timesheetId
                          ? <span className="spinner-border spinner-border-sm me-2" />
                          : <XCircle size={16} className="me-1" />}
                        Reject
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleReview(selectedTimesheet.timesheetId, "approved")}
                        disabled={processingId === selectedTimesheet.timesheetId}
                      >
                        {processingId === selectedTimesheet.timesheetId
                          ? <span className="spinner-border spinner-border-sm me-2" />
                          : <CheckCircle size={16} className="me-1" />}
                        Approve
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployerTimesheets;