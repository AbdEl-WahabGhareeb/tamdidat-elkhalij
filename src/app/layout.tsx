import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav-Component/Navbar";
import Analytics from "@/components/Analytics";
import { metadata } from './seo-metadata';
import { organizationLDJson } from './structured-data/organization-logo';
import { websiteSchema } from './structured-data/website';

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
            >
                <Analytics />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
