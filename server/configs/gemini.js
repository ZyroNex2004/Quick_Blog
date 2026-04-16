import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main(prompt) {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash", 
    });

    const result = await model.generateContent(prompt);
    return result.response.text();
}

export default main;