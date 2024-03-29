import { Link } from "react-router-dom";

const NotApplied = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <img
          className="object-cover size-60"
          src="https://i.postimg.cc/HLphkX7N/no-results.png"
          alt="Not Found"
        />
        <p className="text-3xl">You Have Not Applied For Any Job Yet.</p>
        <Link to="/" state={"Home"}>
          <button
            rel="noopener noreferrer"
            className="btn btn-info text-white font-semibold"
          >
            Apply Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotApplied;
