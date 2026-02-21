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
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ar_SA" />
                <meta property="og:site_name" content="تمديدات الخليج المبتكرة" />
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
