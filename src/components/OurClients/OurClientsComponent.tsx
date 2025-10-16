"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

import "./OurClients.css";
import { Pagination, Autoplay } from "swiper/modules";

// import required modules

export default function OurClients() {
    const [firstCount, setFirstCount] = useState(0);
    const firstNumber = 40;

    const [secondCount, setSecondCount] = useState(0);
    const secondNumber = 50;

    const [thirdCount, setThirdCount] = useState(0);
    const thirdNumber = 20;

    const [fourthCount, setFourthCount] = useState(0);
    const fourthNumber = 110;

    const [hasStarted, setHasStarted] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        if (hasStarted) return; // Don't set up observer if counting has already started

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);

                    // First counter
                    const firstInterval = setInterval(() => {
                        setFirstCount((prev) => {
                            if (prev < firstNumber) return prev + 1;
                            clearInterval(firstInterval);
                            return prev;
                        });
                    }, 50);

                    // Second counter
                    const secondInterval = setInterval(() => {
                        setSecondCount((prev) => {
                            if (prev < secondNumber) return prev + 1;
                            clearInterval(secondInterval);
                            return prev;
                        });
                    }, 50);

                    // Third counter
                    const thirdInterval = setInterval(() => {
                        setThirdCount((prev) => {
                            if (prev < thirdNumber) return prev + 1;
                            clearInterval(thirdInterval);
                            return prev;
                        });
                    }, 50);

                    // Fourth counter
                    const fourthInterval = setInterval(() => {
                        setFourthCount((prev) => {
                            if (prev < fourthNumber) return prev + 1;
                            clearInterval(fourthInterval);
                            return prev;
                        });
                    }, 25); // Faster interval for larger number
                }
            },
            { threshold: 0.1 } // Start when 10% of the element is visible
        );

        // Save the current value to avoid cleanup closure issues
        const currentRef = statsRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            // Use the saved ref value in cleanup
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasStarted, firstNumber, secondNumber, thirdNumber, fourthNumber]);

    const clientImages = [
        {
            id: 1,
            src: "/assets/clients/client-1.png",
            alt: "شعار عميل تمديدات الخليج - مشروع سكني في الرياض",
        },

        {
            id: 2,
            src: "/assets/clients/client-2.png",
            alt: "شعار عميل تمديدات الخليج - مجمع تجاري في جدة",
        },

        {
            id: 3,
            src: "/assets/clients/client-3.png",
            alt: "شعار عميل تمديدات الخليج - مشروع صناعي في الدمام",
        },

        {
            id: 4,
            src: "/assets/clients/client-4.png",
            alt: "شعار عميل تمديدات الخليج - فندق فاخر في مكة المكرمة",
        },

        {
            id: 5,
            src: "/assets/clients/client-5.png",
            alt: "شعار عميل تمديدات الخليج - مجمع سكني في المدينة المنورة",
        },

        {
            id: 6,
            src: "/assets/clients/client-6.png",
            alt: "شعار عميل تمديدات الخليج - مطعم في الخبر",
        },

        {
            id: 8,
            src: "/assets/clients/client-8.png",
            alt: "شعار عميل تمديدات الخليج - مصنع في ينبع الصناعية",
        },
        {
            id: 9,
            src: "/assets/clients/client-9.png",
            alt: "شعار عميل تمديدات الخليج - مشروع سكني في الطائف",
        },

        {
            id: 10,
            src: "/assets/clients/client-10.png",
            alt: "شعار عميل تمديدات الخليج - مركز تجاري في أبها",
        },

        {
            id: 12,
            src: "/assets/clients/client-12.png",
            alt: "شعار عميل تمديدات الخليج - مشروع صناعي في الجبيل",
        },
        {
            id: 13,
            src: "/assets/clients/client-13.png",
            alt: "شعار عميل تمديدات الخليج - فلل سكنية في الخرج",
        },

        {
            id: 14,
            src: "/assets/clients/client-14.png",
            alt: "شعار عميل تمديدات الخليج - مجمع مطاعم في القصيم",
        },

        {
            id: 15,
            src: "/assets/clients/client-15.png",
            alt: "شعار عميل تمديدات الخليج - منشأة صناعية في رابغ",
        },

        {
            id: 16,
            src: "/assets/clients/client-16.png",
            alt: "شعار عميل تمديدات الخليج - عمارات سكنية في حائل",
        },
        {
            id: 17,
            src: "/assets/clients/client-17.png",
            alt: "شعار عميل تمديدات الخليج - مشروع تجاري في تبوك",
        },

        {
            id: 18,
            src: "/assets/clients/client-18.png",
            alt: "شعار عميل تمديدات الخليج - فندق في الخبر",
        },

        {
            id: 19,
            src: "/assets/clients/client-19.png",
            alt: "شعار عميل تمديدات الخليج - مجمع صناعي في جازان",
        },

        {
            id: 20,
            src: "/assets/clients/client-20.png",
            alt: "شعار عميل تمديدات الخليج - مشروع سكني في نجران",
        },
        {
            id: 21,
            src: "/assets/clients/client-21.png",
            alt: "شعار عميل تمديدات الخليج - مركز تجاري في الباحة",
        },

        {
            id: 22,
            src: "/assets/clients/client-22.png",
            alt: "شعار عميل تمديدات الخليج - مصنع في الأحساء",
        },

        {
            id: 23,
            src: "/assets/clients/client-23.png",
            alt: "شعار عميل تمديدات الخليج - مجمع سكني في جدة",
        },

        {
            id: 24,
            src: "/assets/clients/client-24.png",
            alt: "شعار عميل تمديدات الخليج - مشروع تجاري في الرياض",
        },
        {
            id: 25,
            src: "/assets/clients/client-25.png",
            alt: "شعار عميل تمديدات الخليج - منشأة صناعية في الدمام",
        },

        {
            id: 26,
            src: "/assets/clients/client-26.png",
            alt: "شعار عميل تمديدات الخليج - مطاعم في مكة المكرمة",
        },

        {
            id: 27,
            src: "/assets/clients/client-27.png",
            alt: "شعار عميل تمديدات الخليج - مشروع سكني في المدينة المنورة",
        },

        {
            id: 28,
            src: "/assets/clients/client-28.png",
            alt: "شعار عميل تمديدات الخليج - مركز تجاري في الطائف",
        },
        {
            id: 29,
            src: "/assets/clients/client-29.png",
            alt: "شعار عميل تمديدات الخليج - مشروع صناعي في ينبع",
        },

        {
            id: 30,
            src: "/assets/clients/client-30.png",
            alt: "شعار عميل تمديدات الخليج - فلل سكنية في أبها",
        },

        {
            id: 31,
            src: "/assets/clients/client-31.png",
            alt: "شعار عميل تمديدات الخليج - مجمع تجاري في القصيم",
        },

        {
            id: 32,
            src: "/assets/clients/client-32.png",
            alt: "شعار عميل تمديدات الخليج - مشروع صناعي في الجبيل",
        },
        {
            id: 33,
            src: "/assets/clients/client-33.png",
            alt: "شعار عميل تمديدات الخليج - مشروع سكني في الخرج",
        },
    ];

    return (
        <>
            <div className="mt-16" dir="rtl">
                <div className="header text-center">
                    <h2 className="text-4xl w-fit font-bold mx-auto">
                        عملائنا
                        <div className="w-full mt-2 h-[5px] bg-blue-900"></div>
                    </h2>
                    <h3 className="text-xl mt-3 font-bold text-center">
                        نفتخر بثقة عملائنا وإنجازاتنا في مختلف أنحاء المملكة
                    </h3>
                </div>

                <div className="clients-imgs px-16  pt-4 mt-0">
                    <div className="container mx-auto  w-3/4 md:w-full">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={120}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 80,
                                },
                            }}
                            className="mySwiper relative mt-4"
                        >
                            {clientImages.map((client) => (
                                <SwiperSlide key={client.id} className="pb-20">
                                    <div className="relative w-full mx-auto h-[110px]">
                                        <Image
                                            className="w-full h-full object-contain"
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                            src={client.src}
                                            alt={client.alt}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div ref={statsRef} className="bg-image relative mt-4">
                    <div className="absolute top-0 left-0 px-16 right-0 bottom-0 z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-white text-center p-4">
                        <div className="first text-center">
                            <p className="text-4xl font-bold mb-4">
                                +{firstCount}
                            </p>
                            <span className="text-2xl font-bold">
                                مشروع سكني
                            </span>
                        </div>

                        <div className="second text-center">
                            <p className="text-4xl font-bold mb-4">
                                +{secondCount}
                            </p>
                            <span className="text-2xl font-bold">
                                مشروع تجاري
                            </span>
                        </div>

                        <div className="third text-center">
                            <p className="text-4xl font-bold mb-4">
                                +{thirdCount}
                            </p>
                            <span className="text-2xl font-bold">
                                مشروع صناعي
                            </span>
                        </div>

                        <div className="fourth text-center">
                            <p className="text-4xl font-bold mb-4">
                                +{fourthCount}
                            </p>
                            <span className="text-2xl font-bold">
                                مشروع في جميع <br /> انحاء المملكة
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full h-[100vh] md:h-[320px] overflow-hidden">
                        <div className="statistics z-[5] bg-[#2F3A97]/55 absolute top-0 left-0 w-full h-full "></div>
                        <Image
                            className="w-full opacity-50 object-cover md:object-fill h-full"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            fill
                            src="/assets/clients-statistics.png"
                            alt="إحصائيات وإنجازات تمديدات الخليج في المشاريع السكنية والتجارية والصناعية"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
