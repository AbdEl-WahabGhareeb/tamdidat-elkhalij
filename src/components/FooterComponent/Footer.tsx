"use client";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <>
            <div className="bg-[url(/assets/footer.jpg)] bg-cover bg-center relative md:px-0">
                <div className="layer absolute top-0 bottom-0 left-0 right-0 z-0 bg-[#000]/85 "></div>

                <div
                    className="container md:px-10 relative text-white mx-auto pt-8 "
                    dir="rtl"
                >
                    <div
                        id="footer"
                        className="flex justify-center text-center w-full flex-col items-center"
                    >
                        <p className="text-3xl text-blue-900 border-b-4 mb-2 border-b-blue-900 pb-2 font-bold w-fit">
                            تواصل معنا
                        </p>

                        <p className="text-2xl text-blue-900 font-semibold mt-2">
                            هل تحتاج الي استشارة او معاينة لموقعك؟
                        </p>
                        <p className="text-lg mt-2 text-shadow-none">
                            فريقنا جاهز للرد علي جميع استفساراتك وتقديم الدعم
                            الفني في أي وقت.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 items-center justify-center my-3 md:grid-cols-2 lg:gap-20">
                        <div className="logo-and-desc w-4/5 mx-auto md:w-full flex-col justify-center items-start lg:items-center">
                            <div className="flex flex-col w-full mb-5 justify-start sm:items-start">
                                <div className="relative w-1/4 mt-3 sm:mt-0 min-w-[170px] sm:ms-auto h-[90px]">
                                    <Image
                                        className="w-full h-full object-contain"
                                        sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                        fill
                                        src="/assets/footer-logo.jpg"
                                        alt="شعار شركة تمديدات الخليج في تذييل الصفحة"
                                    />
                                </div>
                                <h2 className="text-[1.8rem] leading-4 text-shadow-special md:text-[1.6rem] font-bold text-blue-900">
                                    تمديدات الخليج
                                </h2>
                            </div>
                            <div className="desc mb-4 text-base w-full lg:ps-32">
                                <p className="mt-1">
                                    شركة رائدة في تصميم وتنفيذ وصيانة شبكات
                                    الغاز في المملكة العربية السعودية.
                                </p>
                                <p className="mt-1.5">
                                    نعمل بخبرة طويلة ومعدات حديثة لتوفير اعلي
                                    مسويات الجودة والسلامة لكل عميل.
                                </p>
                                <p className="mt-1.5">
                                    خدماتنا متوفرة للمنشات السكنية والمشاريع
                                    الصناعية والتجارية
                                </p>
                            </div>
                            <div className="social-media flex gap-2 flex-col justify-end  w-full items-center md:items-start">
                                <p className="font-bold ">
                                    وسائل التواصل الاجتماعي
                                </p>
                                <div className="icons self-center md:self-start mt-1 flex gap-5 justify-end items-center">
                                    <div className="bg-blue-900 hover:bg-blue-400 transition-all cursor-pointer rounded-full text-white p-3">
                                        <div className="relative w-[18px]  text-white h-[18px]">
                                            <Image
                                                className="w-full h-full text-white"
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/linked-in.svg"
                                                alt="رابط صفحة لينكد إن لشركة تمديدات الخليج"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-blue-900 hover:bg-blue-400 transition-all cursor-pointer rounded-full text-white p-3">
                                        <div className="relative w-[18px]  text-white h-[18px]">
                                            <Image
                                                className="w-full h-full text-white"
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/X.png"
                                                alt="رابط حساب تويتر لشركة تمديدات الخليج"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-blue-900 hover:bg-blue-400 transition-all cursor-pointer rounded-full text-white p-3">
                                        <div className="relative w-[18px]  text-white h-[18px]">
                                            <Image
                                                className="w-full h-full text-white"
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/tiktok.svg"
                                                alt="رابط حساب تيك توك لشركة تمديدات الخليج"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="icons w-4/5 mx-auto md:w-full flex pt-3 md:pt-10 md:pe-12 gap-3 justify-center items-end mt-5 flex-col">
                            <div className="flex gap-3 flex-row-reverse items-center justify-center">
                                <div className="bg-blue-900 w-[40px] h-[40px] flex items-center justify-center rounded-full text-white p-2">
                                    <div className="relative w-[20px]  text-white h-[20px]">
                                        <Image
                                            className="w-full h-full text-white"
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                            src="/assets/whatsapp-white.svg"
                                            alt="ايقونة واتساب بجانب رقم التواصل المباشر مع تمديدات الخليج في تذييل الصفحة"
                                        />
                                    </div>
                                </div>
                                <p
                                    className="text-base text-end font-medium"
                                    dir="ltr"
                                >
                                    +9665 4348 8470
                                </p>
                            </div>

                            <div className="flex gap-3 flex-row-reverse items-center justify-center">
                                <div className="bg-blue-900 w-[40px] h-[40px] flex items-center justify-center rounded-full text-white p-2">
                                    <Mail />
                                </div>
                                <p className="text-base text-end font-medium">
                                    info@taamco.com
                                </p>
                            </div>

                            <div className="flex gap-3 items-start justify-center">
                                <p className="text-base text-end md:w-4/5 me-auto font-medium">
                                    JCRB4490, 4490 Amir Bin Salama, 8944 Al
                                    Rehab Dist. Jeddah 23345 ,Kingdom of Saudi
                                    Arabia
                                </p>

                                <div className="bg-blue-900 w-[40px] h-[40px] flex items-center justify-center rounded-full text-white p-2">
                                    <MapPin />
                                </div>
                            </div>
                            <div className="links w-full md:w-3/5 mt-5">
                                <p className="font-bold mb-4 text-xl text-blue-900">
                                    يمكنكم ايضا زيارة
                                </p>
                                <ul className="flex font-semibold ">
                                    <li className="w-full">
                                        <Link
                                            className="hover:text-blue-400 w-1/3 transition-all "
                                            href="/services"
                                        >
                                            الخدمات
                                        </Link>
                                    </li>
                                    <li className="w-full">
                                        <Link
                                            className="hover:text-blue-400 w-1/3 transition-all "
                                            href="/projects"
                                        >
                                            المشاريع
                                        </Link>
                                    </li>
                                    <li className="w-full">
                                        <Link
                                            className="hover:text-blue-400 w-1/3 transition-all "
                                            href="/about"
                                        >
                                            من نحن
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-full h-0.5 z-10 relative"></div>

                <div className="flex container md:px-10 mx-auto flex-col text-center md:flex-row gap-3 justify-between items-center py-3 text-white relative z-10">
                    <p className="text-lg">سياسة الخصوصية | شروط الاستخدام</p>
                    <p className="text-xl mb-2">
                        تمديدات الخليج © جميع الحقوق محفوظة 2025
                    </p>
                </div>
            </div>
        </>
    );
}
