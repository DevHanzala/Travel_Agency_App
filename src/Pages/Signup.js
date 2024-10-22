import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import hotel from '../images/Rectangle 20 (2).jpg';

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Email/Password Sign-Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update the user's profile with the username
      await updateProfile(user, { displayName: userName });
      localStorage.removeItem("wishlist");
      localStorage.removeItem("cart");

      localStorage.setItem("user", JSON.stringify({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL || "",
      }));

      alert("Sign-up successful!");
      navigate("/flightsearch");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Sign-Up
  const handleSignUpWithGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.removeItem("wishlist");
      localStorage.setItem("user", JSON.stringify({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL || "", 
      }));

      alert("Sign-up with Google successful!");
      navigate("/flightsearch"); 
    } catch (error) {
      console.error("Error signing up with Google:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded shadow-lg">
        {/* Left side (Form) */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-[#8DD3BB] rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
            <p className="text-center font-bold text-lg">or</p>
            <button
              type="button"
              className="w-full py-2 text-white bg-[#8DD3BB] rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleSignUpWithGoogle}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up with Google"}
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              Sign In
            </span>
          </p>
        </div>

        {/* Right side (Image) */}
        <div className="hidden md:block w-full md:w-1/2 py-10">
          <img src={hotel} alt="Hotel" className="object-fit w-full h-[450px] rounded-r-lg" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
