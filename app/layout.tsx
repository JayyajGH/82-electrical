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
  title: "82 Electrical",
  description: "82 Electrical - Domestic electrician serving Bristol and the surrounding areas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is required on <html> when using next-themes
    <html lang="en" suppressHydrationWarning>
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
