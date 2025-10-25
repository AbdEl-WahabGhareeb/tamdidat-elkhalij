import React from "react";

import { metadata } from "./page-metadata";
// import Footer from "@/components/FooterComponent/Footer";
import Image from "next/image";

export { metadata };

export default function About() {
    return (
        <>
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
