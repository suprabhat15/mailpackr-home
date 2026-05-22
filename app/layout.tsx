import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Syne, DM_Sans } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-syne',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: "MailPackr - The Modern Email Marketing Platform",
  description:
    "Design beautiful emails, automate your workflows, and grow your audience with MailPackr. The award-winning email marketing platform for modern creators and businesses.",
  keywords:
    "email marketing, email automation, newsletter platform, email builder, audience segmentation, marketing automation, email deliverability",
  authors: [{ name: "MailPackr" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  metadataBase: new URL("https://mailpackr.com"),
  openGraph: {
    title: "MailPackr - The Modern Email Marketing Platform",
    description:
      "Design beautiful emails, automate your workflows, and grow your audience with MailPackr.",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${GeistSans.variable} ${GeistMono.variable} ${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`antialiased min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground`} style={{ fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}