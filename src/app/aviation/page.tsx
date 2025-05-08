'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../CloudsBackground.css';
import { Chakra_Petch } from 'next/font/google';

const chakraPetch = Chakra_Petch({ 
  weight: '400',
  subsets: ['latin'],
});

export default function Aviation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-900 via-sky-800 to-sky-900 relative overflow-hidden">
      {/* Sky Background */}
      <div className="absolute inset-0">
        {/* Clouds */}
        <div className="clouds-background" aria-hidden="true">
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
        </div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[length:50px_50px] bg-center [background-image:linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)]" />
      </div>

      {/* Side Navigation */}
      <nav className="fixed top-0 left-0 h-full w-20 bg-black/50 backdrop-blur-sm border-r border-white/10 z-50">
        <div className="flex flex-col items-center py-8 space-y-8">
          <div className="flex flex-col items-center space-y-8 mt-8">
            <a href="/" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-2xl">🏠</span>
            </a>
            <a href="/aviation" className="text-white hover:text-gray-300 transition-colors">
              <span className="text-2xl">✈️</span>
            </a>
            <a href="/coding" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-2xl">💻</span>
            </a>
            <a href="/football" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-2xl">⚽</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pl-20 relative z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 pt-32"
          >
            <h1 className={`${chakraPetch.className} text-4xl sm:text-5xl font-bold text-white mb-4`}>
              Aviation Projects
            </h1>
            <p className={`${chakraPetch.className} text-sky-200 text-lg`}>
              Exploring the skies through technology and innovation
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-sky-900/50 backdrop-blur-sm rounded-xl p-6 border border-sky-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">✈️</span>
                </div>
                <h2 className={`${chakraPetch.className} text-xl font-semibold text-white`}>Aircraft Design</h2>
              </div>
              <p className="text-sky-200 mb-4">Advanced aircraft design and analysis projects</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">CAD</span>
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Aerodynamics</span>
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Simulation</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-sky-900/50 backdrop-blur-sm rounded-xl p-6 border border-sky-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h2 className={`${chakraPetch.className} text-xl font-semibold text-white`}>Flight Analysis</h2>
              </div>
              <p className="text-sky-200 mb-4">Flight data analysis and performance optimization</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Data Analysis</span>
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Performance</span>
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Optimization</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-sky-900/50 backdrop-blur-sm rounded-xl p-6 border border-sky-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h2 className={`${chakraPetch.className} text-xl font-semibold text-white`}>Aircraft Maintenance</h2>
              </div>
              <p className="text-sky-200 mb-4">Maintenance procedures and safety protocols</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Safety</span>
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Procedures</span>
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Protocols</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-sky-900/50 backdrop-blur-sm rounded-xl p-6 border border-sky-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h2 className={`${chakraPetch.className} text-xl font-semibold text-white`}>Aviation Education</h2>
              </div>
              <p className="text-sky-200 mb-4">Educational resources and training materials</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Training</span>
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Resources</span>
                <span className="px-3 py-1 bg-sky-500/20 rounded-full text-sm text-sky-200">Documentation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 