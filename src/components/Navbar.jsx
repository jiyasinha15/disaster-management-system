import { Link } from "react-router-dom";
import NotificationBell from "./NotificationBell";

const Navbar = () => {
  return (
    <nav className="bg-red-600 dark:bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-lg">

      <h1 className="text-2xl font-bold">
        🚨 Disaster Management
      </h1>

      <div className="flex items-center gap-6">

        <Link
          to="/"
          className="hover:text-gray-200 dark:hover:text-gray-300 transition"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="hover:text-gray-200 dark:hover:text-gray-300 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="hover:text-gray-200 dark:hover:text-gray-300 transition"
        >
          Register
        </Link>

        <Link
          to="/dashboard"
          className="hover:text-gray-200 dark:hover:text-gray-300 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin-login"
          className="bg-white text-red-600 px-3 py-1 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Admin Login
        </Link>

      </div>

      <div className="flex items-center gap-4 mr-24">
        <NotificationBell />
      </div>

    </nav>
  );
};

export default Navbar;