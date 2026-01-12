const API_URL = "http://localhost:5050";

// export const getProfile = async () => {
//   const token = localStorage.getItem("token");
//   const res = await fetch(`${API_URL}/api/profile`, {
//     headers: {
//       Authorization: `Bearer ${token}`,     //step 10
//     },
//   });
//   return res.json();
// };


export const getProfile = async () => {
  const res = await fetch("http://localhost:5050/api/profile", {
    credentials: "include", // 👈 SEND COOKIE
  });

  return res.json();
};

