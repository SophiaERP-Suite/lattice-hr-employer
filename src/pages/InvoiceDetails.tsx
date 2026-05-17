import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  CheckCircle, Clock, XCircle, ArrowLeft,
  CreditCard, AlertCircle, Printer,
  CheckCheck,
  Plus,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import Hashids from "hashids";
import { confirmPayment, getInvoiceById, PublishInvoice } from "../api/SalesOrderApi";
import { SalesOrderResponse } from "../types/salesOrder";
import Modal from "../components/modal";

// Status Badge Component
const PaymentBadge = ({ status }: { status: number }) => {
  const config: Record<number, { cls: string; Icon: any; text: string }> = {
    0: { cls: "bg-label-danger", Icon: XCircle, text: "Unpaid" },
    2: { cls: "bg-label-warning", Icon: Clock, text: "Part paid" },
    1: { cls: "bg-label-success", Icon: CheckCircle, text: "Paid" },
  };
  const cfg = config[status] ?? config[0];
  return (
    <span className={`badge ${cfg.cls}`}>
      <cfg.Icon size={12} className="me-1" />{cfg.text}
    </span>
  );
};

type ModalType = "confirm" | "update" | null;

// Formatters
const fmt = (d?: string | Date) => {
  if (!d) return "—";
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
};

const fmtMoney = (n: number, symbol = "£") =>
  `${symbol} ${n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`.trim();

// Skeleton Loader
const InvoiceDetailSkeleton = () => (
  <div className="container-fluid">
    <div className="placeholder-glow">
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <span className="placeholder col-8 mb-2" />
              <span className="placeholder col-6" />
            </div>
            <div className="col-md-6 text-end">
              <span className="placeholder col-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <span className="placeholder col-12 mb-3" style={{ height: "200px" }} />
        </div>
      </div>
    </div>
  </div>
);

