const BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
  "Content-Type": "application/json",
});

export const getAllTimesheets = async (
  page = 1,
  pageSize = 10,
  status?: string
) => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    ...(status ? { status } : {}),
  });
  const res = await fetch(`${BASE_URL}/timesheet/employer?${params}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch timesheets");
  return res.json();
};

export const getEmployeeTimesheets = async (
  jobSeekerId: number,
  page = 1,
  pageSize = 10,
  status?: string
) => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    ...(status ? { status } : {}),
  });
  const res = await fetch(
    `${BASE_URL}/timesheet/employer/employee/${jobSeekerId}?${params}`,
    { headers: authHeaders() }
  );
  if (!res.ok) throw new Error("Failed to fetch employee timesheets");
  return res.json();
};

export const getTimesheetById = async (timesheetId: number) => {
  const res = await fetch(`${BASE_URL}/timesheet/${timesheetId}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch timesheet");
  return res.json();
};

export const reviewTimesheet = async (
  timesheetId: number,
  action: "Approved" | "Rejected",
  notes?: string
) => {
  const res = await fetch(`${BASE_URL}/timesheet/${timesheetId}/review`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ action, notes }),
  });
  if (!res.ok) throw new Error("Failed to review timesheet");
  return res;
};