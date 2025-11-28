import Image from "next/image";
import React from "react";

export const metadata = {
    title: "شحن خزانات الغاز - خدمة توصيل 24/7 من تمديدات الخليج",
    description: "خدمة شحن خزانات الغاز من تمديدات الخليج - توصيل آمن وفوري 24 ساعة. غاز عالي الجودة ومعدات حديثة. اتصل بنا الآن لطلب الشحن.",
    keywords: ["شحن خزانات الغاز", "خدمة توصيل الغاز", "غاز مركزي", "تعبئة الغاز", "تمديدات الخليج"],
};

export default function ResidentialServices() {
    return (
        <>
            <h1 className="text-xl md:text-2xl text-center lg:text-3xl font-bold mt-36 mb-10">
                شحن خزانات الغاز{" "}
            </h1>

            <div className="container mx-auto">
                <div className=" px-5 md:px-16 flex flex-col lg:flex-row h-fit justify-between items-start lg:items-center pb-5 py-10">
                    <div className="text">
                        <h3 className="text-2xl font-semibold mb-3">
                            نظرة عامة على الخدمة
                        </h3>

                        <h4 className="text-lg font-semibold mb-10">
                            تعتبر خدمة شحن خزانات الغاز من الخدمات الأساسية التي
                            تقدمها تمديدات الخليج، حيث نضمن توفير الغاز بجودة
                            عالية وآمان تام، مع الالتزام بمواعيد دقيقة وأسعار
                            تنافسية.
                        </h4>

                        <p className="text-xl font-bold leading-8 text-center mb-3 mt-3">
                            مميزات الخدمة
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-4 ">
                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-3">
                                    خدمة سريعة وفورية{" "}
                                </p>

                                <ul className="gap-2 flex flex-col ">
                                    <li className="list-none">
                                        استجابة فورية لطلبات الشحن
                                    </li>
                                    <li className="list-none">
                                        أسطول مركبات على مدار 24/7
                                    </li>
                                    <li className="list-none">
                                        توصيل في المواعيد المتفق عليها
                                    </li>
                                    <li className="list-none">
                                        طلبات الطوارئ خلال ساعتين
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/shipping/fast-service.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-3">
                                    آمان وجودة عالية{" "}
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none me-5">
                                        غاز عالي الجودة ومطابق للمواصفات
                                    </li>
                                    <li className="list-none">
                                        معدات شحن معتمدة ومرخصة
                                    </li>
                                    <li className="list-none">
                                        فنيون معتمدون في عمليات الشحن
                                    </li>
                                    <li className="list-none">
                                        فحص الخزانات قبل وبعد الشحن
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/shipping/safe-qualified.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-3">
                                    نظام متابعة متكامل{" "}
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none">
                                        نظام حجز وتتبع إلكتروني
                                    </li>
                                    <li className="list-none">
                                        إشعارات قبل نفاد الغاز
                                    </li>
                                    <li className="list-none">
                                        سجل دقيق لعمليات الشحن
                                    </li>
                                    <li className="list-none">
                                        تقارير استهلاك شهرية
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/shipping/follow-up.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-xl font-bold leading-8 text-center mb-3 mt-3">
                            أنواع الخدمات
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-2">
                                    خدمة الشحن الدوري
                                </p>

                                <ul className="gap-2 flex flex-col ">
                                    <li className="list-none">
                                        برامج شحن مخططة ومنظمة
                                    </li>
                                    <li className="list-none">
                                        مناسبة للاستهلاك المنتظم
                                    </li>
                                    <li className="list-none">
                                        خصومات على الاشتراكات السنوية
                                    </li>
                                    <li className="list-none">
                                        تذكير تلقائي بمواعيد الشحن
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/shipping/periodic-shipping.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-2">
                                    خدمة الشحن عند الطلب
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none me-5">
                                        حجز عبر الهاتف أو التطبيق
                                    </li>
                                    <li className="list-none">
                                        مرونة في تحديد المواعيد
                                    </li>
                                    <li className="list-none">
                                        خدمة خلال 24 ساعة
                                    </li>
                                    <li className="list-none">
                                        مناسبة للاستهلاك غير المنتظم
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/shipping/ordered-shipping.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 mb-2">
                                    خدمة الطوارئ
                                </p>

                                <ul className="gap-2 flex flex-col">
                                    <li className="list-none">
                                        طلبات عاجلة خلال ساعتين
                                    </li>
                                    <li className="list-none">
                                        خدمة على مدار الساعة
                                    </li>
                                    <li className="list-none">
                                        فريق طوارئ متخصص
                                    </li>
                                    <li className="list-none">
                                        أسعار عادلة وشفافة
                                    </li>
                                    <li className="mt-5">
                                        <div className="relative w-full h-60 rounded-3xl">
                                            <Image
                                                className="object-cover w-full h-full rounded-3xl "
                                                sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                                fill
                                                src="/assets/services/shipping/emergency.svg"
                                                alt="under-construction page image"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-xl font-bold leading-8 text-center mb-3 mt-3">
                            مميزات إضافية
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                            <div className=" bg-[#F2F2F2] rounded-3xl  shadow-services p-2">
                                <p className="text-base font-bold leading-8 text-center mb-2">
                                    مراقبة الجودة
                                </p>
                                <div className="flex items-center justify-center">
                                    <ul className="gap-2 flex flex-col w-7/12">
                                        <li className="list-none">
                                            فحص جودة الغاز قبل التحميل
                                        </li>
                                        <li className="list-none">
                                            معايرة أجهزة القياس بانتظام
                                        </li>
                                        <li className="list-none">
                                            شهادات مطابقة للمواصفات
                                        </li>
                                        <li className="list-none">
                                            سجل تتبع للشحنات
                                        </li>
                                    </ul>

                                    <div className="relative h-32 rounded-3xl w-5/12">
                                        <Image
                                            className="object-cover w-full h-full rounded-3xl "
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                                src="/assets/services/shipping/quality-control.svg"
                                            alt="under-construction page image"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8 text-center mb-2">
                                    السلامة أولاً
                                </p>
                                <div className="flex items-center justify-center">
                                    <ul className="gap-2 flex flex-col w-7/12">
                                        <li className="list-none">
                                            تدابير أمان صارمة أثناء الشحن
                                        </li>
                                        <li className="list-none">
                                            معدات الوقاية الشخصية
                                        </li>
                                        <li className="list-none">
                                            خطط طوارئ في حالة الحوادث
                                        </li>
                                        <li className="list-none">
                                            تأمين على عمليات الشحن
                                        </li>
                                    </ul>

                                    <div className="relative h-32 rounded-3xl w-5/12">
                                        <Image
                                            className="object-contaiin w-full h-full rounded-3xl "
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                                src="/assets/services/shipping/safety-first.svg"
                                            alt="under-construction page image"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" bg-[#F2F2F2] rounded-3xl shadow-services p-3">
                                <p className="text-base font-bold leading-8  text-center mb-2">
                                    الدعم الفني
                                </p>
                                <div className="flex items-center justify-center">
                                    <ul className="gap-2 flex flex-col w-7/12">
                                        <li className="list-none">
                                            استشارات فنية مجانية
                                        </li>
                                        <li className="list-none">
                                            نصائح لترشيد الاستهلاك
                                        </li>
                                        <li className="list-none">
                                            تقارير عن أداء النظام
                                        </li>
                                        <li className="list-none">
                                            خدمة عملاء متابعة
                                        </li>
                                    </ul>

                                    <div className="relative h-32 rounded-3xl w-5/12">
                                        <Image
                                            className="object-contain w-full h-full rounded-3xl "
                                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                            fill
                                                src="/assets/services/shipping/tech-support.svg"
                                            alt="under-construction page image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
