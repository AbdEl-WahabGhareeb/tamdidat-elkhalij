import { Geist, Geist_Mono, Cairo } from "next/font/google";
import dynamic from 'next/dynamic';
import "./globals.css";
import { DefaultLoadingFallback } from "@/components/layout/LoadingBoundary";
import { organizationLDJson } from './structured-data/organization-logo';
import { websiteSchema } from './structured-data/website';
import { localBusinessSchema } from './structured-data/local-business';
import { faqSchema } from './structured-data/faq-schema';
import ClientAnalytics from '@/components/ClientAnalytics';
import { generateMetadata } from './metadata-generator';

// Dynamically import components with loading boundaries
const Navbar = dynamic(() => import("@/components/Nav-Component/Navbar"), {
    loading: () => <DefaultLoadingFallback minHeight="64px" />
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["arabic", "latin"],
    weight: ["300", "400", "600", "700"],
    display: 'swap',
});

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl" className="scroll-smooth">
            <head>
                <meta name="theme-color" content="#1e3a8a" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                
                {/* Essential Social Media Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ar_SA" />
                <meta property="og:locale:alternate" content="en_US" />
                <meta property="og:site_name" content="تمديدات الخليج المبتكرة" />
                
                {/* WhatsApp / Facebook Sharing */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/jpeg" />
                
                {/* Twitter Card Optimization */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@tamdidat_elkhalij" />
                <meta name="twitter:site" content="@tamdidat_elkhalij" />
                
                {/* Additional Optimization for Social Sharing */}
                <meta name="format-detection" content="telephone=yes" />
                <meta name="format-detection" content="email=yes" />
                <meta name="format-detection" content="address=yes" />
                
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@graph': [
                                organizationLDJson,
                                websiteSchema,
                                localBusinessSchema,
                                faqSchema
                            ]
                        })
                    }}
                />
            </head>
            <body 
                className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
                suppressHydrationWarning
            >
                <ClientAnalytics />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
