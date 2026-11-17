import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://genesispain.com';
const title = 'Genesis Pain Clinic | Pain Management in Overland Park, KS';
const description = 'Genesis Pain Clinic provides personalized pain management for chronic and acute pain in Overland Park, Kansas.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: 'website',
    url: siteUrl,
    siteName: 'Genesis Pain Clinic',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
