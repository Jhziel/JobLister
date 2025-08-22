import { useState, useEffect } from "react";

import Job from "./Job";
import Spinners from "./Spinners";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    const getJobs = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/job`);
        const data = await response.json();
        setJobs(data.jobs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []); // location.key changes every navigation

  const latestJob = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        {loading ? (
          <Spinners loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestJob.map((job) => (
              <Job
                key={job.id}
                id={job.id}
                title={job.title}
                type={job.type}
                description={job.description}
                location={job.location}
                salary={job.salary}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
