import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Forge — solo devs ship like teams',
  description:
    'Forge orchestrates a team of AI sub-agents — reviewer, tester, writer, deployer — so a solo dev ships like a team.',
  metadataBase: new URL('https://forge.sbknext.com'),
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: 'Forge — solo devs ship like teams',
    description:
      'Forge orchestrates a team of AI sub-agents — reviewer, tester, writer, deployer — so a solo dev ships like a team.',
    url: 'https://forge.sbknext.com',
    siteName: 'Forge',
    type: 'website',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge — solo devs ship like teams',
    description:
      'Forge orchestrates a team of AI sub-agents — reviewer, tester, writer, deployer — so a solo dev ships like a team.',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics 4 (sbknext.com - GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2SJY4X6ZQC" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-2SJY4X6ZQC');`,
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--sans)", WebkitFontSmoothing: 'antialiased' }}>
        {children}
      </body>
    </html>
  );
}
