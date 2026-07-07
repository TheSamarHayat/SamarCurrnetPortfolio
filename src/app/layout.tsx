import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const siteDescription =
  "Samar Hayat, Frontend Developer with 2.5+ years of experience building responsive web applications using React, Next.js, and TypeScript. Currently at GlobeWyze Inc.; previously at Xecutors, Citadel Solutions, and ZITSOL.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thesamarhayat.com"),
  title: "Samar Hayat - Frontend Developer",
  description: siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="l5NqhwRDNgrT2-HvjO5hSCFZAVMFzNtPAVcxkNFUuqI"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.thesamarhayat.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Samar Hayat - Frontend Developer" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content="https://www.thesamarhayat.com/" />
        <meta
          property="og:image"
          content="https://www.thesamarhayat.com/images/me.png"
        />
        <meta property="og:site_name" content="Samar Hayat Portfolio" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Samar Hayat - Frontend Developer" />
        <meta name="twitter:description" content={siteDescription} />
        <meta
          name="twitter:image"
          content="https://www.thesamarhayat.com/images/me.png"
        />

        <meta
          property="article:author"
          content="Samar Hayat"
        />
        <meta property="profile:username" content="Samar Hayat" />
        <meta
          property="profile:email"
          content="mailto:samarhayat.dev@gmail.com"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Samar Hayat",
              url: "https://www.thesamarhayat.com/",
              jobTitle: "Frontend Developer",
              image: "https://www.thesamarhayat.com/images/me.png",
              email: "mailto:samarhayat.dev@gmail.com",
              telephone: "+923495129992",
              description: siteDescription,
              sameAs: [
                "https://github.com/thesamarhayat",
                "https://www.linkedin.com/in/thesamarhayatt",
                "https://discordapp.com/users/752720923534295160",
              ],
            }),
          }}
        />
      </head>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMEJ7HL9SP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZMEJ7HL9SP');
          `}
        </Script>
        <Suspense fallback={null}>
          <Sidebar />
        </Suspense>
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex flex-col min-h-screen flex-1 bg-white lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            <div className="flex-1">{children}</div>
            <Suspense fallback={null}>
              <Analytics />
              <SpeedInsights />
              <Footer />
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
