"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MainSlider.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function MainSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <div
                className="topics h-[86vh] mt-28 bg-gray-800/25 flex justify-center items-center flex-col absolute right-0 w-full gap-5 top-0 left-0 bottom-0 text-center text-white z-40"
                dir="rtl"
            >
                <h2
                    className={`transition-all duration-300 font-[Ge-Jarida] ${
                        activeIndex === 0
                            ? "font-bold text-8xl block"
                            : "hidden"
                    }`}
                >
                    تمديدات الخليج
                </h2>

                <h2
                    className={`transition-all duration-300 font-[Ge-Jarida] ${
                        activeIndex === 1
                            ? "font-bold text-6xl block text-start ms-[46rem]"
                            : "hidden"
                    }`}
                >
                    المشاريع السكنية
                </h2>

                <h2
                    className={`transition-all duration-300 ${
                        activeIndex === 2
                            ? "font-bold text-6xl block text-start ms-[42rem]"
                            : "hidden"
                    }`}
                >
                    المشاريع التجارية
                </h2>

                <h2
                    className={`transition-all duration-300 mb-8 ${
                        activeIndex === 3
                            ? "font-bold text-6xl block text-start ms-[40rem]"
                            : "hidden"
                    }`}
                >
                    المشاريع الصناعية
                </h2>
                <div className="content">
                    <div className="first">
                        <h3
                            className={`transition-all duration-300 flex flex-col items-center justify-center mb-12 ${
                                activeIndex === 0
                                    ? "block font-medium"
                                    : "hidden"
                            }`}
                        >
                            <span className="text-4xl mb-2 font-bold block w-3/4 border-b-4 border-white pb-3">
                                حلول متكاملة، بخبرة تضمن الأمان والثقة
                            </span>
                            <p className="text-3xl w-full font-bold pt-3">
                                شركة رائدة في تصميم وتنفيذ وصيانة شبكات الغاز في
                                المملكة العربية السعودية. <br />
                                <span className="mb-3 block">
                                    نعمل بخبرة طويلة ومعدات حديثة لتوفير أعلى
                                    مستويات الجودة والسلامة لكل عميل. <br />
                                </span>
                                خدماتنا متوفرة للمشآت السكنية المشاريع التجارية
                                والصناعية.
                            </p>
                        </h3>
                        
                        <div
                            className={`buttons flex gap-32 justify-center items-center ${
                                activeIndex === 0
                                    ? "font-bold text-8xl block"
                                    : "hidden"
                            }`}
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent border-2 hover:bg-blue-900 transition-colors duration-300 hover:text-white hover:border-transparent text-2xl py-7 cursor-pointer px-10"
                            >
                                خدماتنا
                            </Button>

                            <Button
                                variant="outline"
                                className="hover:bg-transparent border-2 bg-blue-900 transition-colors duration-300 hover:text-white hover:border-2 hover:border-white border-transparent text-2xl py-7 cursor-pointer px-10"
                            >
                                طلب معاينة
                            </Button>
                        </div>
                    </div>

                    <div className="second">
                        <h3
                            className={`transition-all duration-300 ${
                                activeIndex === 1 ? "block ms-72" : "hidden"
                            }`}
                        >
                            <span className="text-3xl mb-2 font-bold block w-1/2 pb-3">
                                حلول غاز امنة وموثوقة لمنازلكم
                                <div className="w-full mx-auto translate-y-4 h-1 bg-white"></div>
                            </span>
                            <p className="text-2xl w-full text-start font-bold mb-12 pt-3">
                                ننفذ شبكات الغاز للفيلات والعمارات السكنية وفق
                                أعلي معايير الجودة والسلامة.
                            </p>
                        </h3>
                        <div className="buttons"></div>

                        <div
                            className={`buttons flex gap-32 justify-center items-center ${
                                activeIndex === 1
                                    ? "font-bold text-8xl block"
                                    : "hidden"
                            }`}
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent border-2 hover:bg-blue-900 transition-colors duration-300 hover:text-white hover:border-transparent text-2xl py-7 cursor-pointer px-10"
                            >
                                خدماتنا
                            </Button>

                            <Button
                                variant="outline"
                                className="hover:bg-transparent border-2 bg-blue-900 transition-colors duration-300 hover:text-white hover:border-2 hover:border-white border-transparent text-2xl py-7 cursor-pointer px-10"
                            >
                                طلب معاينة
                            </Button>
                        </div>
                    </div>

                    <div className="third">
                        <h3
                            className={`transition-all duration-300 mb-20 ${
                                activeIndex === 2 ? "block ms-72" : "hidden"
                            }`}
                        >
                            <span className="text-3xl mb-2 font-bold block w-1/2 me-32 pb-3">
                                كفاءة عالية تلبي احتياجات منشآتك التجارية
                                <div className="w-[95%] mx-auto translate-y-4 h-1 bg-white"></div>
                            </span>
                            <p className="text-2xl w-4/6  text-start font-bold pt-3 me-[9rem]">
                                من الفنادق إلى المطاعم والمجمعات التجارية، نقدم
                                أنظمة غاز مصممة لتعمل بكفاءة وأمان على مدار
                                الساعة.
                                <br />
                                حلول احترافية تزيد من موثوقية التشغيل وتضمن
                                راحتكم.
                            </p>
                        </h3>

                        <div
                            className={`buttons flex gap-32 justify-center items-center ${
                                activeIndex === 2
                                    ? "font-bold text-8xl block"
                                    : "hidden"
                            }`}
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent border-2 hover:bg-blue-900 transition-colors duration-300 hover:text-white hover:border-transparent text-2xl py-7 cursor-pointer px-10"
                            >
                                خدماتنا
                            </Button>

                            <Button
                                variant="outline"
                                className="hover:bg-transparent border-2 bg-blue-900 transition-colors duration-300 hover:text-white hover:border-2 hover:border-white border-transparent text-2xl py-7 cursor-pointer px-10"
                            >
                                طلب معاينة
                            </Button>
                        </div>
                    </div>

                    <div className="fourth">
                        <h3
                            className={`transition-all duration-300 mb-12 ${
                                activeIndex === 3 ? "block ms-96" : "hidden"
                            }`}
                        >
                            <span className="text-3xl mb-2 font-bold block w-4/5 pb-3">
                                خبرة هندسية لخدمة المشاريع الصناعية الكبري{" "}
                                <div className="w-[100%] mx-auto translate-y-4 h-1 bg-white"></div>
                            </span>
                            <p className="text-2xl text-start font-bold pt-3 ">
                                نقدم حلول غاز صناععية متاكملة للمصانع والمنشات
                                الانتاجية, مع <br /> الالتزامالصارم بمعايير
                                السلامة والجود. <br /> فريقنا المتخصص يضمن اداء
                                مستقرا يواكب متطلبات التشغيل الصناعي.
                            </p>
                        </h3>

                        <div
                            className={`buttons flex gap-32 justify-center items-center ${
                                activeIndex === 3
                                    ? "font-bold text-8xl block"
                                    : "hidden"
                            }`}
                        >
                            <Button
                                variant="outline"
                                className="bg-transparent border-2 hover:bg-blue-900 transition-colors duration-300 hover:text-white hover:border-transparent text-2xl py-7 cursor-pointer px-10"
                            >
                                خدماتنا
                            </Button>

                            <Button
                                variant="outline"
                                className="hover:bg-transparent border-2 bg-blue-900 transition-colors duration-300 hover:text-white hover:border-2 hover:border-white border-transparent text-2xl py-7 cursor-pointer px-10"
                            >
                                طلب معاينة
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[86vh]">
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                        type: "bullets",
                        bulletActiveClass:
                            "swiper-pagination-bullet-active custom-bullet-active",
                        bulletClass: "swiper-pagination-bullet custom-bullet",
                    }}
                    modules={[EffectFade, Pagination]}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.activeIndex)
                    }
                    className="mySwiper w-full h-full mb-56 !static"
                >
                    <SwiperSlide>
                        <div className="relative w-full h-full">
                            <Image
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                priority
                                loading="eager"
                                fill
                                src="/assets/General.jpg"
                                alt="Nature 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-full ">
                            <Image
                                className="object-cover inline-block"
                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                priority
                                loading="eager"
                                fill
                                src="/assets/Home.jpg"
                                alt="Nature 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-full ">
                            <Image
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                priority
                                loading="eager"
                                fill
                                src="/assets/resturent1.jpg"
                                alt="Nature 1"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative w-full h-full ">
                            <Image
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                priority
                                loading="eager"
                                fill
                                src="/assets/industrial.jpg"
                                alt="Nature 1"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
