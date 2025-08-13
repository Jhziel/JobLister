const addJob = async (newJob) => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    await fetch(`${API_URL}/job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
  } catch (error) {
    console.log(error);
  }

  return;
};

export default addJob;
