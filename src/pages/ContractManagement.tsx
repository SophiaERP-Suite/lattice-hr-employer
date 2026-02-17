import {
  CheckCheck,
  ChevronRight,
  Eye,
  FolderOpenDot,
  FolderOutput,
  Plus,
  ReceiptText,
  ShieldX,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { NavLink } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import Hashids from "hashids";
import { fetchAllContractRequests, fetchAllContracts, submitContractRequest } from "../utils/ContractRequests";
import Tippy from "@tippyjs/react";
import { useAuth } from "../utils/Request/useAuth";
import Modal from 'react-modal';
import { handleCreateEmployee } from "../utils/EmployeeResponse";
import RichTextEditor from "../layouts/RichTextEditor";

interface ContractRequestsData {
    requestId: number;
    employerId: string;
    employer: string;
    employerLogo: string;
    description: string;
    contractSigned: boolean;
    dateCreated: string;
}

interface ContractRequestFormData {
  Description: string;
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
    employerId: number;
    employer: string;
    employerLogo: string;
    employerMail : string;
    employerPhone : string;
    dateCreated: string;
    signed: boolean;
    responsibilities: ResponsibilitiesData[];
}

export default function ContractManagement() {
    const [contracts, setContracts] = useState<ContractData[]>([]);
    const [contractRequests, setContractRequests] = useState<ContractRequestsData[]>([]);
    const [totalRequests, setTotalRequests] = useState(0);
    const [totalContracts, setTotalContracts] = useState(0);
    const [totalExpired, setTotalExpired] = useState(0);
    const [reqPageNumber, setReqPageNumber] = useState(1);
    const reqLimit = 10;
    const [pageNumber, setPageNumber] = useState(1);
    const limit = 10;
    const hashIds = new Hashids('LatticeHumanResourceEncode', 10);
    const { user } = useAuth();
    const [addModalState, setAddModalState] = useState(false);
    const { reset, formState: { errors }, control, handleSubmit } = useForm<ContractRequestFormData>();

    useEffect(() => {
      if (user) {
        fetchAllContractRequests({
            pageNumber: reqPageNumber,
            limit: reqLimit,
            employerId: user.employerId
        })
        .then(res => {
        if (res.status === 200) {
            res.json()
            .then(data => {
                console.log(data);
                setContractRequests(data.data.requests);
                setTotalRequests(data.data.totalCount);
            })
        } else {
            res.text()
            .then(data => {
                console.log(JSON.parse(data));
            })
        }
        })
      }
    }, [reqPageNumber, reqLimit, user]);

    useEffect(() => {
      if (user) {
        fetchAllContracts({
            pageNumber,
            limit,
            employerId: user.employerId
        })
        .then(res => {
        if (res.status === 200) {
            res.json()
            .then(data => {
                console.log(data);
                setContracts(data.data.contracts);
                setTotalContracts(data.data.totalCount);
                setTotalExpired(data.data.totalExpired);
            })
        } else {
            res.text()
            .then(data => {
                console.log(JSON.parse(data));
            })
        }
        })
      }
    }, [pageNumber, limit, user]);

    const refetchRequest = async () => {
      if (user) {
        const res = await fetchAllContractRequests({
            pageNumber: reqPageNumber,
            limit: reqLimit,
            employerId: user.employerId
        });
        const data = await res.json();
        if (res.status === 200) {
          setContractRequests(data.data.requests);
          setTotalRequests(data.data.totalCount);
          setTotalExpired(data.data.totalExpired);
        } else {
          const data = await res.text();
          console.log(JSON.parse(data));
        }
      }
    }

    const submitNewRequest = async (data: ContractRequestFormData) => {
      if (!errors.Description && user) {
        const loader = document.getElementById("query-loader");
        const text = document.getElementById("query-text");
        if (loader) {
          loader.style.display = "flex";
        }
        if (text) {
          text.style.display = "none";
        }
        const formData = new FormData();
        formData.append('Description', data.Description);
        const res = await submitContractRequest(formData, user.employerId);
        handleCreateEmployee(res, loader, text, { toast }, reset)
        .finally(() => {
          setAddModalState(false);
          refetchRequest();
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
                    <form noValidate onSubmit={handleSubmit(submitNewRequest)}>
                        <div className="d-flex justify-content-between border-bottom">
                            <h1 className="modal-title" style={{ fontSize: '16px' }} id="addNewTimeSheetLabel">Custom Engagement Request</h1>
                            <button type="button" className="btn-close"  onClick={() => setAddModalState(false)}></button>
                        </div>
                        <div className="mt-4">
                            <div className="row gy-15 text-start">
                                <div className="col-xl-12">
                                    <label className="form-label">Request Description</label>
                                    <Controller
                                        name="Description"
                                        control={control}
                                        rules={{ required: 'Required' }}
                                        render={({ field }) => (
                                        <RichTextEditor
                                          value={field.value}
                                          onChange={field.onChange}
                                        />
                                        )}
                                    />
                                    <p className='error-msg'>{errors.Description?.message}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="d-flex justify-content-end mt-20" style={{ gap: '10px'}}>
                                <button type="button" className="btn btn-danger" onClick={() => setAddModalState(false)}>
                                    <X size={18} className="mr-2" /> Cancel
                                </button>
                                <button type="submit" className="btn btn-success">
                                    <div className="dots" id="query-loader">
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                    <span id="query-text">
                                        <CheckCheck size={18} className="mr-2" /> Submit Request
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
                          <h1 className="page-title fs-18 lh-1">Contracts</h1>
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb breadcrumb-example1 mb-0">
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
                  <div className="col-12 col-lg-4 col-md-6">
                      <div className="card">
                          <div className="card-body d-flex align-center gap-16">
                              <div className="avatar avatar-xl bg-info-transparent text-info">
                                  <ReceiptText size={42}/>
                              </div>
                              <div className="card-content">
                                  <span className="d-block fs-16 mb-5">Ongoing Contracts</span>
                                  <h2 className="mb-5">{totalContracts}</h2>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-lg-4 col-md-6">
                      <div className="card">
                          <div className="card-body d-flex align-center gap-16">
                              <div className="avatar avatar-xl bg-warning-transparent text-warning">
                                  <FolderOpenDot size={42}/>
                              </div>
                              <div className="card-content">
                                  <span className="d-block fs-16 mb-5">Total Requests</span>
                                  <h2 className="mb-5">{totalRequests}</h2>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-lg-4 col-md-6">
                      <div className="card">
                          <div className="card-body d-flex align-center gap-16">
                              <div className="avatar avatar-xl bg-danger-transparent text-danger">
                                  <ShieldX size={42}/>
                              </div>
                              <div className="card-content">
                                  <span className="d-block fs-16 mb-5">Expired / Inactive</span>
                                  <h2 className="mb-5">{ totalExpired }</h2>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-xl-12">
                      <div className="card">
                          <div className="tab-style-three mb-25">
                              <ul className="nav nav-pills gap-10 b-bottom2px b-color-primary mobile-nav" id="pills-tab" role="tablist">
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link active" id="pills-contracts-tab" data-bs-toggle="pill" data-bs-target="#pills-contracts" type="button" role="tab" aria-controls="pills-contracts" aria-selected="false" tabIndex={1}>Contracts</button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="pills-requests-tab" data-bs-toggle="pill" data-bs-target="#pills-requests" type="button" role="tab" aria-controls="pills-requests" aria-selected="false" tabIndex={1}>Requests</button>
                                  </li>
                              </ul>
                          </div>
                          <div className="tab-content" id="pills-tabContent">
                              <div className="tab-pane show active" id="pills-contracts" role="tabpanel" aria-labelledby="pills-contracts-tab" tabIndex={1}>
                                  <div className="card-header justify-between">
                                      <h4 className="d-flex-items gap-10">Contracts</h4>
                                      <div className="d-flex flex-wrap gap-15">
                                          <a className="btn btn-info text-white" href="javascript:void(0);">
                                              <FolderOutput /> Export As CSV
                                          </a>
                                      </div>
                                  </div>
                                  <div className="card-body pt-15">
                                      <div className="table-responsive">
                                          <table id="dataTableDefault" className="table text-nowrap text-start">
                                              <thead>
                                                  <tr>
                                                      <th scope="col">S/N</th>
                                                      <th scope="col">Date Created</th>
                                                      <th scope="col">Signed</th>
                                                      <th scope="col">Pricing</th>
                                                      <th scope="col">Expiry Date</th>
                                                      <th scope="col">Action</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                {
                                                    contracts.map((data, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                { index + 1}
                                                            </td>
                                                            <td>
                                                                {new Date(data.dateCreated).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                            </td>
                                                            <td>
                                                                { data.signed
                                                                    ? <span className="badge bg-label-success">Signed</span>
                                                                    : <span className="badge bg-label-warning">Not Signed</span>}
                                                            </td>
                                                            <td>
                                                                {`${data.currency} ${data.amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
                                                            </td>
                                                            <td>
                                                                {new Date(data.expiryDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                            </td>
                                                            <td>
                                                                <Tippy content="View Request">
                                                                    <NavLink to={`/contract-management/${hashIds.encode(data.contractId)}`} className="btn-icon btn-info-light">
                                                                        <Eye />
                                                                    </NavLink>
                                                                </Tippy>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                              </tbody>
                                          </table>
                                          {
                                              contracts.length === 0 ?
                                                  <div className="py-4 whitespace-nowrap w-full">
                                                  <span className="px-6 py-4 text-left font-medium text-black">There hasn't been any contract added</span>
                                                  </div> : <></>
                                          }
                                      </div>
                                      <div className="d-flex justify-content-between mt-4">
                                            <div className="flex justify-content-center align-items-center mb-1">
                                                <p className="text-black">
                                                    Showing { contracts.length > 0 ? ((pageNumber * limit) - limit) + 1 : 0 } to { contracts.length > 0 ? (((pageNumber * limit) - limit) + 1) + (contracts.length - 1) : 0 } of { totalContracts } entries
                                                </p>
                                            </div>
                                            <div className="d-inline-flex flex-wrap">
                                                {
                                                    pageNumber > 1 && <a
                                                        href="#"
                                                        onClick={() => { if (pageNumber > 1) {setPageNumber(pageNumber - 1);} }}
                                                        className="border-top border-bottom border-start text-primary border-secondary px-2 py-1 rounded-start"
                                                    >
                                                        Previous
                                                    </a>
                                                }
                                                <a
                                                    href="#"
                                                    className="border border-secondary text-white bg-primary px-4 py-1 cursor-pointer"
                                                >
                                                    { pageNumber }
                                                </a>
                                                {
                                                    (pageNumber * limit) < totalContracts && <a
                                                    href="#"
                                                    onClick={() => { setPageNumber(pageNumber + 1); }}
                                                    className="border-end border-top border-bottom text-primary border-secondary px-4 py-1 rounded-end"
                                                    >
                                                        Next
                                                    </a>
                                                }
                                                
                                            </div>
                                        </div>
                                  </div>
                              </div>
                              <div className="tab-pane fade" id="pills-requests" role="tabpanel" aria-labelledby="pills-requests-tab" tabIndex={1}>
                                  <div className="card-header justify-between gap-25 flex-wrap mb-25">
                                      <h4 className="">Contract Requests</h4>
                                      <div className="d-flex flex-wrap gap-15">
                                          <button type="button" className="btn btn-success" onClick={() => setAddModalState(true)}>
                                              <Plus size={18} className="mr-2" /> New Contract Request
                                          </button>
                                          <a className="btn btn-info text-white" href="javascript:void(0);">
                                              <FolderOutput /> Export As CSV
                                          </a>
                                      </div>
                                  </div>
                                  <div className="card-body pt-15">
                                      <div className="table-responsive">
                                          <table id="dataTableDefault" className="table text-nowrap text-start">
                                              <thead>
                                                  <tr>
                                                      <th>
                                                          S/N
                                                      </th>
                                                      <th>Signed</th>
                                                      <th>Request Date</th>
                                                      <th>Actions</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  {
                                                      contractRequests.map((data, index) => (
                                                          <tr key={index}>
                                                              <td>
                                                                  { index + 1}
                                                              </td>
                                                              <td>
                                                                  { data.contractSigned
                                                                      ? <span className="badge bg-label-success">Signed</span>
                                                                      : <span className="badge bg-label-warning">None Signed</span>}
                                                              </td>
                                                              <td>
                                                                  {new Date(data.dateCreated).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                              </td>
                                                              <td>
                                                                  <Tippy content="View Request">
                                                                      <NavLink to={`/contract-management/Requests/${hashIds.encode(data.requestId)}`} className="btn-icon btn-info-light">
                                                                          <Eye />
                                                                      </NavLink>
                                                                  </Tippy>
                                                              </td>
                                                          </tr>
                                                      ))
                                                  }
                                              </tbody>
                                          </table>
                                          {
                                              contractRequests.length === 0 ?
                                                  <div className="py-4 whitespace-nowrap w-full">
                                                  <span className="px-6 py-4 text-left font-medium text-black">There hasn't been any contract requests</span>
                                                  </div> : <></>
                                          }
                                      </div>
                                      <div className="d-flex justify-content-between mt-4">
                                          <div className="flex justify-content-center align-items-center mb-1">
                                              <p className="text-black">
                                                  Showing { contractRequests.length > 0 ? ((reqPageNumber * reqLimit) - reqLimit) + 1 : 0 } to { contractRequests.length > 0 ? (((reqPageNumber * reqLimit) - reqLimit) + 1) + (contractRequests.length - 1) : 0 } of { totalRequests } entries
                                              </p>
                                          </div>
                                          <div className="d-inline-flex flex-wrap">
                                              {
                                                  reqPageNumber > 1 && <a
                                                      href="#"
                                                      onClick={() => { if (reqPageNumber > 1) {setReqPageNumber(reqPageNumber - 1);} }}
                                                      className="border-top border-bottom border-start text-primary border-secondary px-2 py-1 rounded-start"
                                                  >
                                                      Previous
                                                  </a>
                                              }
                                              <a
                                                  href="#"
                                                  className="border border-secondary text-white bg-primary px-4 py-1 cursor-pointer"
                                              >
                                                  { reqPageNumber }
                                              </a>
                                              {
                                                  (reqPageNumber * reqLimit) < totalRequests && <a
                                                  href="#"
                                                  onClick={() => { setReqPageNumber(reqPageNumber + 1); }}
                                                  className="border-end border-top border-bottom text-primary border-secondary px-4 py-1 rounded-end"
                                                  >
                                                      Next
                                                  </a>
                                              }
                                              
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
}