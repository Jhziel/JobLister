const getJob = async ({ params }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const response = await fetch(`${API_URL}/job/${params.id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  return;
};

export default getJob;
