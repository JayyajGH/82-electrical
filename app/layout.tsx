import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import { ThemeProvider } from "@/components/theme-provider";

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: "82electrical",
  description: "82electrical - Domestic electrician serving Bristol and the surrounding areas",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-ico.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "82electrical",
  "url": "https://82electrical.co.uk/",
  "telephone": "+447813408135",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Greater Bristol & surrounding areas"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ambleside Avenue",
    "addressLocality": "Bristol",
    "postalCode": "BS10",
    "addressCountry": "GB"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is required on <html> when using next-themes
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body className={`${ptSans.variable} ${ptSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
