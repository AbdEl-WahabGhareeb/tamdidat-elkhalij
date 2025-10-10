"use client";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <>
           <div className="bg-[url(/assets/footer.jpg)] bg-cover bg-center relative">
                <div className="layer absolute top-0 bottom-0 left-0 right-0 z-0 bg-black opacity-85 "></div>

             <div
                className="container relative text-white mx-auto pb-3 pt-16 "
                dir="rtl"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-5 z-10 relative ">
                    <div className="logo-and-desc flex flex-col justify-center items-center col-span-5 row-span-5">
                        <div className="flex flex-col w-full  mb-5 justify-start items-start ">
                            <div className="relative mb-1 w-1/3 ms-auto h-[100px]">
                                <Image
                                    className="w-full h-full"
                                    sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                    fill
                                    src="/assets/logo.png"
                                    alt=""
                                />
                            </div>
                            <h2 className="text-[1.75rem] font-bold text-center text-blue-900">
                                تمديدات الخليج
                            </h2>
                        </div>
                        <div className="desc mb-5 text-lg">
                            <p>
                                شركة رائدة في تصميم وتنفسذ وصيانة شبكات الغاز في
                                المماكة العربية العربية السعودية. <br />
                                نعمل بخبرة طويلة ومعدات حديثة لتوفير اعلي مسويات
                                الجودة والسلامة لكل عميل. <br />
                                خدماتنا متوفرة للمنشات السكنية والمشاريع
                                الصناعية والتجارية
                            </p>
                        </div>
                        <div className="social-media flex gap-2 flex-col justify-end  w-full items-start">
                            <p className="font-bold">وسائل التواصل الاجتماعي</p>
                            <div className="icons mt-3 flex gap-5 justify-end items-center">
                                <div className="bg-blue-900 rounded-full text-white p-3">
                                    <div className="relative w-[25px]  text-white h-[25px]">
                                        <Image
                                            className="w-full h-full text-white"
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                            src="/assets/linked-in.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="bg-blue-900 rounded-full text-white p-3">
                                    <div className="relative w-[25px]  text-white h-[25px]">
                                        <Image
                                            className="w-full h-full text-white"
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                            src="/assets/X.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="bg-blue-900 rounded-full text-white p-3">
                                    <div className="relative w-[25px]  text-white h-[25px]">
                                        <Image
                                            className="w-full h-full text-white"
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                            src="/assets/tiktok.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="links flex flex-col justify-center items-center col-span-2 row-span-4">
                        <p className="font-bold mb-2 text-xl  text-blue-900">
                            روابط مهمة
                        </p>
                        <ul className="flex flex-col font-semibold gap-2">
                            <li className="list-disc">
                                <Link href="/services">الخدمات</Link>
                            </li>
                            <li className="list-disc">
                                <Link href="/projects">المشاريع</Link>
                            </li>
                            <li className="list-disc">
                                <Link href="/about">من نحن</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="contact col-span-5 row-span-5">
                        <p className="text-3xl text-blue-900 border-b-4 mb-2 border-b-blue-900 pb-2 font-bold w-fit">
                            تواصل معنا
                        </p>
                        <p className="text-xl mt-2">
                            نحن هنا لخدمتك علي مدار الساعة
                        </p>
                        <p className="text-2xl text-blue-900 font-semibold mt-2">
                            هل تحتاج الي استشارة او معاينة لموقعك؟
                        </p>
                        <p className="text-xl mt-2">
                            فريقنا جاهز للرد علي جميع استفساراتك <br /> وتقديم
                            الدعم الفني فيأي وقت.
                        </p>

                        <div className="icons flex gap-5 justify-center items-end mt-5 flex-col lg:translate-x-12 xl:translate-x-20">
                            <div className="flex gap-3 flex-row-reverse items-center justify-center">
                                <div className="bg-blue-900 rounded-full text-white p-2">
                                    <div className="relative w-[20px]  text-white h-[20px]">
                                        <Image
                                            className="w-full h-full text-white"
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                            src="/assets/whatsapp-white.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <p className="text-lg text-end font-medium">
                                    +9665 6157 6175
                                </p>
                            </div>

                            <div className="flex gap-3 flex-row-reverse items-center justify-center">
                                <div className="bg-blue-900 rounded-full text-white p-2">
                                    <Mail />
                                </div>
                                <p className="text-lg text-end font-medium">
                                    example@example.com
                                </p>
                            </div>

                            <div className="flex gap-3 flex-row-reverse items-start justify-center">
                                <div className="bg-blue-900 rounded-full text-white p-2">
                                    <MapPin />
                                </div>
                                <p className="text-lg text-end font-medium">
                                    JCRB4490, 4490 Amir Bin Salama, 8944 Al
                                    Rehab Dist. Jeddah 23345 ,Kingdom of Saudi
                                    Arabia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-3 relative z-10">
                    <p className="text-xl mb-2">
                        تمديدات الخليج © جميع الحقوق محفوظة 2025
                    </p>
                    <p className="text-lg">سياسة الخصوصية | شروط الاستخدام</p>
                </div>
            </div>
           </div>
        </>
    );
}
