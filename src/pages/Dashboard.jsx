import Navbar from "../components/Navbar";

export default function Dashboard() {

  const totalProducts = 24;
  const totalOrders = 156;
  const revenue = "₹4,25,000";
  const staff = 12;

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10">
          📊 Admin Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-blue-500 p-8 rounded-2xl shadow-2xl">

            <h2 className="text-2xl font-bold mb-3">
              🛍 Products
            </h2>

            <p className="text-4xl font-bold">
              {totalProducts}
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-green-500 p-8 rounded-2xl shadow-2xl">

            <h2 className="text-2xl font-bold mb-3">
              📦 Orders
            </h2>

            <p className="text-4xl font-bold">
              {totalOrders}
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-yellow-500 p-8 rounded-2xl shadow-2xl">

            <h2 className="text-2xl font-bold mb-3">
              💰 Revenue
            </h2>

            <p className="text-4xl font-bold">
              {revenue}
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-purple-500 p-8 rounded-2xl shadow-2xl">

            <h2 className="text-2xl font-bold mb-3">
              👨‍🔧 Staff
            </h2>

            <p className="text-4xl font-bold">
              {staff}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}