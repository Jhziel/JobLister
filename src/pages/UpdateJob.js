const updateJob = async (editedJob) => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    await fetch(`${API_URL}/job/update/${editedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedJob),
    });
  } catch (error) {
    console.log(error);
  }
  return;
};

export default updateJob;
