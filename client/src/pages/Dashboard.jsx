import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    fetch("http://localhost:5050/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data.user))
      .catch((err) => console.error(err));
  }, [navigate]);

  if (!profile) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-6 rounded shadow text-center">
        <p className="mb-2"><span className="font-semibold">Name:</span> {profile.name}</p>
        <p><span className="font-semibold">Email:</span> {profile.email}</p>
      </div>
    </div>
  );
};

export default Dashboard;
