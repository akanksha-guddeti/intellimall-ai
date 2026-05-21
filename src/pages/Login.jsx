import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("staff");

  function handleLogin() {

    if (
      email !== "" &&
      password !== ""
    ) {
localStorage.setItem("role", role);
      alert("✅ Login Successful");
     
      navigate("/camera");
    }

    else {
      alert("❌ Please fill all fields");
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Login Section */}
      <div className="flex items-center justify-center py-20">

        <div className="bg-white text-black p-10 rounded-2xl shadow-2xl w-96">

          <h1 className="text-3xl font-bold text-center mb-6">
            Login 🔐
          </h1>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
          />

<select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
>

  <option value="staff">
    Staff
  </option>

  <option value="admin">
    Admin
  </option>

</select>
          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>

          {/* Demo Credentials */}
          <div className="mt-6 text-gray-500 text-sm text-center">

            <p>
              Demo Email:
              {" "}
              admin@gmail.com
            </p>

            <p>
              Demo Password:
              {" "}
              admin123
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}