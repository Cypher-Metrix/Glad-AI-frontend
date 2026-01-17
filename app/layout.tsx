import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GLAD AI - Admin Panel',
  description: 'Modern admin dashboard for GLAD AI platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-hidden selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  )
}