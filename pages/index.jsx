import Head from 'next/head';
import { Sparkles, LayoutTemplate, Activity, CheckSquare, ArrowRight, TrendingDown } from 'lucide-react';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafcff] text-slate-900 font-sans selection:bg-indigo-200">
      <Head>
        <title>ValidateFast — Validate Your SaaS Idea in 72 Hours</title>
        <meta name="description" content="Launch a landing page, track users, and know if your idea is worth it — fast and actionable." />
      </Head>

      {/* Navigation (Minimal) */}
      <nav className="absolute top-0 w-full px-6 py-6 z-50 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="font-extrabold text-xl tracking-tight text-slate-800 flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-inner flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          Validate<span className="text-blue-600">Fast</span>
        </div>
        <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-center text-center">
        {/* Background Gradients & Effects */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute top-20 -right-40 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 hover:shadow-md transition-shadow cursor-default group">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
            The Ultimate Validation Playbook
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Validate Your SaaS Idea in <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 relative inline-block">
              72 Hours
              {/* Swoosh Underline */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
            Launch a landing page, track users, and know if your idea is worth it — <strong className="text-slate-800">fast and actionable.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]"
            >
              Get the Kit — €19
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 h-full w-full pointer-events-none rounded-full border border-white/20" />
            </a>
            <p className="text-sm text-slate-500 font-medium">One-time payment. Lifetime access.</p>
          </div>
        </div>

        {/* Hero Illustration / Abstract Interface */}
        <div className="mt-20 relative w-full max-w-5xl mx-auto z-10 perspective-[2000px]">
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl bg-white shadow-2xl shadow-indigo-200/50 border border-slate-200/60 overflow-hidden flex flex-col transform rotate-x-[5deg] translate-y-4 hover:rotate-x-0 hover:translate-y-0 transition-transform duration-700 ease-out group">
            {/* Window header */}
            <div className="h-12 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <div className="mx-auto text-xs font-semibold text-slate-400 bg-white px-2 py-1 rounded-md shadow-sm border border-slate-200">validatefast.com/dashboard</div>
            </div>
            {/* Window Body Mockup */}
            <div className="flex-1 p-8 flex flex-col gap-6 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
              <div className="flex gap-4 items-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-100 to-indigo-50 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="h-4 w-32 bg-slate-200 rounded-full mb-2" />
                  <div className="h-6 w-48 bg-slate-800 rounded-full" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-24 rounded-xl bg-white shadow-sm border border-slate-100 p-4 flex flex-col justify-between group-hover:translate-y-[-2px] transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="h-3 w-16 bg-slate-100 rounded-full" />
                    <div className="h-6 w-24 bg-slate-200 rounded-full" />
                  </div>
                ))}
              </div>
              <div className="flex-1 rounded-xl bg-gradient-to-t from-blue-50/50 to-white border border-slate-100 relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 w-full h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJz48cGF0aCBkPSdNMCAxMDBWMjBRMjAgMzAgNDAgMTBUNjAgNDBUODAgMTBUMTAwIDIwdjgwSDB6JyBmaWxsPScjZWJmMHhmJy8+PC9zdmc+')] bg-cover bg-bottom opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden text-white">
        <div className="absolute top-0 inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] bg-repeat" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-8 backdrop-blur-md">
            <TrendingDown className="w-8 h-8 text-rose-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Stop building in the dark</h2>
          
          <div className="space-y-6 text-slate-300 text-lg md:text-xl text-left md:text-center leading-relaxed max-w-3xl mx-auto">
            <p>
              Most SaaS founders spend <strong className="text-white">months</strong> perfecting a product, only to launch to crickets. They write thousands of lines of code before talking to a single customer.
            </p>
            <p className="bg-white/5 p-6 rounded-2xl border border-white/10 italic">
              "The pain of building a polished product that nobody wants is crushing. Don't waste your time and energy on assumptions. Validate first, build later."
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Everything you need to validate</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">We've packaged the exact tools and frameworks you need to prove your idea works before writing any backend code.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <LayoutTemplate className="w-32 h-32" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 border border-blue-200/50 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10">
                <LayoutTemplate className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 relative z-10">Ready-to-go landing page</h3>
              <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                High-converting React template optimized for collecting emails and gauging interest instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Activity className="w-32 h-32" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-violet-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 border border-indigo-200/50 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 relative z-10">Dashboard template</h3>
              <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                A mock user dashboard to show potential early adopters exactly what they'll be paying for.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <CheckSquare className="w-32 h-32" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-fuchsia-50 text-violet-600 rounded-2xl flex items-center justify-center mb-8 border border-violet-200/50 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10">
                <CheckSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 relative z-10">3-day validation checklist</h3>
              <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                Step-by-step playbook to go from idea to validated (or invalidated) in exactly 72 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-32 px-6 relative overflow-hidden">
        {/* Deep immersive background */}
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-slate-900 opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-white tracking-tight">
            Start validating today
          </h2>
          <p className="text-2xl text-blue-200/90 mb-12 max-w-2xl mx-auto font-light">
            Stop guessing. Get the data you need to build with absolute confidence.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-2 rounded-full inline-block backdrop-blur-md mb-8 shadow-2xl">
            <a 
              href="#"
              className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold text-xl px-12 py-5 rounded-full hover:bg-slate-50 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] group"
            >
              Get the Kit — €19
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-blue-600" />
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <CheckSquare className="w-4 h-4 text-emerald-400" /> Instant Access
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <CheckSquare className="w-4 h-4 text-emerald-400" /> React / Next.js
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <CheckSquare className="w-4 h-4 text-emerald-400" /> Lifetime Updates
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            ValidateFast
          </div>
          <p className="text-slate-500 font-medium text-sm">
            &copy; {new Date().getFullYear()} ValidateFast. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-slate-700 transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Support</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
