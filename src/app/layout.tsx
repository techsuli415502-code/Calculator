import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://camelcalculator.example";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Camel Calculator | How Many Camels Are You Worth?",
    template: "%s | Camel Calculator",
  },
  description:
    "A fun camel calculator that turns a few simple details about you into a playful camel score. Try the online camel value test and find out how many camels you are worth.",
  keywords: [
    "camel calculator",
    "camel value",
    "how many camels",
    "camel worth",
    "camel score",
    "fun calculator",
    "online calculator",
    "camel quiz",
    "camel value calculator",
  ],
  authors: [{ name: "Jacob Moses" }],
  creator: "Jacob Moses",
  publisher: "Camel Calculator",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  openGraph: {
    title: "Camel Calculator | How Many Camels Are You Worth?",
    description:
      "A fun camel calculator that gives you a playful camel score based on a few simple details. Free, fast, and easy to share.",
    url: SITE_URL,
    siteName: "Camel Calculator",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Camel Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camel Calculator | How Many Camels Are You Worth?",
    description:
      "A fun camel calculator that gives you a playful camel score based on a few simple details.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Camel Calculator",
              url: SITE_URL,
              description:
                "A fun camel calculator that gives you a playful camel score based on a few simple details.",
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Camel Calculator",
              url: SITE_URL,
              applicationCategory: "EntertainmentApplication",
              operatingSystem: "All",
              description:
                "A fun online camel calculator that turns simple personal details into a playful camel value score.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Person",
                name: "Jacob Moses",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jacob Moses",
              jobTitle: "Content Specialist",
              description:
                "Content specialist who writes and builds simple, friendly web tools for fun and entertainment.",
              url: `${SITE_URL}/about`,
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
