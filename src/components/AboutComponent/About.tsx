import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function About() {
    return (
        <>
            <div
                className="grid container mx-auto grid-cols-1 my-16 border-b-4 border-gray-800 md:grid-cols-2 h-[100vh] lg:grid-cols-2 gap-4"
                dir="rtl"
            >
                <div className=" relative right-[10%] top-0 ">
                    <div className="relative md:w-[450px] md:h-[550px] bg-blue-900 rounded-3xl">
                        <div className="absolute right-10 top-10 w-full h-full md:w-[450px] md:h-[550px] border-4 rounded-3xl">
                            <Image
                                className="object-cover rounded-3xl"
                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                priority
                                loading="eager"
                                fill
                                src="/assets/about.png"
                                alt="Nature 1"
                            />
                        </div>
                    </div>
                </div>

                <div className="ps-4">
                    <h2 className="text-4xl font-bold">
                        من نحن
                        <div className="w-[22%] mt-2 h-[5px] bg-blue-900"></div>
                    </h2>
                    <p className="mb-5 leading-10 mt-8 text-2xl font-semibold">
                        شركة تمديدات الخليج المحدودة هي شركة سعودية متخصصة في
                        تصميم وتنفيذ وصيانة شبكات الغاز للمنازل والمنشآت
                        التجارية والصناعية.
                    </p>

                    <p className="mb-5 leading-10 mt-8 text-2xl font-semibold">
                        نفتخر بأننا شركاء نجاح لعدد كبير من المشاريع السكنية
                        والتجارية والصناعية في مختلف المدن السعودية، مع سجل حافل
                        بالإنجازات ورضا العملاء بنسبة 100%.
                    </p>

                    <p className="mb-5 leading-10 mt-8 text-2xl font-semibold">
                        نعمل بفريق فني معتمد يستخدم أحدث التقنيات والمعدات
                        لتقديم حلول غاز آمنة وموثوقة تلبي احتياجات العملاء بدقة
                        وكفاءة.
                    </p>

                   <div className="button w-full flex justify-end items-center mt-4">
                     <Button
                        variant="outline"
                        className="hover:bg-blue-500 rounded-2xl text-white bg-blue-900 transition-colors duration-300 hover:text-white  text-2xl py-7 cursor-pointer w-1/2"
                    >
                        <Link href="/">طلب معاينة</Link>
                    </Button>
                   </div>
                </div>
            </div>
        </>
    );
}
