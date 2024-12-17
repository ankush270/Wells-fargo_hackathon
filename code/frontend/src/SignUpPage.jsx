import React, { useState } from "react";
import { signup } from "./api"; // Assuming the signup function is in 'api.js' file
import { useNavigate } from "react-router-dom";
import { store } from "./persistStore";

const SignupPage = () => {
  // State to hold form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await signup(name, email, password);

    if (response.status !== "fail") {
      store.dispatch({
        type: "SET_USER",
        payload: response.user_id,
      });
      // alert("Signup successful!");
      navigate("/");

      // Redirect to another page or show success message
    } else {
      alert(`Signup failed: ${response.error}`);
    }
  };

  return (
    <div className="bg-black overflow-hidden">
      <section
        id="signup-section"
        className="relative block h-screen px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/50 flex flex-col items-center justify-center rounded-lg shadow-xl"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl animate-pulse">
            Sign Up for Knowledge Distiller
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            Join us to organize and visualize your study materials. Fill in your
            details below to get started.
          </p>
        </div>

        {/* Border Wrapper with Interactive Effect */}
        <div
          className="relative mx-auto max-w-md z-10 pt-14 text-left bg-neutral-900 rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
          style={{
            border: "2px solid rgba(255, 255, 255, 0.3)", // Light transparent border
            backgroundColor: "rgba(30, 30, 30, 0.8)", // Darker internal color
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-400" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update state on change
              className="w-full py-3 px-4 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              className="w-full py-3 px-4 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              className="w-full py-3 px-4 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your password"
            />
          </div>

          <div className="relative mx-auto z-10 pt-6 text-center">
            <button
              onClick={handleSignup}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>

          {/* Already a user? Sign In link */}
          <div className="mt-4 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <a
                href="signin"
                className="text-blue-400 hover:text-blue-500 transition"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default SignupPage;