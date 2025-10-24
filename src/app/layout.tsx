import { Geist, Geist_Mono, Cairo } from "next/font/google";
import dynamic from 'next/dynamic';
import "./globals.css";
import { LoadingBoundary, DefaultLoadingFallback } from "@/components/layout/LoadingBoundary";
import { metadata } from './seo-metadata';
import { organizationLDJson } from './structured-data/organization-logo';
import { websiteSchema } from './structured-data/website';
import ClientAnalytics from '@/components/ClientAnalytics';

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

export { metadata };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@graph': [
                                organizationLDJson,
                                websiteSchema
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
