import React from "react";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5050/auth/google";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Login</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
