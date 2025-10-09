import Image from "next/image";
import React from "react";

export default function OurClients() {
    return (
        <>
            <div className="mt-16 " dir="rtl">
                <div className="header text-center">
                    <h2 className="text-4xl w-fit font-bold mx-auto">
                        عملائنا
                        <div className="w-full mt-2 h-[5px] bg-blue-900"></div>
                    </h2>
                    <h3 className="text-xl mt-3 font-bold text-center">
                        نفتخر بثقة عملائنا وإنجازاتنا في مختلف أنحاء المملكة
                    </h3>
                </div>

                <div className="clients-imgs px-16 grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 items-center gap-10 p-4 mt-10">
                    <div className="relative w-full h-[130px]">
                        <Image
                            className="w-full h-full"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            fill
                            src="/assets/client-1.png"
                            alt=""
                        />
                    </div>
                    <div className="relative w-full h-[130px]">
                        <Image
                            className="w-full h-full"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            fill
                            src="/assets/client-2.png"
                            alt=""
                        />
                    </div>
                    <div className="relative w-full h-[160px]">
                        <Image
                            className="w-full h-full"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            fill
                            src="/assets/client-3.png"
                            alt=""
                        />
                    </div>
                    <div className="relative w-full h-[200px]">
                        <Image
                            className="w-full h-full"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            fill
                            src="/assets/client-4.png"
                            alt=""
                        />
                    </div>
                </div>

                <div className="bg-image relative mt-10 ">
                    <div className="absolute top-0 left-0 px-16 right-0 bottom-0 z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-white text-center p-4">
                        <div className="first text-center">
                            <p className="text-4xl font-bold mb-4">+40</p>
                            <span className="text-2xl font-bold">مشروع سكني</span>
                        </div>

                        <div className="second text-center">
                            <p className="text-4xl font-bold mb-4">+50</p>
                            <span className="text-2xl font-bold">مشروع تجاري</span>
                        </div>

                        <div className="third text-center">
                            <p className="text-4xl font-bold mb-4">+20</p>
                            <span className="text-2xl font-bold">مشروع صناعي</span>
                        </div>

                        <div className="fourth text-center">
                            <p className="text-4xl font-bold mb-4">+100</p>
                            <span className="text-2xl font-bold">مشروع في جميع <br /> انحاء المملكة</span>
                        </div>
                    </div>
                    <div className="relative w-full h-[100vh] md:h-[350px] overflow-hidden">
                        <div className="statistics z-[5] bg-[#2F3A97]/45 absolute top-0 left-0 w-full h-full "></div>
                        <Image
                            className="w-full opacity-50 object-fill h-full"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            fill
                            src="/assets/clients-statistics.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
