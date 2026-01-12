const API_URL = "http://localhost:5050";

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
