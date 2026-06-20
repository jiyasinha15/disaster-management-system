import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState({
    full_name: savedUser?.full_name || "User",
    email: savedUser?.email || "user@example.com",
    phone: "Not Added",
    city: "Not Added",
    role: savedUser?.role || "citizen",
    emergencyContact: "Not Added",
    bloodGroup: "Not Added",
    availability: "Not Added",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("✅ Profile Updated Successfully!");
  };

  const inputClass = `w-full border rounded-lg px-4 py-3 text-gray-800 dark:text-white ${
    isEditing
      ? "border-red-500 bg-white dark:bg-gray-700 dark:border-red-400"
      : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
  }`;

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
            👤 My Profile
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage your personal details, emergency contact and volunteer
            information.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-5xl mb-4">
              👤
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {user.full_name}
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2 capitalize">
              {user.role}
            </p>

            <span className="inline-block mt-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
              Active User
            </span>

            <div className="mt-6 space-y-3 text-left text-gray-700 dark:text-gray-300">
              <p>📧 <span className="font-medium">{user.email}</span></p>
              <p>📱 <span className="font-medium">{user.phone}</span></p>
              <p>📍 <span className="font-medium">{user.city}</span></p>
              <p>🩸 <span className="font-medium">{user.bloodGroup}</span></p>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
            >
              {isEditing ? "Cancel Editing" : "Edit Profile"}
            </button>
          </div>

          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={user.full_name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  value={user.role}
                  disabled
                  className="w-full border rounded-lg px-4 py-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-white capitalize"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Blood Group
                </label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={user.bloodGroup}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Availability
                </label>
                <select
                  name="availability"
                  value={user.availability}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Weekends Only">Weekends Only</option>
                  <option value="Emergency Only">Emergency Only</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Emergency Contact
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={user.emergencyContact}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                />
              </div>
            </div>

            {isEditing && (
              <button
                onClick={handleSave}
                className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>

        <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            📊 Activity Summary
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg text-center">
              <p className="text-gray-600 dark:text-gray-300">SOS Requests</p>
              <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 mt-2">
                3
              </h3>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center">
              <p className="text-gray-600 dark:text-gray-300">Alerts Viewed</p>
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                12
              </h3>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Volunteer Tasks
              </p>
              <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mt-2">
                5
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
            ⚠️ Safety Note
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Keep your emergency contact and location details updated so rescue
            teams can respond quickly during emergencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;