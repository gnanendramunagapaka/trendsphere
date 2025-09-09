
import React from 'react';
import type { NavLink, Feature, ImpactItem, TechStackItem, Influencer } from './types';
import { BrainCircuit, LayoutDashboard, BarChart3, Users, Zap, Target, Combine, MessageSquare, LineChart, Star, Twitter, Linkedin, Github } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/#features' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Analytics', path: '/analytics' },
  { name: 'Creator Outreach', path: '/creator-outreach' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const FEATURES: Feature[] = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-brand-orange" />,
    title: 'AI Product Analysis',
    description: 'Gain deep market insights, branding suggestions, and campaign strategies from our advanced AI.',
    link: '/features/analysis'
  },
  {
    icon: <LayoutDashboard className="w-10 h-10 text-brand-orange" />,
    title: 'Portfolio Dashboard',
    description: 'Manage your products in real-time with predictive sales forecasting and performance tracking.',
    link: '/dashboard'
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-brand-orange" />,
    title: 'Advanced Analytics',
    description: 'Visualize key metrics with interactive charts and generate comprehensive reports effortlessly.',
    link: '/analytics'
  },
  {
    icon: <Users className="w-10 h-10 text-brand-orange" />,
    title: 'Creator Outreach',
    description: 'Discover and connect with the perfect influencers using AI matching and automated outreach.',
    link: '/creator-outreach'
  },
];

export const IMPACT_ITEMS: ImpactItem[] = [
  {
    icon: <Zap className="w-10 h-10 text-brand-orange" />,
    title: 'Streamlined Workflow',
    description: 'Consolidate your marketing tools into a single, intuitive platform, saving time and reducing complexity.'
  },
  {
    icon: <Target className="w-10 h-10 text-brand-orange" />,
    title: 'AI-Driven Decisions',
    description: 'Leverage the power of AI to make smarter, data-backed marketing decisions that drive growth.'
  },
  {
    icon: <Combine className="w-10 h-10 text-brand-orange" />,
    title: 'Creator Synergy',
    description: 'Build authentic partnerships with influencers that resonate with your brand and audience.'
  },
];

