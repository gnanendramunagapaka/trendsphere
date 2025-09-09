export interface NavLink {
  name: string;
  path: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export interface ImpactItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TechStackItem {
    name: string;
    icon: React.ReactNode;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  data?: any;
}

export interface Influencer {
  id: number;
  name: string;
  avatar: string;
  followers: string;
  engagement: string;
  platform: 'youtube' | 'instagram' | 'tiktok';
}

// FIX: Moved AIAnalysisResult here from geminiService.ts to resolve an import error.
export interface AIAnalysisResult {
    marketInsights: string[];
    brandingSuggestions: string[];
    campaignStrategies: string[];
    competitorLandscape: {
        competitor: string;
        strengths: string[];
        weaknesses: string[];
    }[];
}
