import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://genesispain.vercel.app';
const title = 'Genesis Pain Clinic | Pain Management in Overland Park, KS';
const description = 'Personalized pain management in Overland Park, Kansas. Compassionate care, treatment options, and support for people living with acute and chronic pain.';

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
  twitter: { card: 'summary_large_image', title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalClinic',
          name: 'Genesis Pain Clinic',
          url: siteUrl,
          telephone: '+1-913-871-4688',
          email: 'admin@genesispain.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '6700 W 121st St, Suite 300',
            addressLocality: 'Overland Park',
            addressRegion: 'KS',
            postalCode: '66209',
            addressCountry: 'US',
          },
          openingHours: 'Mo-Fr 08:00-16:30',
          medicalSpecialty: 'PainMedicine',
        }) }} />
      </body>
    </html>
  );
}
