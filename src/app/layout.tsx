import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CloudsBackground from './CloudsBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CloudsBackground />
        {children}
      </body>
    </html>
  )
} 