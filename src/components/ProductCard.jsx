export default function ProductCard({ title, price, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>

        <p className="text-blue-600 font-bold mt-2">
          ₹{price}
        </p>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  );
}