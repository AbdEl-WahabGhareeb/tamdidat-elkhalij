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
import { organizationSchema } from './structured-data/organization';

export const metadata: Metadata = {
    metadataBase: new URL('https://taamco.com'),
    publisher: 'تمديدات الخليج',
    applicationName: 'تمديدات الخليج',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/assets/icon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/assets/icon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/assets/icon-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/assets/icon-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcut: [{ url: "/favicon.ico" }],
        apple: [
            { url: '/assets/apple-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            {
                rel: 'mask-icon',
                url: '/assets/safari-pinned-tab.svg',
                color: '#1e3a8a'
            }
        ]
    },
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
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/icon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/icon-16x16.png" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessData)
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema)
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
