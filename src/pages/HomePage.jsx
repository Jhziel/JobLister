import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/jobs"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </Link>
      </section>
    </>
  );
};

export default HomePage;
