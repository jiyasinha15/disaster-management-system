import { useState } from "react";

const notifications = [
  {
    id: 1,
    title: "Flood Alert",
    message: "Heavy rainfall expected in Noida, Uttar Pradesh.",
    time: "2 mins ago",
  },
  {
    id: 2,
    title: "Fire Emergency",
    message: "Fire incident reported in Ghaziabad, Uttar Pradesh.",
    time: "10 mins ago",
  },
  {
    id: 3,
    title: "Medical Emergency",
    message: "New SOS request received from Faridabad, Haryana.",
    time: "30 mins ago",
  },
  {
    id: 4,
    title: "Earthquake Advisory",
    message: "Precautionary alert issued for Gurugram, Haryana.",
    time: "1 hour ago",
  },
];

function NotificationBell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative bg-white/20 hover:bg-white/30 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl transition"
      >
        🔔

        <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-700 rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center">
          {notifications.length}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <h3 className="font-bold text-lg text-gray-800 dark:text-white">
              Notifications
            </h3>
          </div>

          {notifications.map((item) => (
            <div
              key={item.id}
              className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
            >
              <h4 className="font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h4>

              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                {item.message}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NotificationBell;