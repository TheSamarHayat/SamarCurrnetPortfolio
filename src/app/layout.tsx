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

export const metadata: Metadata = {
  title: "Samar Hayat - Frontend Developer",
  description:
    "Samar Hayat, Frontend Developer & tech blogger, specializes in UI/UX trends, open-source contributions, and remote work while enhancing his skills.",
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
          content="WngP93RQqWAa6aTf0uJvLP2UyYJ8SacTK6EUsv8h4lA"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.samarhayat.online/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Samar Hayat - Frontend Developer" />
        <meta
          property="og:description"
          content="Samar Hayat, Frontend Developer & tech blogger, specializes in UI/UX trends, open-source contributions, and remote work while enhancing his skills."
        />
        <meta property="og:url" content="https://www.samarhayat.online/" />
        <meta
          property="og:image"
          content="https://www.samarhayat.online/images/me.png"
        />
        <meta property="og:site_name" content="Samar Hayat Portfolio" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Samar Hayat - Frontend Developer" />
        <meta
          name="twitter:description"
          content="Samar Hayat, Frontend Developer & tech blogger, specializes in UI/UX trends, open-source contributions, and remote work while enhancing his skills."
        />
        <meta
          name="twitter:image"
          content="https://www.samarhayat.online/images/me.png"
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
              url: "https://www.samarhayat.online/",
              jobTitle: "Frontend Developer",
              image: "https://www.samarhayat.online/images/me.png",
              email: "mailto:samarhayat.dev@gmail.com",
              telephone: "+923495129992",
              description:
                "Samar Hayat, Frontend Developer & tech blogger, specializes in UI/UX trends, open-source contributions, and remote work while enhancing his skills.",
              sameAs: [
                "https://github.com/thesamarhayat",
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
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
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
