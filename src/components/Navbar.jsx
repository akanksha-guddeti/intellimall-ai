import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-400">
        IntelliMall AI
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-7 items-center">

        <Link
          to="/"
          className="hover:text-blue-400 transition"
        >
          Home
        </Link>

        <Link
        to="/dashboard"
        className="hover:text-blue-400 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/camera"
          className="hover:text-blue-400 transition"
        >
          Camera
        </Link>

       <Link
        to="/chatbot"
         className="hover:text-blue-400 transition"
       >
        AI Chat
      </Link>

       <Link
          to="/analytics"
          className="hover:text-blue-400 transition"
        >
         Analytics
       </Link>
<Link
  to="/products"
  className="hover:text-blue-400 transition"
>
  Products
</Link>

        <Link
          to="/login"
          className="hover:text-blue-400 transition"
        >
          Login
        </Link>

        <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Explore
        </button>

      </div>
    </nav>
  );
}