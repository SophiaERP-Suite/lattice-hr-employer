import { toast } from "react-toastify";

export interface Props {
  toast: typeof toast;
}

export interface ApplicantFormValues {
  FirstName: string[];
  LastName: string[];
  ProfilePhoto: string[];
  Phone: string[];
  Email: string[];
  IdentificationNumber: string[];
  DateOfBirth: string[];
  Gender: string[];
  Address: string[];
}

export interface ErrorResponse {
  message: string;
  errors: ApplicantFormValues;
}

export interface DataResponse {
  message: string;
  data: {
    organisationId: number,
    dbsSearchId: number,
  }
}


export interface ContractRequestDTO {
  description: string;
}

export interface ContractRequest {
  requestId: number;
  description: string;
  createdAt: string;
  contractSigned: boolean;
  dateCreated: string;
  employerId: number;
  employer?: {
    companyName: string;
    email: string;
    logo?: string;
  };
  contract?: {
    contractId: number;
    amount: number;
    currency: string;
    expiryDate: string;
  };
}

export interface ContractRequestStats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  inReview: number;
}

export interface MessageData {
  messageId: number;
  message: string;
  edited: string;
  deleted: string;
  sender: string;
  dateCreated: string;
}

export interface ResponsibilitiesData {
  typeId: number;
  typeName: string;
  handler: string;
}

export interface ContractData {
  contractId: number;
  content: string;
  currency: string;
  amount: number;
  expiryDate: string;
  responsibilities: ResponsibilitiesData[];
}

export interface RequestData {
  requestId: string;
  employerId: string;
  employer: string;
  employerMail: string;
  employerPhone: string;
  employerLogo: string;
  description: string;
  dateCreated: string;
  isSigned: boolean;
  messages: MessageData[];
  contract: ContractData;
}

export interface MessageFormData {
  Message: string;
}