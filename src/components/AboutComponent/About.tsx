import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function About() {
    return (
        <>
            <div
                className="grid container mx-auto grid-cols-1 px-5 ps-16 md:pb-16 md:px-0  mt-16 md:grid-cols-9 gap-4"
                dir="rtl"
            >
                <div className="relative md:translate-y-28 ms-auto col-span-4 lg:translate-y-5 md:w-[90%] md:h-[350px]  lg:right-[10%] lg:w-[330px] w-full mb-16 lg:mb-0 h-[600px] lg:h-[400px] bg-blue-900 rounded-3xl top-0  ">
                        <div className="absolute right-0 md:right-5 lg:right-10 lg:top-10 md:top-5 w-full  h-full lg:w-full lg:h-full border-4 rounded-3xl">
                            <Image
                                className="object-cover rounded-3xl md:px-0"
                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                priority
                                loading="eager"
                                fill
                                src="/assets/about.png"
                                alt="Nature 1"
                            />
                    </div>
                </div>

                <div className="md:ps-4 col-span-5">
                    <h2 className="text-4xl w-fit font-bold">
                        من نحن
                        <div className="w-full mt-2 px-3 h-[5px] bg-blue-900"></div>
                    </h2>
                    <p className="mb-5 leading-10 mt-7 lg:mt-8 lg:text-lg xl:text-xl font-semibold">
                        شركة تمديدات الخليج المحدودة هي شركة سعودية متخصصة في
                        تصميم وتنفيذ وصيانة شبكات الغاز للمنازل والمنشآت
                        التجارية والصناعية.
                    </p>

                    <p className="mb-5 leading-10 mt-7 lg:mt-8 lg:text-lg xl:text-xl font-semibold">
                        نفتخر بأننا شركاء نجاح لعدد كبير من المشاريع السكنية
                        والتجارية والصناعية في مختلف المدن السعودية، مع سجل حافل
                        بالإنجازات ورضا العملاء بنسبة 100%.
                    </p>

                    <p className="mb-5 leading-10 mt-7 lg:mt-8 lg:text-lg xl:text-xl font-semibold">
                        نعمل بفريق فني معتمد يستخدم أحدث التقنيات والمعدات
                        لتقديم حلول غاز آمنة وموثوقة تلبي احتياجات العملاء بدقة
                        وكفاءة.
                    </p>

                    <div className="button mb-5 md:mb-0 w-full flex justify-end items-center mt-4">
                     <Button
                        variant="outline"
                        className="hover:bg-blue-500 w-full mb-8 md:mb-0 rounded-2xl text-white bg-blue-900 transition-colors duration-300 hover:text-white  text-xl py-7 cursor-pointer md:w-1/2"
                    >
                        <Link href="/">إعرف عنا أكثر ...</Link>
                    </Button>
                   </div>
                </div>
               
            </div>
        </>
    );
}
