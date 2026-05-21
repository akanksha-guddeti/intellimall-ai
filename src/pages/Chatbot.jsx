import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Chatbot() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  function sendMessage() {

    if (!message.trim()) return;

    let botReply = "";

    const lower = message.toLowerCase();

    if (lower.includes("iphone")) {
      botReply =
        "📱 iPhone 15 available in Electronics Section.";
    }

    else if (lower.includes("offer")) {
      botReply =
        "🔥 Today's offer: 20% OFF on electronics.";
    }

    else if (lower.includes("laptop")) {
      botReply =
        "💻 Gaming laptops available near Tech Zone.";
    }

    else if (lower.includes("hello")) {
      botReply =
        "👋 Hello! Welcome to IntelliMall AI.";
    }

    else {
      botReply =
        "🤖 Sorry, I couldn't understand.";
    }

    setChat([
      ...chat,
      {
        user: message,
        bot: botReply,
      },
    ]);

    setMessage("");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar />

      <div className="flex flex-col items-center py-10">

        <h1 className="text-5xl font-bold mb-6">
          🤖 IntelliMall AI Chatbot
        </h1>

        {/* Chat Box */}
        <div className="bg-gray-800 w-[850px] h-[500px] rounded-2xl p-6 overflow-y-auto shadow-2xl">

          {chat.length === 0 ? (
            <p className="text-gray-400">
              Start chatting with AI...
            </p>
          ) : (
            chat.map((item, index) => (
              <div key={index} className="mb-6">

                {/* User */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 p-3 rounded-xl max-w-[60%]">
                    {item.user}
                  </div>
                </div>

                {/* Bot */}
                <div className="flex justify-start mt-2">
                  <div className="bg-gray-700 p-3 rounded-xl max-w-[60%]">
                    {item.bot}
                  </div>
                </div>

              </div>
            ))
          )}

        </div>

        {/* Input */}
        <div className="flex gap-4 mt-6 w-[850px]">

          <input
            type="text"
            placeholder="Ask IntelliMall AI..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            className="flex-1 px-5 py-4 rounded-xl text-black outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-500 px-8 py-4 rounded-xl hover:bg-blue-600"
          >
            Send
          </button>

        </div>

      </div>
    </div>
  );
}