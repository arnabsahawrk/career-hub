import { useLoaderData, useParams } from "react-router-dom";
import OtherBanner from "../../components/Banner/OtherBanner";
import Details from "../../components/Details/Details";

const JobDetails = () => {
  const { id } = useParams();
  const { data } = useLoaderData();

  const singleJobData = data.find((job) => job.id === +id);

  return (
    <>
      <OtherBanner title="Job Details" />
      <Details job={singleJobData} />
    </>
  );
};

export default JobDetails;
