
import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURES, IMPACT_ITEMS, TECH_STACK } from '../constants';

const Hero: React.FC = () => (
  <section className="text-center py-20 md:py-32">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
      TrendSphere – <span className="text-brand-orange">Smarter</span> Marketing, Simplified
    </h1>
    <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-gray mb-8">
      Our AI-powered platform unifies your product marketing tools into one seamless interface, empowering you to make data-driven decisions that drive growth and maximize impact.
    </p>
    <Link
      to="/dashboard"
      className="inline-block bg-brand-orange text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300"
    >
      Get Started
    </Link>
  </section>
);

const Features: React.FC = () => (
  <section id="features" className="py-16">
    <h2 className="text-3xl font-bold text-center mb-12 text-white">All-in-One Marketing Powerhouse</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {FEATURES.map((feature) => (
        <Link to={feature.link} key={feature.title} className="block bg-brand-secondary-dark p-8 rounded-lg shadow-lg hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-300">
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold text-center text-white mb-2">{feature.title}</h3>
          <p className="text-brand-gray text-center">{feature.description}</p>
        </Link>
      ))}
    </div>
  </section>
);

const Impact: React.FC = () => (
    <section className="py-16 bg-brand-secondary-dark rounded-lg">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">The TrendSphere Advantage</h2>
            <div className="grid md:grid-cols-3 gap-10 text-center">
                {IMPACT_ITEMS.map((item) => (
                    <div key={item.title} className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-dark mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-brand-gray">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TechStack: React.FC = () => (
  <section className="py-16">
    <h2 className="text-3xl font-bold text-center mb-12 text-white">Powered by Modern Technology</h2>
    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
      {TECH_STACK.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center gap-2" title={tech.name}>
          {tech.icon}
          <span className="text-sm text-gray-400">{tech.name}</span>
        </div>
      ))}
    </div>
  </section>
);


const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
      <Impact />
      <TechStack />
    </div>
  );
};

export default HomePage;