export const TECH_STACK: TechStackItem[] = [
    { name: 'React', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-400"><title>React</title><path fill="currentColor" d="M12.001 2.002c-5.524 0-10.001 4.476-10.001 10s4.477 10 10.001 10c5.522 0 9.999-4.476 9.999-10s-4.477-10-9.999-10zm0 18.001c-4.412 0-8.001-3.588-8.001-8s3.589-8 8.001-8c4.41 0 8 3.588 8 8s-3.59 8-8 8z"/><path fill="currentColor" d="M12.122 12.12c-2.062 2.065-2.062 5.41 0 7.475c2.065 2.063 5.41 2.063 7.475 0c2.064-2.065 2.064-5.41 0-7.475c-2.066-2.062-5.41-2.062-7.475 0zm6.046 6.046c-1.378 1.377-3.606 1.377-4.984 0c-1.377-1.378-1.377-3.606 0-4.984c1.378-1.377 3.606-1.377 4.984 0c1.377 1.378 1.377 3.606 0 4.984z"/><ellipse cx="12" cy="12" rx="3.15" ry="8.618" transform="rotate(-30 12 12)" fill="currentColor"/><ellipse cx="12" cy="12" rx="3.15" ry="8.618" transform="rotate(30 12 12)" fill="currentColor"/><ellipse cx="12" cy="12" rx="8.618" ry="3.15" transform="rotate(90 12 12)" fill="currentColor"/></svg> },
    { name: 'TypeScript', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-400"><title>TypeScript</title><path fill="currentColor" d="M1.5 0 h21 V24 H1.5 Z M20.924 10.476c.036-.18.054-.366.054-.552v-1.14c0-1.428-.45-2.592-1.35-3.492c-.9-.9-2.07-.1.35-3.492c-1.296-.912-2.826-1.368-4.59-1.368h-6.264V19.8h4.284c1.296 0 2.43-.228 3.384-.684c.954-.456 1.692-1.14 2.214-2.052c.522-.912.786-2.016.786-3.312c0-1.008-.162-1.92-.486-2.736zm-5.652 4.536c-.45.45-.99.774-1.62.972c-.63.198-1.326.294-2.088.294h-.9V8.58h.9c.762 0 1.458.096 2.088.288c.63.192 1.17.516 1.62.972c.45.456.804 1.02.954 1.692c.15.672.228 1.416.228 2.232c0 .816-.072 1.56-.222 2.232c-.156.684-.504 1.254-.96 1.716z"/></svg> },
    { name: 'Tailwind CSS', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-400"><title>Tailwind CSS</title><path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c-1.2,4.8,0.6,8.4,5.4,8.4c3.6,0,5.4-2.4,5.4-5.4c0-4.2-3.6-8.4-5.4-8.4 M14.8,15.5c-0.6,0.9-1.8,1.5-3.4,1.5c-2.4,0-3.6-1.5-3-4.2c0.6-2.7,2.4-3.9,4.2-3.9c1.5,0,2.4,0.6,3,1.5 c-0.6,0.6-1.2,1.2-1.8,1.8c-0.3-0.3-0.6-0.6-1.2-0.6c-0.6,0-1.2,0.6-1.2,1.5c0,0.9,0.6,1.5,1.2,1.5c0.6,0,0.9-0.3,1.2-0.6 c0.6,0.6,1.2,1.2,1.8,1.8C15.1,15.2,14.9,15.4,14.8,15.5 M18.4,12.4c-0.6,0.9-1.8,1.5-3.4,1.5c-2.4,0-3.6-1.5-3-4.2 c0.6-2.7,2.4-3.9,4.2-3.9c1.5,0,2.4,0.6,3,1.5c-0.6,0.6-1.2,1.2-1.8,1.8c-0.3-0.3-0.6-0.6-1.2-0.6c-0.6,0-1.2,0.6-1.2,1.5 c0,0.9,0.6,1.5,1.2,1.5c0.6,0,0.9-0.3,1.2-0.6c0.6,0.6,1.2,1.2,1.8,1.8C18.7,12.1,18.5,12.3,18.4,12.4"/></svg> },
    { name: 'FastAPI', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-400"><title>FastAPI</title><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 4.204 2.166 7.91 5.405 10.022l-.004.018A12 12 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zM8.57 18.067h2.86v-5.692l-2.86.01V18.06zm0-8.563h2.86V6.151l-2.86.01v3.354zM12 21.6c-1.884 0-3.618-.49-5.127-1.354l.001-.002v-3.328l-.001.002c1.51-863 3.245-1.353 5.127-1.353s3.618.49 5.127 1.353l-.001-.002v3.328l.001.002A9.559 9.559 0 0112 21.6zm2.86-12.18h2.86v5.693l-2.86-.01V9.42z"/></svg> },
];

export const SOCIAL_LINKS = [
    { href: '#', icon: <Twitter className="w-6 h-6" /> },
    { href: '#', icon: <Linkedin className="w-6 h-6" /> },
    { href: '#', icon: <Github className="w-6 h-6" /> },
];

export const MOCK_CHART_DATA = {
  sales: [
    { name: 'Jan', sales: 4000 }, { name: 'Feb', sales: 3000 }, { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4500 }, { name: 'May', sales: 6000 }, { name: 'Jun', sales: 5500 },
  ],
  revenue: [
    { name: 'Jan', revenue: 2400 }, { name: 'Feb', revenue: 1398 }, { name: 'Mar', revenue: 9800 },
    { name: 'Apr', revenue: 3908 }, { name: 'May', revenue: 4800 }, { name: 'Jun', revenue: 3800 },
  ],
  conversions: [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  ],
  reviews: [
    { subject: 'UI/UX', A: 120, B: 110, fullMark: 150 },
    { subject: 'Features', A: 98, B: 130, fullMark: 150 },
    { subject: 'Support', A: 86, B: 130, fullMark: 150 },
    { subject: 'Performance', A: 99, B: 100, fullMark: 150 },
    { subject: 'Value', A: 85, B: 90, fullMark: 150 },
  ],
};

export const MOCK_INFLUENCERS: Influencer[] = [
    { id: 1, name: 'Alex Tech', avatar: 'https://picsum.photos/seed/1/200', followers: '1.2M', engagement: '5.2%', platform: 'youtube' },
    { id: 2, name: 'Fashionista Jane', avatar: 'https://picsum.photos/seed/2/200', followers: '850K', engagement: '8.1%', platform: 'instagram' },
    { id: 3, name: 'Gadget Guru', avatar: 'https://picsum.photos/seed/3/200', followers: '2.5M', engagement: '4.5%', platform: 'tiktok' },
    { id: 4, name: 'Lifestyle Lisa', avatar: 'https://picsum.photos/seed/4/200', followers: '500K', engagement: '9.3%', platform: 'instagram' },
    { id: 5, name: 'DevDave', avatar: 'https://picsum.photos/seed/5/200', followers: '750K', engagement: '6.7%', platform: 'youtube' },
    { id: 6, name: 'Creative Carla', avatar: 'https://picsum.photos/seed/6/200', followers: '3.1M', engagement: '3.8%', platform: 'tiktok' },
];
