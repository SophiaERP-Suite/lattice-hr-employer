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
