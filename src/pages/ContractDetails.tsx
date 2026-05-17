import { ArrowDownFromLine, FilePenLine, FileText, Upload, CheckCircle2, Clock, Calendar, Hash, Briefcase, Clock as ClockIcon, DollarSign, Eye } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hashids from "hashids";
import { toast, ToastContainer } from "react-toastify";
import HtmlRenderer from "../components/HTMLRenderer";
import { getContractById, signContract } from "../api/ContractApi";
import { ContractData } from "../types/contract";
import Modal from "../components/modal";

type ModalType = "sign" | null;

export default function EmployerContractDetails() {
    const [contractData, setContractData] = useState<ContractData | null>(null);
    const hashIds = new Hashids("LatticeHrEncode", 10);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
    const [modalType, setModalType] = useState<ModalType>(null);

    const closeModal = () => setModalType(null);

    const refetchContract = () => {
        getContractById(hashedId).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => {
                    setContractData(data.data);
                });
            } else {
                res.text().then((data) => console.log(JSON.parse(data)));
            }
        });
    };

    useEffect(() => {
        refetchContract();
    }, [hashedId]);

    const handleAccept = async (data: { file?: File }) => {
        try {
            setLoading(true);
            if (!data.file) {
                alert("Please select a file");
                return;
            }
            const formData = new FormData();
            formData.append("Signature", data.file);
            const response = await signContract(Number(hashedId), formData);
            const result = await response.json();
            console.log(result);
            if (result.statusCode === 400) {
                toast.error(result.message);
            } else if (response.status === 200 || response.status === 201) {
                toast.success(result.message);
                refetchContract();
                if (result.data?.paymentLink) {
                    window.location.href = result.data.paymentLink;
                }
            }
        } catch {
            toast.error("Failed to sign contract");
        } finally {
            setModalType(null);
            setLoading(false);
        }
    };

    const downloadReceipt = async () => {
        const loader = document.getElementById("query-loader");
        const text = document.getElementById("query-text");
        if (loader) loader.style.display = "flex";
        if (text) text.style.display = "none";

        try {
            const element = document.getElementById("contractDetails");
            if (!element) {
                if (loader) loader.style.display = "none";
                if (text) text.style.display = "flex";
                return;
            }

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [794, 1123] });

            const imgWidth = 794;
            const pageHeight = 1123;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("contract.pdf");
            toast.success("Your file is being downloaded");
        } catch (err) {
            toast.warning("Download Failed");
            console.log(err);
        }

        if (loader) loader.style.display = "none";
        if (text) text.style.display = "flex";
    };

    const isSigned = contractData?.signed;

    const isPdfUrl = (url: string) => url?.toLowerCase().endsWith('.pdf');
    // const isDocUrl = (url: string) => url?.toLowerCase().endsWith('.doc') || url?.toLowerCase().endsWith('.docx');

    const showDocument = contractData?.contractURL ? true : false;

    const formatCurrency = (amount: number, currency: string) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    };

    return (
        <div className="app-content-area">
            <div className="app-content-wrap">
                <div className="container-fluid">
                    <ToastContainer />

                    <Modal
                        isOpen={modalType === "sign"}
                        title="Accept Contract"
                        message="Your signature would be needed"
                        confirmText="Upload"
                        cancelText="Cancel"
                        confirmColor="success"
                        buttonIcon={<Upload size={20} />}
                        headerIcon={<FileText size={20} />}
                        fileLabel="Select File"
                        fileAccept="image/*,.pdf,.doc,.docx"
                        loading={loading}
                        onConfirm={handleAccept}
                        onCancel={closeModal}
                    />

                    <div className="row">
                        {/* Page Header */}
                        <div className="col-xl-12 mb-3">
                            <div className="page-title-box d-flex-between flex-wrap gap-15">
                                <div>
                                    <h1 className="page-title fs-18 lh-1 mb-1">Service Contract</h1>
                                    <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: 0 }}>
                                        Review, sign, and download your service agreement
                                    </p>
                                </div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-example1 mb-0">
                                        <li className="active breadcrumb-item" aria-current="page">
                                            <NavLink to={`/contractDetails/${id}`}>Contract Details</NavLink>
                                        </li>
                                        <li className="active breadcrumb-item" aria-current="page">
                                            <NavLink to={`/Contracts/Requests/${id}`}>Request Details</NavLink>
                                        </li>
                                        <li className="active breadcrumb-item" aria-current="page">
                                            <NavLink to="/contractManagement">Contracts</NavLink>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <NavLink to="/Dashboard">Dashboard</NavLink>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="col-12 d-flex justify-content-end gap-10 mb-4">
                            {!isSigned && (
                                <button
                                    className="btn btn-warning d-flex align-items-center gap-2"
                                    style={{
                                        fontWeight: 600,
                                        letterSpacing: "0.01em",
                                        borderRadius: "8px",
                                        padding: "9px 20px",
                                        boxShadow: "0 2px 8px rgba(245,158,11,0.25)",
                                        border: "none",
                                    }}
                                    onClick={() => setModalType("sign")}
                                >
                                    <FilePenLine size={16} />
                                    Sign Contract
                                </button>
                            )}

                            {/* Download button: only shown in template view (when no uploaded doc exists) */}
                            {!showDocument && (
                                <button
                                    className="btn btn-success d-flex align-items-center gap-2"
                                    style={{
                                        fontWeight: 600,
                                        letterSpacing: "0.01em",
                                        borderRadius: "8px",
                                        padding: "9px 20px",
                                        boxShadow: "0 2px 8px rgba(16,185,129,0.25)",
                                        border: "none",
                                        minWidth: "140px",
                                        justifyContent: "center",
                                    }}
                                    onClick={downloadReceipt}
                                >
                                    <div className="dots" id="query-loader" style={{ display: "none" }}>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                    <span id="query-text" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <ArrowDownFromLine size={16} /> Download PDF
                                    </span>
                                </button>
                            )}
                        </div>

                        {/* Contract Preview Area - Show document if exists, otherwise show template */}
                        {contractData && (
                            <div className="col-xl-12 d-flex justify-content-center" style={{ overflowX: "auto" }}>

                                {/* Show uploaded document if it exists */}
                                {showDocument && contractData.contractURL ? (
                                    <div style={{ width: "794px", margin: "0 auto" }}>
                                        <div
                                            style={{
                                                backgroundColor: "#fff",
                                                borderRadius: "12px",
                                                boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {/* Document Header */}
                                            <div
                                                className="bg-info"
                                                style={{
                                                    padding: "14px 20px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                    <div
                                                        style={{
                                                            width: "32px",
                                                            height: "32px",
                                                            borderRadius: "8px",
                                                            backgroundColor: "rgba(255,255,255,0.15)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <FileText size={15} color="#fff" />
                                                    </div>
                                                    <div>
                                                        <p style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "#fff" }}>
                                                            Uploaded Contract Document
                                                        </p>
                                                        <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
                                                            {isPdfUrl(contractData.contractURL) ? "PDF Document" : "Word Document"}
                                                            &nbsp;·&nbsp; Contract #{hashIds.encode(contractData.contractId)}
                                                        </p>
                                                    </div>
                                                </div>
                                                <a
                                                    href={contractData.contractURL}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "7px",
                                                        padding: "8px 16px",
                                                        borderRadius: "8px",
                                                        backgroundColor: "rgba(255,255,255,0.15)",
                                                        border: "1px solid rgba(255,255,255,0.2)",
                                                        color: "#fff",
                                                        fontSize: "12px",
                                                        fontWeight: 600,
                                                        textDecoration: "none",
                                                        transition: "background 0.15s",
                                                    }}
                                                    onMouseEnter={(e) =>
                                                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                                                        "rgba(255,255,255,0.25)"
                                                    }
                                                    onMouseLeave={(e) =>
                                                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                                                        "rgba(255,255,255,0.15)"
                                                    }
                                                >
                                                    <Eye size={13} /> Open in New Tab
                                                </a>
                                            </div>

                                            {/* PDF → inline iframe; Word → friendly fallback */}
                                            {isPdfUrl(contractData.contractURL) ? (
                                                <iframe
                                                    src={contractData.contractURL}
                                                    style={{
                                                        width: "100%",
                                                        height: "900px",
                                                        border: "none",
                                                        display: "block",
                                                    }}
                                                    title="Contract Document"
                                                />
                                            ) : (
                                                <div
                                                    style={{
                                                        padding: "60px 40px",
                                                        textAlign: "center",
                                                        backgroundColor: "#f8fafc",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: "72px",
                                                            height: "72px",
                                                            borderRadius: "16px",
                                                            backgroundColor: "#dbeafe",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            margin: "0 auto 20px",
                                                            fontSize: "32px",
                                                        }}
                                                    >
                                                        📝
                                                    </div>
                                                    <h4
                                                        style={{
                                                            fontSize: "16px",
                                                            fontWeight: 700,
                                                            color: "#1e293b",
                                                            margin: "0 0 8px",
                                                        }}
                                                    >
                                                        Word Document
                                                    </h4>
                                                    <p
                                                        style={{
                                                            fontSize: "13px",
                                                            color: "#64748b",
                                                            margin: "0 0 24px",
                                                            maxWidth: "340px",
                                                            marginLeft: "auto",
                                                            marginRight: "auto",
                                                        }}
                                                    >
                                                        Word documents cannot be previewed in the browser. Use the button below
                                                        to open or download the file.
                                                    </p>
                                                    <a
                                                        href={contractData.contractURL}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        style={{
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "8px",
                                                            padding: "10px 24px",
                                                            borderRadius: "8px",
                                                            backgroundColor: "#1e3a5f",
                                                            color: "#fff",
                                                            fontSize: "13px",
                                                            fontWeight: 600,
                                                            textDecoration: "none",
                                                        }}
                                                    >
                                                        <ArrowDownFromLine size={15} /> Open / Download Document
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    /* Show template view when no uploaded document exists */
                                    <div
                                        id="contractDetails"
                                        style={{
                                            width: "794px",
                                            margin: "0 auto",
                                            backgroundColor: "#f0f2f5",
                                            padding: "24px 0 32px",
                                        }}
                                    >
                                        <div
                                            className="pdf-page"
                                            style={{
                                                width: "794px",
                                                minHeight: "1123px",
                                                backgroundColor: "#fff",
                                                marginBottom: "20px",
                                                boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                                                boxSizing: "border-box",
                                                position: "relative",
                                                overflow: "hidden",
                                                pageBreakAfter: "always",
                                                fontFamily: "'Segoe UI', system-ui, sans-serif",
                                            }}
                                        >
                                            {/* Watermark */}
                                            <div
                                                style={{
                                                    backgroundImage: "url('/one/lhr_emp/src/assets/images/logo/lattice-logo-mobile.png')",
                                                    position: "absolute",
                                                    inset: 0,
                                                    backgroundPosition: "center",
                                                    backgroundRepeat: "repeat",
                                                    backgroundSize: "contain",
                                                    opacity: 0.035,
                                                    pointerEvents: "none",
                                                    zIndex: 0,
                                                }}
                                            />

                                            <div style={{ position: "relative", zIndex: 1 }}>
                                                {/* Header Band - using bg-info */}
                                                <div
                                                    className="bg-info"
                                                    style={{
                                                        padding: "28px 40px 24px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                                        <div
                                                            style={{
                                                                width: "52px",
                                                                height: "52px",
                                                                borderRadius: "10px",
                                                                backgroundColor: "rgba(255,255,255,0.12)",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                overflow: "hidden",
                                                                flexShrink: 0,
                                                            }}
                                                        >
                                                            <img
                                                                src={
                                                                    contractData.employerLogo || contractData.employer === ""
                                                                        ? contractData.employerLogo
                                                                        : "https://img.icons8.com/fluency/48/image--v1.png"
                                                                }
                                                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                                                alt="company logo"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p
                                                                style={{
                                                                    fontSize: "11px",
                                                                    color: "rgba(255,255,255,0.55)",
                                                                    margin: 0,
                                                                    letterSpacing: "0.08em",
                                                                    textTransform: "uppercase",
                                                                }}
                                                            >
                                                                Service Provider
                                                            </p>
                                                            <h1
                                                                style={{
                                                                    color: "#fff",
                                                                    fontSize: "20px",
                                                                    fontWeight: 700,
                                                                    margin: 0,
                                                                    letterSpacing: "-0.01em",
                                                                }}
                                                            >
                                                                {contractData.employer}
                                                            </h1>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                                                        <img
                                                            src="/one/lhr_emp/src/assets/images/logo/lattice-logo-mobile.png"
                                                            style={{ height: "28px", width: "auto", opacity: 0.9 }}
                                                            alt="lattice logo"
                                                        />
                                                        <span
                                                            style={{
                                                                fontSize: "10px",
                                                                color: "rgba(255,255,255,0.45)",
                                                                letterSpacing: "0.06em",
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            Service Agreement
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Contract Meta Info */}
                                                <div
                                                    style={{
                                                        display: "grid",
                                                        gridTemplateColumns: "repeat(4, 1fr)",
                                                        backgroundColor: "#f8fafc",
                                                        borderBottom: "1px solid #e2e8f0",
                                                    }}
                                                >
                                                    {[
                                                        {
                                                            icon: <Hash size={13} color="#64748b" />,
                                                            label: "Contract No.",
                                                            value: hashIds.encode(contractData.contractId),
                                                        },
                                                        {
                                                            icon: <DollarSign size={13} color="#64748b" />,
                                                            label: "Contract Value",
                                                            value: formatCurrency(contractData.amount, contractData.currency),
                                                        },
                                                        {
                                                            icon: <Calendar size={13} color="#64748b" />,
                                                            label: "Effective Date",
                                                            value: new Date(contractData.dateCreated).toLocaleDateString("en-GB", {
                                                                day: "2-digit",
                                                                month: "long",
                                                                year: "numeric",
                                                            }),
                                                        },
                                                        {
                                                            icon: isSigned ? (
                                                                <CheckCircle2 size={13} color="#10b981" />
                                                            ) : (
                                                                <ClockIcon size={13} color="#f59e0b" />
                                                            ),
                                                            label: "Status",
                                                            value: isSigned ? "Executed" : "Pending Execution",
                                                            highlight: isSigned ? "#10b981" : "#f59e0b",
                                                            highlightBg: isSigned ? "#ecfdf5" : "#fffbeb",
                                                        },
                                                    ].map(({ icon, label, value, highlight, highlightBg }) => (
                                                        <div
                                                            key={label}
                                                            style={{
                                                                padding: "14px 16px",
                                                                borderRight: "1px solid #e2e8f0",
                                                            }}
                                                        >
                                                            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "4px" }}>
                                                                {icon}
                                                                <span
                                                                    style={{
                                                                        fontSize: "10px",
                                                                        color: "#94a3b8",
                                                                        textTransform: "uppercase",
                                                                        letterSpacing: "0.06em",
                                                                        fontWeight: 600,
                                                                    }}
                                                                >
                                                                    {label}
                                                                </span>
                                                            </div>
                                                            <p
                                                                style={{
                                                                    margin: 0,
                                                                    fontSize: "12px",
                                                                    fontWeight: 700,
                                                                    color: highlight || "#1e293b",
                                                                    backgroundColor: highlightBg || "transparent",
                                                                    padding: highlightBg ? "2px 7px" : 0,
                                                                    borderRadius: highlightBg ? "4px" : 0,
                                                                    display: "inline-block",
                                                                }}
                                                            >
                                                                {value}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Contract Body */}
                                                <div style={{ padding: "32px 40px" }}>
                                                    {/* SCOPE OF SERVICES */}
                                                    <div style={{ marginBottom: "32px" }}>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "8px",
                                                                marginBottom: "16px",
                                                                paddingBottom: "8px",
                                                                borderBottom: "2px solid #e2e8f0",
                                                            }}
                                                        >
                                                            <Briefcase size={16} className="text-info" />
                                                            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#1e293b" }}>
                                                                Details of Agreement
                                                            </h3>
                                                        </div>
                                                        <div>
                                                            <p>The Service Provider agrees to perform the following services (the "Services"):</p>
                                                            <div>
                                                                <HtmlRenderer html={contractData.content} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Signature Section */}
                                                    <div
                                                        style={{
                                                            marginTop: "48px",
                                                            paddingTop: "32px",
                                                            borderTop: "2px solid #e2e8f0",
                                                        }}
                                                    >
                                                        <p
                                                            style={{
                                                                fontSize: "11px",
                                                                color: "#94a3b8",
                                                                textTransform: "uppercase",
                                                                letterSpacing: "0.08em",
                                                                fontWeight: 600,
                                                                marginBottom: "24px",
                                                            }}
                                                        >
                                                            IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.
                                                        </p>

                                                        <div style={{ display: "flex", justifyContent: "space-between", gap: "32px" }}>
                                                            {/* Service Provider Signature */}
                                                            <div style={{ flex: 1 }}>
                                                                <div
                                                                    style={{
                                                                        height: "100px",
                                                                        border: "1.5px dashed #cbd5e1",
                                                                        borderRadius: "8px",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        backgroundColor: "#f8fafc",
                                                                        marginBottom: "12px",
                                                                        overflow: "hidden",
                                                                    }}
                                                                >
                                                                    {contractData.signatureURL ? (
                                                                        <img
                                                                            src={contractData.signatureURL}
                                                                            alt="Service Provider signature"
                                                                            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                                                                        />
                                                                    ) : (
                                                                        <span style={{ fontSize: "11px", color: "#94a3b8", fontStyle: "italic" }}>
                                                                            Awaiting signature
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <div style={{ borderTop: "2px solid #1e293b", paddingTop: "8px" }}>
                                                                    <p style={{ fontSize: "13px", fontWeight: 700, margin: 0, color: "#1e293b" }}>
                                                                        {contractData.employer || "Service Provider"}
                                                                    </p>
                                                                    <p style={{ fontSize: "11px", color: "#64748b", margin: "2px 0 0" }}>
                                                                        Authorized Signatory
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Status Indicator */}
                                                        <div
                                                            style={{
                                                                marginTop: "24px",
                                                                padding: "12px 16px",
                                                                borderRadius: "8px",
                                                                backgroundColor: isSigned ? "#ecfdf5" : "#fffbeb",
                                                                border: `1px solid ${isSigned ? "#a7f3d0" : "#fde68a"}`,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "10px",
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            {isSigned ? (
                                                                <CheckCircle2 size={18} color="#10b981" />
                                                            ) : (
                                                                <Clock size={18} color="#f59e0b" />
                                                            )}
                                                            <div>
                                                                <p
                                                                    style={{
                                                                        margin: 0,
                                                                        fontSize: "13px",
                                                                        fontWeight: 700,
                                                                        color: isSigned ? "#065f46" : "#92400e",
                                                                    }}
                                                                >
                                                                    {isSigned ? "Contract Fully Executed" : "Pending Execution"}
                                                                </p>
                                                                <p
                                                                    style={{
                                                                        margin: "2px 0 0",
                                                                        fontSize: "11px",
                                                                        color: isSigned ? "#6ee7b7" : "#fcd34d",
                                                                    }}
                                                                >
                                                                    {isSigned
                                                                        ? "This agreement is legally binding and in full effect"
                                                                        : "This agreement requires signature from the Service Provider"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Footer */}
                                                <div
                                                    style={{
                                                        backgroundColor: "#f8fafc",
                                                        borderTop: "1px solid #e2e8f0",
                                                        padding: "12px 40px",
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <p style={{ margin: 0, fontSize: "10px", color: "#94a3b8" }}>
                                                        Generated via Lattice HR &nbsp;·&nbsp; Confidential Service Agreement
                                                    </p>
                                                    <p style={{ margin: 0, fontSize: "10px", color: "#94a3b8" }}>
                                                        Contract #{hashIds.encode(contractData.contractId)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}