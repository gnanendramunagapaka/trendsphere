
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage, AIAnalysisResult } from '../types';
import { getAIProductAnalysis } from '../services/geminiService';
import { Send, Loader } from 'lucide-react';

const AIAnalysisDisplay: React.FC<{ data: AIAnalysisResult }> = ({ data }) => (
    <div className="space-y-6 text-sm">
        <div>
            <h3 className="font-bold text-brand-orange mb-2">Market Insights</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
                {data.marketInsights.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
        <div>
            <h3 className="font-bold text-brand-orange mb-2">Branding Suggestions</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
                {data.brandingSuggestions.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
        <div>
            <h3 className="font-bold text-brand-orange mb-2">Campaign Strategies</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
                {data.campaignStrategies.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
        <div>
            <h3 className="font-bold text-brand-orange mb-2">Competitor Landscape</h3>
            <div className="space-y-3">
                {data.competitorLandscape.map((c, i) => (
                    <div key={i} className="bg-brand-dark p-3 rounded">
                        <p className="font-semibold text-white">{c.competitor}</p>
                        <p><strong className="text-green-400">Strengths:</strong> {c.strengths.join(', ')}</p>
                        <p><strong className="text-red-400">Weaknesses:</strong> {c.weaknesses.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const ProductAnalysisPage: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { sender: 'ai', text: 'Hello! Describe your product, and I\'ll provide a detailed market analysis.' },
    ]);
    const [input, setInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const analysis = await getAIProductAnalysis(input);
            const aiMessage: ChatMessage = { sender: 'ai', text: 'Here is the analysis based on your product description:', data: analysis };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            const errorMessage: ChatMessage = { sender: 'ai', text: 'Sorry, I encountered an error. Please try again.' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-12rem)] max-w-4xl mx-auto bg-brand-secondary-dark rounded-lg shadow-2xl">
            <div className="p-4 border-b border-gray-700">
                <h1 className="text-xl font-bold text-white">AI Product Analysis</h1>
            </div>
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center font-bold text-white flex-shrink-0">AI</div>}
                        <div className={`max-w-md lg:max-w-lg p-4 rounded-lg ${msg.sender === 'user' ? 'bg-brand-orange text-white' : 'bg-gray-700 text-gray-200'}`}>
                            <p>{msg.text}</p>
                            {msg.data && <div className="mt-4"><AIAnalysisDisplay data={msg.data} /></div>}
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex gap-3 justify-start">
                        <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center font-bold text-white flex-shrink-0">AI</div>
                        <div className="max-w-md p-4 rounded-lg bg-gray-700 text-gray-200 flex items-center space-x-2">
                            <Loader className="animate-spin h-5 w-5" />
                            <span>Analyzing...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-gray-700">
                <form onSubmit={handleSendMessage} className="flex items-center gap-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g., An eco-friendly smart water bottle..."
                        className="flex-1 bg-gray-700 border border-gray-600 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !input.trim()} className="bg-brand-orange text-white rounded-full p-3 disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors">
                        <Send className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductAnalysisPage;
