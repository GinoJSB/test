import React, { useEffect, useState } from "react";
import { Category } from "../models/category";
import { getCategories } from "../services/categoryServices";

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="mb-4">
      <h2 className="mb-3">Categories</h2>
      <ul className="list-group">
        {categories.map((category) => (
          <li key={category.id} className="list-group-item">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
