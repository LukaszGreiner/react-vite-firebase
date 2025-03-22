import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase"; // Updated path

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await signup(email, password);
      navigate("/user/details");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/user/details");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Sign Up
      </h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm-password"
            className="block text-gray-700 font-medium mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mb-4"
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full bg-white text-gray-700 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mb-4"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.24 10.32v3.26h5.47c-.22 1.4-.86 2.57-1.82 3.37l2.96 2.27c1.77-1.64 2.8-4.04 2.8-6.9 0-.66-.06-1.3-.17-1.92h-9.24z"
              fill="#4285F4"
            />
            <path
              d="M12 22c2.9 0 5.36-1.02 7.35-2.76l-2.96-2.27c-.9.6-2.03.95-3.39.95-2.6 0-4.8-1.75-5.58-4.11h-3.06v2.3C6.26 19.38 9 22 12 22z"
              fill="#34A853"
            />
            <path
              d="M6.42 13.89c-.2-.6-.31-1.24-.31-1.89s.11-1.29.31-1.89v-2.3h-3.06C2.96 8.8 2.74 10.36 2.74 12s.22 3.2.62 4.11l3.06-2.22z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.69c1.47 0 2.79.5 3.83 1.48l2.86-2.86C16.83 2.44 14.52 1.69 12 1.69 9 1.69 6.26 4.31 5.36 7.58l3.06 2.22c.78-2.36 2.98-4.11 5.58-4.11z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        <div className="text-sm text-gray-600 text-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/user/login"
              className="text-blue-600 hover:underline transition-colors"
            >
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
