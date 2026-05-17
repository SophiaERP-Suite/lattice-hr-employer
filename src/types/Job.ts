export interface ApplicationTimelineDto {
  createdByName: string;
  createdByUserId: number;
  dateCreated: string;
  description: string;
  eventType: string;
  timelineId: number;
}

export const getTimelineStyle = (eventType: string) => {
  switch (eventType) {
    case "ApplicationSubmitted":
      return { bg: "bg-success", title: "Application Submitted" };

    case "ApplicationShortlisted":
      return { bg: "bg-primary", title: "Application Shortlisted" };

    case "ApplicationRejected":
      return { bg: "bg-danger", title: "Application Rejected" };

    case "InterviewScheduled":
      return { bg: "bg-warning", title: "Interview Scheduled" };

    case "OfferSent":
      return { bg: "bg-info", title: "Offer Sent" };

    case "OfferAccepted":
      return { bg: "bg-success", title: "Offer Accepted" };

    case "StatusChanged":
      return { bg: "bg-secondary", title: "Status Updated" };

    default:
      return { bg: "bg-dark", title: eventType };
  }
};

export interface CreateJobDto {
  JobTitle: string;
  JobDescription: string;
  JobExpiration: string;
  JobAmount: number;
  JobResponsibility: string;
  JobRequirement: string;
  JobTypeId: number;
  JobCategoryId: number;
  JobSectorId: number;
  WorkModeId: number;
  CountryId: number;
  StateId: number;
  LGAId: number;
  IsPaid: boolean;
  HasInterview: boolean;
  JobPhoto: string;
  JobViewScope: string;
  JobGrade: string;
}

export interface JobDto {
  jobId: number;
  jobInterviewId: number;
  jobTitle: string;
  jobDescription: string;
  jobExpiration: string;
  jobAmount: number;
  jobResponsibility: string;
  jobRequirement: string;
  jobTypeId: number;
  jobCategoryId: number;
  jobSectorId: number;
  jobCategory: string;
  jobSector: string;
  workModeId: number;
  country: string;
  state: string;
  city: string;
  countryId: number;
  stateId: number;
  cityId: number;
  isPaid: boolean;
  hasInterview: boolean;
  jobViewScope: string;
  jobGrade: string;
  published: boolean;
  jobStatus: string;
  dateCreated: string;
  jobPhoto: string;
  jobType: string;
  currency: string;
  grade: string;
  shiftStartTime: string;
  shiftEndTime: string;
  workMode: string;
}

export interface JobType {
  jobTypeId: number;
  typeName: string;
}

export interface JobCategory {
  jobCategoryId: number;
  categoryName: string;
}

export interface JobSector {
  jobSectorId: number;
  name: string;
}

export interface WorkMode {
  workModeId: number;
  modeName: string;
}

// =================================================
export interface UserDto {
  address: string;
  alternateEmail: string | null;
  alternatePhone: string | null;
  city: string;
  country: string;
  dateOfBirth: string;
  dateCreated: string;
  degree: string | null;
  email: string;
  firstName: string;
  gender: string;
  hobbies: string | null;
  interviewLocation: string | null;
  isActive: boolean;
  jobCategory: string | null;
  jobCategoryId: number | null;
  jobLocation: string | null;
  jobSector: string | null;
  jobSectorId: number | null;
  jobSeekerDate: string | null;
  jobSeekerId: number;
  lastName: string;
  maritalStatus: string | null;
  phone: string;
  postCode: string | null;
  profilePhoto: string | null;
  qualification: string | null;
  salaryRange: string | null;
  state: string;
  userId: number;
  workExperience: number;
  CountryId: number;
  StateId: number;
  CityId: number;
}

export interface JobApplicationDto {
  jobApplicationId: number;
  jobTitle: string;
  jobId: number;
  status: JobApplicationStatus;
  applDate: string;
  applicantName: string;
  coverLetter: string;
  comment: string;
  resume: string;
  jobSeeker: UserDto;
  rating: number;
}

