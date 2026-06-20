import Sidebar from "../components/Sidebar";

const tasks = [
  {
    id: 1,
    title: "Food Distribution",
    location: "Sector 62, Noida",
    status: "Assigned",
    time: "Today",
  },
  {
    id: 2,
    title: "Shelter Management",
    location: "Sector 29, Gurugram",
    status: "In Progress",
    time: "Today",
  },
  {
    id: 3,
    title: "Medical Assistance",
    location: "Faridabad, Haryana",
    status: "Pending",
    time: "Tomorrow",
  },
];

const VolunteerDashboard = () => {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">
            🤝 Volunteer Dashboard
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Track your assigned tasks and support emergency response teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-500 dark:text-gray-400">Assigned Tasks</h3>
            <p className="text-4xl font-bold text-green-600 dark:text-green-400 mt-2">
              3
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-500 dark:text-gray-400">
              Completed Missions
            </h3>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-2">
              5
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-500 dark:text-gray-400">Availability</h3>
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">
              Active
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              🚑 Assigned Tasks
            </h2>

            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="border dark:border-gray-700 rounded-lg p-4"
                >
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    {task.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    📍 {task.location}
                  </p>

                  <p className="text-gray-500 dark:text-gray-400">
                    📅 {task.time}
                  </p>

                  <span className="inline-block mt-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm">
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              📌 Volunteer Guidelines
            </h2>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li>✔ Follow coordinator instructions.</li>
              <li>✔ Keep your phone available during duty.</li>
              <li>✔ Carry basic safety items and ID proof.</li>
              <li>✔ Report task completion to admin team.</li>
            </ul>

            <button
              onClick={() => alert("Availability updated successfully!")}
              className="mt-8 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Mark Available
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;