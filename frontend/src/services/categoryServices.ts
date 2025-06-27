import { Category } from "../models/category";

const API_URL = "http://localhost:8080";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_URL}/categories`);
  return response.json();
};
