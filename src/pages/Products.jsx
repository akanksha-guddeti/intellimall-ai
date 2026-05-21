import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Products() {
const role = localStorage.getItem("role");

  const [products, setProducts] = useState([

    {
      id: 1,
      name: "iPhone 15",
      price: "₹79,999",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      rating: "4.8",
    },

    {
      id: 2,
      name: "Gaming Laptop",
      price: "₹1,20,000",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      rating: "4.7",
    },

    {
      id: 3,
      name: "Smart Watch",
      price: "₹15,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: "4.5",
    },

    {
      id: 4,
      name: "Headphones",
      price: "₹5,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: "4.6",
    },

  ]);

  const [cart, setCart] = useState([]);

const totalPrice = cart.reduce((total, item) => {

  return total + Number(
    item.price.replace(/[₹,]/g, "")
  );

}, 0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [search, setSearch] = useState("");
  // Add Product
  function addProduct() {

    if (
      name === "" ||
      price === "" ||
      image === "" ||
      rating === ""
    ) {
      alert("❌ Fill all fields");
      return;
    }

    const newProduct = {
      id: products.length + 1,
      name,
      price,
      image,
      rating,
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
    setImage("");
    setRating("");

    alert("✅ Product Added");
  }

  // Delete Product
  function deleteProduct(id) {

    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);
  }

  // Add To Cart
  function addToCart(product) {

    setCart([...cart, product]);

    alert(`${product.name} added to cart`);
  }
function removeFromCart(index) {

  const updatedCart = cart.filter(
    (_, i) => i !== index
  );

  setCart(updatedCart);
}
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10">
          🛍 IntelliMall Products
        </h1>

        {/* Add Product Form */}
        <div className="bg-gray-800 p-6 rounded-2xl mb-10">

          <h2 className="text-3xl font-bold mb-6">
            ➕ Add Product
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 rounded-lg text-black"
            />

            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="p-3 rounded-lg text-black"
            />

            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="p-3 rounded-lg text-black"
            />

            <input
              type="text"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="p-3 rounded-lg text-black"
            />

          </div>

          <button
            onClick={addProduct}
            className="mt-6 bg-green-500 px-6 py-3 rounded-xl hover:bg-green-600 transition"
          >
            Add Product
          </button>

        </div>

        {/* Cart */}
        <div className="bg-gray-800 p-6 rounded-2xl mb-10">

          <h2 className="text-3xl font-bold mb-6">
            🛒 Shopping Cart
          </h2>

          {cart.length === 0 ? (

            <p className="text-gray-400">
              Cart is Empty
            </p>

          ) : (

            <div>

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="flex justify-between bg-gray-700 p-4 rounded-lg mb-4"
                >

                  <p>{item.name}</p>

                  <p className="text-blue-400">
                    {item.price}
                  </p>
<button
    onClick={() => removeFromCart(index)}
    className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
  >
    ❌
  </button>
<div className="mt-6 text-2xl font-bold text-green-400">

  Total: ₹{totalPrice.toLocaleString()}

</div>
                </div>

              ))}

            </div>

          )}

        </div>
<div className="mb-8">

  <input
    type="text"
    placeholder="🔍 Search Products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full p-4 rounded-xl text-black text-lg"
  />

</div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

         {products
  .filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((product) => (

            <div
              key={product.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold mb-2">
                  {product.name}
                </h2>

                <p className="text-blue-400 text-xl mb-2">
                  {product.price}
                </p>

                <p className="text-yellow-400 mb-4">
                  ⭐ {product.rating}
                </p>

                <div className="flex gap-3">

                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-blue-500 py-3 rounded-xl hover:bg-blue-600 transition"
                  >
                    Add to Cart
                  </button>
{role === "admin" && (
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 px-4 rounded-xl hover:bg-red-600 transition"
                  >
                    ❌
                  </button>
        
)}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}