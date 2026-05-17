import { PagedResult } from "../types/invoice";
import { SalesOrderResponse } from "../types/salesOrder";


const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5127";

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let message = `Request failed: ${res.status}`;
    try {
      const body = await res.json();
      message = body?.message ?? message;
    } catch {
      console.error("Failed to parse error response");
    }
    throw new Error(message);
  }
  return res.json() as Promise<T>;
}

export const confirmPayment = async (data: FormData, id: number) => {
  const response = await fetch(`${BASE_URL}/invoice/${id}/payment`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: data,
  });

  return response;
};

export async function getInvoiceById(
  id: number
): Promise<SalesOrderResponse> {
  const res = await fetch(`${BASE_URL}/invoice/${id}`, {
    method: "GET",
  });
  return handleResponse<SalesOrderResponse>(res);
}

export async function getAllInvoices(
  page: number = 1,
  pageSize: number = 10,
  paymentStatus?: string
): Promise<PagedResult<SalesOrderResponse>> {
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("pageSize", String(pageSize));
  if (paymentStatus) params.append("paymentStatus", paymentStatus);

  const res = await fetch(`${BASE_URL}/invoice/employer/all?${params.toString()}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log("fetching invoices with params:", res);
  return handleResponse<PagedResult<SalesOrderResponse>>(res);
}

export async function PublishInvoice(
  id: number,
) {
  const res = await fetch(`${BASE_URL}/invoice/${id}/publishInvoice/admin`, {
    method: "PATCH",
  });
  return res.json();
}