export interface JobFilters {
  page?: number;
  pageSize?: number;
  searchTerm?: string;
  stateId?: number;
  cityId?: number;
  status?: number;
}

export type JobApplicationStatus =
  | "pending"
  | "reviewed"
  | "shortlisted"
  | "rejected"
  | "interview"
  | "selfInterview"
  | "hired";

export interface CandidateReferences {
  dateCreated: string;
  description: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  referenceId: number;
  referenceType: string;
  referenceTypeId: number;
}

export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface ShiftData {
  shiftId: number;
  shiftName: string;
  startTime: string;
  endTime: string;
  days: Day[];
}

export interface OfferData {
  jobTitle: string;
  department: string;
  responsibeDepartment: string;
  responseInstructions: string;
  departmentPosition: string;
  introduction: string;
  letterTitle: string;
  level: string;
  employmentType: string;
  salary: number;
  currency: string;
  terms: string,
  netAnnualPay: string;
  netMonthlyPay: string;
  startDate: string;
  workDays: string[];
  workStartTime: string;
  workEndTime: string;
  placeOfWork: string;
  benefits: string;
  otherInformation: string;
  // probationPeriod: string;
  reportingManager: string;
}

export type JobOfferStatus = 'Draft' | 'Sent' | 'Accepted' | 'Declined' | 'Expired';

export enum JobOfferStatusEnum {
  Draft = 0,
  Sent = 1,
  Accepted = 2,
  Declined = 3,
  Expired = 4,
  Cancelled = 5,
  Negotiation = 6,
}

export interface JobSeekerData {
  firstName: string;
  lastName: string;
  profilePhoto?: string;
}

export interface JobDataDto {
  jobId: number;
  jobTitle: string;
  currency: string
}

export interface JobOfferListItem {
  jobOfferId: number;
  jobApplicationId: number;
  grossAnnualSalary: number;
  expiryDate: string;
  offerDate: string;
  offerStatus: JobOfferStatus;
  jobSeeker: JobSeekerData;
  job: JobDataDto;
}


export interface JobOfferResponseDto {
  jobOfferId: number;
  jobApplicationId: number;
  employerId: number;

  grossAnnualSalary: number;
  netAnnualPay: number | null;
  netMonthlyPay: number | null;

  department: string | null;
  level: string | null;
  terms: string | null;
  employmentType: string | null;
  reportingManager: string | null;
  responsibleDepartment: string | null;
  responsibleOfficer: string | null;
  benefits: string | null;

  letterTitle: string;
  introduction: string | null;
  responseInstructions: string | null;
  otherInformation: string | null;
  currencySymbol: string;
  currencyCode: string;

  workStartTime: string;
  workEndTime: string;
  startDate: string;
  expiryDate: string;
  workDays: DayOfWeek[];

  offerDate: string;
  offerStatus: JobOfferStatus;
}


export interface JobOfferResponse {
  jobOfferId: number;
  jobApplicationId: number;
  employerId: number;

  grossAnnualSalary: number;
  netAnnualPay: number | null;
  netMonthlyPay: number | null;

  department: string | null;
  level: string | null;
  employmentType: string | null;
  reportingManager: string | null;
  responsibleDepartment: string | null;
  responsibleOfficer: string | null;
  benefits: string | null;

  letterTitle: string;
  introduction: string | null;
  responseInstructions: string;
  otherInformation: string | null;

  workStartTime: string;
  workEndTime: string;
  startDate: string;
  expiryDate: string;
  workDays: DayOfWeek[];

  offerDate: string;
  dateAccepted: string;
  dateRejected: string;
  offerStatus: JobOfferStatus;
  employer: EmployerDataDTO;
  job: JobDataDto;
  terms: Terms;
  currencySymbol: string;
  currencyCode: string;
  jobSeeker: JobSeeker;
}

export interface Terms {
  title: string;
  content: string;
}

export interface EmployerDataDTO {
  businessName: string;
  country: string;
  state: string;
  city: string;
}

export interface JobSeeker {
  firstName: string;
  lastName: string;
}

export type DayOfWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';
