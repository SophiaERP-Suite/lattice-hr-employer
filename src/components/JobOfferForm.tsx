import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Pen, Send, Settings, X } from 'lucide-react';
import { getEmployerDetails } from '../api/EmployerApi';
import { EmployerDetailsDto } from '../types/employer';
import { JobOfferResponseDto, OfferData } from '../types/Job';
import { CreateJobOffer, GetOffer } from '../api/JobApi';
import RichTextEditor from './RichTextEditor';
import { Terms, TermsType } from '../types/terms';
import { GetAllTerms } from '../api/TermsApi';

interface JobOfferFormProps {
  application: {
    candidateName: string;
    jobTitle: string;
    candidateAddress: string;
    candidateId?: string | number;
    applicationId?: string | number;
  };
  job: {
    departmentName: string;
    currency: string;
    employmentType: string;
    salary: number;
    jobId?: string | number;
  };
  onClose: () => void;
  onSuccess?: () => void;
}

const WORK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DAY_OF_WEEK_MAP: Record<number, string> = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const JobOfferForm: React.FC<JobOfferFormProps> = ({ application, job, onClose, onSuccess }) => {
  const [showTemplate, setShowTemplate] = useState(false);
  const [employerInfo, setEmployerInfo] = useState<EmployerDetailsDto | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetchingOffer, setIsFetchingOffer] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [termsList, setTermsList] = useState<Terms[]>([]);
  const [selectedTermsId, setSelectedTermsId] = useState<number | ''>('');

  useEffect(() => {
    fetchEmployerDetails();
    fetchOfferDetails();
    fetchTerms();
  }, []);

  const fetchTerms = async () => {
    try {
      const response = await GetAllTerms();
      if (Array.isArray(response)) setTermsList(response);
    } catch {
      console.error('Failed to fetch terms');
    }
  };

  const [offerData, setOfferData] = useState<OfferData>({
    jobTitle: application.jobTitle,
    department: job.departmentName,
    responsibeDepartment: '',
    responseInstructions: '',
    departmentPosition: '',
    introduction: '',
    letterTitle: '',
    level: '',
    terms: "",
    employmentType: job.employmentType,
    salary: job.salary || 0,
    netAnnualPay: '',
    netMonthlyPay: '',
    currency: job.currency,
    startDate: dayjs().add(14, 'days').format('YYYY-MM-DD'),
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    workStartTime: '',
    workEndTime: '',
    placeOfWork: '',
    benefits: '',
    otherInformation: '',
    // probationPeriod: '3 months',
    reportingManager: '',
  });

  const handleInputChange = (field: keyof OfferData, value: string) => {
    setOfferData(prev => ({ ...prev, [field]: value }));
  };

  const toggleWorkDay = (day: string) => {
    setOfferData(prev => ({
      ...prev,
      workDays: prev.workDays.includes(day)
        ? prev.workDays.filter(d => d !== day)
        : [...prev.workDays, day],
    }));
  };

  useEffect(() => {
    fetchEmployerDetails();
    fetchOfferDetails();
  }, []);

  const fetchEmployerDetails = async () => {
    try {
      const response = await getEmployerDetails();
      setEmployerInfo(response.statusCode === 200 ? response.data : null);
    } catch {
      setEmployerInfo(null);
    }
  };

  const fetchOfferDetails = async () => {
    if (!application.applicationId) return;
    try {
      setIsFetchingOffer(true);
      const response = await GetOffer(Number(application.applicationId));

      if (response.statusCode === 200 && response.data) {
        const offer: JobOfferResponseDto = response.data;

        const workDays = (offer.workDays ?? []).map((d: number | string) =>
          typeof d === 'number' ? DAY_OF_WEEK_MAP[d] ?? String(d) : d
        );

        const toTimeInput = (t: string) => (t ? t.substring(0, 5) : '');

        setOfferData(prev => ({
          ...prev,
          department: offer.department ?? prev.department,
          level: offer.level ?? prev.level,
          employmentType: offer.employmentType ?? prev.employmentType,
          reportingManager: offer.reportingManager ?? prev.reportingManager,
          responsibeDepartment: offer.responsibleDepartment ?? prev.responsibeDepartment,
          departmentPosition: offer.responsibleOfficer ?? prev.departmentPosition,
          salary: offer.grossAnnualSalary ?? prev.salary,
          netAnnualPay: offer.netAnnualPay != null ? String(offer.netAnnualPay) : prev.netAnnualPay,
          netMonthlyPay: offer.netMonthlyPay != null ? String(offer.netMonthlyPay) : prev.netMonthlyPay,
          benefits: offer.benefits ?? prev.benefits,
          letterTitle: offer.letterTitle ?? prev.letterTitle,
          terms: offer.terms ?? prev.terms,
          introduction: offer.introduction ?? prev.introduction,
          responseInstructions: offer.responseInstructions ?? prev.responseInstructions,
          otherInformation: offer.otherInformation ?? prev.otherInformation,
          workStartTime: toTimeInput(offer.workStartTime),
          workEndTime: toTimeInput(offer.workEndTime),
          startDate: offer.startDate
            ? dayjs(offer.startDate).format('YYYY-MM-DD')
            : prev.startDate,
          workDays: workDays.length > 0 ? workDays : prev.workDays,
          // probationPeriod: prev.probationPeriod,
        }));
      }
    } catch {
    } finally {
      setIsFetchingOffer(false);
    }
  };

  const handleGenerateTemplate = () => setShowTemplate(true);
  const handlePrint = () => window.print();

  const prepareFormData = (status: 'Draft' | 'Sent'): FormData => {
    const formData = new FormData();
    if (application.applicationId) formData.append('JobApplicationId', String(application.applicationId));
    if (job.jobId) formData.append('jobId', String(job.jobId));

    formData.append('JobTitle', offerData.jobTitle);
    formData.append('Department', offerData.department);
    formData.append('Level', offerData.level);
    if (selectedTermsId) formData.append('TermsId', String(selectedTermsId));
    formData.append('EmploymentType', offerData.employmentType);
    if (offerData.reportingManager) formData.append('ReportingManager', offerData.reportingManager);
    if (offerData.responsibeDepartment) formData.append('ResponsibleDepartment', offerData.responsibeDepartment);
    if (offerData.departmentPosition) formData.append('ResponsibleOfficer', offerData.departmentPosition);

    formData.append('Currency', offerData.currency);
    formData.append('GrossAnnualSalary', String(offerData.salary));
    if (offerData.netAnnualPay) formData.append('NetAnnualPay', offerData.netAnnualPay);
    if (offerData.netMonthlyPay) formData.append('NetMonthlyPay', offerData.netMonthlyPay);
    if (offerData.benefits) formData.append('Benefits', offerData.benefits);

    formData.append('StartDate', offerData.startDate);
    offerData.workDays.forEach(day => formData.append('WorkDays', day));
    formData.append('WorkStartTime', offerData.workStartTime);
    formData.append('WorkEndTime', offerData.workEndTime);
    formData.append('PlaceOfWork', offerData.placeOfWork);
    // if (offerData.probationPeriod) formData.append('ProbationPeriod', offerData.probationPeriod);

    formData.append('LetterTitle', offerData.letterTitle);
    formData.append('Introduction', offerData.introduction);
    formData.append('ResponseInstructions', offerData.responseInstructions);
    if (offerData.otherInformation) formData.append('OtherInformation', offerData.otherInformation);

    formData.append('OfferStatus', 'Draft');
    formData.append('OfferDate', dayjs().format('YYYY-MM-DD'));
    formData.append('expiryDate', dayjs().add(7, 'days').format('YYYY-MM-DD'));

    return formData;
  };

  const handleSendOffer = async (status: 'Draft' | 'Sent') => {
    try {
      setIsSubmitting(true);
      setError(null);
      const response = await CreateJobOffer(prepareFormData(status));

      if (response.statusCode === 200 || response.statusCode === 201) {
        onSuccess?.();
        onClose();
      } else {
        setError(response.message || 'Failed to create job offer');
      }
    } catch (err) {
      setError('An error occurred while saving the job offer');
      console.error('Error saving job offer:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateOfferData = (): boolean => {
    const checks: [boolean, string][] = [
      [!!offerData.jobTitle, 'Job title is required'],
      [!!offerData.department, 'Department is required'],
      [!!offerData.level, 'Level is required'],
      [!!offerData.employmentType, 'Employment type is required'],
      [!!offerData.salary, 'Salary is required'],
      [!!offerData.startDate, 'Start date is required'],
      [!!offerData.workStartTime && !!offerData.workEndTime, 'Work hours are required'],
      [offerData.workDays.length > 0, 'At least one work day is required'],
      [!!offerData.placeOfWork, 'Place of work is required'],
      [!!offerData.letterTitle, 'Letter title is required'],
      [!!offerData.introduction, 'Letter introduction is required'],
      [!!offerData.responseInstructions, 'Response instructions are required'],
    ];
    for (const [ok, msg] of checks) {
      if (!ok) { setError(msg); return false; }
    }
    return true;
  };

  if (showTemplate) {
    return (
      <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header text-white">
              <h5 className="modal-title">
                <i className="bi bi-file-earmark-text me-2"></i>Job Offer Template
              </h5>
              <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
            </div>

            {error && <div className="alert alert-danger m-3">{error}</div>}

            <div className="modal-body">
              <div className="card shadow-sm" id="offer-template">
                <div className="card-body p-5" style={{ backgroundColor: 'white' }}>

                  {/* Company Header */}
                  <div className="text-center mb-4 pb-3 border-bottom">
                    <h3 className="text-primary mb-1">{employerInfo?.businessName}</h3>
                    <p className="text-muted mb-0">{offerData.responsibeDepartment}</p>
                    <small className="text-muted">
                      {employerInfo?.address}, {employerInfo?.city}, {employerInfo?.state}, {employerInfo?.country}
                      {employerInfo?.websiteUrl ? ` | ${employerInfo.websiteUrl.slice(8)}` : ''}
                    </small>
                  </div>

                  {/* Date */}
                  <div className="text-end mb-4">
                    <p className="mb-0"><strong>Date:</strong> {dayjs().format('DD MMMM YYYY')}</p>
                  </div>

                  {/* Candidate */}
                  <div className="mb-4">
                    <p className="mb-1"><strong>{application.candidateName}</strong></p>
                    <p className="mb-0 text-muted">{application.candidateAddress}</p>
                  </div>

                  {/* Letter title */}
                  <div className="text-center mb-4">
                    <h4 className="text-primary mb-0">{offerData.letterTitle.toUpperCase()}</h4>
                  </div>

                  {/* Introduction */}
                  <div className="mb-4">
                    <p className="mb-3"><strong>Dear {application.candidateName},</strong></p>
                    {offerData.introduction
                      ? <div dangerouslySetInnerHTML={{ __html: offerData.introduction }} />
                      : <p>N/A</p>}
                  </div>

                  {/* Position Details */}
                  <div className="mb-4">
                    <h6 className="text-primary mb-3 border-bottom pb-2">POSITION DETAILS</h6>
                    <table className="table table-borderless mb-0">
                      <tbody>
                        <tr><td style={{ width: '35%' }}><strong>Job Title:</strong></td><td>{offerData.jobTitle}</td></tr>
                        <tr><td><strong>Department:</strong></td><td>{offerData.department}</td></tr>
                        <tr><td><strong>Level:</strong></td><td>{offerData.level}</td></tr>
                        <tr><td><strong>Employment Type:</strong></td><td>{offerData.employmentType}</td></tr>
                        {offerData.reportingManager && (
                          <tr><td><strong>Reporting To:</strong></td><td>{offerData.reportingManager}</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Compensation */}
                  <div className="mb-4">
                    <h6 className="text-primary mb-3 border-bottom pb-2">COMPENSATION</h6>
                    <table className="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td style={{ width: '35%' }}><strong>Gross Annual Salary:</strong></td>
                          <td>{offerData.currency}{offerData.salary}</td>
                        </tr>
                        {offerData.netAnnualPay && (
                          <tr><td><strong>Net Annual Pay (Estimated):</strong></td><td>{offerData.currency}{offerData.netAnnualPay}</td></tr>
                        )}
                        {offerData.netMonthlyPay && (
                          <tr><td><strong>Net Monthly Pay (Estimated):</strong></td><td>{offerData.currency}{offerData.netMonthlyPay}</td></tr>
                        )}
                        {/* <tr><td><strong>Payment Frequency:</strong></td><td>Monthly, paid on the last working day</td></tr> */}
                      </tbody>
                    </table>
                  </div>

                  {/* Benefits */}
                  {offerData.benefits && (
                    <div className="mb-4">
                      <h6 className="text-primary mb-3 border-bottom pb-2">BENEFITS & PERKS</h6>
                      <div dangerouslySetInnerHTML={{ __html: offerData.benefits }} />
                    </div>
                  )}

                  {/* Work Schedule */}
                  <div className="mb-4">
                    <h6 className="text-primary mb-3 border-bottom pb-2">WORK SCHEDULE</h6>
                    <table className="table table-borderless mb-0">
                      <tbody>
                        <tr><td style={{ width: '35%' }}><strong>Start Date:</strong></td><td>{dayjs(offerData.startDate).format('DD MMMM YYYY')}</td></tr>
                        <tr><td><strong>Working Days:</strong></td><td>{offerData.workDays.join(', ')}</td></tr>
                        <tr><td><strong>Working Hours:</strong></td><td>{offerData.workStartTime} – {offerData.workEndTime}</td></tr>
                        <tr><td><strong>Place of Work:</strong></td><td>{offerData.placeOfWork}</td></tr>
                        {/* {offerData.probationPeriod && (
                          <tr><td><strong>Probation Period:</strong></td><td>{offerData.probationPeriod}</td></tr>
                        )} */}
                      </tbody>
                    </table>
                  </div>

                  {/* Additional Information */}
                  {offerData.otherInformation && (
                    <div className="mb-4">
                      <h6 className="text-primary mb-3 border-bottom pb-2">ADDITIONAL INFORMATION</h6>
                      <div dangerouslySetInnerHTML={{ __html: offerData.otherInformation }} />
                    </div>
                  )}

                  {/* Terms & Conditions */}
                  <div className="mb-4">
                    <h6 className="text-primary mb-3 border-bottom pb-2">TERMS & CONDITIONS</h6>
                    <div dangerouslySetInnerHTML={{ __html: offerData.terms }} />
                  </div>

                  {/* Response Instructions */}
                  <div className="mb-4">
                    {offerData.responseInstructions
                      ? <div dangerouslySetInnerHTML={{ __html: offerData.responseInstructions }} />
                      : <p>N/A</p>}
                  </div>

                  {/* Closing */}
                  <div className="mb-5">
                    <p className="mb-1">We look forward to welcoming you to our team!</p>
                    <p className="mb-0 mt-4">Yours sincerely,</p>
                    <div style={{ marginTop: '60px' }}>
                      <p className="mb-0">_______________________________</p>
                      <p className="mb-0"><strong>{offerData.departmentPosition || 'N/A'}</strong></p>
                      <p className="text-muted mb-0">{offerData.responsibeDepartment || 'N/A'}</p>
                    </div>
                  </div>

                  {/* Acceptance */}
                  <div className="pt-4 border-top">
                    <h6 className="mb-3"><strong>ACCEPTANCE OF OFFER</strong></h6>
                    <p>I, {application.candidateName}, accept the above offer of employment.</p>
                    <div className="row mt-4">
                      <div className="col-md-6"><p className="mb-0">Signature: _______________________________</p></div>
                      <div className="col-md-6"><p className="mb-0">Date: ________________________________</p></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowTemplate(false)} disabled={isSubmitting}>
                <Pen size={16} className="me-1" /> Edit Details
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => handleSendOffer('Draft')}
                disabled={isSubmitting}
              >
                <Pen size={16} className="me-1" />
                {isSubmitting ? 'Saving...' : 'Save as Draft'}
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleSendOffer('Sent')}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <><span className="spinner-border spinner-border-sm me-2" />Sending...</>
                ) : (
                  <><Send size={16} className="me-1" /> Send Offer</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header text-white">
            <h5 className="modal-title">
              <i className="bi bi-file-earmark-text me-2"></i>Create Job Offer Template
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          {isFetchingOffer && (
            <div className="alert alert-info m-3 d-flex align-items-center gap-2">
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              Loading existing offer details…
            </div>
          )}

          {error && <div className="alert alert-danger m-3">{error}</div>}

          <div className="modal-body">
            <div className="alert alert-info mb-4">
              <i className="bi bi-info-circle me-2"></i>
              <strong>Candidate:</strong> {application.candidateName} | <strong>Position:</strong> {application.jobTitle}
            </div>

            {/* ── Job Details ─*/}
            <div className="card mb-3">
              <div className="card-header">
                <h6 className="mb-0"><i className="bi bi-briefcase me-2"></i>Job Details</h6>
              </div>
              <div className="card-body mt-15">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Job Title <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" value={offerData.jobTitle}
                      onChange={e => handleInputChange('jobTitle', e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Department <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" value={offerData.department}
                      onChange={e => handleInputChange('department', e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Level <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="e.g., Junior, Mid-Level, Senior"
                      value={offerData.level} onChange={e => handleInputChange('level', e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Employment Type <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="e.g., Full-time, Part-time, Contract"
                      value={offerData.employmentType} onChange={e => handleInputChange('employmentType', e.target.value)} />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Reporting Manager</label>
                    <input type="text" className="form-control" placeholder="e.g., John Smith, Department Manager"
                      value={offerData.reportingManager} onChange={e => handleInputChange('reportingManager', e.target.value)} />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Responsibility Office ── */}
            <div className="card mb-3">
              <div className="card-header">
                <h6 className="mb-0"><i className="bi bi-building me-2"></i>Responsibility Office Details</h6>
              </div>
              <div className="card-body mt-15">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Department <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" value={offerData.responsibeDepartment}
                      onChange={e => handleInputChange('responsibeDepartment', e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Position <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="e.g., Department Manager"
                      value={offerData.departmentPosition} onChange={e => handleInputChange('departmentPosition', e.target.value)} />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Compensation ── */}
            <div className="card mb-3">
              <div className="card-header">
                <h6 className="mb-0"><i className="bi bi-currency-pound me-2"></i>Compensation & Benefits</h6>
              </div>
              <div className="card-body mt-15">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Gross Annual Salary <span className="text-danger">*</span></label>
                    <div className="input-group">
                      <span className="input-group-text">{offerData.currency}</span>
                      <input type="number" className="form-control" placeholder="50000"
                        value={offerData.salary} onChange={e => handleInputChange('salary', e.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Net Annual Pay</label>
                    <div className="input-group">
                      <span className="input-group-text">{offerData.currency}</span>
                      <input type="number" className="form-control" placeholder="40000"
                        value={offerData.netAnnualPay} onChange={e => handleInputChange('netAnnualPay', e.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Net Monthly Pay</label>
                    <div className="input-group">
                      <span className="input-group-text">{offerData.currency}</span>
                      <input type="number" className="form-control" placeholder="3333"
                        value={offerData.netMonthlyPay} onChange={e => handleInputChange('netMonthlyPay', e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Benefits & Perks</label>
                    <RichTextEditor
                      value={offerData.benefits}
                      onChange={val => handleInputChange('benefits', val)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Work Schedule ── */}
            <div className="card mb-3">
              <div className="card-header">
                <h6 className="mb-0"><i className="bi bi-calendar-week me-2"></i>Work Schedule</h6>
              </div>
              <div className="card-body mt-15">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Start Date <span className="text-danger">*</span></label>
                    <input type="date" className="form-control" value={offerData.startDate}
                      onChange={e => handleInputChange('startDate', e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Work Duration <span className="text-danger">*</span></label>
                    <div className="d-flex align-items-center gap-2">
                      <input type="time" className="form-control" value={offerData.workStartTime}
                        onChange={e => handleInputChange('workStartTime', e.target.value)} />
                      <span className="text-muted">to</span>
                      <input type="time" className="form-control" value={offerData.workEndTime}
                        onChange={e => handleInputChange('workEndTime', e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Work Days <span className="text-danger">*</span></label>
                    <div className="d-flex flex-wrap gap-3">
                      {WORK_DAYS.map(day => (
                        <div key={day} className="form-check">
                          <input className="form-check-input" type="checkbox" id={day}
                            checked={offerData.workDays.includes(day)} onChange={() => toggleWorkDay(day)} />
                          <label className="form-check-label" htmlFor={day}>{day}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Place of Work <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="e.g., Office, Remote, Hybrid"
                      value={offerData.placeOfWork} onChange={e => handleInputChange('placeOfWork', e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Probation Period</label>
                    {/* <input type="text" className="form-control" placeholder="e.g., 3 months"
                      value={offerData.probationPeriod} onChange={e => handleInputChange('probationPeriod', e.target.value)} /> */}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Offer Description ── */}
            <div className="card mb-3">
              <div className="card-header">
                <h6 className="mb-0"><i className="bi bi-info-circle me-2"></i>Offer Description</h6>
              </div>
              <div className="card-body mt-15">
                <div className="row g-3">
                  <div className="col-md-12">
                    <label className="form-label">Letter Title <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" value={offerData.letterTitle}
                      onChange={e => handleInputChange('letterTitle', e.target.value)} />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Letter Introduction <span className="text-danger">*</span></label>
                    <RichTextEditor
                      value={offerData.introduction}
                      onChange={val => handleInputChange('introduction', val)}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Response Instructions <span className="text-danger">*</span></label>
                    <RichTextEditor
                      value={offerData.responseInstructions}
                      onChange={val => handleInputChange('responseInstructions', val)}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">
                      Terms & Conditions <span className="text-danger">*</span>
                    </label>

                    {termsList.length > 0 ? (
                      <>
                        <select
                          className="form-select mb-2"
                          value={selectedTermsId}
                          onChange={e => {
                            const id = Number(e.target.value);
                            setSelectedTermsId(id);
                            const found = termsList.find(t => t.termsId === id);
                            if (found) handleInputChange('terms', found.content);
                          }}
                        >
                          <option value="">-- Select Terms & Conditions --</option>
                          {termsList
                            .filter(t => t.termsType === TermsType.EmploymentOffer)
                            .map(t => (
                              <option key={t.termsId} value={t.termsId}>
                                {t.title}
                              </option>
                            ))}
                        </select>

                        {/* Preview selected terms */}
                        {selectedTermsId && (
                          <div
                            className="border rounded p-3 mt-2"
                            style={{ maxHeight: 200, overflowY: 'auto', fontSize: '0.85rem' }}
                            dangerouslySetInnerHTML={{
                              __html: termsList.find(t => t.termsId === Number(selectedTermsId))?.content ?? ''
                            }}
                          />
                        )}
                      </>
                    ) : (
                      <div className="alert alert-warning d-flex align-items-center justify-content-between mb-0">
                        <span>
                          <i className="bi bi-exclamation-triangle me-2" />
                          No Employment Offer terms found.
                        </span>
                        <button
                          type="button"
                          className="btn btn-sm btn-warning"
                          onClick={() => {
                            onClose(); // close this modal first
                            window.location.href = '/settings?tab=terms'; // or use navigate() if you have react-router
                          }}
                        >
                          <Settings size={14} className="me-1" />
                          Create Terms
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="col-12">
                    <label className="form-label">Other Information</label>
                    <RichTextEditor
                      value={offerData.otherInformation}
                      onChange={val => handleInputChange('otherInformation', val)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-dark" onClick={onClose} disabled={isSubmitting}>
              <X size={16} className="me-1" /> Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              disabled={isSubmitting}
              onClick={() => { if (validateOfferData()) handleGenerateTemplate(); }}
            >
              <Settings size={16} className="me-1" /> Generate Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOfferForm;
