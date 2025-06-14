import API from "./api";

export const postCampusJob = async (jobData) => {
  const res = await API.post(`/campus-jobs/jobs`, jobData);
  return res.data;
};

export const getCampusJobs = async () => {
  const res = await API.get(`/campus-jobs/my-campus-jobs`);
  return res.data;
}

export const getCampusJobById = async (jobId) => {
  const res = await API.get(`/campus-jobs/jobs/${jobId}`);
  return res.data;
};

export const updateCampusJob = (id, jobData) => API.put(`/campus-jobs/jobs/${id}`, jobData);
export const deleteCampusJob = (id) => API.delete(`/campus-jobs/jobs/${id}`);
