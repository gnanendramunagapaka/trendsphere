
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductAnalysisPage from './pages/ProductAnalysisPage';
import DashboardPage from './pages/DashboardPage';
import CreatorOutreachPage from './pages/CreatorOutreachPage';

// Placeholder pages for navigation links
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
    <h1 className="text-4xl font-bold text-white">{title}</h1>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-brand-dark text-brand-light min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features/analysis" element={<ProductAnalysisPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/analytics" element={<DashboardPage />} />
            <Route path="/creator-outreach" element={<CreatorOutreachPage />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
