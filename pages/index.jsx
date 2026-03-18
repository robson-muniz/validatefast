import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <Head>
        <title>ValidateFast — Validate Your SaaS in 72 Hours</title>
        <meta name="description" content="Launch a landing page, track users, and know if your idea is worth it — fast and actionable." />
      </Head>

      {/* Hero Section */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Validate Your SaaS Idea in <span className="text-blue-600">72 Hours</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Launch a landing page, track users, and know if your idea is worth it — fast and actionable.
        </p>
        <a 
          href="#pricing"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          Get the Kit — €19
        </a>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20 px-6 border-y border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Stop building in the dark</h2>
          <div className="space-y-6 text-slate-600 text-lg md:text-xl md:text-center text-left leading-relaxed">
            <p>
              Most SaaS founders spend <strong>months</strong> perfecting a product, only to launch to crickets. They write thousands of lines of code before talking to a single customer.
            </p>
            <p>
              The pain of building a polished product that nobody wants is crushing. Don't waste your time and energy on assumptions. Validate first, build later.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">Everything you need to validate</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-200 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Ready-to-go landing page</h3>
              <p className="text-slate-600 leading-relaxed">
                High-converting React template optimized for collecting emails and gauging interest instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-200 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Dashboard template</h3>
              <p className="text-slate-600 leading-relaxed">
                A mock user dashboard to show potential early adopters exactly what they'll be paying for.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-200 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">3-day validation checklist</h3>
              <p className="text-slate-600 leading-relaxed">
                Step-by-step playbook to go from idea to validated (or invalidated) in exactly 72 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start validating today</h2>
          <p className="text-xl text-slate-300 mb-10">
            Stop guessing. Get the data you need to build with confidence.
          </p>
          <a 
            href="#"
            className="inline-block bg-blue-500 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all duration-200"
          >
            Get the Kit — €19
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} ValidateFast. All rights reserved.</p>
      </footer>
    </div>
  );
}
