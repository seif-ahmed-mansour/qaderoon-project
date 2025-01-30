import { useState } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
        console.log("email", email);
        console.log("password", password);
      const { data } = await axios.post(
        `${import.meta.env.VITE_HOST_SERVER}admin/login`,
        { email, password }
      );
      if (data.refreshToken) {
        sessionStorage.setItem("token", data.refreshToken);
        alert("Login Successful, Token Stored");
      } else {
        throw new Error("Token not received");
      }
    } catch (err) {
        console.error(err);
      setError("Invalid credentials");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-red-600 text-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        {error && <p className="bg-red-800 text-white p-2 mt-3 rounded">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-red-200 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-3 rounded bg-red-200 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <button
            type="submit"
            className="w-full mt-4 bg-red-800 hover:bg-red-900 p-2 rounded font-bold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
