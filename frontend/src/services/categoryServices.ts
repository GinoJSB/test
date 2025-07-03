import { Category } from "../models/category";
import { getAuthHeaders } from "./authService";

const API_URL = "http://localhost:8080";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_URL}/categories`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
};
