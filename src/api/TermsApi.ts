const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export enum TermsType {
  EmploymentOffer = 0,
  NDA = 1,
  ContractorAgreement = 2,
  PrivacyPolicy = 3,
  CodeOfConduct = 4,
  RemoteWorkPolicy = 5,
  Other = 99
}

export interface TermsDto {
  termsId?: number;
  termsType: TermsType;
  title: string;
  content: string;
  version?: number;
  employerId?: number | null;
  isActive?: boolean;
  createdByUserId?: number | null;
  createdByName?: string;
  dateCreated?: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export const GetAllTerms = async () => {
  const response = await fetch(
    `${BaseURL}/terms`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );
  return response.json();
};

export const GetTermsByType = async (
  type: TermsType,
  employerId?: number
) => {
  const url = employerId
    ? `${BaseURL}/terms/type/${type}?employerId=${employerId}`
    : `${BaseURL}/terms/type/${type}`;

  const response = await fetch(
    url,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const GetTermsById = async (id: number) => {
  const response = await fetch(
    `${BaseURL}/terms/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const CreateTerms = async (data: FormData) => {
  const response = await fetch(
    `${BaseURL}/terms`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data
    },
  );
  return response.json();
};

export const UpdateTerms = async (id: number, data: FormData) => {
  const response = await fetch(
    `${BaseURL}/terms/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: data
    },
  );
  return response.json();
};

export const DeleteTerms = async (id: number) => {
  const response = await fetch(
    `${BaseURL}/terms/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );
  return response.json();
};

// export const CreateTermsWithFormData = async (formData: FormData) => {
//   const response = await fetch(
//     `${BaseURL}/terms`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData
//     },
//   );
//   return response.json();
// };