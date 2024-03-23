import { useLoaderData, useParams } from "react-router-dom";
import OtherBanner from "../../components/Banner/OtherBanner";
import Details from "../../components/Details/Details";

const JobDetails = () => {
  const params = useParams();
  const jobsData = useLoaderData();

  const singleJobData = jobsData.data.find(
    (job) => job.id === parseInt(params.id)
  );

  return (
    <>
      <OtherBanner title="Job Details" />
      <Details job={singleJobData} />
    </>
  );
};

export default JobDetails;
