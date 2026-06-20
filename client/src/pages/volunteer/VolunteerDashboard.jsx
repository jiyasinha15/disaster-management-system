import Sidebar from "../../components/Sidebar";

const VolunteerDashboard = () => {
  const tasks = [
    {
      id: 1,
      title: "Medical Assistance",
      location: "Noida Sector 62",
      status: "Assigned",
    },
    {
      id: 2,
      title: "Food Distribution",
      location: "Ghaziabad",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Shelter Support",
      location: "Gurugram",
      status: "Completed",
    },
  ];

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-600">
            🤝 Volunteer Dashboard
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Coordinate rescue efforts and help citizens during emergencies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-500">Assigned Tasks</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              5
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-500">Completed Missions</h3>
            <p className="text-4xl font-bold text-green-600 mt-2">
              18
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-gray-500">Availability</h3>
            <p className="text-2xl font-bold text-green-500 mt-2">
              Active
            </p>
          </div>

        </div>

        {/* Tasks */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            📋 My Tasks
          </h2>

          <div className="space-y-4">

            {tasks.map((task) => (
              <div
                key={task.id}
                className="border dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex justify-between items-center">

                  <div>
                    <h3 className="font-bold text-lg">
                      {task.title}
                    </h3>

                    <p className="text-gray-500">
                      📍 {task.location}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      task.status === "Assigned"
                        ? "bg-yellow-100 text-yellow-700"
                        : task.status === "In Progress"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {task.status}
                  </span>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default VolunteerDashboard;