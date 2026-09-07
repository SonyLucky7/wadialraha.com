import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wadialraha.com"),
  title: {
    default: "WADI AL RAHA | HVAC, AC & Technical Services in UAE",
    template: "%s | WADI AL RAHA",
  },
  description:
    "WADI AL RAHA provides professional HVAC, AC installation, repair, maintenance, cooling, electrical, plumbing and specialized technical services across the UAE.",
  keywords: [
    "HVAC services UAE",
    "AC repair UAE",
    "AC installation UAE",
    "AC maintenance UAE",
    "HVAC Al Ain",
    "AC repair Al Ain",
    "central AC services UAE",
    "split AC repair Al Ain",
    "cold store installation UAE",
    "electrical services Al Ain",
    "plumbing services Al Ain",
    "ice machine repair UAE",
  ],
  authors: [{ name: "WADI AL RAHA" }],
  creator: "WADI AL RAHA",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://wadialraha.com",
    siteName: "WADI AL RAHA",
    title: "WADI AL RAHA | HVAC, AC & Technical Services in UAE",
    description:
      "Professional HVAC, AC installation, repair, maintenance, cooling, electrical, plumbing and specialized technical services across the UAE.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WADI AL RAHA | HVAC, AC & Technical Services in UAE",
    description:
      "Professional HVAC, AC installation, repair, maintenance, cooling, electrical, plumbing and specialized technical services across the UAE.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WADI AL RAHA",
              url: "https://wadialraha.com",
              description:
                "Professional HVAC, AC, cooling, electrical, plumbing and technical services across the UAE.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "New Sanaiya",
                addressLocality: "Al Ain",
                postalCode: "100553",
                addressRegion: "Abu Dhabi",
                addressCountry: "AE",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+971-56-992-1448",
                  contactType: "customer service",
                  areaServed: "AE",
                  availableLanguage: ["English", "Arabic"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+971-56-992-1438",
                  contactType: "customer service",
                  areaServed: "AE",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+971-56-992-1439",
                  contactType: "customer service",
                  areaServed: "AE",
                },
              ],
              email: "info@wadialraha.com",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "WADI AL RAHA",
              url: "https://wadialraha.com",
              description:
                "HVAC, AC, cooling, electrical, plumbing and technical services in Al Ain, UAE.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "New Sanaiya",
                addressLocality: "Al Ain",
                postalCode: "100553",
                addressRegion: "Abu Dhabi",
                addressCountry: "AE",
              },
              telephone: "+971-56-992-1448",
              email: "info@wadialraha.com",
              areaServed: {
                "@type": "Country",
                name: "United Arab Emirates",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col bg-white text-navy font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
