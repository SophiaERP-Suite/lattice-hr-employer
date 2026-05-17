import { PayrollSummaryDto } from "../types/Payment";

const BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

export const getPayrollSummary = async (
  month: number,
  year: number,
  page = 1,
  pageSize = 10,
  status?: string,
  search?: string
): Promise<PayrollSummaryDto> => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    ...(status ? { status } : {}),
    ...(search ? { search } : {}),
  });

  const res = await fetch(`${BASE_URL}/payroll/${month}/${year}?${params}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch payroll summary");
  return res.json();
};


export const confirmPayment = async (
  payslipId: number,
  reference: string,
  receipt: File | null
) => {
  const form = new FormData();
  form.append("paymentReference", reference);
  if (receipt) form.append("receipt", receipt);

  const res = await fetch(`${BASE_URL}/payroll/${payslipId}/confirm-payment`, {
    method: "POST",
    headers: authHeaders(),
    body: form,
  });
  if (!res.ok) throw new Error("Failed to confirm payment");
  return res.json();
};