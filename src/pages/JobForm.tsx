import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { 
  ChevronRight, 
  X, 
  CheckCheck, 
  FileText,
  DollarSign,
  MapPin,
  Briefcase,
  Image
} from "lucide-react";
import {
  getAllCities,
  getAllCountries,
  getAllStates,
} from "../api/LocationApi";
import {
  CreateJob,
  GetJob,
  getJobCategories,
  getJobSectors,
  getJobTypes,
  getJobWorkMode,
  UpdateJob,
} from "../api/JobApi";
import { CityDto, CountryDto, StateDto } from "../types/location";
import { toast, ToastContainer } from "react-toastify";
import {
  JobCategory,
  JobSector,
  WorkMode,
  JobType,
  CreateJobDto,
  JobDto,
} from "../types/Job";
import Hashids from "hashids";

const JobForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [jobCategories, setJobCategories] = useState<JobCategory[]>([]);
  const [jobSectors, setJobSectors] = useState<JobSector[]>([]);
  const [workModes, setWorkModes] = useState<WorkMode[]>([]);
  const [jobTypes, setJobTypes] = useState<JobType[]>([]);
  const [countries, setCountries] = useState<CountryDto[]>([]);
  const [states, setStates] = useState<StateDto[]>([]);
  const [cities, setCities] = useState<CityDto[]>([]);
  const [jobPhoto, setJobPhoto] = useState<File | null>(null);
  const [jobs, setJobs] = useState<JobDto | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
    reset,
  } = useForm<CreateJobDto>();

  const hashIds = new Hashids("LatticeHrEncode", 10);

  const hashId = useMemo(() => {
    return hashIds.decode(String(params.id))[0];
  }, [params.id]);

  const isEditMode = useMemo(() => {
    return !!hashId;
  }, [hashId]);

  const selectedSectorId = watch("JobSectorId");
  useEffect(() => {
    if (!selectedSectorId || selectedSectorId === 0) {
      setJobCategories([]);
      setValue("JobCategoryId", 0);
      return;
    }

    const loadCategories = async () => {
      const response = await getJobCategories(selectedSectorId);
      setJobCategories(response);
      setValue("JobCategoryId", 0);
    };

    loadCategories();
  }, [selectedSectorId]);

  const selectedCountryId = useWatch({ control, name: "CountryId" });
  const selectedStateId = useWatch({ control, name: "StateId" });

  useEffect(() => {
    fetchInitialData();

    if (hashId) {
      fetchJobData(Number(hashId));
    }
  }, [hashId]);

  useEffect(() => {
    if (!selectedCountryId || selectedCountryId === 0) {
      setStates([]);
      setCities([]);
      setValue("StateId", 0);
      setValue("LGAId", 0);
      return;
    }
    fetchStates(Number(selectedCountryId));
  }, [selectedCountryId, setValue]);

  useEffect(() => {
    if (!selectedStateId || selectedStateId === 0) {
      setCities([]);
      setValue("LGAId", 0);
      return;
    }
    fetchCities(Number(selectedStateId));
  }, [selectedStateId, setValue]);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [countriesData, typesData, sectorsData, modesData] =
        await Promise.all([
          getAllCountries(),
          getJobTypes(),
          getJobSectors(),
          getJobWorkMode(),
        ]);

      setCountries(countriesData?.data || []);
      setJobTypes(typesData?.data || typesData || []);
      setJobSectors(sectorsData?.data || sectorsData || []);
      setWorkModes(modesData?.data || modesData || []);
    } catch (error) {
      console.error("Error fetching initial data:", error);
      toast.error("Failed to load form data");
    } finally {
      setLoading(false);
    }
  };

  const fetchJobData = async (jobId: number) => {
    try {
      setLoading(true);

      const response = await GetJob(jobId);
      const jobData = response.data;
      setJobs(jobData);

      if (jobData) {
        reset({
          CountryId: jobData.countryId,
          JobAmount: jobData.jobAmount,
          JobTypeId: jobData.jobTypeId,
          JobDescription: jobData.jobDescription,
          JobPhoto: jobData.jobPhoto,
          JobCategoryId: jobData.jobCategoryId,
          JobRequirement: jobData.jobRequirement,
          JobResponsibility: jobData.jobResponsibility,
          JobGrade: jobData.grade,
          WorkModeId: jobData.workModeId,
          JobTitle: jobData.jobTitle,
          StateId: jobData.stateId,
          LGAId: jobData.cityId,
          JobSectorId: jobData.jobSectorId,
          JobViewScope: jobData.jobViewScope,
          IsPaid: jobData.isPaid,
          HasInterview: jobData.hasInterview,
        });

        if (jobData.countryId) {
          await fetchStates(jobData.countryId);
        }
        if (jobData.stateId) {
          await fetchCities(jobData.stateId);
        }
      }
      toast.success("Job data loaded successfully!");
    } catch (error) {
      console.error("Error fetching job:", error);
      toast.error("Failed to load job data");
    } finally {
      setLoading(false);
    }
  };

  const viewScopeOptions = [
    { value: "Global", label: "Global" },
    { value: "Country", label: "Country" },
    { value: "State", label: "State" },
    { value: "City", label: "City" },
  ];

  const fetchStates = async (countryId: number) => {
    try {
      const response = await getAllStates(countryId);
      setStates(response?.data || []);
    } catch (error) {
      console.error("Error fetching states:", error);
      setStates([]);
    }
  };

  const fetchCities = async (stateId: number) => {
    try {
      const response = await getAllCities(stateId);
      setCities(response?.data || response || []);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCities([]);
    }
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel? All changes will be lost.",
      )
    ) {
      navigate("/job-management");
    }
  };

  const JobAction = async (data: CreateJobDto) => {
    setLoading(true);
    try {
      if (isEditMode) {
        await updateJob(data);
      } else {
        await createNewJob(data);
      }
    } catch (error) {
      console.error("Error submitting job:", error);
      toast.error("Failed to submit job");
    } finally {
      setLoading(false);
    }
  };

  const createNewJob = async (data: CreateJobDto) => {
    const reqData = new FormData();

    if (jobPhoto) {
      reqData.append("JobPhoto", jobPhoto);
    } else {
      toast.error("Please select a job photo");
      setLoading(false);
      return;
    }

    reqData.append("CountryId", `${data.CountryId}`);
    reqData.append("IsPaid", `${data.IsPaid}`);
    reqData.append("HasInterview", `${data.HasInterview}`);
    reqData.append("StateId", `${data.StateId}`);
    reqData.append("JobAmount", `${data.JobAmount}`);
    reqData.append("JobTitle", `${data.JobTitle}`);
    reqData.append("JobDescription", `${data.JobDescription}`);
    reqData.append("JobRequirement", `${data.JobRequirement}`);
    reqData.append("JobResponsibility", `${data.JobResponsibility}`);
    reqData.append("JobSectorId", `${data.JobSectorId}`);
    reqData.append("WorkModeId", `${data.WorkModeId}`);
    reqData.append("JobCategoryId", `${data.JobCategoryId}`);
    reqData.append("JobExpiration", `${data.JobExpiration}`);
    reqData.append("JobTypeId", `${data.JobTypeId}`);
    reqData.append("Grade", `${data.JobGrade}`);
    reqData.append("CityId", `${data.LGAId}`);
    reqData.append("JobViewScope", `${data.JobViewScope}`);

    try {
      const response = await CreateJob(reqData);
      if (response.status === 200 || response.status === 201) {
        const resData = await response.json();
        const jobId = resData.result.data.jobId;
        toast.success("Job created successfully!");
        // navigate(`/jobDetails/${hashIds.encode(String(jobId))}`);
        navigate("/job-management")
      } else {
        const resData = await response.text();
        toast.error("Failed to create job");
        console.error(`Error Code: ${response.status}, Error:`, resData);
      }
    } catch (error) {
      console.error("Create job error:", error);
      toast.error("An error occurred while creating the job");
    }
  };

  const updateJob = async (data: CreateJobDto) => {
    const reqData = new FormData();

    if (jobPhoto) {
      reqData.append("JobPhoto", jobPhoto);
    }

    reqData.append("CountryId", `${data.CountryId}`);
    reqData.append("IsPaid", `${data.IsPaid}`);
    reqData.append("HasInterview", `${data.HasInterview}`);
    reqData.append("StateId", `${data.StateId}`);
    reqData.append("JobAmount", `${data.JobAmount}`);
    reqData.append("JobTitle", `${data.JobTitle}`);
    reqData.append("JobDescription", `${data.JobDescription}`);
    reqData.append("JobRequirement", `${data.JobRequirement}`);
    reqData.append("JobResponsibility", `${data.JobResponsibility}`);
    reqData.append("JobSectorId", `${data.JobSectorId}`);
    reqData.append("WorkModeId", `${data.WorkModeId}`);
    reqData.append("JobCategoryId", `${data.JobCategoryId}`);
    reqData.append("JobExpiration", `${data.JobExpiration}`);
    reqData.append("JobTypeId", `${data.JobTypeId}`);
    reqData.append("Grade", `${data.JobGrade}`);
    reqData.append("CityId", `${data.LGAId}`);
    reqData.append("JobViewScope", `${data.JobViewScope}`);

    try {
      const response = await UpdateJob(reqData, Number(hashId));

      if (response.status === 200 || response.status === 201) {
        const resData = await response.json();
        const jobId =
          resData?.result?.data?.jobId || resData?.data?.jobId || hashId;

        toast.success("Job updated successfully!");
        navigate(`../jobDetails/${hashIds.encode(String(jobId))}`);
      } else {
        const resData = await response.text();
        console.log(`Error Code: ${response.status}, Error:`, resData);
        toast.error(`Failed to update job: ${response.status}`);
      }
    } catch (error) {
      console.error("Update job error:", error);
      toast.error("An error occurred while updating the job");
    }
  };

  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <ToastContainer />
        <div className="container-fluid">
          {/* Page Header */}
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15 mb-3">
                <h1 className="page-title fs-18 lh-1">
                  {isEditMode ? "Edit Job" : "Create New Job"}
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item">
                      <NavLink to="/Dashboard">Home</NavLink>
                    </li>
                    <ChevronRight size={15} style={{ position: "relative", top: "3px" }} />
                    <li className="breadcrumb-item">
                      <NavLink to="/job-dashboard">Job Management</NavLink>
                    </li>
                    <ChevronRight size={15} style={{ position: "relative", top: "3px" }} />
                    <li className="breadcrumb-item active" aria-current="page">
                      {isEditMode ? "Edit Job" : "Create Job"}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Job Form */}
          <div className="row">
            <div className="col-xl-12">
              <form onSubmit={handleSubmit(JobAction)} noValidate>
                {loading && !isEditMode ? (
                  <div className="card">
                    <div className="card-body text-center py-5">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-3">Loading form data...</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Section 1: Basic Information */}
                    <div className="card mb-3">
                      <div className="card-header ">
                        <h5 className="mb-0">
                          <FileText size={20} className="me-2" />
                          Basic Information
                        </h5>
                      </div>
                      <div className="card-body mt-10">
                        <div className="row g-3">
                          {/* Job Title */}
                          <div className="col-12">
                            <label className="form-label">
                              Job Title <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className={`form-control ${errors.JobTitle ? "is-invalid" : ""}`}
                              placeholder="e.g., Senior Software Engineer"
                              {...register("JobTitle", {
                                required: "Job title is required",
                              })}
                            />
                            {errors.JobTitle && (
                              <div className="invalid-feedback">{errors.JobTitle.message}</div>
                            )}
                          </div>

                          {/* Job Description */}
                          <div className="col-12">
                            <label className="form-label">
                              Job Description <span className="text-danger">*</span>
                            </label>
                            <textarea
                              className={`form-control ${errors.JobDescription ? "is-invalid" : ""}`}
                              rows={5}
                              placeholder="Provide a detailed description of the job..."
                              {...register("JobDescription", {
                                required: "Job description is required",
                              })}
                            />
                            {errors.JobDescription && (
                              <div className="invalid-feedback">{errors.JobDescription.message}</div>
                            )}
                          </div>

                          {/* Job Responsibilities */}
                          <div className="col-12">
                            <label className="form-label">Job Responsibilities</label>
                            <textarea
                              className="form-control"
                              rows={4}
                              placeholder="List key responsibilities..."
                              {...register("JobResponsibility")}
                            />
                          </div>

                          {/* Job Requirements */}
                          <div className="col-12">
                            <label className="form-label">Job Requirements</label>
                            <textarea
                              className="form-control"
                              rows={4}
                              placeholder="List required qualifications and skills..."
                              {...register("JobRequirement")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
     {/* Section 5: Media */}
                    <div className="card mb-3">
                      <div className="card-header ">
                        <h5 className="mb-0">
                          <Image size={20} className="me-2" />
                          Job Photo
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            <label className="form-label">
                              Upload Job Photo {!isEditMode && <span className="text-danger">*</span>}
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  setJobPhoto(file);
                                }
                              }}
                            />
                            {jobPhoto && (
                              <small className="text-success d-block mt-2">
                                ✓ {isEditMode && "New photo "} Selected: {jobPhoto.name}
                              </small>
                            )}
                            {!isEditMode && !jobPhoto && (
                              <small className="text-muted d-block mt-1">
                                Required for new job posting
                              </small>
                            )}
                          </div>

                          {isEditMode && jobs?.jobPhoto && (
                            <div className="col-md-6">
                              <label className="form-label">Current Photo</label>
                              <div className="border rounded p-2">
                                <img
                                  src={`http://localhost:5127/${jobs.jobPhoto}`}
                                  className="img-fluid"
                                  alt="Current job"
                                  style={{ maxHeight: "200px", objectFit: "contain" }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Section 2: Compensation & Type */}
                    <div className="card mb-3">
                      <div className="card-header ">
                        <h5 className="mb-0">
                          <Briefcase size={20} className="me-2" />
                        Job Classification & Compensation
                        </h5>
                      </div>
                      <div className="card-body mt-10">
                        <div className="row g-3">
                          {/* Salary */}
                          <div className="col-md-6">
                            <label className="form-label">
                              Salary/Amount <span className="text-danger">*</span>
                            </label>
                            <input
                              type="number"
                              className={`form-control ${errors.JobAmount ? "is-invalid" : ""}`}
                              placeholder="e.g., 150000"
                              step="0.01"
                              min="0"
                              {...register("JobAmount", {
                                required: "Salary amount is required",
                                min: { value: 0, message: "Amount must be positive" },
                                valueAsNumber: true,
                              })}
                            />
                            {errors.JobAmount && (
                              <div className="invalid-feedback">{errors.JobAmount.message}</div>
                            )}
                          </div>

                          {/* Grade */}
                          <div className="col-md-6">
                            <label className="form-label">Minimum Required Grade</label>
                            <input
                              type="text"
                              placeholder="e.g., First Class"
                              className="form-control"
                              {...register("JobGrade")}
                            />
                          </div>

                          {/* Checkboxes */}
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="IsPaid"
                                    {...register("IsPaid")}
                                  />
                                  <label htmlFor="IsPaid" className="form-check-label">
                                    This is a paid position
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="HasInterview"
                                    {...register("HasInterview")}
                                  />
                                  <label htmlFor="HasInterview" className="form-check-label">
                                    Requires interview
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                      
                          {/* Job Type */}
                          <div className="col-md-6">
                            <label className="form-label">
                              Job Type <span className="text-danger">*</span>
                            </label>
                            <select
                              className={`form-control ${errors.JobTypeId ? "is-invalid" : ""}`}
                              {...register("JobTypeId", {
                                required: "Job type is required",
                                validate: (value) => value !== 0 || "Please select a job type",
                                valueAsNumber: true,
                              })}
                            >
                              <option value={0}>Select Job Type</option>
                              {jobTypes.map((type) => (
                                <option key={type.jobTypeId} value={type.jobTypeId}>
                                  {type.typeName}
                                </option>
                              ))}
                            </select>
                            {errors.JobTypeId && (
                              <div className="invalid-feedback">{errors.JobTypeId.message}</div>
                            )}
                          </div>

                          {/* Work Mode */}
                          <div className="col-md-6">
                            <label className="form-label">
                              Work Mode <span className="text-danger">*</span>
                            </label>
                            <select
                              className={`form-control ${errors.WorkModeId ? "is-invalid" : ""}`}
                              {...register("WorkModeId", {
                                required: "Work mode is required",
                                validate: (value) => value !== 0 || "Please select a work mode",
                                valueAsNumber: true,
                              })}
                            >
                              <option value={0}>Select Work Mode</option>
                              {workModes.map((mode) => (
                                <option key={mode.workModeId} value={mode.workModeId}>
                                  {mode.modeName}
                                </option>
                              ))}
                            </select>
                            {errors.WorkModeId && (
                              <div className="invalid-feedback">{errors.WorkModeId.message}</div>
                            )}
                          </div>

                          {/* Job Sector */}
                          <div className="col-md-6">
                            <label className="form-label">
                              Job Sector <span className="text-danger">*</span>
                            </label>
                            <select
                              className={`form-control ${errors.JobSectorId ? "is-invalid" : ""}`}
                              {...register("JobSectorId", {
                                required: "Job sector is required",
                                validate: (value) => value !== 0 || "Please select a job sector",
                                valueAsNumber: true,
                              })}
                            >
                              <option value={0}>Select Sector</option>
                              {jobSectors.map((sector) => (
                                <option key={sector.jobSectorId} value={sector.jobSectorId}>
                                  {sector.name}
                                </option>
                              ))}
                            </select>
                            {errors.JobSectorId && (
                              <div className="invalid-feedback">{errors.JobSectorId.message}</div>
                            )}
                          </div>

                          {/* Job Category */}
                          <div className="col-md-6">
                            <label className="form-label">
                              Job Category <span className="text-danger">*</span>
                            </label>
                            <select
                              className={`form-control ${errors.JobCategoryId ? "is-invalid" : ""}`}
                              disabled={!jobCategories || jobCategories.length === 0}
                              {...register("JobCategoryId", {
                                required: "Job category is required",
                                validate: (value) => value !== 0 || "Please select a job category",
                                valueAsNumber: true,
                              })}
                            >
                              <option value={0}>
                                {selectedSectorId > 0 ? "Select Category" : "Select Sector First"}
                              </option>
                              {jobCategories.map((category) => (
                                <option key={category.jobCategoryId} value={category.jobCategoryId}>
                                  {category.categoryName}
                                </option>
                              ))}
                            </select>
                            {errors.JobCategoryId && (
                              <div className="invalid-feedback">{errors.JobCategoryId.message}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Location */}
                    <div className="card mb-3">
                      <div className="card-header ">
                        <h5 className="mb-0">
                          <MapPin size={20} className="me-2" />
                          Location & Visibility
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="row g-3">
                          {/* Country */}
                          <div className="col-md-4">
                            <label className="form-label">
                              Country <span className="text-danger">*</span>
                            </label>
                            <select
                              className={`form-control ${errors.CountryId ? "is-invalid" : ""}`}
                              {...register("CountryId", {
                                required: "Country is required",
                                validate: (value) => value !== 0 || "Please select a country",
                                valueAsNumber: true,
                              })}
                            >
                              <option value={0}>Select Country</option>
                              {countries.map((country) => (
                                <option key={country.countryId} value={country.countryId}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                            {errors.CountryId && (
                              <div className="invalid-feedback">{errors.CountryId.message}</div>
                            )}
                          </div>

                          {/* State */}
                          <div className="col-md-4">
                            <label className="form-label">
                              State <span className="text-danger">*</span>
                            </label>
                            <select
                              className={`form-control ${errors.StateId ? "is-invalid" : ""}`}
                              disabled={!states || states.length === 0}
                              {...register("StateId", {
                                required: "State is required",
                                validate: (value) => value !== 0 || "Please select a state",
                                valueAsNumber: true,
                              })}
                            >
                              <option value={0}>Select State</option>
                              {states.map((state) => (
                                <option key={state.stateId} value={state.stateId}>
                                  {state.name}
                                </option>
                              ))}
                            </select>
                            {errors.StateId && (
                              <div className="invalid-feedback">{errors.StateId.message}</div>
                            )}
                          </div>

                          {/* City */}
                          <div className="col-md-4">
                            <label className="form-label">
                              LGA/City <span className="text-danger">*</span>
                            </label>
                            <select
                              className={`form-control ${errors.LGAId ? "is-invalid" : ""}`}
                              disabled={!cities || cities.length === 0}
                              {...register("LGAId", {
                                required: "LGA/City is required",
                                validate: (value) => value !== 0 || "Please select a city",
                                valueAsNumber: true,
                              })}
                            >
                              <option value={0}>Select LGA/City</option>
                              {cities.map((city) => (
                                <option key={city.cityId} value={city.cityId}>
                                  {city.name}
                                </option>
                              ))}
                            </select>
                            {errors.LGAId && (
                              <div className="invalid-feedback">{errors.LGAId.message}</div>
                            )}
                          </div>

                          {/* Job View Scope */}
                          <div className="col-md-6">
                            <label className="form-label">
                              Job Visibility Scope <span className="text-danger">*</span>
                            </label>
                            <select
                              className={`form-control ${errors.JobViewScope ? "is-invalid" : ""}`}
                              {...register("JobViewScope", {
                                required: "View scope is required",
                              })}
                            >
                              <option value="">Select View Scope</option>
                              {viewScopeOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                            {errors.JobViewScope && (
                              <div className="invalid-feedback">{errors.JobViewScope.message}</div>
                            )}
                            <small className="text-muted">
                              Determines who can see this job posting
                            </small>
                          </div>

                          {/* Job Expiration */}
                          <div className="col-md-6">
                            <label className="form-label">Job Expiration Date</label>
                            <input
                              type="date"
                              className="form-control"
                              defaultValue={jobs?.jobExpiration?.split("T")[0] ?? ""}
                              {...register("JobExpiration")}
                            />
                            <small className="text-muted">
                              Leave empty for no expiration
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

               

                    {/* Form Actions */}
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-end gap-2">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleCancel}
                            disabled={loading}
                          >
                            <X size={18} className="me-1" />
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                  aria-hidden="true"
                                />
                                Saving...
                              </>
                            ) : (
                              <>
                                <CheckCheck size={18} className="me-1" />
                                {isEditMode ? "Update Job" : "Create Job"}
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
