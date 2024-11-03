import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyC9c5p5UPr-AMBYA_Lijg5vXiQyiSGYGlo";
const genAI = new GoogleGenerativeAI(apiKey);

const generateContent = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([prompt]);
    return result.response.text();
  } catch (error) {
    console.error("Error calling Google Generative AI API:", error);
    return null;
  }
};

export default generateContent;
