import { useContext, useState,useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setPassword("");

    try {
      if (currentState === "Sign Up") {
        // Handling User Registration
        const response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });

        console.log("Registration response:", response.data);

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Registration successful! Please login.");
       
        } else {
          toast.error(response.data.message || "Registration failed. Please try again.");
        }
      } else if (currentState === "Login") {
        // Handling User Login
        const response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        console.log("Login response:", response.data);

        if (response.data.token) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Login successful!");
        } else {
          toast.error(response.data.message || "Invalid credentials.");
        }
      }
    } catch (error) {
      console.error("Error during submission:", error);

      // Display specific error messages based on error response from backend
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Something went wrong. Please try again.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }

    
  };
  useEffect(() => {
    if (token && currentState === "Login") {
      navigate('/'); 
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center w-[90%] max-w-96 m-auto mt-14 gap-4 text-center mb-5 "
    >
      <div className="inline-flex items-center gap-2 mb-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
        />
      )} 
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>

      <button   className="bg-black text-white font-light px-8 py-2 mt-4  ">
        {currentState}
        
      </button>
    </form>
  );
};

export default Login;
