const BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
  "Content-Type": "application/json",
});

export const getAllEmployeeLeaves = async (
  jobSeekerId: number,
  page = 1,
  pageSize = 10,
  status?: string,
  startDate?: string,
  endDate?: string
) => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    ...(status ? { status } : {}),
    ...(startDate ? { startDate } : {}),
    ...(endDate ? { endDate } : {}),
  });

  const res = await fetch(`${BASE_URL}/leave/employee/${jobSeekerId}?${params}`, {
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to fetch leave requests");

  const data = await res.json();
  console.log("Fetched leaves:", data);

  return data;
};

export const getAllLeaves = async (
  page = 1,
  pageSize = 10,
  status?: string,
  startDate?: string,
  endDate?: string
) => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    ...(status ? { status } : {}),
    ...(startDate ? { startDate } : {}),
    ...(endDate ? { endDate } : {}),
  });

  const res = await fetch(`${BASE_URL}/leave/employer/?${params}`, {
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to fetch leave requests");

  const data = await res.json();
  console.log("Fetched leaves:", data);

  return data;
};

export const approveLeave = async (leaveId: number) => {
  const res = await fetch(`${BASE_URL}/leave/approve/${leaveId}`, {
    method: "POST",
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to approve leave");
  return res;
};

export const rejectLeave = async (leaveId: number) => {
  const res = await fetch(`${BASE_URL}/leave/reject/${leaveId}`, {
    method: "POST",
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to reject leave");
  return res;
};