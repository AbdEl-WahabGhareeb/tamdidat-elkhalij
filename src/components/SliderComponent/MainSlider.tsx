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
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function MainSlider() {
    function servicesLinkHref() {
        if (activeIndex === 0) {
            return "/";
        } else if (activeIndex === 1) {
            return "/services";
        } else if (activeIndex === 2) {
            return "/about";
        } else if (activeIndex === 3) {
            return "/";
        } else {
            return "/";
        }
    }

    function inspectionLinkHref() {
        if (activeIndex === 0) {
            return "/";
        } else if (activeIndex === 1) {
            return "/services";
        } else if (activeIndex === 2) {
            return "/about";
        } else if (activeIndex === 3) {
            return "/";
        } else {
            return "/";
        }
    }
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <div
                className="topics h-[90vh] mt-16 bg-gray-800/35 flex justify-center items-start flex-col absolute right-0 w-full gap-5 top-0 left-0 bottom-0 text-center text-white z-30"
                dir="rtl"
            >
                <div className="headers md:h-[96px] w-full">
                    <h2
                        className={`transition-all duration-300 self-center justify-self-center ${
                            activeIndex === 0
                                ? "font-bold text-8xl block"
                                : "hidden"
                        }`}
                    >
                        تمديدات الخليج
                        
                    </h2>

                    <h2
                        className={`transition-all duration-300 ${
                            activeIndex === 1
                                ? "font-bold text-6xl block text-start -translate-x-32"
                                : "hidden"
                        }`}
                    >
                        المشاريع السكنية
                    </h2>

                    <h2
                        className={`transition-all duration-300 ${
                            activeIndex === 2
                                ? "font-bold text-6xl block text-start -translate-x-32"
                                : "hidden"
                        }`}
                    >
                        المشاريع التجارية
                    </h2>

                    <h2
                        className={`transition-all duration-300 ${
                            activeIndex === 3
                                ? "font-bold text-6xl block text-start -translate-x-32"
                                : "hidden"
                        }`}
                    >
                        المشاريع الصناعية
                    </h2>
                </div>

                <div className="content md:h-[248px] w-full">
                    <div className="first relative">
                        <h3
                            className={`transition-all duration-300 flex flex-col items-center justify-center mb-12 ${
                                activeIndex === 0
                                    ? "block font-medium"
                                    : "hidden"
                            }`}
                        >
                            <span className="text-4xl mb-2 font-bold block w-3/4 self-center justify-self-center  pb-3">
                                حلول متكاملة، بخبرة تضمن الأمان والثقة
                                <div className="mx-auto w-1/2 translate-y-4 h-1 bg-white"></div>
                            </span>
                            <p className="text-3xl w-full font-bold pt-3">
                                شركة رائدة في تصميم وتنفيذ وصيانة شبكات الغاز في
                                المملكة العربية السعودية. <br />
                                <span className="mb-3 block self-center justify-self-center">
                                    نعمل بخبرة طويلة ومعدات حديثة لتوفير أعلى
                                    مستويات الجودة والسلامة لكل عميل. <br />
                                </span>
                                خدماتنا متوفرة للمشآت السكنية المشاريع التجارية
                                والصناعية.
                            </p>
                        </h3>
                    </div>

                    <div className="second relative">
                        <h3
                            className={`transition-all duration-300 ${
                                activeIndex === 1
                                    ? "block -translate-x-32"
                                    : "hidden"
                            }`}
                        >
                            <span className="text-3xl text-start mb-2 font-bold block pb-3">
                                حلول غاز امنة وموثوقة لمنازلكم
                                <div className="w-[23%] ms-auto translate-y-4 h-1 bg-white"></div>
                            </span>
                            <p className="text-2xl w-full text-start font-bold mb-12 pt-3">
                                ننفذ شبكات الغاز للفيلات والعمارات السكنية وفق
                                أعلي معايير الجودة والسلامة.
                            </p>
                        </h3>
                        <div className="buttons"></div>
                    </div>

                    <div className="third relative">
                        <h3
                            className={`transition-all duration-300 mb-20 ${
                                activeIndex === 2
                                    ? "block -translate-x-32"
                                    : "hidden"
                            }`}
                        >
                            <span className="text-3xl text-start mb-2 font-bold block pb-3">
                                كفاءة عالية تلبي احتياجات منشآتك التجارية
                                <div className="w-[31%] ms-auto translate-y-4 h-1 bg-white"></div>
                            </span>
                            <p className="text-2xl w-full text-start font-bold mb-12 pt-3">
                                من الفنادق إلى المطاعم والمجمعات التجارية، نقدم
                                أنظمة غاز مصممة لتعمل بكفاءة وأمان على مدار
                                الساعة.
                                <br />
                                حلول احترافية تزيد من موثوقية التشغيل وتضمن
                                راحتكم.
                            </p>
                        </h3>
                    </div>

                    <div className="fourth relative">
                        <h3
                            className={`transition-all duration-300 mb-20 ${
                                activeIndex === 3
                                    ? "block -translate-x-32"
                                    : "hidden"
                            }`}
                        >
                            <span className="text-3xl text-start mb-2 font-bold block pb-3">
                                خبرة هندسية لخدمة المشاريع الصناعية الكبري{" "}
                                <div className="w-[31%] ms-auto translate-y-4 h-1 bg-white"></div>
                            </span>
                            <p className="text-2xl w-full text-start font-bold mb-12 pt-3">
                                نقدم حلول غاز صناععية متاكملة للمصانع والمنشات
                                الانتاجية, مع <br /> الالتزام الصارم بمعايير
                                السلامة والجود. <br /> فريقنا المتخصص يضمن اداء
                                مستقرا يواكب متطلبات التشغيل الصناعي.
                            </p>
                        </h3>
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

                    <div
                        className={`buttons flex gap-20 justify-center items-center absolute top-[78%] z-40 left-1/2 translate-x-[-50%]`}
                    >
                        <Button
                            variant="outline"
                            className="hover:bg-transparent rounded-2xl text-white border-2 bg-blue-900 transition-colors duration-300 hover:text-white hover:border-2 hover:border-white border-transparent text-2xl py-7 cursor-pointer w-1/2"
                        >
                            <Link href={inspectionLinkHref()}>طلب معاينة</Link>
                        </Button>

                        <Button
                            variant="outline"
                            className="bg-transparent rounded-2xl border-2 text-white hover:bg-blue-900 transition-colors duration-300 hover:text-white hover:border-transparent text-2xl py-7 cursor-pointer w-1/2"
                        >
                            <Link href={servicesLinkHref()}>خدماتنا</Link>
                        </Button>
                    </div>
                </Swiper>
            </div>
        </>
    );
}
