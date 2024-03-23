import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we could not find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-400">
            But do not worry, you can find plenty of other things on our
            homepage.
          </p>
          <a
            onClick={() => {
              navigate(-1);
            }}
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded bg-info text-white"
          >
            Back
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
