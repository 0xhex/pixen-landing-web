import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Pixen AI - Transform Your Photos with AI Templates',
  description: 'Transform your photos into stunning images and videos using AI-powered templates. Create Polaroid effects, oil paintings, animated videos, and more.',
  keywords: 'AI, image generation, video generation, photo editing, templates, Luma AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="img-src 'self' data: https: http:; media-src 'self' data: https: http:;" />
      </head>
      <body>{children}</body>
    </html>
  )
}
