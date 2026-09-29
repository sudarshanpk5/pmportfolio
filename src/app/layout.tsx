import type { Metadata, Viewport } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const fontOutfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fontSpace = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sudarshan-pk.vercel.app"),
  title: "Sudarshan P K — Product Manager, Conversational AI & CX",
  description:
    "Product Manager specializing in Conversational AI & Customer Support Experience. I design how people move from bots and self-service to humans — and make that handoff seamless.",
  authors: [{ name: "Sudarshan P K" }],
  creator: "Sudarshan P K",
  keywords: [
    "Product Manager",
    "Conversational AI",
    "Customer Support Experience",
    "CX Platforms",
    "WhatsApp Business API",
    "AI Voice Agents",
    "Agent Handoff",
    "Exelon Circuits",
    "Sudarshan P K",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sudarshan-pk.vercel.app",
    title: "Sudarshan P K — Product Manager, Conversational AI & CX",
    description:
      "I design how people move from bots and self-service to humans — and make that handoff seamless.",
    siteName: "Sudarshan P K Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sudarshan P K — Product Manager, Conversational AI & CX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudarshan P K — Product Manager, Conversational AI & CX",
    description:
      "I design how people move from bots and self-service to humans — and make that handoff seamless.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
                  if (stored === 'light' || (!stored && prefersLight)) {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sudarshan P K",
              jobTitle:
                "Product Manager — Conversational AI & Customer Support Experience",
              description:
                "I design how people move from bots and self-service to humans — and make that handoff seamless.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Udupi",
                addressRegion: "Karnataka",
                addressCountry: "India",
              },
              worksFor: {
                "@type": "Organization",
                name: "Exelon Circuits Pvt. Ltd.",
              },
              sameAs: ["https://linkedin.com/in/sudarshan-pk"],
            }),
          }}
        />
      </head>
      <body
        className={`${fontOutfit.variable} ${fontSpace.variable} font-sans bg-white dark:bg-[#07090e] text-zinc-900 dark:text-zinc-50 antialiased min-h-screen flex flex-col selection:bg-teal-500 selection:text-white dark:selection:bg-cyan-400 dark:selection:text-zinc-950 overflow-x-hidden`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
