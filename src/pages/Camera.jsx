import { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

import products from "../data/products";

export default function Camera() {

  // Voice Assistant
  function speakDetection(objectName) {
    const speech = new SpeechSynthesisUtterance(
      `${objectName} detected`
    );

    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [detections, setDetections] = useState([]);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    startCamera();
    loadModel();
  }, []);

  // Start Camera
  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.log("Camera Error:", error);
    }
  }

  // Load AI Model
  async function loadModel() {
    const model = await cocoSsd.load({
      base: "mobilenet_v2",
    });

    setInterval(async () => {
      if (
        videoRef.current &&
        videoRef.current.readyState === 4
      ) {
        const predictions = await model.detect(
          videoRef.current,
          10
        );

        // Filter low confidence detections
        const filtered = predictions.filter(
          (item) => item.score > 0.3
        );

        setDetections(filtered);

        // Voice Assistant
        if (
          filtered.length > 0 &&
          !window.speechSynthesis.speaking
        ) {
          speakDetection(filtered[0].class);
        }

        // Add detected products to cart
        filtered.forEach((item) => {
          const product = products[item.class];

          if (product) {
            setCart((prevCart) => {

              const alreadyExists = prevCart.find(
                (cartItem) =>
                  cartItem.name === product.name
              );

              if (alreadyExists) {
                return prevCart;
              }

              return [...prevCart, product];
            });
          }
        });

        drawPredictions(filtered);
      }
    }, 300);
  }

  // Draw AI boxes
  function drawPredictions(predictions) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    predictions.forEach((prediction) => {
      const [x, y, width, height] = prediction.bbox;

      // Box
      ctx.strokeStyle = "lime";
      ctx.lineWidth = 3;
      ctx.strokeRect(x, y, width, height);

      // Label Background
      ctx.fillStyle = "lime";
      ctx.fillRect(
        x,
        y > 30 ? y - 30 : y,
        220,
        30
      );

      // Label Text
      ctx.fillStyle = "black";
      ctx.font = "18px Arial";

      ctx.fillText(
        `${prediction.class} (${Math.round(
          prediction.score * 100
        )}%)`,
        x + 5,
        y > 30 ? y - 10 : 20
      );
    });
  }

  // Capture Image
  function captureImage() {
    const canvas = document.createElement("canvas");

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      videoRef.current,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "capture.png";
    link.click();
  }

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => {

    const numericPrice = Number(
      item.price.replace(/[₹,]/g, "")
    );

    if (isNaN(numericPrice)) {
      return total;
    }

    return total + numericPrice;

  }, 0);

  return (
   <div
     className={
       darkMode
      ? "min-h-screen bg-gray-900 text-white"
      : "min-h-screen bg-gray-100 text-black"
   }
 >
      {/* Navbar */}
      <Navbar />
       <div className="flex justify-end px-10 pt-6">

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600"
  >
    {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
  </button>

</div>

      {/* Main Section */}
      <div className="flex flex-col items-center py-10">

        <h1 className="text-5xl font-bold mb-4">
          IntelliMall AI Detection 🤖
        </h1>

        <p className="text-gray-300 mb-8 text-lg">
          Detect products, humans, and objects in real time
        </p>

        {/* Camera Section */}
        <div className="relative">

          {/* Camera Feed */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-[850px] rounded-2xl border-4 border-blue-500 shadow-2xl"
          />

          {/* Detection Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-[850px]"
          />

        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <button className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition">
            AI Detecting...
          </button>

          <button
            onClick={captureImage}
            className="bg-green-500 px-6 py-3 rounded-xl hover:bg-green-600 transition"
          >
            Capture Image
          </button>

        </div>

        {/* Detection Results */}
        <div className="mt-8 bg-gray-800 p-6 rounded-2xl w-[850px] shadow-xl">

          <h2 className="text-2xl font-bold mb-4">
            Detection Results 📦
          </h2>

          {detections.length === 0 ? (
            <p className="text-gray-400">
              No objects detected
            </p>
          ) : (
            detections.map((item, index) => {

              const product = products[item.class];

              return (
                <div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg mb-4"
                >

                  <p className="text-2xl font-bold mb-2">
                    ✅ {item.class}
                  </p>

                  <p>
                    Confidence:
                    {" "}
                    {Math.round(item.score * 100)}%
                  </p>

                  {product && (
                    <div className="mt-3 text-gray-200">

                      <p>
                        🛍 Product:
                        {" "}
                        {product.name}
                      </p>

                      <p>
                        💰 Price:
                        {" "}
                        {product.price}
                      </p>

                      <p>
                        ⭐ Rating:
                        {" "}
                        {product.rating}
                      </p>

                      <p>
                        📦 Stock:
                        {" "}
                        {product.stock}
                      </p>

                    </div>
                  )}

                </div>
              );
            })
          )}

        </div>

        {/* Smart Billing Cart */}
        <div className="mt-8 bg-gray-800 p-6 rounded-2xl w-[850px] shadow-xl">

          <h2 className="text-3xl font-bold mb-4">
            🛒 Smart Billing Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-400">
              No products added
            </p>
          ) : (
            <div>

              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg mb-3"
                >

                  <p className="text-xl font-bold">
                    {item.name}
                  </p>

                  <p>
                    💰 {item.price}
                  </p>

                  <p>
                    ⭐ {item.rating}
                  </p>

                </div>
              ))}

              <div className="mt-6 text-2xl font-bold text-green-400">
                Total: ₹{totalPrice.toLocaleString()}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}