import { getStorage } from "../../utils/localstorage";
import AppliedJob from "./AppliedJob";
import NotApplied from "./NotApplied";

const AllApplied = () => {
  const applied = getStorage();
  return (
    <section>
      <div className="space-y-6">
        {applied.map((job) => (
          <AppliedJob key={job.id} job={job} />
        ))}
        <div className={`${applied.length ? "hidden" : "grid"}`}>
          <NotApplied />
        </div>
      </div>
    </section>
  );
};

export default AllApplied;
