
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { MOCK_CHART_DATA } from '../constants';

const COLORS = ['#F97316', '#EA580C', '#D97706', '#CA8A04'];

const ChartCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-brand-secondary-dark p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="h-72 w-full">
      {children}
    </div>
  </div>
);

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">Dashboard & Analytics</h1>
      <p className="text-lg text-brand-gray">
        Real-time product management, forecasting, and key metrics at a glance.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard title="Sales Trends">
          <ResponsiveContainer>
            <BarChart data={MOCK_CHART_DATA.sales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
              <Legend />
              <Bar dataKey="sales" fill="#F97316" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Revenue Growth">
          <ResponsiveContainer>
            <LineChart data={MOCK_CHART_DATA.revenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#F97316" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Conversion Rates">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={MOCK_CHART_DATA.conversions} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {MOCK_CHART_DATA.conversions.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Customer Reviews Analysis">
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={MOCK_CHART_DATA.reviews}>
                    <PolarGrid stroke="#4B5563" />
                    <PolarAngleAxis dataKey="subject" stroke="#9CA3AF" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#4B5563" />
                    <Radar name="Product A" dataKey="A" stroke="#F97316" fill="#F97316" fillOpacity={0.6} />
                    <Radar name="Product B" dataKey="B" stroke="#0EA5E9" fill="#0EA5E9" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}/>
                </RadarChart>
            </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default DashboardPage;
