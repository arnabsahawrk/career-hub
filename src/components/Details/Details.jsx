import PropTypes from "prop-types";
import { CiDollar } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Details = ({ job }) => {
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const { phone, email, address } = contact_information;

  return (
    <section className="flex flex-col-reverse lg:flex-row gap-5 py-10">
      <div className="space-y-4">
        <p className="text-lg text-[#757575]">
          <span className="text-[#1A1919] font-extrabold">
            Job Description:
          </span>{" "}
          {job_description}
        </p>
        <p className="text-lg text-[#757575]">
          <span className="text-[#1A1919] font-extrabold">
            Job Responsibility:
          </span>{" "}
          {job_responsibility}
        </p>
        <p className="text-lg text-[#757575]">
          <span className="text-[#1A1919] font-extrabold">
            Educational Requirements:
          </span>
          <br />
          {educational_requirements}
        </p>
        <p className="text-lg text-[#757575]">
          <span className="text-[#1A1919] font-extrabold">Experiences:</span>
          <br />
          {experiences}
        </p>
      </div>
      <div className="lg:w-[1000px] space-y-6">
        <div
          className="p-8 rounded-lg space-y-4"
          style={{
            background: `linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)`,
          }}
        >
          <h2 className="text-xl text-[#1A1919] font-extrabold">Job Details</h2>
          <hr />
          <ul className="text-[#474747] text-lg space-y-2">
            <li className="flex gap-3 items-center">
              <CiDollar className="text-[#7E90FE]" />
              <span className="font-extrabold">Salary: </span>
              {salary}
            </li>
            <li className="flex gap-3 items-center">
              <IoCalendarOutline className="text-[#7E90FE]" />
              <span className="font-extrabold">Job Title: </span>
              {job_title}
            </li>
          </ul>
          <h2 className="text-xl text-[#1A1919] font-extrabold">
            Contact Information
          </h2>
          <hr />
          <ul className="text-[#474747] text-lg space-y-2">
            <li className="flex gap-3 items-center">
              <FaPhone className="text-[#7E90FE]" />
              <span className="font-extrabold">Phone: </span>
              {phone}
            </li>
            <li className="flex gap-3 items-center">
              <MdOutlineMarkEmailRead className="text-[#7E90FE]" />
              <span className="font-extrabold">Email: </span>
              {email}
            </li>
            <li className="flex gap-3 items-center">
              <GoLocation className="text-[#7E90FE]" />
              <span className="font-extrabold">Address: </span>
              {address}
            </li>
          </ul>
        </div>
        <button className="btn btn-info text-white font-bold w-full">
          Apply Now
        </button>
      </div>
    </section>
  );
};

Details.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Details;
