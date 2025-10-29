"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MainSlider.css";
import Image from "next/image";
import Link from "next/link";
export default function MainSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <div
                className="topics h-[90vh] flex justify-center items-center mt-12 bg-gray-800/45 absolute right-0 w-full top-0 left-0 bottom-0 text-center text-white z-30"
                dir="rtl"
            >
                <div className="w-full relative mb-32 md:mb-0 h-[272px] lg:h-[280px]">
                    <div
                        className={`first relative ${
                            activeIndex === 0 ? "block" : "hidden"
                        }`}
                    >
                        <h2
                            className={`transition-all mb-6 duration-300 font-bold text-4xl`}
                        >
                            تمديدات الخليج
                        </h2>

                        <div
                            className={`transition-all duration-300 flex flex-col items-center justify-center mb-12 `}
                        >
                            <div className="text-xl mb-2 font-bold block w-3/4 self-center justify-self-center  pb-3">
                                حلول متكاملة، بخبرة تضمن الأمان والثقة
                                <div className="mx-auto w-full sm:w-3/4 md:w-2/5 translate-y-4 h-1 bg-white"></div>
                            </div>
                            <p className="text-xl flex justify-center items-center flex-col w-fit pt-3">
                                شركة رائدة في تصميم وتنفيذ وصيانة شبكات الغاز في
                                <span className="block w-fit">
                                    المملكة العربية السعودية.
                                </span>
                                <span className="mb-3 block">
                                        نعمل بخبرة طويلة ومعدات حديثة لتوفير
                                        أعلى مستويات الجودة والسلامة لكل عميل.
                                </span>
                                <span>
                                    خدماتنا متوفرة للمشآت السكنية المشاريع
                                    التجارية والصناعية.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div
                        className={`second relative w-fit ${
                            activeIndex === 1
                                ? "block md:text-start text-center md:-translate-x-32"
                                : "hidden"
                        }`}
                    >
                        <h2
                            className={`transition-all font-bold text-4xl duration-300 mb-6 `}
                        >
                            المشاريع السكنية
                        </h2>

                        <div className={`transition-all duration-300 mb-20 `}>
                            <span className="text-xl w-fit mx-auto md:mx-0 md:text-start text-center mb-2 font-bold block pb-3">
                                حلول غاز آمنة وموثوقة لمنازلكم
                                <div className="w-full translate-y-4 h-1 bg-white"></div>
                            </span>
                            <span className="text-xl block w-full md:text-start text-center  mb-12 pt-3">
                                ننفذ شبكات الغاز للفيلات والعمارات السكنية وفق
                                أعلي معايير الجودة والسلامة.
                            </span>
                        </div>
                    </div>

                    <div
                        className={`third relative w-fit  ${
                            activeIndex === 2
                                ? "block md:text-start text-center md:-translate-x-32"
                                : "hidden"
                        }`}
                    >
                        <h2
                            className={`transition-all font-bold text-4xl duration-300 mb-6 `}
                        >
                            المشاريع التجارية
                        </h2>

                        <div
                            className={`transition-all w-fit duration-300 mb-20 `}
                        >
                            <span className="text-xl mx-auto md:mx-0 md:text-start text-center mb-2 w-fit font-bold block pb-3">
                                كفاءة عالية تلبي احتياجات منشآتك التجارية
                                <div className="w-full translate-y-4 h-1 bg-white"></div>
                            </span>
                            <span className="text-xl block w-fit md:text-start text-center mb-12 pt-3">
                                <span className="block">
                                    من الفنادق إلى المطاعم والمجمعات التجارية،
                                    نقدم أنظمة غاز مصممة لتعمل
                                </span>

                                <span className="block">
                                    بكفاءة وأمان على مدار الساعة.
                                </span>

                                <span className="block">
                                    حلول احترافية تزيد من موثوقية التشغيل وتضمن
                                    راحتكم.
                                </span>
                            </span>
                        </div>
                    </div>

                    <div
                        className={`fourth relative w-fit ${
                            activeIndex === 3
                                ? "block md:text-start text-center md:-translate-x-32"
                                : "hidden"
                        }`}
                    >
                        <h2
                            className={`transition-all font-bold w-fit text-4xl duration-300 mb-6 `}
                        >
                            المشاريع الصناعية
                        </h2>

                        <div className={`transition-all duration-300 mb-20`}>
                            <span className="text-xl w-fit mx-auto  md:mx-0 md:text-start text-center mb-2 font-bold block pb-3">
                                خبرة هندسية لخدمة المشاريع الصناعية الكبري
                                <div className="w-full translate-y-4 h-1 bg-white"></div>
                            </span>
                            <span className="text-xl w-fit block md:text-start text-center  mb-12 pt-3">
                                <span className="block">
                                    نقدم حلول غاز صناععية متاكملة للمصانع
                                    والمنشات الانتاجية, مع
                                </span>
                                <span className="block">
                                    الالتزام الصارم بمعايير السلامة والجود.
                                </span>
                                <span className="block">
                                    فريقنا المتخصص يضمن اداء مستقرا يواكب
                                    متطلبات التشغيل الصناعي.
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-[90vh]">
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        type: "bullets",
                        bulletActiveClass:
                            "swiper-pagination-bullet-active custom-bullet-active",
                        bulletClass: "swiper-pagination-bullet custom-bullet",
                    }}
                    modules={[EffectFade, Autoplay, Pagination]}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.activeIndex)
                    }
                    className="mySwiper w-full h-full mb-56 static!"
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
                                alt="تمديدات الخليج - الشركة الرائدة في تصميم وتنفيذ وصيانة شبكات الغاز"
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
                                alt="خدمات تمديدات الغاز للمشاريع السكنية - الفلل والعمارات السكنية"
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
                                alt="خدمات تمديدات الغاز للمشاريع التجارية - الفنادق والمطاعم والمجمعات التجارية"
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
                                alt="خدمات تمديدات الغاز للمشاريع الصناعية - المصانع والمنشآت الإنتاجية"
                            />
                        </div>
                    </SwiperSlide>

                    <div
                        className={`buttons flex sm:gap-20 gap-5 justify-center items-center sm:flex-row absolute  top-[78%] w-full z-40 left-1/2 translate-x-[-50%]`}
                    >
                        <Link
                            className="bg-transparent rounded-4xl border-2 text-white hover:bg-blue-900 transition-colors duration-300 hover:text-white hover:border-transparent text-center text-base md:text-xl py-4 cursor-pointer w-1/3 sm:w-1/4 md:w-1/5"
                            href="/services"
                        >
                            خدماتنا
                        </Link>

                        <Link
                            className="hover:bg-transparent rounded-4xl w-1/3 sm:w-1/4 md:w-1/5 text-white border-2 bg-blue-900 transition-colors duration-300 hover:text-white hover:border-2 hover:border-white border-transparent text-base md:text-xl py-4 text-center cursor-pointer"
                            href="https://wa.me/+966543488470"
                        >
                            طلب معاينة
                        </Link>
                    </div>
                </Swiper>
            </div>
        </>
    );
}
