import React from "react";
import Script from 'next/script';
import Image from 'next/image';
import { metadata } from './page-metadata';
import { getProjectsStructuredData } from '../structured-data/projects';
import Footer from "@/components/FooterComponent/Footer";

export { metadata };

export default function Projects() {
    const structuredData = getProjectsStructuredData();

    return (
        <>
            <Script
                id="projects-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-10 text-center">مشاريعنا</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9 relative h-48">
                            <Image
                                src="/assets/projects/project1.jpg"
                                alt="مجمع سكني في الرياض"
                                className="object-cover"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">مجمع سكني في الرياض</h3>
                            <p className="text-gray-600 mb-4">
                                تصميم وتنفيذ شبكة غاز متكاملة لمجمع سكني يضم 100 وحدة سكنية
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>2024</span>
                                <span className="mx-2">•</span>
                                <span>الرياض</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9 relative h-48">
                            <Image
                                src="/assets/projects/project2.jpg"
                                alt="مجمع تجاري في جدة"
                                className="object-cover"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">مجمع تجاري في جدة</h3>
                            <p className="text-gray-600 mb-4">
                                تركيب شبكة غاز لمجمع مطاعم ومحلات تجارية
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>2023</span>
                                <span className="mx-2">•</span>
                                <span>جدة</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9 relative h-48">
                            <Image
                                src="/assets/projects/project3.jpg"
                                alt="مصنع في الدمام"
                                className="object-cover"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">مصنع في الدمام</h3>
                            <p className="text-gray-600 mb-4">
                                تصميم وتنفيذ شبكة غاز صناعية لمصنع كبير
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>2023</span>
                                <span className="mx-2">•</span>
                                <span>الدمام</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
