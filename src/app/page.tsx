'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,rgba(255,255,255,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[length:50px_50px] bg-center [background-image:linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)]" />
      </div>

      {/* Side Navigation */}
      <nav className="fixed top-0 left-0 h-full w-16 md:w-20 bg-black/50 backdrop-blur-sm border-r border-white/10 z-50">
        <div className="flex flex-col items-center py-4 md:py-8 space-y-6 md:space-y-8">
          <div className="flex flex-col items-center space-y-6 md:space-y-8 mt-4 md:mt-8">
            <a href="/" className="text-white hover:text-gray-300 transition-colors">
              <span className="text-xl md:text-2xl">🏠</span>
            </a>
            <a href="/aviation" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-xl md:text-2xl">✈️</span>
            </a>
            <a href="/coding" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-xl md:text-2xl">💻</span>
            </a>
            <a href="/football" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-xl md:text-2xl">⚽</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen pl-16 md:pl-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-40 pb-16"
          >
            <h1 className="text-6xl sm:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Hello, I'm Samarth
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              Website Work In Progress
            </p>
            <div className="text-gray-500 text-sm">
              <p>Email: samarthtilekar1@gmail.com</p>
              <p>Location: Pune</p>
              <p>Social: @tillu.samarth</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 