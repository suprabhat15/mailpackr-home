import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "MailPackr - Digital Marketing Education & Training",
  description:
    "Master digital marketing, email marketing, sales funnels with expert-led courses and educational resources. Learn practical strategies that drive real business results.",
  keywords:
    "digital marketing education, email marketing courses, sales funnel training, marketing automation, conversion optimization, marketing analytics, digital marketing certification",
  authors: [{ name: "MailPackr Education" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "MailPackr - Digital Marketing Education & Training",
    description:
      "Master digital marketing with expert-led educational courses and practical training programs",
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
