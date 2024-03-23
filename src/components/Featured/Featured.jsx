import { useEffect, useState } from "react";
import ShareHeadTitle from "../ShareHeadTitle/ShareHeadTitle";
import axios from "axios";
import Feature from "./Feature";

const Featured = () => {
  const [features, setFeatures] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("jobs.json");
      setFeatures(res.data);
    };
    fetchData();
  }, []);

  const headTitle = {
    head: "Featured Jobs",
    title:
      "Explore thousands of job opportunities with all the information you need. Its your future",
  };

  return (
    <section className="space-y-8">
      <ShareHeadTitle headTitle={headTitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.slice(0, dataLength).map((feature) => (
          <Feature key={feature.id} feature={feature} />
        ))}
      </div>
      <div
        className={`text-center ${
          dataLength === features.length ? "hidden" : ""
        }`}
      >
        <button
          onClick={() => setDataLength(features.length)}
          className="relative px-5 py-3 overflow-hidden font-medium text-white bg-sky-400 border border-sky-400 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-sky-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-sky-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-sky-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-sky-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-sky-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Seel All Jobs
          </span>
        </button>
      </div>
    </section>
  );
};

export default Featured;
