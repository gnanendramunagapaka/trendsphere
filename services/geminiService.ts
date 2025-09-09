// FIX: Implemented a real Gemini API call instead of the mock service.
import { GoogleGenAI, Type } from '@google/genai';
// FIX: Imported AIAnalysisResult from the central types.ts file.
import type { AIAnalysisResult } from '../types';

// FIX: Initialized the GoogleGenAI client according to the provided guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIProductAnalysis = async (productDescription: string): Promise<AIAnalysisResult> => {
    console.log("Fetching AI analysis for:", productDescription);

    // --- REAL GEMINI API CALL ---
    const responseSchema = {
        type: Type.OBJECT,
        properties: {
            marketInsights: { type: Type.ARRAY, items: { type: Type.STRING } },
            brandingSuggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
            campaignStrategies: { type: Type.ARRAY, items: { type: Type.STRING } },
            competitorLandscape: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        competitor: { type: Type.STRING },
                        strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
                        weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
                    },
                },
            },
        },
    };

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Analyze the following product description and provide marketing insights: "${productDescription}"`,
            config: {
                responseMimeType: 'application/json',
                responseSchema,
            },
        });
        const result = JSON.parse(response.text);
        return result as AIAnalysisResult;
    } catch (error) {
        console.error("Error fetching from Gemini API:", error);
        throw new Error("Failed to get AI analysis.");
    }
};
