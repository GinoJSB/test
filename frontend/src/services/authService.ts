const API_URL = "http://localhost:8080/auth";

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  return data.token;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("token");
};
