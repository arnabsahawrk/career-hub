import { useState } from "react";
import ShareHeadTitle from "../ShareHeadTitle/ShareHeadTitle";
import axios from "axios";
import { useEffect } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("categories.json");
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to load to data:", error);
      }
    };
    fetchData();
  }, []);
  const headTitle = {
    head: "Job Category List",
    title:
      "Explore thousands of job opportunities with all the information you need. Its your future",
  };

  return (
    <section className="space-y-8">
      <ShareHeadTitle headTitle={headTitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} card={category} />
        ))}
      </div>
    </section>
  );
};

export default Category;
