/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VS Code dark theme colors
        'vscode-bg': '#1E1E1E',
        'vscode-sidebar': '#252526',
        'vscode-active': '#37373D',
        'vscode-hover': '#2A2D2E',
        'vscode-text': '#D4D4D4',
        'vscode-blue': '#569CD6',
        'vscode-green': '#6A9955',
        'vscode-orange': '#CE9178',
        'vscode-purple': '#C586C0',
      },
      fontFamily: {
        mono: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
} 