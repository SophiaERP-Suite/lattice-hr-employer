import { ApplicantFormValues, ContractRequestDTO, DataResponse, ErrorResponse, Props } from "../types/contractRequest";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5127";

const token = localStorage.getItem('token');

const authHeaders = () => ({
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json",
});

export const uploadContractSignature = async (
  contractId: number,
  signature: File
): Promise<Response> => {
  const formData = new FormData();
  formData.append("Signature", signature);

  return fetch(`${BASE_URL}/api/contracts/${contractId}/sign`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: formData,
  });
};

export const verifyContractPayment = async (txRef: string, transactionId: string): Promise<Response> => {
  return fetch(`${BASE_URL}/contracts/verify/${txRef}?transactionId=${transactionId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
};

// ====== contract requests ==================
const fetchRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw error;
  }

  return response.json();
};

export const createContractRequest = async (data: ContractRequestDTO) => {
  const formData = new FormData();
  formData.append('Description', data.description);

  const response = await fetch(`${BASE_URL}/contract-requests`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw error;
  }

  return response.json();
};

export const getAllContractRequests = async (filters?: {
  page?: number;
  pageSize?: number;
}) => {

  const queryParams = new URLSearchParams();

  if (filters?.page) queryParams.append("page", filters.page.toString());
  if (filters?.pageSize) queryParams.append("pageSize", filters.pageSize.toString());

  const queryString = queryParams.toString();

  return fetchRequest(
    `/contract-requests/employer${queryString ? `?${queryString}` : ""}`,
    {
      method: 'GET',
      headers: authHeaders(),
    }
  );
};

export const getContractRequestById = async (requestId: number) => {
  const response = await fetch(`${BASE_URL}/contract-requests/${requestId}`, {
    method: 'GET',
    headers: authHeaders(),
  });

  return response;
};

export const updateContractRequest = async (requestId: number, data: ContractRequestDTO) => {
  const formData = new FormData();
  formData.append('Description', data.description);

  const response = await fetch(`/contract-requests/${requestId}/employer`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw error;
  }

  return response.json();
};

export const deleteContractRequest = async (requestId: number) => {
  return fetchRequest(`/ContractRequest/DeleteContractRequest/${requestId}`, {
    method: 'DELETE',
    headers: authHeaders(),
  });
};

export const sendContractRequestMessage = async (requestId: number, data: FormData) => {
  const url = `${BASE_URL}/contract-requests/${requestId}/message`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}

export const updateContractRequestMessage = async (requestId: number, data: FormData, messageId: number) => {
  const url = `${BASE_URL}/contract-requests/${requestId}/message/${messageId}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: data
  })
  return response
}

export const deleteContractRequestMessage = async (requestId: number, messageId: number) => {
  const url = `${BASE_URL}/contract-requests/${requestId}/message/${messageId}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      "Authorization": `Bearer ${token}`
    },
  })
  return response
}

// ======== contract APIs ========

export const getContractById = async (contractId: number) => {

  const url = `${BASE_URL}/contracts/${contractId}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    },
  })
  return response
}

export const signContract = async (id: number, data: FormData) => {
  const response = await fetch(
    `${BASE_URL}/contracts/${id}/signature`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data
    },
  );
  return response;
};


// =============== Resonses to contract requests ===============

export const handleCreateEmployee = async (res: any, loader: HTMLElement | null, text: HTMLElement | null, { toast }: Props, reset: any, msg = "Data added successfully") => {
  try {
    if (loader) {
      loader.style.display = 'none';
    }
    if (text) {
      text.style.display = 'inline';
    }
    if (res.status === 201 || res.status === 200) {
      const responseData: DataResponse = await res.json();
      console.log(responseData);
      toast.success(responseData.message ?? msg);
      if (reset) {
        reset();
      }
    } else {
      console.log(res.status)
      const resText = await res.text();
      try {
        const responseData: ErrorResponse = JSON.parse(resText);
        console.log('Object Data', responseData)
        if (responseData.errors) {
          const errors: ApplicantFormValues = responseData.errors;
          for (const key in errors) {
            const message = errors[key as keyof ApplicantFormValues];
            if (message && message.length > 0) {
              toast.warning(message[0]);
            }
          }
        } else {
          toast.warning(responseData.message);
          console.log(responseData.message);
        }
      } catch (error: any) {
        console.error("Parsing error:", error.message);
        console.log(resText);
      }
    }
  } catch (err) {
    console.error(err);
    toast.error("An Unexpected Error Occurred");
  }
}