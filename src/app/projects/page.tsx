import React from "react";
import Script from "next/script";
import Image from "next/image";
import { metadata } from "./page-metadata";
import { getProjectsStructuredData } from "../structured-data/projects";
// import Footer from "@/components/FooterComponent/Footer";

export { metadata };

export default function Projects() {
    const structuredData = getProjectsStructuredData();

    return (
        <>
            <Script
                id="projects-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <div className="px-12">
                <div className="relative w-4/5 mx-auto h-[600px] mt-32">
                    <Image
                        className="object-contain rounded-3xl md:px-0"
                        sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                        priority
                        loading="eager"
                        fill
                        src="/assets/under-construction.jpg"
                        alt="under-construction page image"
                    />
                </div>
            </div>
            {/* <Footer/> */}
        </>
    );
}
