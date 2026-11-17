import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Genesis Pain Clinic | Pain Management in Overland Park, KS',
  description:
    'Genesis Pain Clinic offers personalized pain management for chronic and acute pain in Overland Park, Kansas.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Genesis Pain Clinic | Pain Management in Overland Park, KS',
    description:
      'Personalized pain care for complex conditions with a compassionate, patient-first approach.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
