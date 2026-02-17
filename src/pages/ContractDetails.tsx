import {
  ArrowDownFromLine,
  CheckCheck,
  ChevronRight,
  PenLine,
  X,
} from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hashids from "hashids";
import { toast, ToastContainer } from 'react-toastify';
import { getContractById, uploadContractSignature } from "../utils/ContractRequests";
import HtmlRenderer from "../layouts/HTMLRenderer";
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import { handleCreateEmployee } from "../utils/EmployeeResponse";

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
    employer: string;
    employerLogo: string;
    employerMail : string;
    employerPhone : string;
    dateCreated: string;
    signed: boolean;
    responsibilities: ResponsibilitiesData[];
}

interface ContractSignatureFormData {
    Signature: string;
}

export default function ContractDetails() {
    const [contractData, setContractData] = useState<ContractData | null>(null);
    const hashIds = new Hashids('LatticeHumanResourceEncode', 10);
    const { id } = useParams();
    const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
    const [addModalState, setAddModalState] = useState(false);
    const { reset, formState: { errors, isValid }, register, handleSubmit } = useForm<ContractSignatureFormData>();

    useEffect(() => {
        getContractById(hashedId)
            .then(res => {
                if (res.status === 200) {
                    res.json()
                        .then(data => {
                            setContractData(data.data);
                        })
                } else {
                    res.text()
                        .then(data => {
                            console.log(JSON.parse(data));
                        })
                }
            })
    }, [hashedId]);

    const downloadReceipt = async () => {
        const loader = document.getElementById('query-loader');
        const text = document.getElementById('query-text');
        if (loader) {
            loader.style.display = 'flex';
        }
        if (text) {
            text.style.display = 'none';
        }
        try {
            const element = document.getElementById('contractDetails');
            if (!element){
                if (loader) {
                    loader.style.display = 'none';
                }
                if (text) {
                    text.style.display = 'flex';
                }
                return;
            }

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [794, 1123],
            });

            const imgWidth = 794;
            const pageHeight = 1123;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('contract.pdf');
            toast.success('Your file is being downloaded');
        } catch (err) {
            toast.warning("Download Failed");
            console.log(err);
        }
        if (loader) {
            loader.style.display = 'none';
        }
        if (text) {
            text.style.display = 'flex';
        }
    }

    const refetchContract = async () => {
        const res = await getContractById(hashedId);
        if (res.status === 200 || res.status === 201) {
            const data = await res.json();
            setContractData(data.data);
        } else {
            const data = await res.text()
            console.log(JSON.parse(data));
        }
    }

    const submitSignature = async (data: ContractSignatureFormData) => {
        if (isValid && contractData) {
            const loader = document.getElementById('query-loader-1');
            const text = document.getElementById('query-text-1');
            if (loader) {
                loader.style.display = 'flex';
            }
            if (text) {
                text.style.display = 'none';
            }
            const formData = new FormData();
            formData.append("Signature", data.Signature[0]);
            const res = await uploadContractSignature(hashedId, formData);
            handleCreateEmployee(res, loader, text, { toast }, reset)
            .finally(() => {
                refetchContract();
                setAddModalState(false);
            })
        }
    }

    return (
      <div className="app-content-area">
        <div className="app-content-wrap">
          <div className="container-fluid">
            <ToastContainer />
            <Modal isOpen={addModalState} onRequestClose={() => { setAddModalState(false); }}
                style={{
                content: {
                width: 'fit-content',
                height: 'fit-content',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgb(255 255 255)',
                borderRadius: '0.5rem',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                zIndex: '10'
                },
                overlay: {
                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                }
            }}
        >
            
            <div className="h-fit container mx-sm-w-85" style={{ maxHeight: '70vh' }}>
                <form noValidate onSubmit={handleSubmit(submitSignature)}>
                    <div className="d-flex justify-content-between border-bottom">
                        <h1 className="modal-title" style={{ fontSize: '16px' }} id="addNewTimeSheetLabel">Upload Contract Signature</h1>
                        <button type="button" className="btn-close"  onClick={() => setAddModalState(false)}></button>
                    </div>
                    <div className="mt-4">
                        <div className="row gy-15 text-start">
                            <div className="col-xl-12 text-start">
                                
                            <input type="file" className="form-control" id="logo" placeholder="Signature"
                                {
                                    ...register('Signature',
                                            {
                                                required: 'Required'
                                            }
                                        )
                                }/>
                            <p className='error-msg'>{errors.Signature?.message}</p>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="d-flex justify-content-end mt-20" style={{ gap: '10px'}}>
                            <button type="button" className="btn btn-danger" onClick={() => setAddModalState(false)}>
                                <X size={18} className="mr-2" /> Cancel
                            </button>
                            <button type="submit" className="btn btn-success">
                                <div className="dots" id="query-loader-1">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <span id="query-text">
                                    <CheckCheck size={18} className="mr-2" /> Upload Signature
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
            <div className="row">
                <div className="col-xl-12">
                    <div className="page-title-box d-flex-between flex-wrap gap-15">
                        <h1 className="page-title fs-18 lh-1">Contract Details</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-example1 mb-0">
                                <li className="active breadcrumb-item" aria-current="page">
                                    <NavLink to={`/contract-management/${id}`}>
                                        Contract Details
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
                <div className="col-12 d-flex justify-content-end mb-4 gap-4">
                    {
                        contractData?.signed
                        ? (<></>)
                        : (
                            <div className="dataTables-sorting-control ">
                                <button className="btn btn-warning" onClick={() => setAddModalState(true)}>
                                    <PenLine size={18} className="mr-2" /> Sign Contract
                                </button>
                            </div>
                        )
                    }
                    
                    <div className="dataTables-sorting-control ">
                        <button className="btn btn-success" onClick={() => downloadReceipt()}>
                            <div className="dots" id="query-loader">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <span id="query-text">
                                <ArrowDownFromLine size={18} className="mr-2" /> Download
                            </span>
                        </button>
                    </div>
                </div>
                {
                    contractData && (
                        <div className="col-xl-12 d-flex justify-content-center" style={{ overflowX: 'auto' }}>
                            <div id="contractDetails" style={{
                                width: '794px',
                                margin: '0 auto',
                                backgroundColor: '#f3f4f6',
                                padding: '20px 0'
                            }}>
                                <div
                                    className="pdf-page"
                                    style={{
                                        width: '794px',
                                        minHeight: '1123px',
                                        backgroundColor: '#fff',
                                        marginBottom: '20px',
                                        padding: '40px',
                                        boxShadow:
                                        '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                        boxSizing: 'border-box',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        pageBreakAfter: 'always'
                                    }}
                                    >
                                    <div
                                        style={{
                                            backgroundImage: "url('/one/lhr_emp/src/assets/images/logo/lattice_logo.png')",
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'repeat',
                                            backgroundSize: 'contain',
                                            opacity: 0.08,
                                            pointerEvents: 'none'
                                        }}
                                    />
                                    <div style={{
                                            position: 'relative', marginTop: '1rem',
                                        }}
                                    >
                                        <div style={{ padding: '1.5rem'}}>
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="align-items-center" style={{
                                                    borderLeftWidth: '1px', gridColumn: 'span 3 / span 3',
                                                    display: 'flex', marginBottom: '1.5rem'
                                                }}>
                                                    <img
                                                        src={contractData.employerLogo}
                                                        style={{
                                                            width: 'auto', height: '3rem', borderWidth: '4px',
                                                            borderColor: '#fff', marginRight: '1rem'
                                                        }}
                                                        alt="profile-image"
                                                    />
                                                    <h1 style={{ color: 'rgb(31, 41, 55)', fontSize: '2rem', fontWeight: '800' }}>
                                                        {contractData.employer}
                                                    </h1>
                                                </div>
                                                <div style={{
                                                        display: 'flex',
                                                        fontSize: '1rem', gap: '0.5rem', alignItems: 'start'
                                                }}>
                                                    <img
                                                        src="/one/lhr_emp/src/assets/images/logo/lattice_logo.png"
                                                        style={{
                                                            width: 'auto', height: '3rem', borderWidth: '4px',
                                                            borderColor: '#fff', marginRight: '1rem'
                                                        }}
                                                        alt="profile-image"
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div style={{
                                                        gridColumn: 'span 2 / span 2', display: 'flex',
                                                        justifyContent: 'start'
                                                    }}>
                                                    <div style={{
                                                        display: 'grid', gridColumn: 'span 2 / span 2',
                                                        fontSize: '1rem', gap: '0.5rem'
                                                    }}>
                                                        <div className="d-flex justify-content-start gap-2 align-items-center">
                                                            <p style={{ fontWeight: '700', marginBottom: '0px'}}>Contract No:</p>
                                                            <p>{hashIds.encode(contractData.contractId)}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-start gap-2 align-items-center">
                                                            <p style={{ fontWeight: '700', marginBottom: '0px'}}>Contract Cost:</p>
                                                            <p>{`${contractData.currency} ${contractData.amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-start gap-2 align-items-center">
                                                            <p style={{ fontWeight: '700', marginBottom: '0px'}}>Date Created:</p>
                                                            <p>{(new Date(contractData.dateCreated)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-start gap-2 align-items-center">
                                                            <p style={{ fontWeight: '700', marginBottom: '0px'}}>Expiry Date:</p>
                                                            <p>{(new Date(contractData.expiryDate)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-start gap-2 align-items-center">
                                                            <p style={{ fontWeight: '700', marginBottom: '0px'}}>Status:</p>
                                                            <p className={`badge 
                                                                ${contractData.signed ? 'bg-label-success' : 'bg-label-warning'}`}>
                                                                {contractData.signed ? 'Signed': 'Not Signed'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ margin: '0.5rem 1.5rem'}}>
                                            <div>
                                                <div className="card-header justify-between">
                                                    <h4 className="">Contract Details</h4>
                                                </div>
                                                <div className="card-body pt-15">
                                                    <HtmlRenderer html={contractData.content}/>
                                                    <div className="table-responsive table--card border-top" style={{ marginTop: '2rem', marginBottom: '1rem'}}>
                                                        <h6 style={{ marginTop: '1rem', marginBottom: '1rem'}}>Contract Responsibilities</h6>
                                                        <table className="table table-bordered text-nowrap text-start">
                                                            <thead>
                                                                <tr>
                                                                    <th>S/N</th>
                                                                    <th>Responsibility</th>
                                                                    <th>Handler</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    contractData.responsibilities.map((data, index) => (
                                                                        <tr key={index}>
                                                                            <td>{ index + 1 }</td>
                                                                            <td>{ data.typeName }</td>
                                                                            <td>{ data.handler }</td>
                                                                        </tr>
                                                                    ))
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
                    )
                }
            </div>
          </div>
        </div>
      </div>
        
    )
}