import React from 'react';

// A simple card component for individual metrics
const MetricCard = ({ title, value, trend, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between transition-all duration-200 hover:shadow-md hover:border-blue-200">
    <div>
      <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
        {trend && (
          <span className={`text-sm font-medium ${trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
            {trend}
          </span>
        )}
      </div>
    </div>
    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
      {icon}
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <p className="text-slate-500">Your SaaS performance metrics for the last 30 days.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard 
          title="Total Users" 
          value="1,248" 
          trend="+12%"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          }
        />
        
        <MetricCard 
          title="MRR" 
          value="€4,250" 
          trend="+8.4%"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />

        <MetricCard 
          title="New Signups" 
          value="342" 
          trend="+24%"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          }
        />
      </div>

      {/* Recent Activity / Chart Wireframe Placeholder */}
      <div className="mt-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
        <svg className="w-16 h-16 mb-4 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <p className="text-slate-400 font-medium">Revenue Chart (Coming Soon)</p>
        <p className="text-slate-400 text-sm mt-2 text-center max-w-sm">
          Connect your Stripe account to automatically visualize your MRR growth and trial conversions here.
        </p>
      </div>
    </div>
  );
}
