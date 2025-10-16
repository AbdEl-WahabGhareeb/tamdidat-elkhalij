import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
    title: "تمديدات الخليج",
    description:
        "شركة تمديدات الخليج المحدودة هي شركة سعودية متخصصة في تصميم وتنفيذ وصيانة شبكات الغاز للمنازل والمنشآت التجارية والصناعية.",
    keywords: [
        "تمديدات",
        "تمديدات الخليج",
        "غاز",
        "شركة سعودية",
        "صيانة",
        "تصميم",
        "تنفيذ",
        "شبكات الغاز",
        "منازل",
        "منشآت تجارية",
        "منشآت صناعية",
        "خدمات غاز",
        "سلامة الغاز",
        "تركيب الغاز",
        "مشاريع سكنية",
        "مشاريع تجارية",
        "مشاريع صناعية",
        "فريق فني معتمد",
        "تقنيات حديثة",
        "معدات غاز",
        "حلول غاز آمنة",
        "كفاءة الغاز",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-[Cairo] antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
