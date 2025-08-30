import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MailPackr - Email Architecture Made Simple',
  description: 'Create, send, and track beautiful email campaigns that convert. Reliable, secure, and scalable email services for your business.',
  keywords: 'email sending, email campaigns, email automation, email analytics, email templates',
  authors: [{ name: 'MailPackr Team' }],
  openGraph: {
    title: 'MailPackr - Email Architecture Made Simple',
    description: 'Create, send, and track beautiful email campaigns that convert.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
