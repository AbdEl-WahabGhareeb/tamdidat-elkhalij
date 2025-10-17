import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav-Component/Navbar";

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

export const metadata: Metadata = {
    metadataBase: new URL('https://taamco.com'),
    icons: {
        icon: '/assets/Logo.svg',
        apple: '/assets/Logo.svg',
        shortcut: '/assets/Logo.svg'
    },
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
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
