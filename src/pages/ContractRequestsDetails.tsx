import {
    Calendar,
    CheckCheck,
    Eye,
    PenLine,
    ReceiptText,
    SendHorizonal,
    Trash2,
    X,
    Hash,
    Clock,
    CheckCircle,
    FilePenLine,
    MessageSquare
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import Hashids from "hashids";
import { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react";
import { toast, ToastContainer } from "react-toastify";
import { Controller, useForm, useWatch } from "react-hook-form";
import Modal from "react-modal";
import { deleteContractRequestMessage, getContractRequestById, handleCreateEmployee, sendContractRequestMessage, updateContractRequestMessage } from "../api/ContractApi";
import HtmlRenderer from "../components/HTMLRenderer";
import RichTextEditor from "../components/RichTextEditor";
import { RequestData, MessageData, MessageFormData } from "../types/contractRequest";
import { formatDate } from "../utils/helpers/formatting";
import { formatDateTime } from "../helpers/formatter";

const SENDER_LABEL = "Client";

export default function EmployerRequestDetails() {
    const { requestId } = useParams();
    const hashIds = new Hashids("LatticeHrEncode", 10);
    const hashedId = requestId ? Number(hashIds.decode(requestId)[0]) : 0;

    const [requestDetails, setRequestDetails] = useState<RequestData | null>(null);
    // const [color, setColor] = useState("#a5a5a5");
    const containerRef = useRef<HTMLDivElement>(null);
    const [editState, setEditState] = useState(false);
    const [contractSigned, setContractSigned] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState<MessageData | null>(null);
    const [delModalState, setDelModalState] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const { control, reset } = useForm<MessageFormData>();
    const { control: editControl, reset: editReset, setValue } = useForm<MessageFormData>();
    const messageText = useWatch({ control, name: "Message" });
    const editMessageText = useWatch({ control: editControl, name: "Message" });

    const verifyMessageValidity = (message: string) =>
        message && message.trim() !== "" && message !== "<p></p>";

    const oneHourAgo = (dateTime: string) => {
        const diff = (new Date() as any) - (new Date(dateTime) as any);
        return diff < 60 * 60 * 1000;
    };

    useEffect(() => {
        const el = containerRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [requestDetails]);

    useEffect(() => {
        if (selectedMessage) {
            setValue("Message", selectedMessage.message);
        }
    }, [selectedMessage, setValue]);

    useEffect(() => {
        if (hashedId) {
            getContractDetails()
        }
    }, [hashedId]);

    const getContractDetails = async () => {
        const res = await getContractRequestById(hashedId);
        if (res.status === 200 || res.status === 201) {
            const data = await res.json();
            setRequestDetails(data.data);
            setContractSigned(data.data.contractSigned);
        } else {
            const data = await res.text();
            console.log(JSON.parse(data));
        }
    }

    const refetchRequest = async () => {
        const res = await getContractRequestById(hashedId);
        if (res.status === 200 || res.status === 201) {
            const data = await res.json();
            setRequestDetails(data.data);
        } else {
            const data = await res.text();
            console.log(JSON.parse(data));
        }
    };

    const sendMessage = async () => {
        if (verifyMessageValidity(messageText) && hashedId) {
            const data = new FormData();
            data.append("Message", messageText);
            data.append("Sender", SENDER_LABEL);
            const res = await sendContractRequestMessage(hashedId, data);
            handleCreateEmployee(res, null, null, { toast }, reset).finally(() =>
                refetchRequest()
            );
        }
    };

    const editMessage = async () => {
        if (
            selectedMessage &&
            verifyMessageValidity(editMessageText) &&
            hashedId &&
            editMessageText !== selectedMessage.message
        ) {
            const data = new FormData();
            data.append("Message", editMessageText);
            const res = await updateContractRequestMessage(
                hashedId,
                data,
                selectedMessage.messageId
            );
            handleCreateEmployee(res, null, null, { toast }, editReset).finally(() => {
                refetchRequest();
                setEditState(false);
                setSelectedMessage(null);
            });
        }
    };

    const deleteMessage = async () => {
        if (selectedMessage && hashedId) {
            const res = await deleteContractRequestMessage(
                hashedId,
                selectedMessage.messageId
            );
            handleCreateEmployee(res, null, null, { toast }, editReset).finally(() => {
                refetchRequest();
                setEditState(false);
                setDelModalState(false);
                setSelectedMessage(null);
            });
        }
    };

    const modalStyle = {
        content: {
            width: "fit-content",
            height: "fit-content",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgb(255 255 255)",
            borderRadius: "0.5rem",
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        },
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
    };

    return (
        <div className="app-content-area">
            <div className="app-content-wrap">
                <div className="container-fluid py-4">
                    <ToastContainer />

                    {/* Delete Message Modal */}
                    <Modal
                        isOpen={delModalState}
                        onRequestClose={() => setDelModalState(false)}
                        style={modalStyle}
                    >
                        {selectedMessage && (
                            <div className="p-4" style={{ minWidth: "400px" }}>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="mb-0 text-danger">Delete Message</h5>
                                    <button
                                        className="btn btn-sm btn-link text-dark"
                                        onClick={() => setDelModalState(false)}
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                                <p className="mb-4">Are you sure you want to delete this message? This action cannot be undone.</p>
                                <div className="d-flex justify-content-end gap-3">
                                    <button
                                        type="button"
                                        className="btn btn-light px-4"
                                        onClick={() => setDelModalState(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger px-4"
                                        onClick={() => deleteMessage()}
                                    >
                                        <Trash2 size={16} className="me-2" /> Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </Modal>

                    {/* Header */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-box d-flex-between flex-wrap gap-15">
                                <div>
                                    <h1 className="page-title fs-18 lh-1">
                                        Contract Request Details
                                    </h1>
                                    <p className=" mt-2 mb-0">
                                        Review and respond to contract requests
                                    </p>
                                </div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-example1 mb-0">
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <NavLink to={`/Contracts/Requests/${requestId}`}>Service Requests Details</NavLink>
                                        </li>
                                        <li className="breadcrumb-item" aria-current="page">
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

                    {requestDetails && (
                        <div className="row g-4">
                            {/* Left Panel - Contract Information */}
                            <div className="col-xxl-4 col-xl-5 col-lg-5">
                                <div>
                                    {/* Contract Card */}
                                    <div className="card border-0 shadow-sm mb-4">
                                        <div className="card-header bg-white">
                                            <div className="d-flex align-items-center gap-2 mb-3">
                                                <h5 className="mb-0 fw-bold">Contract Information</h5>
                                            </div>
                                        </div>
                                        <div className="card-body p-4">
                                            {/* Status Badge */}
                                            <div className="mb-4">
                                                <div className={`badge ${contractSigned ? 'bg-success' : 'bg-warning'} px-3 py-2 fs-12`}>
                                                    {contractSigned ? (
                                                        <><CheckCircle size={14} className="me-1" /> Signed & Active</>
                                                    ) : (
                                                        <><Clock size={14} className="me-1" /> Pending Signature</>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="mb-4">
                                                <label className="text-black fs-14 fw-bold mb-2 d-block">Request Description</label>
                                                <div className={`p-3 rounded ${!showFullDescription && requestDetails.description.length > 300 ? 'position-relative' : ''}`}>
                                                    <HtmlRenderer html={
                                                        showFullDescription
                                                            ? requestDetails.description
                                                            : requestDetails.description.length > 300
                                                                ? requestDetails.description.substring(0, 300) + "..."
                                                                : requestDetails.description
                                                    } />
                                                    {requestDetails.description.length > 300 && (
                                                        <button
                                                            className="btn btn-link btn-sm p-0 mt-2"
                                                            onClick={() => setShowFullDescription(!showFullDescription)}
                                                        >
                                                            {showFullDescription ? "Show less" : "Read more"}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Divider */}
                                            <hr className="my-4" />

                                            {/* Request Metadata */}
                                            <div className="mb-4">
                                                <div className="d-flex align-items-center gap-3 mb-3">
                                                    <Hash size={16} className="text-black" />
                                                    <div>
                                                        <small className="text-black d-block">Request ID</small>
                                                        <span className="fw-semibold">{requestId}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3 mb-3">
                                                    <Calendar size={16} className="text-black" />
                                                    <div>
                                                        <small className="text-black d-block">Date Created</small>
                                                        <span className="fw-semibold">{formatDate(requestDetails.dateCreated)}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3">
                                                    <ReceiptText size={16} className="text-black" />
                                                    <div>
                                                        <small className="text-black d-block">Status</small>
                                                        <span className={`fw-semibold ${contractSigned ? 'text-success' : 'text-warning'}`}>
                                                            {contractSigned ? "Signed" : "Not Signed"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Contract Details (if exists) */}
                                            {requestDetails.contract && (
                                                <>
                                                    <hr className="my-4" />
                                                    <div className="mb-4">
                                                        <div className="d-flex align-items-center gap-2 mb-3">
                                                            {/* <Building2 size={18} className="text-primary" /> */}
                                                            <h6 className="mb-0 fw-bold">Contract Details</h6>
                                                        </div>
                                                        <div className="p-3 rounded">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="text-black">Contract ID:</span>
                                                                <span className="fw-semibold">#{requestId}</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="text-black">Amount:</span>
                                                                <span className="fw-bold text-primary">
                                                                    {requestDetails.contract.currency} {requestDetails.contract.amount?.toLocaleString("en-NG", {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    })}
                                                                </span>
                                                            </div>
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="text-black">Expiry Date:</span>
                                                                <span className="fw-semibold">{formatDate(requestDetails.contract.expiryDate)}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <div className="d-grid gap-2">
                                                        <NavLink
                                                            to={`/contractDetails/${hashIds.encode(requestDetails.contract.contractId)}`}
                                                            className="btn btn-warning"
                                                        >
                                                            <Eye size={18} className="me-2" /> View Full Contract
                                                        </NavLink>
                                                        {!contractSigned && (
                                                            <button className="btn btn-success">
                                                                <FilePenLine size={18} className="me-2" /> Sign Contract
                                                            </button>
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Panel - Messages */}
                            <div className="col-xxl-8 col-xl-7 col-lg-7">
                                <div className="card shadow-sm h-100">
                                    <div className="card-header">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 w-100">
                                            <div className="d-flex align-items-center gap-2">
                                                <h5 className="mb-0 fw-bold">Conversation Thread</h5>
                                                <span className="badge text-dark ms-2">{requestDetails.messages.length} messages</span>
                                            </div>
                                            {requestDetails.contract && (
                                                <div>
                                                    <NavLink
                                                        to={`/contractDetails/${hashIds.encode(requestDetails.contract.contractId)}`}
                                                        className="btn btn-sm btn-warning"
                                                    >
                                                        <Eye size={14} className="me-1" /> Preview Contract
                                                    </NavLink>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="card-body p-4 overflow-y-auto" ref={containerRef} style={{ height: "calc(75vh - 180px)", overflowY: "auto" }}>
                                        {requestDetails.messages.length === 0 ? (
                                            <div className="text-center py-5">
                                                <MessageSquare size={48} className="text-black mb-3" />
                                                <p className="text-black mb-0">No messages yet. Start the conversation below.</p>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="text-center mb-4">
                                                    <div className="d-inline-block px-3 py-1 rounded-pill">
                                                        <small className="text-black">Start of conversation</small>
                                                    </div>
                                                </div>

                                                {requestDetails.messages.map((data, index) => (
                                                    <div
                                                        key={index}
                                                        className={`d-flex mb-4 ${data.sender === SENDER_LABEL ? "justify-content-end" : "justify-content-start"}`}
                                                    >
                                                        <div className={`d-flex ${data.sender === SENDER_LABEL ? "flex-row-reverse" : ""}`} style={{ maxWidth: "70%" }}>
                                                            {/* Message Actions */}
                                                            {oneHourAgo(data.dateCreated) && data.sender === SENDER_LABEL && !data.deleted && (
                                                                <div className="d-flex align-items-start gap-1 ms-2">
                                                                    <Tippy content="Edit">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-sm btn-link text-black p-0"
                                                                            onClick={() => {
                                                                                setSelectedMessage(data);
                                                                                setEditState(true);
                                                                            }}
                                                                        >
                                                                            <PenLine size={14} />
                                                                        </button>
                                                                    </Tippy>
                                                                    <Tippy content="Delete">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-sm btn-link text-black p-0"
                                                                            onClick={() => {
                                                                                setSelectedMessage(data);
                                                                                setDelModalState(true);
                                                                            }}
                                                                        >
                                                                            <Trash2 size={14} />
                                                                        </button>
                                                                    </Tippy>
                                                                </div>
                                                            )}

                                                            {/* Message Content */}
                                                            <div className={`flex-grow-1 ${data.sender === SENDER_LABEL ? "text-end" : ""}`}>
                                                                {editState && selectedMessage && selectedMessage.messageId === data.messageId ? (
                                                                    <div className="p-3 rounded">
                                                                        <Controller
                                                                            name="Message"
                                                                            control={editControl}
                                                                            rules={{ required: "Required" }}
                                                                            render={({ field }) => (
                                                                                <RichTextEditor
                                                                                    value={field.value}
                                                                                    onChange={field.onChange}
                                                                                    width85={true}
                                                                                    showToolbarToggle={true}
                                                                                    toolbarVisible={false}
                                                                                    maxHeight="150px"
                                                                                />
                                                                            )}
                                                                        />
                                                                        <div className="d-flex justify-content-end gap-2 mt-2">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-sm btn-light"
                                                                                onClick={() => {
                                                                                    setEditState(false);
                                                                                    setSelectedMessage(null);
                                                                                }}
                                                                            >
                                                                                <X size={14} className="me-1" /> Cancel
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-sm btn-success"
                                                                                onClick={() => editMessage()}
                                                                            >
                                                                                <CheckCheck size={14} className="me-1" /> Save
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <>
                                                                        <div
                                                                            className={`p-3 rounded-3 ${data.deleted
                                                                                ? "border"
                                                                                : data.sender === SENDER_LABEL
                                                                                    ? "bg-primary text-white"
                                                                                    : "bg-light"
                                                                                }`}
                                                                        >
                                                                            {data.deleted ? (
                                                                                <p className="text-black mb-0" style={{ fontSize: "13px", fontStyle: "italic" }}>
                                                                                    This message was deleted
                                                                                </p>
                                                                            ) : (
                                                                                <HtmlRenderer html={data.message} />
                                                                            )}
                                                                        </div>
                                                                        <div className="mt-1">
                                                                            <small className="text-black" style={{ fontSize: "10px" }}>
                                                                                {data.edited && <span className="me-1">(edited)</span>}
                                                                                {formatDateTime(data.dateCreated)}
                                                                            </small>
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    </div>

                                    {/* Message Input */}
                                    <div className="card-footer bg-white border-0 p-4">
                                        <div className="d-flex gap-3 align-items-end">
                                            <div className="flex-grow-1 text-black">
                                                <Controller
                                                    name="Message"
                                                    control={control}
                                                    rules={{ required: "Required" }}
                                                    render={({ field }) => (
                                                        <RichTextEditor
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            width85={true}
                                                            showToolbarToggle={true}
                                                            toolbarVisible={false}
                                                        // placeholder="Type your message here..."
                                                        />
                                                    )}
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-success rounded-circle p-2 d-flex align-items-center justify-content-center"
                                                style={{ width: "40px", height: "40px" }}
                                                disabled={!verifyMessageValidity(messageText)}
                                                onClick={() => sendMessage()}
                                            >
                                                <SendHorizonal size={18} color="white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}