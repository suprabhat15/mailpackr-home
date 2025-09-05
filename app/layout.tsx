import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "MailPackr - SEO Optimization Education & Training",
  description:
    "Master SEO optimization, keyword research, technical SEO with expert-led courses and educational resources. Learn practical strategies that drive organic traffic and improve search rankings.",
  keywords:
    "SEO education, search engine optimization courses, keyword research training, technical SEO, content optimization, link building, SEO analytics, SEO certification",
  authors: [{ name: "MailPackr" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "MailPackr - SEO Optimization Education & Training",
    description:
      "Master SEO optimization with expert-led educational courses and practical SEO training programs",
    type: "website",
    images: [{ url: "/logo.svg" }],
  },
};

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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
