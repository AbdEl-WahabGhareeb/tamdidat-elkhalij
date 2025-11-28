import React from "react";

import { metadata } from "./page-metadata";
// import Footer from "@/components/FooterComponent/Footer";
import Image from "next/image";
import Footer from "@/components/FooterComponent/Footer";
import Counter from "../../components/AboutCounter/Counter";

export { metadata };

export default function About() {
    return (
        <>
            <div className="px-12 container mx-auto" dir="rtl">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-36 mb-10">
                    شركة تمديدات الخليج - شركاؤك في الطاقة الآمنة منذ 2008{" "}
                </h1>
                <div className="relative h-[300px]  w-full lg:h-[600px] mb-8">
                    <Image
                        className="object-cover w-full h-full rounded-3xl px-0"
                        sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                        fill
                        src="/assets/services/services-main.svg"
                        alt="صورة توضح خدمات تمديدات الخليج المتكاملة في مجال الغاز"
                    />
                </div>

                <p className="text-lg md:text-xl lg:text-2xl font-bold mb-8">
                    تمديدات الخليج هي منصة سعودية رائدة في مجال حلول الطاقة
                    والغاز، تقدم خدمات متكاملة تشمل تصميم وتركيب وصيانة أنظمة
                    الغاز للمشاريع السكنية والتجارية والصناعية.
                </p>
            </div>
            <Counter />

            <div className="bg-gray-100 pt-12 mb-8" dir="rtl">
                <p className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-8">
                    رؤيتنا ورسالتنا
                </p>
                <div className="grid px-12 pb-12 grid-cols-1 md:grid-cols-2 mb-8 gap-5 lg:gap-20">
                    <div className="vission shadow-counter bg-white mx-auto w-3/4 p-6 rounded-lg">
                        <h3 className="text-lg md:text-xl text-center lg:text-2xl font-bold mb-4">
                            رؤيتنا
                        </h3>
                        <p className="mt-4 text-base md:text-lg lg:text-xl font-semibold text-gray-500">
                            أن نكون الشركة الرائدة في تقديم حلول الطاقة الآمنة
                            والمستدامة في منطقة الخليج العربي
                        </p>
                    </div>

                    <div className="mission shadow-counter bg-white w-3/4 mx-auto p-6 rounded-lg">
                        <h3 className="text-lg md:text-xl text-center lg:text-2xl font-bold mb-4">
                            رسالتنا
                        </h3>
                        <p className="mt-4 text-base md:text-lg lg:text-xl font-semibold text-gray-500">
                            توفير حلول متكاملة لأنظمة الغاز تجمع بين الجودة
                            والسلامة والكفاءة، مع الالتزام بمعايير الجودة
                            العالمية
                        </p>
                    </div>
                </div>

                <div className="bg-white p-12">
                    <p className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-8">
                        خدماتنا المتكاملة
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mb-8">
                        <div className="shadow-counter bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-lg md:text-xl text-center lg:text-2xl font-bold mb-4">
                                تصميم وتركيب أنظمة الغاز
                            </h3>
                            <p className="mt-4 text-base md:text-lg lg:text-xl font-semibold text-gray-500">
                                تصميم هندسي معتمد وتركيب احترافي لأنظمة الغاز
                                بمختلف أنواعها
                            </p>
                        </div>

                        <div className="shadow-counter bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-lg md:text-xl text-center lg:text-2xl font-bold mb-4">
                                شحن خزانات الغاز
                            </h3>
                            <p className="mt-4 text-base md:text-lg lg:text-xl font-semibold text-gray-500">
                                خدمة موثوقة على مدار الساعة بأعلى معايير السلامة
                            </p>
                        </div>

                        <div className="shadow-counter bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-lg md:text-xl text-center lg:text-2xl font-bold mb-4">
                                صيانة شبكات الغاز
                            </h3>
                            <p className="mt-4 text-base md:text-lg lg:text-xl font-semibold text-gray-500">
                                برامج صيانة شاملة تضمن استمرارية التشغيل الآمن
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
