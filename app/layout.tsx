import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Sensations of Loneliness | Online Dating Platforms',
  description: 'How should the isolating effects caused by dating apps for its American audience be best reduced? An exploration of loneliness, authenticity, and digital connection.',
  icons: {
    icon: "/heartsicon.png"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {/* 2. Wrap Analytics in Suspense */}
        {process.env.NODE_ENV === 'production' && (
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        )}
      </body>
    </html>
  )
}