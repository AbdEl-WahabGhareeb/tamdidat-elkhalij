import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Services() {
    return (
        <>
            <div
                className="container pt-16 pb-16 mx-auto"
                dir="rtl"
            >
                <div className="header text-center">
                    <h2 className="text-4xl w-fit font-bold mx-auto">
                        خدماتنا
                        <div className="w-full mt-2 h-[5px] bg-blue-900"></div>
                    </h2>
                    <h3 className="text-2xl mt-3 font-bold text-center">
                        حلول غاز شاملة بمعايير عالمية
                    </h3>
                    <p className="text-center font-normal text-xl mt-3">
                        نقدم مجموعة متكاملة من الخدمات المتخصصة في مجال شبكات
                        الغاز، تلبي احتياجات المنازل والمنشآت التجارية
                        والصناعية:
                    </p>
                </div>
                
                <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                        <div className="card group overflow-hidden rounded-2xl md:ms-auto md:w-[88%] shadow-special w-[90%]  mx-auto">
                            <figure>
                                <div className="relative overflow-hidden max-w-full md:h-[275px] h-[300px] sm:h-[450px] xl:h-[300px] lg:h-[220px]"> 
                                    <Image
                                        className="w-full group-hover:scale-105 object-cover transition-transform duration-300 h-full rounded-t-2xl"
                                        sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                        fill
                                        src="/assets/right-card.png"
                                        alt="خدمات تصميم وتركيب أنظمة الغاز المتكاملة بأعلى معايير الجودة"
                                    />
                                </div>
                            </figure>
                            <div className="card-body px-3 py-1.5">
                                <h2 className="card-title font-bold text-xl mb-2">
                                    تصميم وتركيب أنظمة الغاز
                                </h2>
                                <p className="text-lg font-normal">
                                    تصميم وتنفيذ شبكات الغاز بأعلى معايير الجودة
                                    والسلامة.
                                </p>
                                <div className="card-actions lg:mt-7 xl:mt-0 justify-end flex w-full">
                                    <Button
                                        variant="outline"
                                        className="hover:bg-blue-500 rounded-2xl text-white bg-blue-900 transition-colors duration-300 hover:text-white py-3 cursor-pointer w-1/3"
                                    >
                                        <Link href="/">اعرف أكثر...</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="card group rounded-2xl md:mx-auto md:w-[88%] shadow-special bg-base-100 w-[90%]  mx-auto overflow-hidden">
                            <figure>
                                <div className="relative overflow-hidden max-w-full md:h-[275px] h-[300px]  sm:h-[450px] xl:h-[300px] lg:h-[220px]  ">
                                    <Image
                                        className="group-hover:scale-105 object-cover transition-transform duration-300 w-full h-full rounded-t-2xl"
                                        sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                        fill
                                        src="/assets/middle-card.png"
                                        alt="خدمة شحن خزانات الغاز الاحترافية بمعدات حديثة"
                                    />
                                </div>
                            </figure>
                            <div className="card-body px-3 py-1.5">
                                <h2 className="card-title font-bold text-xl mb-2">
                                    شحن خزانات الغاز{" "}
                                </h2>
                                <p className="text-lg font-normal">
                                    خدمة شحن احترافية بأحدث المعدات وبإشراف
                                    فنيين معتمدين.
                                </p>
                                <div className="card-actions justify-end flex w-full">
                                    <Button
                                        variant="outline"
                                        className="hover:bg-blue-500 rounded-2xl text-white bg-blue-900 transition-colors duration-300 hover:text-white py-3 cursor-pointer w-1/3"
                                    >
                                        <Link href="/">اعرف أكثر...</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>


                        <div className="card w-[90%]  mx-auto group rounded-2xl md:me-auto md:w-[88%] shadow-special bg-base-100  overflow-hidden">
                            <figure>
                                <div className="relative w-full md:h-[275px] h-[300px]  sm:h-[450px] xl:h-[300px] lg:h-[220px]  overflow-hidden">
                                    <Image
                                        className="w-full h-full rounded-t-2xl group-hover:scale-105 object-cover transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                        fill
                                        src="/assets/last-card.png"
                                        alt="خدمات صيانة شبكات الغاز وفحص السلامة الدوري"
                                    />
                                </div>
                            </figure>
                            <div className="card-body px-3 py-1.5">
                                <h2 className="card-title font-bold text-xl mb-2">
                                    صيانة شبكات الغاز
                                </h2>
                                <p className="text-lg font-normal">
                                    صيانة دورية وطارئة تضمن استمرارية التشغيل
                                    بأمان تام
                                </p>
                                <div className="card-actions lg:mt-7 xl:mt-0 justify-end flex w-full">
                                    <Button
                                        variant="outline"
                                        className="hover:bg-blue-500 rounded-2xl text-white bg-blue-900 transition-colors duration-300 hover:text-white py-3 cursor-pointer w-1/3"
                                    >
                                        <Link href="/">اعرف أكثر...</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}
