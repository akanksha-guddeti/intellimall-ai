import Navbar from "../components/Navbar";

export default function Analytics() {

  const stats = [
    {
      title: "Total Sales",
      value: "₹2,45,000",
      icon: "💰",
    },

    {
      title: "Products Sold",
      value: "1,245",
      icon: "📦",
    },

    {
      title: "AI Detections",
      value: "5,432",
      icon: "🤖",
    },

    {
      title: "Customers",
      value: "892",
      icon: "🛒",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10">
          📊 IntelliMall Analytics
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-2xl hover:scale-105 transition"
            >

              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold mb-2">
                {item.title}
              </h2>

              <p className="text-3xl text-blue-400 font-bold">
                {item.value}
              </p>

            </div>

          ))}

        </div>

        {/* Extra Section */}
        <div className="mt-12 bg-gray-800 p-8 rounded-2xl shadow-2xl">

          <h2 className="text-3xl font-bold mb-6">
            📈 AI Insights
          </h2>

          <ul className="space-y-4 text-lg text-gray-300">

            <li>
              ✅ Most sold category:
              {" "}
              Electronics
            </li>

            <li>
              ✅ Peak shopping hour:
              {" "}
              7 PM - 9 PM
            </li>

            <li>
              ✅ Highest detected object:
              {" "}
              Mobile Phones
            </li>

            <li>
              ✅ AI Accuracy:
              {" "}
              98.2%
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}