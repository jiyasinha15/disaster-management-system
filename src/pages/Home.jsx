import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <section className="text-center py-20 bg-red-50 dark:bg-gray-800">
          <h1 className="text-5xl font-bold text-red-600 dark:text-red-400 mb-6">
            Disaster Management & Emergency Response
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed, report emergencies, find shelters, and coordinate
            disaster response efficiently.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Get Started
          </button>
        </section>

        <section className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="🚨"
              title="SOS Emergency"
              description="Send emergency requests instantly with location support."
            />

            <FeatureCard
              icon="🗺️"
              title="Live Disaster Map"
              description="View Delhi NCR emergency zones in real time."
            />

            <FeatureCard
              icon="🏠"
              title="Shelter Locator"
              description="Find nearby shelters and check availability."
            />

            <FeatureCard
              icon="📢"
              title="Alerts"
              description="Receive emergency alerts for Delhi NCR regions."
            />
          </div>
        </section>

        <section className="px-8 pb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Recent Alerts
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border-l-4 border-red-500">
              <p className="text-red-600 dark:text-red-400 font-semibold">
                ⚠️ Flood Warning issued for Noida, Uttar Pradesh.
              </p>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Updated: 10 mins ago
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border-l-4 border-yellow-500">
              <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
                🔥 Fire Alert reported in Ghaziabad, Uttar Pradesh.
              </p>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Updated: 25 mins ago
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;