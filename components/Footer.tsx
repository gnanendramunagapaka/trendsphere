
import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary-dark text-gray-400">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-brand-orange" />
            <span className="text-white text-xl font-bold">TrendSphere</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/about" className="hover:text-brand-orange transition-colors">About</Link>
            <Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
            <Link to="/#features" className="hover:text-brand-orange transition-colors">Features</Link>
            <Link to="/dashboard" className="hover:text-brand-orange transition-colors">Dashboard</Link>
          </div>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((social, index) => (
              <a key={index} href={social.href} className="text-gray-400 hover:text-brand-orange transition-colors">
                {social.icon}
                <span className="sr-only">Social Media</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} TrendSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
