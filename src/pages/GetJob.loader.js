const getJob = async ({ params }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  
  const response = await fetch(`${API_URL}/job/${params.id}`);
  const data = await response.json();
  return data;
};

export default getJob;
