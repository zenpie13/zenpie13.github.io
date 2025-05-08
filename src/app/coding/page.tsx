'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Coding() {
  const [terminalText, setTerminalText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const text = '> Initializing development environment...';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTerminalText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      {/* Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent" />

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
            <a href="/coding" className="text-white hover:text-gray-300 transition-colors">
              <span className="text-2xl">💻</span>
            </a>
            <a href="/football" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-2xl">⚽</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Terminal Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="font-mono text-emerald-400">
                <span className="text-emerald-500">$</span> {terminalText}
                {isTyping && <span className="animate-pulse">_</span>}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-black/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-6 hover:border-emerald-400/50 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h2 className="text-xl font-mono text-emerald-400">Web Development</h2>
              </div>
              <div className="space-y-4">
                <p className="text-emerald-300/80">// Frontend & Backend Projects</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 rounded text-sm text-emerald-300">React</span>
                  <span className="px-3 py-1 bg-emerald-500/20 rounded text-sm text-emerald-300">Node.js</span>
                  <span className="px-3 py-1 bg-emerald-500/20 rounded text-sm text-emerald-300">TypeScript</span>
                </div>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-black/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-6 hover:border-emerald-400/50 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h2 className="text-xl font-mono text-emerald-400">Mobile Apps</h2>
              </div>
              <div className="space-y-4">
                <p className="text-emerald-300/80">// iOS & Android Development</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 rounded text-sm text-emerald-300">React Native</span>
                  <span className="px-3 py-1 bg-emerald-500/20 rounded text-sm text-emerald-300">Flutter</span>
                  <span className="px-3 py-1 bg-emerald-500/20 rounded text-sm text-emerald-300">Swift</span>
                </div>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-black/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-6 hover:border-emerald-400/50 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h2 className="text-xl font-mono text-emerald-400">AI/ML Projects</h2>
              </div>
              <div className="space-y-4">
                <p className="text-emerald-300/80">// Machine Learning & AI</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 rounded text-sm text-emerald-300">Python</span>
                  <span className="px-3 py-1 bg-emerald-500/20 rounded text-sm text-emerald-300">TensorFlow</span>
                  <span className="px-3 py-1 bg-emerald-500/20 rounded text-sm text-emerald-300">PyTorch</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 