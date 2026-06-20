import { useState } from "react";
import Sidebar from "../components/Sidebar";

const alertData = [
  {
    id: 1,
    type: "Flood Warning",
    location: "Connaught Place, New Delhi",
    severity: "High",
    time: "10 mins ago",
    description:
      "Heavy rainfall has caused waterlogging in low-lying areas. Citizens are advised to avoid flooded roads.",
  },
  {
    id: 2,
    type: "Fire Alert",
    location: "Sector 62, Noida, Uttar Pradesh",
    severity: "Medium",
    time: "25 mins ago",
    description:
      "A fire incident has been reported near a residential area. Emergency teams have been dispatched.",
  },
  {
    id: 3,
    type: "Weather Advisory",
    location: "Raj Nagar Extension, Ghaziabad",
    severity: "Low",
    time: "45 mins ago",
    description:
      "Light thunderstorms are expected. Stay indoors and follow local weather updates.",
  },
  {
    id: 4,
    type: "Heatwave Alert",
    location: "Sector 29, Gurugram, Haryana",
    severity: "High",
    time: "1 hour ago",
    description:
      "High temperature conditions reported. Avoid going outside during peak afternoon hours.",
  },
  {
    id: 5,
    type: "Traffic Advisory",
    location: "Sector 15, Faridabad, Haryana",
    severity: "Medium",
    time: "2 hours ago",
    description:
      "Road blockage reported due to emergency response movement. Use alternate routes.",
  },
  {
    id: 6,
    type: "Evacuation Notice",
    location: "Knowledge Park II, Greater Noida",
    severity: "High",
    time: "3 hours ago",
    description:
      "Residents near affected zones are advised to move towards nearby relief shelters.",
  },
];

const Alerts = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Low":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const filteredAlerts = alertData.filter((alert) => {
    const matchesFilter = filter === "All" || alert.severity === filter;

    const matchesSearch =
      alert.type.toLowerCase().includes(search.toLowerCase()) ||
      alert.location.toLowerCase().includes(search.toLowerCase()) ||
      alert.description.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
            📢 Disaster Alerts
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Stay updated with emergency alerts across Delhi NCR.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="🔍 Search alerts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:max-w-lg px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="All">All Risk Levels</option>
            <option value="High">High Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="Low">Low Risk</option>
          </select>
        </div>

        <div className="grid xl:grid-cols-2 gap-6">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  🚨 {alert.type}
                </h2>

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${getSeverityColor(
                    alert.severity
                  )}`}
                >
                  {alert.severity} Risk
                </span>
              </div>

              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p>📍 {alert.location}</p>
                <p>🕒 {alert.time}</p>
                <p>{alert.description}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() =>
                    window.open(
                      `https://maps.google.com/maps?q=${encodeURIComponent(
                        alert.location
                      )}`,
                      "_blank"
                    )
                  }
                  className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  View Area
                </button>

                <button
                  onClick={() =>
                    window.open(
                      `https://maps.google.com/maps?daddr=${encodeURIComponent(
                        alert.location
                      )}`,
                      "_blank"
                    )
                  }
                  className="border border-red-600 text-red-600 dark:text-red-400 dark:border-red-400 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                >
                  Safe Route
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAlerts.length === 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              No alerts found.
            </p>
          </div>
        )}

        <div className="mt-10 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-lg">
          <h3 className="font-bold text-red-700 dark:text-red-400">
            ⚠️ Important Notice
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Follow official instructions during emergencies and avoid spreading
            unverified information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alerts;