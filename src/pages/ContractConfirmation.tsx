import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, NavLink } from "react-router-dom";
import { CheckCircle2, XCircle, Loader2, ArrowLeft, Download, FileText, Clock, AlertCircle } from "lucide-react";
import { PaymentVerificationResponse } from "../types/contractPayment";
import { verifyContractPayment } from "../api/ContractApi";


export default function PaymentConfirmation() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [verificationStatus, setVerificationStatus] = useState<"loading" | "success" | "failed">("loading");
    const [paymentData, setPaymentData] = useState<PaymentVerificationResponse["data"] | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const txRef = searchParams.get("tx_ref");
    const status = searchParams.get("status");
    const transactionId = searchParams.get("transaction_id");

    useEffect(() => {
        if (txRef) {
            verifyPayment();
        }
    }, [txRef, navigate]);

    const verifyPayment = async () => {
        const response = await verifyContractPayment(txRef!, transactionId!);
        const result: PaymentVerificationResponse = await response.json();

        console.log("verify=", result)
        if (response.ok && result.statusCode === 200) {
            setVerificationStatus("success");
            setPaymentData(result.data || null);

            setTimeout(() => {
                navigate("/contractManagement");
            }, 15000);
        } else {
            setVerificationStatus("failed");
            setErrorMessage(result.message || "An error occurred during payment verification.");
        }
    };

    const handleGoToContracts = () => {
        navigate("/contractManagement");
    };

    return (
        <div className="app-content-area">
            <div className="app-content-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-box d-flex-between flex-wrap gap-15">
                                <div>
                                    <h1 className="page-title fs-18 lh-1">
                                        Service Payment Confirmation
                                    </h1>
                                    <p className=" mt-2 mb-0">
                                        Create and track your service requests for admin approval
                                    </p>
                                </div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-example1 mb-0">
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Payment Confirmation
                                        </li>
                                        <li className="breadcrumb-item">
                                            <NavLink to="/contractManagement">Service Management</NavLink>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <NavLink to="/dashboard">Dashboard</NavLink>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-10">
                            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                                {/* Header */}
                                <div className={`text-center rounded-4 text-white p-4 ${verificationStatus === "success" ? "bg-success" :
                                    verificationStatus === "failed" ? "bg-danger" : "bg-info"
                                    } bg-opacity-10`}>
                                    {verificationStatus === "loading" && (
                                        <div className="mb-3">
                                            <Loader2 size={64} className="text-info animate-spin" />
                                        </div>
                                    )}
                                    {verificationStatus === "success" && (
                                        <div className="mb-3">
                                            <CheckCircle2 size={64} className="text-white" />
                                        </div>
                                    )}
                                    {verificationStatus === "failed" && (
                                        <div className="mb-3">
                                            <XCircle size={64} className="text-white" />
                                        </div>
                                    )}

                                    <h2 className="fw-bold text-white mb-2">
                                        {verificationStatus === "loading" && "Verifying Payment..."}
                                        {verificationStatus === "success" && "Payment Successful!"}
                                        {verificationStatus === "failed" && "Payment Verification Failed"}
                                    </h2>
                                    <p className="text-white mb-0">
                                        {verificationStatus === "loading" && "Please wait while we confirm your transaction"}
                                        {verificationStatus === "success" && "Your contract has been activated"}
                                        {verificationStatus === "failed" && errorMessage}
                                    </p>
                                </div>

                                {/* Body */}
                                <div className="card-body p-4">
                                    {verificationStatus === "loading" && (
                                        <div className="text-center py-5">
                                            <div className="spinner-border text-info" role="status" style={{ width: "3rem", height: "3rem" }}>
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            <p className="mt-3 text-white">
                                                Processing your payment confirmation...
                                            </p>
                                            <small className="text-white">
                                                Transaction Reference: {txRef}
                                            </small>
                                        </div>
                                    )}

                                    {verificationStatus === "success" && paymentData && (
                                        <div>
                                            {/* Payment Details */}
                                            <div className="mb-4">
                                                <h5 className="fw-bold mb-3">Payment Details</h5>
                                                <div className="border rounded-3 p-3">
                                                    <div className="row g-3">
                                                        <div className="col-6">
                                                            <small className="text-white d-block">Amount Paid</small>
                                                            <strong className="fs-5">
                                                                {paymentData.currency} {paymentData.amount?.toLocaleString()}
                                                            </strong>
                                                        </div>
                                                        <div className="col-6">
                                                            <small className="text-white d-block">Transaction Reference</small>
                                                            <strong className="fs-6">{paymentData.reference}</strong>
                                                        </div>
                                                        <div className="col-6">
                                                            <small className="text-white d-block">Payment Status</small>
                                                            <span className="badge bg-success">{paymentData.paymentStatus}</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <small className="text-white d-block">Verified At</small>
                                                            <strong>{new Date(paymentData.verifiedAt).toLocaleString()}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="d-flex gap-3 justify-content-center">
                                                <button
                                                    // onClick={handleDownloadContract}
                                                    className="btn btn-outline-success d-flex align-items-center gap-2"
                                                >
                                                    <Download size={18} />
                                                    Download Contract
                                                </button>
                                                <button
                                                    onClick={handleGoToContracts}
                                                    className="btn btn-info d-flex align-items-center gap-2"
                                                >
                                                    <FileText size={18} />
                                                    View All Contracts
                                                </button>
                                            </div>

                                            {/* Auto-redirect message */}
                                            <div className="text-center mt-4">
                                                <small className="text-white">
                                                    Redirecting to contract details in 3 seconds...
                                                </small>
                                            </div>
                                        </div>
                                    )}

                                    {verificationStatus === "failed" && (
                                        <div>
                                            {/* Help Section */}
                                            <div className="alert alert-warning" role="alert">
                                                <div className="d-flex gap-2">
                                                    <AlertCircle size={20} />
                                                    <div>
                                                        <strong>Need help?</strong>
                                                        <p className="mb-0 small">
                                                            If you've been charged but your contract isn't activated,
                                                            please contact our support team with your transaction reference.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Transaction Info */}
                                            {txRef && (
                                                <div className="mb-4">
                                                    <h5 className="fw-bold mb-3">Transaction Information</h5>
                                                    <div className="border rounded-3 p-3">
                                                        <div className="mb-2">
                                                            <small className="d-block">Transaction Reference</small>
                                                            <strong>{txRef}</strong>
                                                        </div>
                                                        {transactionId && (
                                                            <div>
                                                                <small className="d-block">Transaction ID</small>
                                                                <strong>{transactionId}</strong>
                                                            </div>
                                                        )}
                                                        {status && (
                                                            <div className="mt-2">
                                                                <small className="d-block">Payment Gateway Status</small>
                                                                <span className="badge bg-warning">{status}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Action Buttons for Failed */}
                                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                                <button
                                                    onClick={() => window.location.reload()}
                                                    className="btn btn-warning d-flex align-items-center gap-2"
                                                >
                                                    <Clock size={18} />
                                                    Retry Verification
                                                </button>
                                                <NavLink
                                                    to="/contractManagement"
                                                    className="btn btn-outline-warning d-flex align-items-center gap-2"
                                                >
                                                    <ArrowLeft size={18} />
                                                    Back to Contracts
                                                </NavLink>
                                                <a
                                                    href="mailto:support@latticehr.com"
                                                    className="btn btn-outline-info d-flex align-items-center gap-2"
                                                >
                                                    Contact Support
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="card-footer text-center py-3">
                                    <small className="text-black">
                                        &copy; {new Date().getFullYear()} Lattice HR. All rights reserved.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}