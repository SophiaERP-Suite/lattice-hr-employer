const BaseURL = "http://localhost:5127";
const token = localStorage.getItem("token");

export const CreateJob = async (data: FormData) => {
  const response = await fetch(`${BaseURL}/jobs`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return response;
};

export const UpdateJob = async (data: FormData, jobId: number) => {
  const response = await fetch(`${BaseURL}/jobs/${jobId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  return response;
};

export const PublishJob = async (jobId: number) => {
  const response = await fetch(`${BaseURL}/jobs/${jobId}/publish`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const GetMyJobs = async () => {
  const response = await fetch(`${BaseURL}/jobs/ByEmployer`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const GetJob = async (jobId: number) => {
  const response = await fetch(`${BaseURL}/jobs/${jobId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

// job meta
export const getJobTypes = async () => {
  const response = await fetch(`${BaseURL}/job-meta/types`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getJobSectors = async () => {
  const response = await fetch(`${BaseURL}/job-meta/sectors`, {
    method: "GET",
  });

  return response.json();
};

export const getJobCategories = async (jobSectorId: number) => {
  const response = await fetch(
    `${BaseURL}/job-meta/${jobSectorId}/categories`,
    {
      method: "GET",
    },
  );

  return response.json();
};

export const getJobWorkMode = async () => {
  const response = await fetch(`${BaseURL}/workmode`, {
    method: "GET",
  });

  return response.json();
};
