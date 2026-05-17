import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { NavLink } from "react-router-dom";
import { Eye, Pen, CheckCheck, EyeOff, Users, BriefcaseBusiness } from "lucide-react";
import Hashids from "hashids";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { PublishJob } from "../api/JobApi";
import { getEmployerDetails } from "../api/EmployerApi";
import { EmployerDetailsDto } from "../types/employer";

dayjs.extend(relativeTime);

interface Props {
  job: any;
  onJobUpdated?: () => void;
}

const JobCard = ({ job, onJobUpdated }: Props) => {
  const now = dayjs();
  const expiration = dayjs(job.jobExpiration);
  const isExpired = expiration.isBefore(now);
  const daysRemaining = expiration.diff(now, "day");
  const hashIds = new Hashids("LatticeHrEncode", 10);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [employerInfo, setEmployerInfo] = useState<EmployerDetailsDto | null>(null)

  useEffect(() => {
    employerDetails()
  }, [])

  const employerDetails = async () => {
    try {
      const response = await getEmployerDetails()
      if (response.statusCode === 200) {
        setEmployerInfo(response.data)
      } else {
        setEmployerInfo(null)
      }

    } catch {
      setEmployerInfo(null)
    }

  }

  const getStatusBadge = () => {
    if (!job.published) return "bg-secondary";
    if (isExpired) return "bg-danger";
    if (daysRemaining <= 2) return "bg-warning";
    return "bg-success";
  };

  const getStatusText = () => {
    if (!job.published) return "Not Published";
    if (isExpired) return "Expired";
    if (daysRemaining <= 2) return "Expiring Soon";
    return "Active";
  };

  const pubJob = async (jobId: number) => {
    try {
      setIsButtonLoading(true);
      const response = await PublishJob(Number(jobId));
      if (response.status === 200 || response.status === 201) {
        const data = await response.json();

        toast.success(data.message);

        if (onJobUpdated) {
          onJobUpdated();
        }
      } else {
        toast.error("Action Unsuccessful");
      }
    } catch (error) {
      console.error("Publishing error:", error);
      toast.error("Job Publishing Failed");
    } finally {
      setIsButtonLoading(false);
      if (onJobUpdated) {
        onJobUpdated();
      }
    }
  };

  const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5127";

  const jobPhoto = job.jobPhoto !== "" || job.jobPhoto !== null ? `${import.meta.env.VITE_API_URL}/${job.jobPhoto}` : employerInfo?.employerLogo !== "" || employerInfo?.employerLogo !== null ? `${import.meta.env.VITE_API_URL}${employerInfo?.employerLogo}` : ""

  return (

    <div className="card shadow-sm border-0 h-100 job-card ">
      {/* Image */}
      <ToastContainer />
      <div className="position-relative" style={{ height: 140 }}>
        {job.jobPhoto ? (
          <img
            src={
              job.jobPhoto && job.jobPhoto !== ""
                ? job.jobPhoto.startsWith("http")
                  ? job.jobPhoto
                  : `${BASE_URL}/${job.jobPhoto}`
                : job.employerDetails?.employerLogo &&
                  job.employerDetails.employerLogo !== ""
                  ? job.employerDetails.employerLogo
                  : "https://img.icons8.com/fluency/48/image--v1.png"
            }
            alt="Company Logo"
            className="w-100 h-100 mb-3 object-fit-cover rounded-top"
          />
          //   <img
          //   src={jobPhoto}
          //   alt={job.jobTitle}
          //   className="w-100 h-100 mb-3 object-fit-cover rounded-top"
          // />
        ) : (
          <div className="w-100 h-100 mb-3 d-flex flex-column align-items-center justify-content-center rounded-top"
            style={{
              background: 'linear-gradient(145deg, #0B4F6C 0%, #01BAEF 100%)',
              minHeight: '100px',
              position: 'relative',
              overflow: 'hidden'
            }}>
            {/* Decorative pattern overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              pointerEvents: 'none'
            }}></div>

            <BriefcaseBusiness size={48} className="text-white mb-2" style={{ zIndex: 1 }} />
            {/* <span className="text-white fw-light" style={{ fontSize: '0.9rem', zIndex: 1 }}>
              Position Image
            </span> */}
          </div>
        )}

        <span
          className={`badge ${getStatusBadge()} position-absolute`}
          style={{ top: 2, right: 2 }}
        >
          {getStatusText()}
        </span>
      </div>

      {/* Body */}
      <div className="card-body mt-10">
        <h6 className="fw-bold text-truncate" title={job.jobTitle}>
          {job.jobTitle}
        </h6>

        <small className="text-black d-block mb-2">
          {job.city && `${job.city}, `}
          {job.state}, {job.country}
        </small>

        <div className="mb-2">
          <strong>
            {job.currency}{" "}
            {job.jobAmount
              ? job.jobAmount.toLocaleString()
              : "Negotiable"}
          </strong>
        </div>

        <div className="d-flex justify-content-between small text-black mb-2">
          <span>{job.jobType}</span>
          <span>{job.workMode}</span>
        </div>

        <div className="small text-black">
          Posted {dayjs(job.dateCreated).fromNow()}
        </div>

        <div
          className={`small ${daysRemaining <= 2 && !isExpired
            ? "text-danger fw-semibold"
            : "text-black"
            }`}
        >
          {isExpired
            ? "Expired"
            : `${daysRemaining} day${daysRemaining !== 1 ? "s" : ""
            } remaining`}
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer bg-white border-top">
        <div className="d-flex justify-content-between gap-2 mb-2">
          <NavLink
            to={`/jobDetails/${hashIds.encode(String(job.jobId))}`}
            className="btn btn-sm btn-outline-primary flex-fill"
          >
            <Eye size={14} /> View
          </NavLink>

          <NavLink
            to={`/jobEdit/${hashIds.encode(String(job.jobId))}`}
            className="btn btn-sm btn-outline-warning flex-fill"
          >
            <Pen size={14} /> Edit
          </NavLink>
        </div>

        <div className="d-flex justify-content-between gap-2">
          <button
            onClick={() => pubJob(job.jobId)}
            className={`btn btn-sm ${job.published ? "btn-outline-secondary" : "btn-success"
              } flex-fill`}
          >
            {job.published ? (
              <>
                <EyeOff size={14} /> Unpublish
              </>
            ) : (
              <>
                <CheckCheck size={14} /> Publish
              </>
            )}
          </button>

          <NavLink
            to={`/jobApplications/${hashIds.encode(String(job.jobId))}`}
            className="btn btn-sm btn-info flex-fill"
          >
            <Users size={14} /> Applicants
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
