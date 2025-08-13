const deleteJob = async (id) => {
  const API_URL = import.meta.env.VITE_API_URL;
  await fetch(`${API_URL}/job/${id}`, {
    method: "DELETE",
  });
  return;
};

export default deleteJob;
