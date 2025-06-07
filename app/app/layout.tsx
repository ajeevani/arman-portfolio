
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arman Jeevani - Software & Web Developer',
  description: 'Portfolio of Arman Jeevani - Software and Web Developer specializing in modern web applications, API development, and AI integration.',
  keywords: 'software developer, web developer, portfolio, React, Next.js, API development, AI integration',
  authors: [{ name: 'Arman Jeevani' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(10, 10, 15, 0.95)',
                color: '#00D4FF',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '8px',
                fontFamily: 'JetBrains Mono, monospace',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
