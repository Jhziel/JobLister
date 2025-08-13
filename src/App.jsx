import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import GetJob from "./pages/GetJob.loader.js";
import HomePage from "./pages/HomePage";
import JobListingPage from "./pages/JobListingPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";
import AddJob from "./pages/AddJob.js";
import DeleteJob from "./pages/DeleteJob.js";
import UpdateJob from "./pages/UpdateJob.js";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobListingPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage DeleteJob={DeleteJob} />}
          loader={GetJob}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage UpdateJob={UpdateJob} />}
          loader={GetJob}
        />
        <Route path="/add-job" element={<AddJobPage AddJobs={AddJob} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
