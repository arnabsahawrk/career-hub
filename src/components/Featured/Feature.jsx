import PropTypes from "prop-types";
import { GoLocation } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = feature;

  return (
    <div className="bg-white rounded-lg space-y-4 p-5 lg:px-16 lg:py-10">
      <img className="w-24 object-cover" src={logo} alt={job_title} />
      <h3 className="text-[#474747] font-extrabold text-2xl">{job_title}</h3>
      <h4 className="text-[#757575] font-semibold text-xl">{company_name}</h4>
      <div className="space-x-4">
        <p className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-white text-sky-400 hover:text-white rounded-xl group border border-sky-400">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-sky-400 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-sky-400 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left font-extrabold transition-colors duration-200 ease-in-out">
            {remote_or_onsite}
          </span>
        </p>
        <p className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-white text-sky-400 hover:text-white rounded-xl group border border-sky-400">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-sky-400 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-sky-400 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left font-extrabold transition-colors duration-200 ease-in-out">
            {job_type}
          </span>
        </p>
      </div>
      <ul className="flex gap-3 lg:gap-5 items-center text-[#757575] text-xl font-semibold">
        <li className="flex gap-1 lg:gap-3 items-center">
          <GoLocation />
          {location}
        </li>
        <li className="flex gap-1 lg:gap-3 items-center">
          <CiDollar />
          Salary: {salary}
        </li>
      </ul>
      <Link
        to={`jobDetails/${id}`}
        state={job_title}
        className="btn btn-info text-white"
      >
        View Details
      </Link>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.object.isRequired,
};

export default Feature;
