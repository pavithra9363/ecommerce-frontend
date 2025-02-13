import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { toast } from "react-toastify"; // Import toast

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { backendUrl } = useContext(ShopContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/register`, {
        name,
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Registration successful! Please log in."); 
        navigate("/Login"); 
      } else {
        setError("Something went wrong. Please try again.");
        toast.error("Registration failed. Please try again."); 
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during registration.");
      console.error(err);
      toast.error("Registration failed. Please try again."); 
    }
  };

  return (
    <div className="register-container">
      <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded w-full"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account? <a href="/Login" className="text-blue-500">Login</a>
      </p>
    </div>
  );
};

export default RegisterPage;
