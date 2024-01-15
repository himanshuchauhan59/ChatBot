import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyAluaSzHmX6eMiEoqMOheaP_b8T6tOYwHI"; // Paste your API key here 
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });


export { model };