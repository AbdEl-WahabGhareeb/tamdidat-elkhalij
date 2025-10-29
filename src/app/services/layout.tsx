import Navbar from "@/components/Nav-Component/Navbar";
import React from "react";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="services-layout">
            <Navbar />
            {children}
        </div>
    );
}
