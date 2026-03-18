import Head from 'next/head';
import Dashboard from '../components/Dashboard';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <Head>
        <title>Dashboard — ValidateFast</title>
      </Head>
      
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="font-bold text-xl text-slate-900">
            Validate<span className="text-blue-600">Fast</span>
          </div>
          <a 
            href="/" 
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </header>
      
      {/* Main Dashboard Content */}
      <main className="py-8">
        <Dashboard />
      </main>
    </div>
  );
}
