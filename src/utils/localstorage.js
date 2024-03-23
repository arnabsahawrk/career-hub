import toast from "react-hot-toast";

//Get
const getStorage = () => {
  const storedData = window.localStorage.getItem("applied");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

//Save
const saveStorage = (obj) => {
  const storedData = getStorage();

  const exist = storedData.find((job) => job.id === obj.id);

  if (!exist) {
    storedData.push(obj);
    window.localStorage.setItem("applied", JSON.stringify(storedData));
    return toast.success("Application Submitted.", {
      icon: "🎉",
    });
  }
  return toast.error("Already Applied.");
};

export { getStorage, saveStorage };
