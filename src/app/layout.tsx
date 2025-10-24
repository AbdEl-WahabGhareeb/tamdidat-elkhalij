import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav-Component/Navbar";
import Analytics from "@/components/Analytics";

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

import { siteMetadata } from './metadata';
import { localBusinessData } from './layout-structured-data';
import { organizationLDJson } from './structured-data/organization-logo';
import { websiteSchema } from './structured-data/website';

export const metadata: Metadata = {
    metadataBase: new URL('https://taamco.com'),
    publisher: 'تمديدات الخليج',
    applicationName: 'تمديدات الخليج',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    verification: {
        google: "WrItQ08BRXtWf6oCMt3qJBj16zucGd1oRKttlFafcWs"
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/assets/logo-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/assets/logo-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcut: [{ url: "/favicon.ico" }],
        apple: [
            { url: '/assets/logo-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/assets/logo-512x512.png', sizes: '512x512', type: 'image/png' },
        ]
    },
    themeColor: '#1e3a8a',
    manifest: '/manifest.json',
    title: {
        default: siteMetadata.title,
        template: '%s | تمديدات الخليج',
    },
    description: siteMetadata.description,
    keywords: siteMetadata.keywords,
    authors: siteMetadata.authors,
    openGraph: siteMetadata.openGraph,
    twitter: siteMetadata.twitter,
    alternates: siteMetadata.alternates,
    robots: siteMetadata.robots,
};

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
                                websiteSchema,
                                localBusinessData
                            ]
                        })
                    }}
                />
            </head>
            <body 
                className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
            >
                <Analytics />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
