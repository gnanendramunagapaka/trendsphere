
import React from 'react';
import type { Influencer } from '../types';
import { MOCK_INFLUENCERS } from '../constants';
import { Youtube, Instagram, MoveRight } from 'lucide-react';

const PlatformIcon: React.FC<{ platform: Influencer['platform'] }> = ({ platform }) => {
    switch (platform) {
        case 'youtube': return <Youtube className="w-5 h-5 text-red-600" />;
        case 'instagram': return <Instagram className="w-5 h-5 text-pink-500" />;
        case 'tiktok': return (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                <path d="M16.49 3.01H19.51V6.03H16.49zM16.49 9.04H19.51V12.06H16.49zM4.49 3.01H7.51V15.08H4.49zM10.49 3.01H13.51V12.06H10.49z"/>
            </svg>
        );
        default: return null;
    }
}

const InfluencerCard: React.FC<{ influencer: Influencer }> = ({ influencer }) => (
    <div className="bg-brand-secondary-dark p-5 rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:shadow-orange-500/20 hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
            <img src={influencer.avatar} alt={influencer.name} className="w-16 h-16 rounded-full object-cover border-2 border-brand-orange" />
            <div>
                <h3 className="text-lg font-bold text-white">{influencer.name}</h3>
                <div className="flex items-center gap-2 text-sm text-brand-gray">
                    <PlatformIcon platform={influencer.platform} />
                    <span>{influencer.platform.charAt(0).toUpperCase() + influencer.platform.slice(1)}</span>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center my-2 flex-grow">
            <div>
                <p className="text-xl font-bold text-white">{influencer.followers}</p>
                <p className="text-xs text-brand-gray">Followers</p>
            </div>
            <div>
                <p className="text-xl font-bold text-white">{influencer.engagement}</p>
                <p className="text-xs text-brand-gray">Engagement</p>
            </div>
        </div>
        <button className="mt-4 w-full bg-brand-orange text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">
            Contact
        </button>
    </div>
);


const CreatorOutreachPage: React.FC = () => {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold text-white">Creator Outreach</h1>
                <p className="text-lg text-brand-gray mt-2">
                    AI-powered influencer matching, automated outreach, and campaign management.
                </p>
            </div>

            <section>
                <h2 className="text-2xl font-semibold text-white mb-6">AI Influencer Recommendations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_INFLUENCERS.map(inf => <InfluencerCard key={inf.id} influencer={inf} />)}
                </div>
            </section>
            
            <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-brand-secondary-dark p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">Outreach Automation</h2>
                    <p className="text-brand-gray mb-6">Create and manage personalized outreach sequences to connect with creators at scale.</p>
                    <button className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2">
                        Create New Sequence <MoveRight />
                    </button>
                </div>
                 <div className="bg-brand-secondary-dark p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">Campaign Tracking</h2>
                    <p className="text-brand-gray mb-6">Monitor the performance of your creator campaigns in real-time, from clicks to conversions.</p>
                    <button className="w-full bg-gray-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                        View Campaign Dashboard
                    </button>
                </div>
            </section>

        </div>
    );
};

export default CreatorOutreachPage;
