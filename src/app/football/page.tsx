'use client';

import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: '500',
  subsets: ['latin'],
});

export default function Football() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Stadium Background */}
      <div className="absolute left-20 top-0 w-[calc(100vw-5rem)] h-full z-0">
        {/* Blurry Pitch Base */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-green-600/70 to-green-800/70 blur-lg" />
        {/* Pitch Lines - Vertical Orientation */}
        <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Outer Border */}
          <rect x="2" y="2" width="96" height="96" fill="none" stroke="#fff" strokeOpacity="0.15" strokeWidth="0.5" />
          {/* Center Line */}
          <line x1="2" y1="50" x2="98" y2="50" stroke="#fff" strokeOpacity="0.1" strokeWidth="0.3" />
          {/* Center Circle */}
          <circle cx="50" cy="50" r="12" fill="none" stroke="#fff" strokeOpacity="0.1" strokeWidth="0.3" />
          {/* Penalty Areas (top and bottom) */}
          <rect x="30" y="2" width="40" height="15" fill="none" stroke="#fff" strokeOpacity="0.1" strokeWidth="0.3" />
          <rect x="30" y="83" width="40" height="15" fill="none" stroke="#fff" strokeOpacity="0.1" strokeWidth="0.3" />
          {/* Goal Areas (top and bottom) */}
          <rect x="40" y="8" width="20" height="3" fill="none" stroke="#fff" strokeOpacity="0.15" strokeWidth="0.4" />
          <rect x="40" y="89" width="20" height="3" fill="none" stroke="#fff" strokeOpacity="0.15" strokeWidth="0.4" />
          {/* Penalty Spots */}
          <circle cx="50" cy="15" r="0.8" fill="#fff" fillOpacity="0.2" />
          <circle cx="50" cy="85" r="0.8" fill="#fff" fillOpacity="0.2" />
        </svg>
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[length:50px_50px] bg-center [background-image:linear-gradient(to_right,rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.02)_1px,transparent_1px)]" />
      </div>

      {/* Side Navigation */}
      <nav className="fixed top-0 left-0 h-full w-20 bg-black/50 backdrop-blur-sm border-r border-white/10 z-50">
        <div className="flex flex-col items-center py-8 space-y-8">
          <div className="flex flex-col items-center space-y-8 mt-8">
            <a href="/" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-2xl">🏠</span>
            </a>
            <a href="/aviation" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-2xl">✈️</span>
            </a>
            <a href="/coding" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-2xl">💻</span>
            </a>
            <a href="/football" className="text-white hover:text-gray-300 transition-colors">
              <span className="text-2xl">⚽</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pl-20 relative z-10 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 pt-32"
          >
            <h1 className={`${poppins.className} text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight`}>
              Football Analytics Hub
            </h1>
            <p className={`${poppins.className} text-emerald-200 text-lg font-medium`}>
              Advanced match analysis and performance metrics
            </p>
          </motion.div>

          {/* Analysis Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/80 shadow-xl rounded-xl p-6 border border-blue-500/40"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className={`${poppins.className} text-xl font-bold text-white mb-2 tracking-tight`}>Match Analysis</h3>
                <p className="text-emerald-200 text-base font-medium">Real-time performance tracking and statistical analysis</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/80 shadow-xl rounded-xl p-6 border border-blue-500/40"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className={`${poppins.className} text-xl font-bold text-white mb-2 tracking-tight`}>Tactical Reports</h3>
                <p className="text-emerald-200 text-base font-medium">In-depth analysis of team formations and strategies</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900/80 shadow-xl rounded-xl p-6 border border-blue-500/40"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className={`${poppins.className} text-xl font-bold text-white mb-2 tracking-tight`}>Performance Metrics</h3>
                <p className="text-emerald-200 text-base font-medium">Comprehensive player and team statistics</p>
              </div>
            </motion.div>
          </div>

          {/* Analysis Reports */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30"
            >
              <h3 className={`${poppins.className} text-xl font-semibold text-white mb-4 tracking-tight`}>Match Performance Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-blue-400 mb-2">Possession Stats</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Ball Control</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Pass Accuracy</span>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-blue-400 mb-2">Expected Goals (xG)</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Shot Quality</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Chance Creation</span>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-blue-400 mb-2">Heat Maps</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Player Movement</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Team Positioning</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30"
            >
              <h3 className={`${poppins.className} text-xl font-semibold text-white mb-4 tracking-tight`}>Tactical Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-blue-400 mb-2">Formation Analysis</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Team Shape</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Player Roles</span>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-blue-400 mb-2">Press Analysis</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Press Intensity</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Recovery Time</span>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-blue-400 mb-2">Set Pieces</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Corner Analysis</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-200">Free Kick Patterns</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 