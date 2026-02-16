import {
  Calendar,
  CheckCheck,
  ChevronRight,
  Eye,
  Mail,
  PenLine,
  Phone,
  ReceiptText,
  SendHorizonal,
  Trash2,
  X,
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import Hashids from "hashids";
import { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react";
import { toast, ToastContainer } from "react-toastify";
import { deleteContractRequestMessage, getContractRequestById, sendContractRequestMessage, updateContractRequestMessage } from "../utils/ContractRequests";
import HtmlRenderer from "../layouts/HTMLRenderer";
import { Controller, useForm, useWatch } from "react-hook-form";
import RichTextEditor from "../layouts/RichTextEditor";
import { handleCreateEmployee } from "../utils/EmployeeResponse";
import Modal from 'react-modal';

interface MessageData {
  messageId : number;
  message : string;
  edited : string;
  deleted : string;
  sender : string;
  dateCreated : string;
}

interface ResponsibilitiesData {
    typeId: number;
    typeName: string
    handler: string;
}

interface ContractData {
    contractId: number;
    content: string;
    currency: string;
    amount: number;
    expiryDate: string;
    responsibilities: ResponsibilitiesData[];
}

interface RequestData {
  requestId : string;
  employerId : string;
  employer : string;
  employerMail : string;
  employerPhone : string;
  employerLogo : string;
  description : string;
  dateCreated : string;
  messages : MessageData[];
  contract: ContractData;
}

interface MessageFormData {
    Message: string;
}

export default function RequestDetails() {
    const { id } = useParams();
    const hashIds = new Hashids('LatticeHumanResourceEncode', 10);
    const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
    const [requestDetails, setRequestDetails] = useState<RequestData | null>(null);
    const { control, reset } = useForm<MessageFormData>();
    const { control: editControl, reset: editReset, setValue } = useForm<MessageFormData>();
    const messageText = useWatch({ control, name: 'Message' });
    const editMessageText = useWatch({ control: editControl, name: 'Message' });
    const [color, setColor] = useState('#a5a5a5');
    const containerRef = useRef<HTMLDivElement>(null);
    const [editState, setEditState] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState<MessageData | null>(null);
    const [delModalState, setDelModalState] = useState(false);

    const verifyMessageValidity = (message: string) => {
        return message && message.trim() !== '' && message !== '<p></p>'
    }

    const oneHourAgo = (dateTime: string) => {
        const date: any = new Date(dateTime);
        const now: any = new Date();
        const diffMinutes = now - date;
        const oneHour = 60 * 60 * 1000;
        return diffMinutes < oneHour;
    }

    useEffect(() => {
        const el = containerRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, [requestDetails])

    useEffect(() => {
        if (selectedMessage) {
            setValue('Message', selectedMessage.message)
        }
    }, [selectedMessage, setValue]);

    useEffect(() => {
        getContractRequestById(hashedId)
        .then((res: any) => {
            if (res.status === 200) {
                res.json()
                .then((data: any) => {
                    console.log(data);
                    setRequestDetails(data.data);
                })
            } else {
                res.text()
                .then((data: any) => {
                    console.log(JSON.parse(data));
                })
            }
        })
    }, [hashedId]);


    const refetchRequest = async () => {
        const res = await getContractRequestById(hashedId);
        if (res.status === 200 || res.status === 201) {
            const data = await res.json();
            setRequestDetails(data.data);
        } else {
            const data = await res.text()
            console.log(JSON.parse(data));
        }
    }

    useEffect(() => {
      if (verifyMessageValidity(messageText)) {
        setColor('rgb(20, 147, 255)')
      } else {
        setColor('#a5a5a5');
      }
    }, [messageText]);

    const sendMessage = async () => {
        if (verifyMessageValidity(messageText) && hashedId
        ) {
            const data = new FormData();
            data.append('Message', messageText);
            data.append('Sender', 'Client');
            const res = await sendContractRequestMessage(hashedId, data);
            handleCreateEmployee(res, null, null, { toast }, reset)
            .finally(() => refetchRequest())
        }
        
    }

    const editMessage = async () => {
        if (selectedMessage && verifyMessageValidity(editMessageText) &&
            hashedId && editMessageText !== selectedMessage.message
        ) {
            const data = new FormData();
            data.append('Message', editMessageText);
            const res = await updateContractRequestMessage(hashedId, data, selectedMessage.messageId);
            handleCreateEmployee(res, null, null, { toast }, editReset)
            .finally(() => {
                refetchRequest();
                setEditState(false);
                setSelectedMessage(null);
            })
        }
        
    }

    const deleteMessage = async () => {
        if (selectedMessage && hashedId) {
            const res = await deleteContractRequestMessage(hashedId, selectedMessage.messageId);
            handleCreateEmployee(res, null, null, { toast }, editReset)
            .finally(() => {
                refetchRequest();
                setEditState(false);
                setDelModalState(false)
                setSelectedMessage(null);
            })
        }
        
    }

    return (
        <div className="app-content-area">
          <div className="app-content-wrap">
            <div className="container-fluid">
                <ToastContainer />
                <Modal isOpen={delModalState} onRequestClose={() => { setDelModalState(false); }}
                    style={{
                    content: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgb(255 255 255)',
                    borderRadius: '0.5rem',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                    },
                    overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.7)'
                    }
                }}
                >
                    {
                        selectedMessage && (
                            <div className="h-fit w-100 overflow-auto" style={{ maxHeight: '70vh' }}>
                                <div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <h1 className="modal-title fs-16 text-wrap" id="addNewTimeSheetLabel">Are you sure you want to delete this message</h1>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-end gap-10 mt-20">
                                            <button type="button" className="btn bg-black text-white" onClick={() => setDelModalState(false)}>
                                                <X size={18} className="mr-2" /> Cancel
                                            </button>
                                            <button type="submit" className="btn btn-danger" onClick={() => deleteMessage()}>
                                                <div className="dots" id="query-loader-2">
                                                    <div className="dot"></div>
                                                    <div className="dot"></div>
                                                    <div className="dot"></div>
                                                </div>
                                                <span id="query-text-2">
                                                    <Trash2 size={18} className="mr-2" /> Delete
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    
                </Modal>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="page-title-box d-flex-between flex-wrap gap-15">
                            <h1 className="page-title fs-18 lh-1">Request Details</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-example1 mb-0">
                                    <li className="active breadcrumb-item" aria-current="page">
                                        <NavLink to={`/contract-management/Request/${id}`}>
                                            Request Details
                                        </NavLink>
                                    </li>
                                    <li className="mb-2">
                                        <ChevronRight size={15} />
                                    </li>
                                    <li className="active breadcrumb-item" aria-current="page">
                                        <NavLink to="/contract-management">
                                            Contracts
                                        </NavLink>
                                    </li>
                                    <li className="mb-2">
                                        <ChevronRight size={15} />
                                    </li>
                                    <li className="breadcrumb-item">
                                        <NavLink to="/Dashboard">
                                            Dashboard
                                        </NavLink>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {
                        requestDetails && (
                            <>
                                <div className="col-xxl-3 col-xl-5 col-lg-5">
                                    <div className="sidebar-sticky">
                                        <div className="card" style={{ height: '75vh', overflowY: 'auto'}}>
                                            <div className="company-info">
                                                <div className="company-logo">
                                                    <img src={requestDetails.employerLogo} alt="image not found" />
                                                </div>
                                                <h2 className="company-name mb-15">{ requestDetails.employer }</h2>

                                                <div className="company-info-list mb-15">
                                                    <ul>
                                                        <li style={{ flexWrap: 'nowrap', alignItems: 'start' }}><span><Mail /></span> <Tippy content="Company Mail"><span style={{ textWrap: 'wrap'}}>{requestDetails.employerMail ?? 'None Provided'}</span></Tippy></li>
                                                        <li style={{ flexWrap: 'nowrap', alignItems: 'start' }}><span><Phone /></span> <Tippy content="Company Phone"><span style={{ textWrap: 'wrap'}}>{requestDetails.employerPhone ?? 'None Provided'}</span></Tippy></li>
                                                        <li style={{ flexWrap: 'nowrap', alignItems: 'start' }}><span><Calendar /></span> <Tippy content="Request Date"><span style={{ textWrap: 'wrap'}}>{new Date(requestDetails.dateCreated).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span></Tippy></li>
                                                        <li style={{ flexWrap: 'nowrap', alignItems: 'start' }}><span><ReceiptText /></span> <Tippy content="Contract Signed"><span style={{ textWrap: 'wrap'}}>{requestDetails.employerPhone ?? 'None Provided'}</span></Tippy></li>
                                                    </ul>
                                                </div>
                                                <div className="card-body pt-15">
                                                    <div className="mb-15 text-start">
                                                        <h4 className="mb-5 border-bottom">Details</h4>
                                                        <HtmlRenderer html={requestDetails.description} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-9 col-xl-7 col-lg-7">
                                    <div className="card" style={{ height: '75vh'}}>
                                        <div className="card-header justify-content-between gap-25 flex-wrap mb-25">
                                            <h4 className="">Messages ({requestDetails.messages.length})</h4>
                                            {
                                                requestDetails.contract ? (
                                                    <NavLink to={`/contract-management/${hashIds.encode(requestDetails.contract.contractId)}`} className="btn btn-info">
                                                        <Eye size={18} className="mr-2" /> View Contract
                                                    </NavLink>
                                                ) : (<></>)
                                            }
                                        </div>
                                        <div className="card-body overflow-y-auto" ref={containerRef}>
                                            <p className="text-center" style={{ fontSize: '12px'}}>This is the start of this conversation</p>
                                            {
                                                requestDetails.messages.map((data, index) => (
                                                    <div key={index} className={`d-flex align-items-center mb-4 ${data.sender === 'Client' ? 'justify-content-end' : 'justify-content-start'}`}>
                                                        {
                                                            (editState && selectedMessage && selectedMessage.messageId === data.messageId) ? (
                                                                <div>
                                                                    <Controller
                                                                        name="Message"
                                                                        control={editControl}
                                                                        rules={{ required: 'Required' }}
                                                                        render={({ field }) => (
                                                                        <RichTextEditor
                                                                            value={field.value}
                                                                            onChange={field.onChange}
                                                                            width85={true}
                                                                            showToolbarToggle={true}
                                                                            toolbarVisible={false}
                                                                            maxHeight="100px"
                                                                        />
                                                                        )}
                                                                    />
                                                                    <div className="d-flex justify-content-end">
                                                                        <button type="button" onClick={() => {setEditState(false); setSelectedMessage(null);} }>
                                                                            <X size={15} className="me-1" />
                                                                        </button>
                                                                        <button type="button" onClick={() => editMessage()}>
                                                                            <CheckCheck size={15} />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className={`d-flex ${data.sender === 'Client' ? '' : 'flex-row-reverse' }`}>
                                                                    {
                                                                        (oneHourAgo(data.dateCreated) && data.sender === 'Client' && !data.deleted ) && (
                                                                            <div>
                                                                                <Tippy content="Edit">
                                                                                    <button
                                                                                        type="button"
                                                                                        className={`text-black mx-2`}
                                                                                        onClick={() => {setSelectedMessage(data); setEditState(true)}}
                                                                                        >
                                                                                        <PenLine size={12} />
                                                                                    </button>
                                                                                </Tippy>
                                                                                
                                                                                <Tippy content="Delete">
                                                                                    <button
                                                                                        type="button"
                                                                                        className={`text-black mx-2`}
                                                                                        onClick={() => {setSelectedMessage(data); setDelModalState(true)}}
                                                                                        >
                                                                                        <Trash2 size={12} />
                                                                                    </button>
                                                                                </Tippy>
                                                                                
                                                                            </div>
                                                                        )
                                                                    }
                                                                    <div>
                                                                        <div className={`p-2 rounded ${(data.sender === 'Client' && !data.deleted) ? 'bg-info all-color-white' : 'bg-gray all-color-black'} ${data.deleted && 'all-color-black bg-white border'}`} style={{ maxWidth: '30rem' }}>
                                                                            {
                                                                                data.deleted
                                                                                ? <p style={{ fontSize: '13px'}}>This message was deleted</p>
                                                                                : <HtmlRenderer html={data.message} />
                                                                            }
                                                                            
                                                                        </div>
                                                                        <p style={{ fontSize: '10px'}}>{`${data.edited ? 'Edited' : ''} ${new Date(data.dateCreated).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'})}`}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="card-footer d-flex align-items-end">
                                            <Controller
                                                name="Message"
                                                control={control}
                                                rules={{ required: 'Required' }}
                                                render={({ field }) => (
                                                <RichTextEditor
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    rounded={true}
                                                    width85={true}
                                                    showToolbarToggle={true}
                                                    toolbarVisible={false}
                                                />
                                                )}
                                            />
                                            <div className="py-2 px-2">
                                                <button type="button"
                                                    disabled={!verifyMessageValidity(messageText)}
                                                    onClick={() => sendMessage()}
                                                    >
                                                    <SendHorizonal color={color} />
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                        
                </div>
            </div>
          </div>
        </div>
    )
}