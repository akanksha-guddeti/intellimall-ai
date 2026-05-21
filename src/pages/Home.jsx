import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-900 text-white text-center px-6">
        
        <h1 className="text-6xl font-bold mb-6">
          Welcome to IntelliMall AI 🛍️
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl">
          Experience smart shopping powered by Artificial Intelligence.
          Discover products, analytics, and AI recommendations instantly.
        </p>

        <div className="mt-8 flex gap-4">
          
          <button className="bg-blue-500 px-6 py-3 rounded-xl text-lg hover:bg-blue-600 transition">
            Explore Now
          </button>

          <button className="border border-white px-6 py-3 rounded-xl text-lg hover:bg-white hover:text-black transition">
            Learn More
          </button>

        </div>
      </div>

      {/* Products Section */}
      <div className="p-10">
        
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Products 🛍️
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <ProductCard
            title="Smart Watch"
            price="2999"
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          />

          <ProductCard
            title="Gaming Headset"
            price="4999"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          />

          <ProductCard
            title="Laptop"
            price="65999"
            image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
          />

        </div>
      </div>

    </div>
  );
}