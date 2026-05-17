const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const getEmployerDetails = async () => {
  const response = await fetch(`${BaseURL}/employers/ByEmployer`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getOrganizationEmployees = async (filters: {
  page?: number;
  pageSize?: number;
  search?: string;
  jobSectorId?: number;
}) => {

  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());
  if (filters.pageSize) params.append("pageSize", filters.pageSize.toString());
  if (filters.search) params.append("search", filters.search);
  if (filters.jobSectorId) params.append("jobSectorId", filters.jobSectorId.toString());

  const response = await fetch(
    `${BaseURL}/employers/byOrganization?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch organization employees");
  }

  return response.json();
};
