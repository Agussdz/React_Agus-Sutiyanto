import React, { useState } from "react";
import {
  uploadImage,
  generateContentFromImage,
  generateContentFromText,
} from "../services/ImageAnalyzer";
import { marked } from "marked";

const PlantsHelper = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageBase64(null);
      setUploadSuccess(false);
    }
  };

  const handleUploadImage = async () => {
    if (image) {
      try {
        const base64Image = await uploadImage(image);
        setImageBase64(base64Image);
        setUploadSuccess(true);
      } catch (error) {
        setUploadSuccess(false);
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setHistory((prev) => [...prev, userMessage]);

    setLoading(true);

    let aiResponse;

    if (imageBase64) {
      const prompt = `Anda adalah seorang ahli tanaman dan pertanian. Tugas Anda adalah menganalisis gambar yang diberikan dan memberikan informasi mengenai hama tanaman yang ada pada gambar tersebut. Berikan saran dan penjelasan terkait jenis hama serta langkah-langkah pengendaliannya. Gambar yang diberikan adalah: ${input}`;
      aiResponse = await generateContentFromImage(imageBase64, prompt);
    } else {
      const prompt = `Anda adalah seorang ahli tanaman dan pertanian. Tugas Anda adalah memberikan informasi mengenai hama tanaman berdasarkan deskripsi berikut: ${input}. Berikan saran dan penjelasan terkait jenis hama serta langkah-langkah pengendaliannya.`;
      aiResponse = await generateContentFromText(prompt);
    }

    const aiMessage = { text: aiResponse, sender: "ai" };
    setHistory((prev) => [...prev, aiMessage]);

    setInput("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[70%] h-[95%]">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Chatbot AI for Plant Analysis
        </h2>

        <div className="h-[70%] overflow-y-auto mb-4 border border-gray-200 rounded-lg p-4">
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
                dangerouslySetInnerHTML={{
                  __html: msg.sender === "ai" ? marked(msg.text) : msg.text,
                }}
              />
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

        {/* Upload Image */}
        <div className="mb-4 flex gap-5">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-lg p-2"
          />
          {image && (
            <div className="mt-2 flex justify-center items-center gap-5">
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "70px" }}
              />
              <div>
                <button
                  onClick={handleUploadImage}
                  className="bg-blue-500 text-white rounded-lg py-2 px-4"
                >
                  Upload Image
                </button>
              </div>
              {uploadSuccess && (
                <div className="text-green-600">
                  <span>Image successfully uploaded!</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input dan submit */}
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Masukkan pertanyaan anda..."
            className="border border-gray-300 rounded-lg p-2 flex-grow mr-2 outline-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4"
            disabled={!input.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlantsHelper;
