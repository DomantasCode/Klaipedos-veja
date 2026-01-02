import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateContactResponse = async (name: string, service: string, message: string): Promise<string> => {
  try {
    const prompt = `
      You are a helpful customer service AI for "Klaipėdos veja", a premium landscaping company in Lithuania.
      A customer named "${name}" is interested in "${service}".
      Their message is: "${message}".
      
      Write a short, professional, and warm confirmation message in LITHUANIAN (max 2 sentences) acknowledging their inquiry about ${service} and assuring them that the team will call them shortly. 
      
      Tone: trustworthy, organic, premium.
      Example start: "Ačiū, kad kreipėtės..."
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Ačiū už jūsų užklausą. Susisieksime su jumis artimiausiu metu.";
  } catch (error) {
    console.error("Error generating AI response:", error);
    return "Ačiū, kad kreipėtės. Mūsų komanda netrukus su jumis susisieks.";
  }
};