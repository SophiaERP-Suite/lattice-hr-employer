const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const getEmployerShifts = async () => {
  const response = await fetch(`${BaseURL}/shifts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getJobShifts = async (jobId: number) => {
  const response = await fetch(`${BaseURL}/shifts/job/${jobId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
