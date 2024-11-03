import React, { useState } from "react";
import generateContent from "../GeminiGenerativeAI";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setHistory((prev) => [...prev, userMessage]);

    setLoading(true);
    const response = await generateContent(input);
    const aiMessage = { text: response, sender: "ai" };
    setHistory((prev) => [...prev, aiMessage]);
    setInput("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[70%] h-[90%]">
        <h2 className="text-2xl font-bold mb-4 text-center">Chatbot AI</h2>
        <div className="h-[80%] overflow-y-auto mb-4 border border-gray-200 rounded-lg p-4">
          {history.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-blue-50 text-black"
                }`}
              >
                {msg.text.split("\n").map((line, idx) => (
                  <p key={idx} className="m-0">
                    {line}
                  </p>
                ))}
              </span>
            </div>
          ))}
          {loading && (
            <div className="mb-2">
              <span className="inline-block p-2 rounded-lg bg-blue-50 text-black">
                Loading...
              </span>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="border border-gray-300 rounded-lg p-2 flex-grow mr-2 outline-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
