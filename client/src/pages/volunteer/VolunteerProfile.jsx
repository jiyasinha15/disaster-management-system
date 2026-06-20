import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const VolunteerProfile = () => {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    full_name: savedUser?.full_name || "Volunteer User",
    email: savedUser?.email || "volunteer@example.com",
    phone: "Not Added",
    city: "Not Added",
    skills: "Medical Assistance",
    availability: "Available",
    completedMissions: 18,
    rating: "4.8",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Volunteer profile updated successfully!");
  };

  const inputClass = `w-full border rounded-lg px-4 py-3 text-gray-800 dark:text-white ${
    isEditing
      ? "border-green-500 bg-white dark:bg-gray-700"
      : "bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
  }`;

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">
            👤 Volunteer Profile
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage your volunteer details and availability.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-5xl mb-4">
              🤝
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {profile.full_name}
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Volunteer
            </p>

            <span className="inline-block mt-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
              {profile.availability}
            </span>

            <div className="mt-6 space-y-3 text-left text-gray-700 dark:text-gray-300">
              <p>📧 {profile.email}</p>
              <p>📱 {profile.phone}</p>
              <p>📍 {profile.city}</p>
              <p>⭐ Rating: {profile.rating}</p>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              {isEditing ? "Cancel Editing" : "Edit Profile"}
            </button>
          </div>

          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Volunteer Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  name="full_name"
                  value={profile.full_name}
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
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  name="phone"
                  value={profile.phone}
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
                  name="city"
                  value={profile.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Skills
                </label>
                <select
                  name="skills"
                  value={profile.skills}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                >
                  <option value="Medical Assistance">Medical Assistance</option>
                  <option value="Food Distribution">Food Distribution</option>
                  <option value="Rescue Operations">Rescue Operations</option>
                  <option value="Shelter Management">Shelter Management</option>
                  <option value="Transportation Support">
                    Transportation Support
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Availability
                </label>
                <select
                  name="availability"
                  value={profile.availability}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={inputClass}
                >
                  <option value="Available">Available</option>
                  <option value="Busy">Busy</option>
                  <option value="Offline">Offline</option>
                </select>
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

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Completed Missions
            </p>
            <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mt-2">
              {profile.completedMissions}
            </h3>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Active Tasks
            </p>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-2">
              3
            </h3>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Response Rating
            </p>
            <h3 className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">
              {profile.rating}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;