// Main Component
function InvoiceDetail() {
  const { id } = useParams<{ id: string }>();
  const hashIds = new Hashids('LatticeHumanResourceEncode', 10);
  const [invoice, setInvoice] = useState<SalesOrderResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState<string>("");
  const [paymentNotes, setPaymentNotes] = useState("");
  const [processing, setProcessing] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalLoading, setModalLoading] = useState(false);

  const decoded = hashIds.decode(String(id));
  const decodedId = decoded.length > 0 ? Number(decoded[0]) : null;

  useEffect(() => {
    if (decodedId) {
      console.log("decoded =>", decodedId)
      fetchInvoiceDetail(decodedId);
    }
  }, [decodedId]);

  const fetchInvoiceDetail = async (invoiceId: number) => {
    setLoading(true);
    try {
      const data = await getInvoiceById(invoiceId);
      console.log("Invoice details:", data);

      setInvoice(data);
    } catch (error) {
      console.error("Failed to fetch invoice:", error);
      toast.error("Failed to load invoice details");
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setModalType("confirm");
  };

  const handleConfirmPayment = async (data: {
    inputValue?: string;
    file?: File;
  }) => {
    try {
      const { inputValue: amountPaid, file } = data;

      if (!amountPaid) {
        toast.error("Please enter an amount paid");
        return;
      }

      if (!file) {
        console.error("Missing required fields");
        return;
      }

      setModalLoading(true);

      const formData = new FormData();
      formData.append("AmountPaid", amountPaid);
      formData.append("PaymentProof", file);

      const response = await confirmPayment(formData, Number(decodedId));

      const res = await response.json();

      if (res?.statusCode === 200 || res?.statusCode === 201) {
        toast.success(res?.message || "Payment confirmed successfully");
        closeModal();
        await fetchInvoiceDetail(Number(decodedId));
      } else {
        toast.error(res?.message || "Could not confirm payment. Please try again.");
      }
    } catch (error) {
      console.error("Payment confirmationerror:", error);
      toast.error("Failed to confirm payment. Please try again.");
    } finally {
      setModalLoading(false);
      fetchInvoiceDetail(Number(decodedId));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const closeModal = () => {
    setModalType(null);
  };

  if (loading) {
    return (
      <div className="app-content-area">
        <div className="app-content-wrap">
          <InvoiceDetailSkeleton />
        </div>
      </div>
    );
  }

  if (!invoice) {
    return (
      <div className="app-content-area">
        <div className="app-content-wrap">
          <div className="container-fluid">
            <div className="card">
              <div className="card-body text-center py-5">
                <AlertCircle size={48} className="text-danger mb-3" />
                <h4>Invoice Not Found</h4>
                <p className="text-black">The invoice you're looking for doesn't exist or has been removed.</p>
                <NavLink to="/invoices" className="btn btn-primary">
                  <ArrowLeft size={16} className="me-2" /> Back to Invoices
                </NavLink>
              </div>
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
          <ToastContainer />

          <Modal
            isOpen={modalType === "confirm"}
            title="Confirm your payment"
            message="Are you sure you want to record this payment? This action confirms that you the client has made the payment. The invoice status will be updated, and administrators will be able to see this confirmation."
            confirmText="Submit"
            cancelText="Cancel"
            confirmColor="success"
            inputLabel={`Amount Paid (${invoice.currencySymbol})`}
            inputPlaceholder={`e.g.,100.00`}
            defaultInputValue2="Display order"
            fileLabel="Select Payment proof (e.g. receipt or screenshot)"
            fileAccept="image/*,.jpg,.png,.jpeg"
            buttonIcon={<CheckCheck size={16} />}
            headerIcon={<CheckCircle size={20} />}
            loading={modalLoading}
            onConfirm={handleConfirmPayment}
            onCancel={closeModal}
          />

          {/* Payment Modal */}
          {showPaymentModal && (
            <div
              className="modal show fade"
              style={{
                display: "block",
                backgroundColor: "rgba(0,0,0,0.5)",
                position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1050,
              }}
              onClick={(e) => {
                if (e.target === e.currentTarget) setShowPaymentModal(false);
              }}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Record Payment</h5>
                    <button type="button" className="btn-close" onClick={() => setShowPaymentModal(false)} />
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Invoice Id</label>
                      <input type="text" className="form-control" value={invoice.salesOrderId} disabled />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Amount Due</label>
                      <input type="text" className="form-control" value={fmtMoney(invoice.amountDue, invoice.currencySymbol)} disabled />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Payment Amount *</label>
                      <div className="input-group">
                        <span className="input-group-text">{invoice.currencySymbol}</span>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="0.00"
                          value={paymentAmount}
                          onChange={(e) => setPaymentAmount(e.target.value)}
                          step="0.01"
                          min="0"
                          max={invoice.amountDue}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Payment Notes (Optional)</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Add payment reference or notes..."
                        value={paymentNotes}
                        onChange={(e) => setPaymentNotes(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-dark" onClick={() => setShowPaymentModal(false)}>
                      Cancel
                    </button>
                    <button
                      className="btn btn-success"
                      // onClick={handleRecordPayment}
                      disabled={processing}
                    >
                      {processing ? (
                        <span className="spinner-border spinner-border-sm me-2" />
                      ) : (
                        <CreditCard size={16} className="me-2" />
                      )}
                      Record Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1 d-flex align-items-center gap-2">
                  Invoice Details
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active">
                      <NavLink to={`/invoiceDetails/${id}`}>Invoice Details</NavLink>
                    </li>
                    <li className="breadcrumb-item">
                      <NavLink to="/invoices">Invoices</NavLink>
                    </li>
                    <li className="breadcrumb-item">
                      <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="row mb-3">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex gap-2 justify-content-between align-items-center flex-wrap">
                    <h4 className="fs-18">
                      Invoice Id: {invoice.salesOrderId}
                    </h4>
                    <div className="d-flex gap-2 justify-content-end flex-wrap">
                      <button className="btn btn-warning" onClick={handlePrint}>
                        <Printer size={16} className="me-2" /> Print
                      </button>
                      {invoice.publishStatus === "Unpaid" && (
                        <button
                          className="btn btn-secondary"
                          onClick={() => openAddModal()}
                        >
                          <CheckCircle size={16} className="me-2" /> Confirm Payment
                        </button>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Information */}
          <div className="row">
            <div className="col-xl-8">
              <div className="card mb-3">
                <div className="card-header d-flex justify-content-between">
                  <h5 className="mb-0 fw-bold">Invoice</h5>
                  <div>
                    <span>
                      {invoice.publishStatus === "Unpaid" ? (
                        <span className="badge bg-label-warning">
                          <Clock size={12} className="me-1" /> Unpaid
                        </span>
                      ) : (
                        <span className="badge bg-label-success">
                          <CheckCircle size={12} className="me-1" /> Paid
                        </span>
                      )}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <table className="table table-sm table-borderless">
                        <tbody>
                          <tr>
                            <td width="140"><strong>Invoice Id:</strong></td>
                            <td>{invoice.salesOrderId}</td>
                          </tr>
                          <tr>
                            <td><strong>Employer:</strong></td>
                            <td>{invoice.employerName}</td>
                          </tr>
                          <tr>
                            <td><strong>Due Date:</strong></td>
                            <td>{fmt(invoice.dueDate.toString())}</td>
                          </tr>
                          <tr>
                            <td><strong>Date Created:</strong></td>
                            <td>{fmt(invoice.dateCreated)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <table className="table table-sm table-borderless">
                        <tbody>
                          <tr>
                            <td width="140"><strong>Period Start:</strong></td>
                            <td>{invoice.periodStartDate ? fmt(invoice.periodStartDate.toString()) : "—"}</td>
                          </tr>
                          <tr>
                            <td><strong>Period End:</strong></td>
                            <td>{invoice.periodEndDate ? fmt(invoice.periodEndDate.toString()) : "—"}</td>
                          </tr>
                          <tr>
                            <td><strong>Currency:</strong></td>
                            <td>{invoice.currencyCode} ({invoice.currencySymbol})</td>
                          </tr>
                          <tr>
                            <td><strong>Sub Total:</strong></td>
                            <td>{fmtMoney(invoice.subTotal, invoice.currencySymbol)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card mb-3">
                <div className="card-header">
                  <h5 className="mb-0">Payment Summary</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Sub Total:</span>
                    <span className="fw-medium">{fmtMoney(invoice.subTotal, invoice.currencySymbol)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Total Amount:</span>
                    <span className="fw-medium">{fmtMoney(invoice.totalAmount, invoice.currencySymbol)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Amount Paid:</span>
                    <span className="fw-medium text-success">{fmtMoney(invoice.amountPaid, invoice.currencySymbol)}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="fw-bold">Amount Due:</span>
                    <span className={`fw-bold ${invoice.amountDue > 0 ? "text-danger" : "text-success"}`}>
                      {fmtMoney(invoice.amountDue, invoice.currencySymbol)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Timesheet Items</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Details</th>
                          <th>Hours</th>
                          <th>Rate</th>
                          <th>Sub Total</th>
                          <th>Period</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoice.lines.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="text-center text-black py-4">
                              No line items found
                            </td>
                          </tr>
                        ) : (
                          invoice.lines.map((line) => (
                            <tr key={line.salesOrderLineId}>
                              <td>
                                <div className="fw-medium">{line.jobSeekerName}</div>
                                {line.description && (
                                  <small className="text-black">{line.description}</small>
                                )}
                              </td>
                              <td>{line.totalHours?.toFixed(1) || "0"}h</td>
                              <td>{fmtMoney(line.hourlyRate, invoice.currencySymbol)}</td>
                              <td className="fw-medium">{fmtMoney(line.subTotal, invoice.currencySymbol)}</td>
                              <td>
                                <small>
                                  {line.periodStartDate && fmt(line.periodStartDate.toString())}
                                  {line.periodEndDate && ` – ${fmt(line.periodEndDate.toString())}`}
                                </small>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                      <tfoot className="table-light fw-bold">
                        <tr>
                          <td colSpan={3} className="text-end">Total:</td>
                          <td colSpan={2}>{fmtMoney(invoice.totalAmount, invoice.currencySymbol)}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History Section (Optional - if you have payment records) */}
          <div className="row mt-3 d-none">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Payment History</h5>
                </div>
                <div className="card-body">
                  {invoice.amountPaid > 0 ? (
                    <div className="table-responsive">
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Reference</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={5} className="text-center text-black py-3">
                              Payment history details will appear here once payments are recorded
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-4 text-black">
                      <CreditCard size={32} className="mb-2 opacity-50" />
                      <p className="mb-0">No payments recorded yet</p>
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
}

export default InvoiceDetail;